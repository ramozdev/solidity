const { expect } = require('chai')
const {
  ethers: { utils, getSigners, getContractFactory },
} = require('hardhat')

// Make a transaction human readable
function parseTx(tx) {
  return {
    to: tx['to'],
    value: utils.formatEther(tx['value']),
    data: tx['data'],
    executed: tx['executed'],
    numConfirmations: +tx['numConfirmations'].toString(),
  }
}

describe('Multi-Sig Wallet', () => {
  let tenEth = utils.parseEther('10.0')
  let oneEth = utils.parseEther('1.0')
  let accounts

  before(async () => {
    accounts = await getSigners()
    Factory = await getContractFactory('MultiSigWallet')
    contract = await Factory.deploy(
      [accounts[0].address, accounts[1].address, accounts[2].address],
      2
    )
  })

  it('Deposits 10 ETH to the Multi-Sig Wallet', async () => {
    let tx = await contract.deposit({ value: tenEth })
    // Wait for the transaction to be mined and emit events
    let { events } = await tx.wait()

    // Todo: find if if there's an easier way to get events
    let depositEvent = {
      sender: events[0].args['sender'],
      amount: utils.formatEther(events[0].args['amount']),
      balance: utils.formatEther(events[0].args['balance']),
    }

    // Expect the ether emitted in the event to equal the ether sent
    expect(depositEvent.amount).equals('10.0')

    console.log(depositEvent)
  })

  it('Submits a 1 ETH transaction', async () => {
    let tx = await contract.submitTransaction(accounts[3].address, oneEth, '0x')

    let minedTx = await tx.wait()
    let args = minedTx.events[0].args

    let submitTransactionEvent = {
      owner: args['owner'],
      txIndex: args['txIndex'].toString(),
      to: args['to'],
      value: utils.formatEther(args['value']),
      data: args['data'],
    }

    console.log(submitTransactionEvent)
  })

  it('Returns a transaction at index 0', async () => {
    let tx = await contract.transactions(0)
    console.log(parseTx(tx))
  })

  it('Confirms tranasaction at index 0', async () => {
    // https://hardhat.org/guides/waffle-testing.html?#testing-from-a-different-account
    // Use the connect() method to sign transaction using another account
    // Confirm transaction at index 0 created by account 0
    // from account 1 and account 2
    await contract.connect(accounts[1]).confirmTransaction(0)
    await contract.connect(accounts[2]).confirmTransaction(0)
  })

  it('Returns transaction at index 0', async () => {
    let tx = await contract.transactions(0)
    let humanReadable = {
      to: tx['to'],
      value: utils.formatEther(tx['value']),
      data: tx['data'],
      executed: tx['executed'],
      numConfirmations: +tx['numConfirmations'].toString(),
    }
    console.log(humanReadable)
  })

  it('Executes transaction at index 0', async () => {
    let tx = await contract.executeTransaction(0)

    let minedTx = await tx.wait()
    let args = minedTx.events[0].args

    let submitTransactionEvent = {
      owner: args['owner'],
      txIndex: args['txIndex'].toString(),
    }

    console.log(submitTransactionEvent)
  })

  it('Confirms and revokes a transaction', async () => {
    // Send 1 ETH to account 2
    await contract.submitTransaction(accounts[2].address, oneEth, '0x')

    // Confirm transaction at index 1
    await contract.connect(accounts[1]).confirmTransaction(1)
    await contract.connect(accounts[2]).confirmTransaction(1)

    // Revoke (Undo) confirmation of transaction at index 1
    await contract.connect(accounts[1]).revokeConfirmation(1)

    // Get the transaction from the transactions array
    let tx1 = parseTx(await contract.transactions(1))

    // The transaction was confirmed twice and revoked once
    // Thus the number of confirmations should be 1
    expect(tx1.numConfirmations).equals(1)

    console.log(tx1)
  })
})
