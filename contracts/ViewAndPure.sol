// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

// Getter functions can be declared view or pure.
// View function declares that no state will be changed.
// Pure function declares that no state variable will be changed or read.

contract ViewAndPure {
    uint256 public x = 1;

    // Promise not to modify state variables
    function addToX(uint256 _y) public view returns (uint256) {
        return x + _y;
    }

    // Promise not to modify or read state variables
    function add(uint256 _x, uint256 _y) public pure returns(uint256){
        return _x + _y;
    }
}
