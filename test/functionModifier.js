const {expect} = require('chai')

const owner = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
const newOwner = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
const invalidAddress = '0x0000000000000000000000000000000000000000'

describe('Modifiers', () => {
    before(async () => {
        Modifiers = await ethers.getContractFactory('FunctionModifier')
        modifiers = await Modifiers.deploy()
    })

  async function expectThrowsAsync(method) {
    let error = null
    try {
      await method()
    } catch (err) {
      error = err
    }
    expect(error).to.be.an('Error')
  }

    it('returns owner address', async () => {
        expect(await modifiers.owner()).equals(owner)
    })

    
    // it('changeOwner() fails when address is not valid', async () => {
    //     await expectThrowsAsync(modifiers.changeOwner(invalidAddress))
    // })
    // it('decrements', async () => {
    //     await expectThrowsAsync(modifiers.decrement(40))
    // })

    it('changeOwner() works as expected', async () => {
        await modifiers.changeOwner(newOwner)
        expect(await modifiers.owner()).equals(newOwner)
    })

    it('changeOwner() fails when address is not the owner', async () => {
        await expectThrowsAsync(modifiers.changeOwner(newOwner))
    })


})