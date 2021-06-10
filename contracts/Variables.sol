// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Variables {
    // State variables are stored in the blockchain
    string public name = 'Jeff';
    uint public num = 99;

    function localVariable() public pure returns(uint) {
        // Local variables are not saved on the blockchain
        uint intNum = 6;
        return intNum;
    }

    function globalVariable() public view returns(address) {
        // Address of the function caller
        address sender = msg.sender;
        return sender;
    }
}