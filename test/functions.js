const {expect} = require('chai')

describe('Function', () => {
    before(async () => {
        Functions = await ethers.getContractFactory('Functions')
        functions = await Functions.deploy()
    })

    it('function returns many', async () => {
        // Functions that return multiple values
        // return an array of values
        let [a, b, c] = await functions.returnMany()
        expect(+`${a}`).equals(1)
        expect(b).equals(false)
        expect(+`${c}`).equals(2)
    })
    
    it('named() works as expected', async () => {
        let [a, b, c] = await functions.named()
        expect(+`${a}`).equals(2)
        expect(b).equals(true)
        expect(+`${c}`).equals(1)
    })

    it('assigned() works as expected', async () => {
        let [a, b, c] = await functions.assigned()
        expect(+`${a}`).equals(1)
        expect(b).equals(true)
        expect(+`${c}`).equals(2)
    })

    it('destructing() works as expected', async () => {
        let [x, y, a, b, c] = await functions.destructing()
        expect(+`${x}`).equals(1)
        expect(+`${y}`).equals(2)
        expect(+`${a}`).equals(1)
        expect(b).equals(true)
        expect(+`${c}`).equals(2)
    })

    it('arrayInput() works as expected', async () => {
        let [a, b] = await functions.arrayInput([11,2])
        expect(+`${a}`).equals(11)
        expect(+`${b}`).equals(2)
    })
})