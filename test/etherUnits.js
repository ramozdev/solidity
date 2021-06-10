const { expect } = require('chai')

describe('EtherUnits', () => {
  before(async () => {
    EtherUnits = await ethers.getContractFactory('EtherUnits')
    etherUnits = await EtherUnits.deploy()
  })
  it('returns one Wei', async () => {
    let oneWei = await etherUnits.oneWei()
    expect(+oneWei.toString()).equals(1)
    expect(await etherUnits.isOneWei()).equals(true)
  })

  it('returns one Ether', async () => {
    let oneEther = await etherUnits.oneEther()
    expect(+oneEther.toString()).equals(1000000000000000000)
    expect(await etherUnits.isOneEther()).equals(true)
  })
})
