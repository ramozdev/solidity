const chai = require('chai')
chai.use(require('chai-as-promised'))
const { expect } = chai

describe('Errors', () => {
  before(async () => {
    Errors = await ethers.getContractFactory('Errors')
    errors = await Errors.deploy()
  })

  it('testRequire() fails as expected', async () => {
    expect(`${await errors.testRequire(100)}`).to.equal('')
    await expect(errors.testRequire(1)).to.be.rejected
  })
})
