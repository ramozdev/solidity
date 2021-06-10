// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Writing {
    // Store number as a state variable
    uint256 public num = 5;

    // A transaction is performed when writing to
    // state variables
    function setNum(uint256 _num) public {
        num = _num;
    }
}
