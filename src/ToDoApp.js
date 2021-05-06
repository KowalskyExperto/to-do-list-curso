import React, { useEffect, useReducer } from 'react';

import { ToDoList } from './components/ToDoList';
import { todoReducer } from './components/todoReducer';
import { ToDoAdd } from './components/ToDoAdd';

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

    const handleEditTodo = (editTodo) => {
        dispatch({
            type: 'edit',
            payload: editTodo,
        })
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
        <>
            <h1>Todo APP</h1>
            <small> Tareas en total: {todos.length}</small>
            <hr/>

            <ToDoList
                todos={todos}
                handleDelete={handleDelete}
                handleEditTodo={handleEditTodo}
                handleToggle={handleToggle}
            />
            <ToDoAdd
                handleAddTodo={handleAddTodo}
            />
        </>
    )
}
