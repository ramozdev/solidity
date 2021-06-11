// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Array {
    // Several ways to initialize an array
    // No values initialized
    uint256[] public arr;
    // Explicit initialization
    uint256[] public arr2 = [1, 2, 3];
    // Fixed size array. All values initialized to 0
    uint256[10] public fixedArr;

    // Soldity can return an entire array
    // This should be avoided for unconstrained arrays
    function getEntireArray() public view returns (uint256[] memory) {
        return arr; // Could run out of gas
    }

    function push(uint256 _index) public {
        // Append to Array
        // Increases the array length by 1
        arr.push(_index);
    }

    function pop() public {
        // Remove the last element from an array
        // Decreases the array length by 1
        arr.pop();
    }

    function getLength() public view returns (uint256) {
        return arr.length;
    }

    function remove(uint256 _index) public {
        // Delete doesn't change the length of the array
        // It resets the value of the index to its default value
        // In this case, for uint256 is 0
        delete arr2[_index];
    }

    function getLength2() public view returns (uint256) {
        return arr2.length;
    }

    // Removing leaves gaps with default values in the array
    // because it doesn't change the length of the array
    function removeAndPop(uint256 _index) public {
        // Move the last element of the array to the index
        // to be removed and execute pop() on the array
        arr[_index] = arr[arr.length - 1];
        arr.pop();
    }

    function testRemoveAndPop() public {
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        // [1,2,3,4]

        removeAndPop(1);
        // [1,4,3]

        removeAndPop(0);
        // [3,4]
    }
}
