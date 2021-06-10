const {expect} = require('chai')

describe('If Else', () => {
    before(async () => {
        IfElse = await ethers.getContractFactory('IfElse')
        ifElse = await IfElse.deploy()
    })

    it('Input is less than 10', async ()=> {
        expect(+`${await ifElse.foo(3)}`).equals(0)
    })
    it('Input is more than 10', async ()=> {
        expect(+`${await ifElse.foo(139)}`).equals(1)
    })
    it('Input is 10', async ()=> {
        expect(+`${await ifElse.foo(10)}`).equals(2)
    })
})