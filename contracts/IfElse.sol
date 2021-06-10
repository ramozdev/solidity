// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract IfElse {
    function foo(uint256 _i) public pure returns (uint256) {
        if (_i < 10) {
            return 0;
        } else if (_i > 10) {
            return 1;
        } else {
            return 2;
        }
    }
}
