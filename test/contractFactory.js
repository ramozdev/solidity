const { expect } = require('chai')

describe('Contract Factory', () => {
  const oneEth = ethers.utils.parseEther('1.0')
  const carOwner1 = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8'
  const carOwner2 = '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc'

  before(async () => {
    CarFactory = await ethers.getContractFactory(
      'contracts/ContractFactory.sol:CarFactory'
    )
    carFactory = await CarFactory.deploy()
  })

  it('Creates a car contract', async () => {
    let { value } = await carFactory.create(carOwner1, 'Civic')
    expect(`${value}`).equals('0')
  })

  it('Creates a car contract with ether', async () => {
    let { value } = await carFactory.createAndSendEther(carOwner2, 'Accord', {
      value: oneEth,
    })
    expect(`${value}`).equals(`${oneEth}`)
  })

  it('Returns car contracts', async () => {
    let C1 = await carFactory.getCar(0)
    let car1 = {
      contractAddress: await carFactory.cars(0),
      owner: C1.owner,
      model: C1.model,
      balance: ethers.utils.formatEther(`${C1.balance}`),
    }

    let C2 = await carFactory.getCar(1)
    let car2 = {
      contractAddress: await carFactory.cars(1),
      owner: C2.owner,
      model: C2.model,
      balance: ethers.utils.formatEther(`${C2.balance}`),
    }

    console.log('\nCar 1\n', JSON.stringify(car1, null, 2))
    console.log('\nCar 2\n', JSON.stringify(car2, null, 2))
  })

  // it('Calls one of the newly created contracts', async () => {
  // CarFactory1 = await ethers.getContractFactory(await carFactory.cars(0))
  // car1 = await CarFactory1.deploy()
  // console.log(await car1.model())
  // })
})
