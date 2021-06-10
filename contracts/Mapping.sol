// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Mapping {
    // Mapping from address to uint256
    mapping(address => uint256) public myMap;
    // Mapping always returns a value
    // If the value has not been set, it will return
    // the default value

    function set(address _addr, uint256 _i) public {
        // Update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        delete myMap[_addr];
    }

}

contract NestedMapping {
    mapping(address => mapping(uint256 => bool)) public nested;

    function set(address _address, uint256 _i, bool _b) public {
        nested[_address][_i] = _b;
    }

    function remove(address _address, uint256 _i) public {
        delete nested[_address][_i];
    }
}