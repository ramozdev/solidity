const chai = require('chai')
chai.use(require('chai-as-promised'))
const { expect } = chai

describe('Libraries', () => {
  before(async () => {
    TestSafeMath = await ethers.getContractFactory('TestSafeMath')
    // TestArray = await ethers.getContractFactory('TestArray')
    testSafeMath = await TestSafeMath.deploy()
    // testArray = await TestArray.deploy()
  })

  it('Runs safe math', async () => {
    expect(testSafeMath.testAdd(2)).to.be.ok
  })
})
