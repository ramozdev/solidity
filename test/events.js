const { expect } = require('chai')

describe('Events', () => {
  before(async () => {
    Events = await ethers.getContractFactory('Events')
    events = await Events.deploy()
  })

  it('Emits events', async () => {
    let { wait } = await events.emitEvents()
    let logs = await wait()
    console.log(JSON.stringify(logs.events, null, 2))
  })
})
