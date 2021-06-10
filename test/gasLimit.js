const { expect } = require('chai')

describe('Gas Limit', () => {
  before(async () => {
    GasLimit = await ethers.getContractFactory('GasLimit')
    gasLimit = await GasLimit.deploy()
  })

  it('Runs out of gas', async () => {
    await gasLimit.endless()
  })
})
