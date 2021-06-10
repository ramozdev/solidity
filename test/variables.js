const { expect, assert } = require('chai')

describe('Variables', () => {
    before(async () => {
        Variables = await ethers.getContractFactory('Variables')
        variables = await Variables.deploy()
    })
    it('reads state variables', async () => {
        expect(await variables.name()).to.equal('Jeff')
        expect(await variables.num()).to.equal(99)
    })
    it('returns a local variable', async () => {
        expect(await variables.localVariable()).to.equal(6)
    })
    it('returns address', async () => {
        assert.typeOf(await variables.globalVariable(), 'string')
    })
})