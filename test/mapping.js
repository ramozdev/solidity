const { expect } = require('chai')

describe('Mapping', () => {
  before(async () => {
    Mapping = await ethers.getContractFactory('Mapping')
    mapping = await Mapping.deploy()
  })

  it('reads a default value', async () => {
    expect(
      +`${await mapping.myMap('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c')}`
    ).equals(0)
  })

  it('Sets a mapping', async () => {
    await mapping.set('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c', 4)
    expect(
      +`${await mapping.myMap('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c')}`
    ).equals(4)
  })

  it('Resets the value', async () => {
    await mapping.remove('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c')
    expect(
      +`${await mapping.myMap('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c')}`
    ).equals(0)
  })
})

describe('Nested Mapping', () => {
  before(async () => {
    NestedMapping = await ethers.getContractFactory('NestedMapping')
    nestedMapping = await NestedMapping.deploy()
  })

  it('reads a default value', async () => {
    expect(
      await nestedMapping.nested(
        '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c',
        3
      )
    ).equals(false)
  })

  it('Sets a mapping', async () => {
    await nestedMapping.set(
      '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c',
      3,
      true
    )
    expect(
      await nestedMapping.nested(
        '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c',
        3
      )
    ).equals(true)
  })

  it('Resets the value', async () => {
    await nestedMapping.remove('0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c', 3)
    expect(
      await nestedMapping.nested(
        '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c',
        3
      )
    ).equals(false)
  })
})
