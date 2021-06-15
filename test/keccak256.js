const {expect} = require('chai')

describe('Keccak256', () => {
    before(async () => {
        Factory = await ethers.getContractFactory('HashFunction')
        contract = await Factory.deploy()
    })

    it('Returns the keccak256 hash', async () => {
        console.log(await contract.hash('abc', 123, '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'))
    })

    // Todo: Study hash collisions.
    it('keccak256 collision occurs', async () => {
        console.log(await contract.collision('aa', 'abbb'))
    })

    it('Guess the word correctly', async () => {
        expect(await contract.guess('Solidity')).equals(true)
    })

    it('Guess the word incorrectly', async () => {
        expect(await contract.guess('Wrong')).equals(false)
    })
})