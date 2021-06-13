// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Events {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed _sender, string _message);
    event AnotherLog();

    function emitEvents() public {
        emit Log(msg.sender, 'Hello Decentralized World!');
        emit AnotherLog();
    }
}