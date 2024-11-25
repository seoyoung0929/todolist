'use client';

import React, { useEffect, useReducer, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { ADD_TODO, DELETE_TODO, setTodos, UPDATE_TODO } from '@/states/todoReducer';

const Todo = () => {
  //const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoHd />
      <TodoEditor />
      <TodoList />
    </div>
  );
};

export default Todo;
