const {expect } = require('chai')

describe('Writing', () => {
    before(async () => {
        Writing = await ethers.getContractFactory('Writing')
        writing = await Writing.deploy()
    })

    it('num variable initialized with value 5', async () => {
        expect(await writing.num()).equal(5)
    })
    it('updates the value of num', async () => {
        await writing.setNum(20)
        expect(await writing.num()).equal(20)
    })
})