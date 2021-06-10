// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Loop {
    function forLoop() public pure {
        for (uint256 i = 0; i < 10; i++) {
            if (i < 3) {
                continue;
            }
            if (i == 5) {
                break;
            }
        }
    }

    function whileLoop() public pure {
        uint256 i = 0;
        while (i < 4) {
            i++;
        }
    }
}
