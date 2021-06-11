// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Struct {
    struct Todo {
        string task;
        bool completed;
    }

    Todo[] public todos;

    function create(string memory _task) public {
        // 3 ways to initialize a struct
        // - Calling it like a function
        todos.push(Todo(_task, false));

        // - key value mapping
        todos.push(Todo({task: _task, completed: true}));

        // - initialize an empty struct and then update it
        Todo memory todo;
        todo.task = _task;
        // todo.completed is initialized to false

        todos.push(todo);
    }

    // Update element's task
    function update(uint256 _index, string memory _task) public {
        Todo storage todo = todos[_index];
        todo.task = _task;
    }

    // Update element's completed
    function toggleCompleted(uint256 _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
