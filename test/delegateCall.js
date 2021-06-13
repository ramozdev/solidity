describe('Delegate Call', () => {
  // One ether
  let oneEth = ethers.utils.parseEther('1.0')

  before(async () => {
    DelegateCallB = await ethers.getContractFactory(
      'contracts/DelegateCall.sol:B'
    )
    DelegateCallB2 = await ethers.getContractFactory(
        'contracts/DelegateCall.sol:B2'
      )
    DelegateCallA = await ethers.getContractFactory(
      'contracts/DelegateCall.sol:A'
    )
    // Contract B and B2 must be deployed before A
    b = await DelegateCallB.deploy()
    b2 = await DelegateCallB2.deploy()
    a = await DelegateCallA.deploy()
  })

  it('A delegates call B', async () => {
    // B will run the code using A's data and update
    // any state variables A that may have been changed
    // during the execution of B

    // Delegate is used to change "update" a contract
    // Smart Contracts are immutable, but you can deploy 
    // a new contract with new functionality and call it
    // using delegate call.
    await a.setVars(b.address, 5, {
      value: oneEth,
    })

    console.log('\nContract B')
    console.log(`${await b.num()}`)
    console.log(await b.sender())
    console.log(ethers.utils.formatEther(`${await b.value()}`), 'ETH\n')

    console.log('Contract A')
    console.log(`${await a.num()}`)
    console.log(await a.sender())
    console.log(ethers.utils.formatEther(`${await a.value()}`), 'ETH')
  })

  it('A delegates call to B2', async () => {
    // B will run the code using A's data and update
    // any state variables A that may have been changed
    // during the execution of B

    // Delegate is used to change "update" a contract
    // Smart Contracts are immutable, but you can deploy 
    // a new contract with new functionality and call it
    // using delegate call.
    await a.setVars(b2.address, 5, {
      value: oneEth,
    })

    console.log('\nContract B2')
    console.log(`${await b2.num()}`)
    console.log(await b2.sender())
    console.log(ethers.utils.formatEther(`${await b2.value()}`), 'ETH\n')

    console.log('Contract A')
    console.log(`${await a.num()}`)
    console.log(await a.sender())
    console.log(ethers.utils.formatEther(`${await a.value()}`), 'ETH')
  })
})
