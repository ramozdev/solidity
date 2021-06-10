// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract GasLimit {
    uint256 public i = 0;

    // This function will always fails because it exceeds
    // the block gas limit
    function endless() public {
        while (true) {
            i += 1;
        }
    }
}
