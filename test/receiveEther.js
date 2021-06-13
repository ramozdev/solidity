const { expect } = require('chai')

describe('Receive Ether', () => {
  let oneEth = ethers.utils.parseEther('1.0')
  before(async () => {
    ReceiveEther = await ethers.getContractFactory('ReceiveEther')
    SendEther = await ethers.getContractFactory('SendEther')
    receiveEther = await ReceiveEther.deploy()
    sendEther = await SendEther.deploy()
  })

  it('Send ether via call()', async () => {
    let { value } = await sendEther.sendViaCall(receiveEther.address, {
      value: oneEth,
    })

    expect(`${value}`).equals(`${oneEth}`)
  })

  //   Method not recommended
  it('Send ether via send()', async () => {
    let { value } = await sendEther.sendViaSend(receiveEther.address, {
      value: oneEth,
    })

    expect(`${value}`).equals(`${oneEth}`)
  })

  //   Method not recommended
  it('Send ether via transfer()', async () => {
    let { value } = await sendEther.sendViaTransfer(receiveEther.address, {
      value: oneEth,
    })

    expect(`${value}`).equals(`${oneEth}`)
  })
})
