const { expect } = require('chai')

describe('Stuct', () => {
  before(async () => {
    Struct = await ethers.getContractFactory('Struct')
    struct = await Struct.deploy()
  })

  it('creates the structs', async () => {
    // This functions pushes three items into the
    // Struct array
    await struct.create('drink water')

    // Use array descructuring to test result
    let [task, completed] = await struct.todos(0)

    expect(task).equals('drink water')
    expect(completed).equals(false)

    let [task2, completed2] = await struct.todos(1)

    expect(task2).equals('drink water')
    expect(completed2).equals(true)

    let [task3, completed3] = await struct.todos(2)

    expect(task3).equals('drink water')
    expect(completed3).equals(false)
  })

  it('updates a task', async () => {
    // At this stage Struct[0] is ['drink water', false, ...]
    await struct.update(0, 'drink more water')
    let [task] = await struct.todos(0)
    // Now it should be ['drink more water', false, ...]
    expect(task).equals('drink more water')
  })

  it('toggles completed', async () => {
    // At this stage Struct[0] is ['drink more water', false, ...]
    await struct.toggleCompleted(0)
    let [_, completed] = await struct.todos(0)
    // Now it should be ['drink more water', true, ...]
    expect(completed).equals(true)
  })
})
