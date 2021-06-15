describe('Try Cath in Solidity', () => {
  let owner = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  let addr0 = '0x0000000000000000000000000000000000000000'
  let addr1 = '0x0000000000000000000000000000000000000001'
  let addr2 = '0x0000000000000000000000000000000000000002'
  before(async () => {
    // Foo = await ethers.getContractFactory('contracts/TryCatch.sol:Foo')
    Bar = await ethers.getContractFactory('contracts/TryCatch.sol:Bar')
    // foo = await Foo.deploy()
    bar = await Bar.deploy()
  })

//   it('', async () => {
//     console.log(await bar.tryCatchExternalCall(0))
//   })
//   it('', async () => {
//     console.log(await bar.tryCatchExternalCall(1))
//   })
  it('', async () => {
    console.log(await bar.tryCatchNewContract(addr0))
  })
  it('', async () => {
    console.log(await bar.tryCatchNewContract(addr1))
  })
  it('', async () => {
    console.log(await bar.tryCatchNewContract(addr2))
  })
})
