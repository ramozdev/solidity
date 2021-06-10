describe('Loop', () => {
  before(async () => {
    Loop = await ethers.getContractFactory('Loop')
    loop = await Loop.deploy()
  })

  it('For loops', async () => {
    await loop.forLoop()
  })
  it('While loops', async () => {
    await loop.whileLoop()
  })
})
