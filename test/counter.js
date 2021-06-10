const { expect } = require('chai')

describe('Counter', async () => {
  before(async () => {
    Counter = await ethers.getContractFactory('Counter')
    counter = await Counter.deploy()
  })

  // The count variable preserves value after each test

  it('Count starts with 0', async () => {
    expect(await counter.count()).to.equal(0)
  })

  it('Count was increased by one', async () => {
    await counter.inc()
    expect(await counter.count()).to.equal(1)
  })

  it('Count was decremented by one', async () => {
    await counter.dec()
    expect(await counter.count()).to.equal(0)
  })
})
