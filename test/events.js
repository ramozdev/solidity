const {expect} = require('chai')

describe('Events', () => {
    before(async () => {
        Events = await ethers.getContractFactory('Events')
        events = await Events.deploy()
    })

    it('Emits events', async () => {
        await events.emitEvents()
    })
})