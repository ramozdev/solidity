const {expect} = require('chai')

describe('View and Pure functions', () => {
    before(async () => {
        ViewAndPure = await ethers.getContractFactory('ViewAndPure')
        viewAndPure = await ViewAndPure.deploy()
    })

    it('addToX() works as expected', async () => {
        // x is initially 1
        expect(+`${await viewAndPure.addToX(4)}`).equals(5)
    })

    it('add() works as expected', async () => {
        expect(+`${await viewAndPure.add(4, 5)}`).equals(9)
    })
})