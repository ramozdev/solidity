// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract FunctionModifier {
    address public owner;
    uint256 public x = 10;
    bool public locked;

    constructor() {
        // Set the contract deployer as the owner
        owner = msg.sender;
    }

    // Modifier to check that caller is the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Underscore is a special character only used inside
        // a function modifier and it tells Solidity to
        // execute the rest of the code.
        _;
    }

    // Modifiers can take inputs. This modifier checks that the
    // address passed in is not the zero address.
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not a valid address");
        _;
    }

    function changeOwner(address _newOwner)
        public
        onlyOwner
        validAddress(_newOwner)
    {
        owner = _newOwner;
    }

    // Modifiers can be called before and / or after a function.
    // This modifier prevents reentrancy attacks
    modifier noReentrancy() {
        require(!locked, "No Reentrancy");

        locked = true;
        _;
        locked = false;
    }

    function decrement(uint256 _i) public noReentrancy {
        // This could result in overflow
        x -= _i;

        if (_i > 1) {
            decrement(_i - 1);
        }
    }
}
