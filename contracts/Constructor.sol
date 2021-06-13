// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract X {
    string public name;

    constructor (string memory _name) {
        name = _name;
    }
}

contract Y {
    string public text;

    constructor (string memory _text) {
        text = _text;
    }
}

// There are 2 ways to initialize parent contract with parameters

// Pass the parameters here
contract B is X('Input for X'), Y('Input for Y'){

}

contract C is X, Y{
    // Pass the parameters here in the constructor,
    // similar to function modifiers.
    constructor(string memory _name, string memory _text) X(_name) Y(_text) {
    }
}

// Parent constructors are always called in the order of inheritance
// regardless of the order of parent contracts listed in the
// constructor of the child contract.

// Order of constructors called:
// 1. X
// 2. Y
// 3. D
contract D is X , Y {
    constructor () X('This is X') Y('This is Y') {

    }
}

// Order of constructors called:
// 1. Y
// 2. X
// 3. E
contract E is X('This is X'), Y('This is Y') {

}