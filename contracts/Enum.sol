// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Enum {
    enum Status {Pending, Shipped, Accepted, Rejected, Canceled}

    // The default value is the first element on
    // the enum declaration, in this case: "Pending"
    Status public status;

    // Pending  - 0
    // Shipped  - 1
    // Accepted - 2
    // Rejected - 3
    // Canceled - 4
    // update the status by passing an uint
    function set(Status _status) public {
        status = _status;
    }

    // Update to a specific Enum
    function cancel() public {
        status = Status.Canceled;
    }

    // delete sets the value to Enum index 0
    // The default value, in this case: "Pending"
    function reset() public {
        delete status;
    }
}
