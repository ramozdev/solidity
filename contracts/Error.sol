// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Errors {
    uint256 public num;

    function testRequire(uint256 _i) pure public {
        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        require(_i > 10, "Input must be greater than 10");
    }

    function testRevert(uint256 _i) pure public {
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above
        if (_i < 10) {
            revert('input must be greater than 10');
        }
    }

    function testAssert() view public {
        // Assert should only be used to test for internal errors,
        // and to check invariants.

        // Here we assert that num is always equal to 0
        assert(num == 0);
    }
}