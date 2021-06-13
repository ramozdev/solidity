const { expect } = require('chai')

describe('Payable', () => {
  let acc2 = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8'
  // { BigNumber: "1000000000000000000" }
  let oneEth = ethers.utils.parseEther('1.0')

  before(async () => {
    Payable = await ethers.getContractFactory('Payable')
    contract = await Payable.deploy()
  })

  it('Contract balance starts at 0 ETH', async () => {
    expect(`${await contract.contractBalance()}`).equals('0')
  })

  it('Gets owner balance', async () => {
    // Check that the balance is the initial 10,000 ETH set by hardhat
    // minus the gas paid to deploy the contract
    let balance = +`${await contract.ownerBalance()}`
    expect(balance < +`${ethers.utils.parseEther('10000.0')}`).equals(true)
  })

  it('Deposits one ether into the contract', async () => {
    let { value } = await contract.deposit({
      value: oneEth,
    })
    // Check the contracts balance
    expect(`${value}`).equals(`${oneEth}`)
  })

  it('Widthdraws funds', async () => {
    let { formatEther } = ethers.utils
    let { contractBalance, ownerBalance, withdraw } = contract

    console.log(
      `Before withdraw()\nContract: ${formatEther(
        `${await contractBalance()}`
      )} ETH\nOwner: ${formatEther(`${await ownerBalance()}`)} ETH\n`
    )
    await withdraw()
    console.log(
      `After withdraw()\nContract: ${formatEther(
        `${await contractBalance()}`
      )} ETH\nOwner: ${formatEther(`${await ownerBalance()}`)} ETH\n`
    )
  })

  it('Deposits one ether into the contract', async () => {
    let { value } = await contract.deposit({
      value: oneEth,
    })
    // Check the contracts balance
    expect(`${value}`).equals(`${oneEth}`)
  })

  it('Trasnfers from contract to a random account', async () => {
    let { formatEther } = ethers.utils
    let {
      contractBalance,
      transfer,
      provider,
    } = contract

    console.log(
      `Before transfer()\nContract: ${formatEther(
        `${await contractBalance()}`
      )} ETH\nAccount 2: ${formatEther(await provider.getBalance(acc2))} ETH\n`
    )
    await transfer(acc2, oneEth)
    console.log(
      `After transfer()\nContract: ${formatEther(
        `${await contractBalance()}`
      )} ETH\nAccount 2: ${formatEther(await provider.getBalance(acc2))} ETH\n`
    )
  })
})
