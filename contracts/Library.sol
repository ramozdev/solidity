// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

contract TestSafeMath {
    using SafeMath for uint;

    uint public MAX_UINT = 2 ** 256 - 1;

    function testAdd(uint y) public view returns (uint) {
        return MAX_UINT.add(y);
    }
}

// Array function to delete element at index and re-organize the array
// so that their are no gaps between the elements.
library Array {
    function remove(uint[] storage arr, uint index) public {
        // Move the last element into the place to delete
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            // Push three numbers such that the array
            // becomes, arr = [0, 1, 2]
            arr.push(i);
        }

        arr.remove(1);
        // arr = [0, 2]

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }
}
