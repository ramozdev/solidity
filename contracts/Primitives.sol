// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Primitives {
    // Boolean
    bool public boo = true;

     /*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available
        uint8   ranges from 0 to 2 ** 8 - 1
        uint16  ranges from 0 to 2 ** 16 - 1
        ...
        uint256 ranges from 0 to 2 ** 256 - 1
    */
    uint8 public unsigned8 = 2;
    uint256 public unsigned256 = 777;
    uint public unsigned = 12; // uint is an alias for uint256

    /*
    Negative numbers are allowed for int types.
    Like uint, different ranges are available from uint8 to uint256
    */
    int8 public integer8 = -2;
    int256 public integer256 = -777;
    int public integer = -3;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    // DEFAULT VALUES
    bool public defaultBoo; // False
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddress;// 0x0000000000000000000000000000000000000000
}