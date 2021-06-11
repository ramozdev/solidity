const { expect } = require('chai')

describe('Array', () => {
  before(async () => {
    MyArray = await ethers.getContractFactory('Array')
    myArray = await MyArray.deploy()
  })

  it('arr exists and returns default value', async () => {
    // Read the first index from array [1,2,3]
    expect(+`${await myArray.arr2(0)}`).equals(1)
  })

  it('pushes to array', async () => {
    await myArray.push(2)
    // Check that array changed from [] to [2]
    expect(+`${await myArray.arr(0)}`).equals(2)
  })

  it('pops form array', async () => {
    await myArray.pop()
    // Check that array changed from [2] to []
    expect(+`${await myArray.getLength()}`).equals(0)
  })

  it('deletes from array', async () => {
    // Remove the first index from [1,2,3]
    await myArray.remove(0)
    // Check that array is now [0,2,3]
    expect(+`${await myArray.arr2(0)}`).equals(0)
    expect(+`${await myArray.getLength2()}`).equals(3)
  })

  it('removeAndPop() returns the right value', async () => {
      await myArray.testRemoveAndPop()
    // Check that arr = [3,4]
      expect(+`${await myArray.arr(0)}`).equals(3)
      expect(+`${await myArray.arr(1)}`).equals(4)
      expect(+`${await myArray.getLength()}`).equals(2)
  })

})
