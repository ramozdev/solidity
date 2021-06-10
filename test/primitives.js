const { expect } = require('chai')

describe('Primitives', () => {
  before(async () => {
    Primitives = await ethers.getContractFactory('Primitives')
    primitives = await Primitives.deploy()
  })

  it('All the expected values are correct', async () => {
    expect(await primitives.boo()).to.equal(true)
    expect(await primitives.unsigned8()).to.equal(2)
    expect(await primitives.unsigned256()).to.equal(777)
    expect(await primitives.unsigned()).to.equal(12)
    expect(await primitives.integer8()).to.equal(-2)
    expect(await primitives.integer256()).to.equal(-777)
    expect(await primitives.integer()).to.equal(-3)
    expect(await primitives.addr()).to.equal('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c')
    expect(await primitives.defaultBoo()).to.equal(false)
    expect(await primitives.defaultUint()).to.equal(0)
    expect(await primitives.defaultInt()).to.equal(0)
    expect(await primitives.defaultAddress()).to.equal('0x0000000000000000000000000000000000000000')
  })
})
