const { expect } = require('chai')

describe('Libraries', () => {
  before(async () => {
    TestSafeMath = await ethers.getContractFactory('TestSafeMath')
    // TestArray = await ethers.getContractFactory('TestArray')
    testSafeMath = await TestSafeMath.deploy()
    // testArray = await TestArray.deploy()
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

  it('Runs safe math', async () => {
    await expectThrowsAsync(() => testSafeMath.testAdd(2))
  })
})
