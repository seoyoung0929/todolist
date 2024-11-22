'use client';

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createdDate: new Date().toLocaleDateString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  const onDelete = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
