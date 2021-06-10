//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Counter {
    // Solidity generates a getter function for all
    // public variables.
    int public count = 0;

    // Increment count by one
    function inc() public {
        count += 1;
    }

    // Decrement count by one
    function dec() public {
        count -= 1;
    }
}