const { expect } = require('chai')

describe('Enum', () => {
  before(async () => {
    Enum = await ethers.getContractFactory('Enum')
    myEnum = await Enum.deploy()
  })

  // status definiton
  // Pending  - 0
  // Shipped  - 1
  // Accepted - 2
  // Rejected - 3
  // Canceled - 4
  it('returns the initial value', async () => {
    expect(await myEnum.status()).equals(0)
  })

  it('updates status by passing uint', async () => {
    await myEnum.set(3)
    expect(await myEnum.status()).equals(3)
  })

  it('updates status by using Status definition', async () => {
    await myEnum.cancel()
    expect(await myEnum.status()).equals(4)
  })

  it('updates status by using delete', async () => {
    await myEnum.reset()
    expect(await myEnum.status()).equals(0)
  })
})
