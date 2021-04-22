import React, { useEffect, useReducer } from 'react';

import { ToDoList } from './components/ToDoList';
import { todoReducer } from './components/todoReducer';
import { ToDoAdd } from './components/ToDoAdd';

import './style.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        })
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    };

    return (
        <div>
            <h1>TodoAPP <small>({todos.length})</small> </h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ToDoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <ToDoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
