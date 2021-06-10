// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract EtherUnits {
    uint256 public oneWei = 1 wei;

    // 1 Wei is equal to one
    bool public isOneWei = 1 wei == 1;

    uint256 public oneEther = 1 ether;

    // 1 ether is equal to 10^18 wei
    bool public isOneEther = 1 ether == 1e18;
}