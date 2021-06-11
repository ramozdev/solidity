// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Functions {
    function returnMany()
        public
        pure
        returns (
            uint256,
            bool,
            uint256
        )
    {
        return (1, false, 2);
    }

    // return values can be named
    function named()
        public
        pure
        returns (
            uint256 x,
            bool b,
            uint256 y
        )
    {
        return (2, true, 1);
    }

    // Return values can be assigned to their name.
    // In this case the return statement can be omitted.
    function assigned()
        public
        pure
        returns (
            uint256 x,
            bool b,
            uint256 y
        )
    {
        x = 1;
        b = true;
        y = 2;
    }

    // Use destructing assignment when calling another
    // function that returns multiple values.
    function destructing()
        public
        pure
        returns (
            uint256,
            uint256,
            uint256,
            bool,
            uint256
        )
    {
        // values can be left out
        (uint256 x, , uint256 y) = returnMany();
        (uint256 a, bool b, uint256 c) = assigned();
        return (x, y, a, b, c);
    }

    // Can use array as input
    // Can return arrays
    function arrayInput(uint256[] memory _arr)
        public
        pure
        returns (uint256[] memory)
    {
        return _arr;
    }
}
