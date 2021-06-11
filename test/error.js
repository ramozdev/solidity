const { expect } = require('chai')

describe('Errors', () => {
  before(async () => {
    Errors = await ethers.getContractFactory('Errors')
    errors = await Errors.deploy()
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

  it('testRequire() fails as expected', async () => {
    expect(`${await errors.testRequire(100)}`).equals('')
    await expectThrowsAsync(() => errors.testRequire(1))
  })
})
