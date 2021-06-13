const { expect } = require('chai')

describe('A', () => {
  it('A.foo() returns "A"', async () => {
    A = await ethers.getContractFactory('contracts/Inheritance.sol:A')
    a = await A.deploy()
    expect(await a.foo()).equals('A')
  })
  it('B.foo() returns "B"', async () => {
    B = await ethers.getContractFactory('contracts/Inheritance.sol:B')
    b = await B.deploy()
    expect(await b.foo()).equals('B')
  })
  it('C.foo() returns "C"', async () => {
    C = await ethers.getContractFactory('contracts/Inheritance.sol:C')
    c = await C.deploy()
    expect(await c.foo()).equals('C')
  })
  it('D.foo() returns "D"', async () => {
    D = await ethers.getContractFactory('contracts/Inheritance.sol:D')
    d = await D.deploy()
    expect(await d.foo()).equals('C')
  })
  it('E.foo() returns "E"', async () => {
    E = await ethers.getContractFactory('contracts/Inheritance.sol:E')
    e = await E.deploy()
    expect(await e.foo()).equals('B')
  })
  it('F.foo() returns "F"', async () => {
    F = await ethers.getContractFactory('contracts/Inheritance.sol:F')
    f = await F.deploy()
    expect(await f.foo()).equals('B')
  })
})
