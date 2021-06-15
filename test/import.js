const {expect} = require('chai')

describe('Import', () => {
    before(async () => {
        Factory = await ethers.getContractFactory('Import')
        contract = await Factory.deploy()
    })

    it('Gets Foo name', async () => {
        expect(await contract.getFooName()).equals('Foo')
    })
})