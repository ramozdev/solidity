const { expect } = require('chai')

describe('Hello', () => {
  it('Returns the correct greeting.', async () => {
    const Greeter = await ethers.getContractFactory('Hello')
    const greeter = await Greeter.deploy()

    await greeter.deployed()
    expect(await greeter.message()).to.equal('Hello Decentralized World!')
  })
})
