'use client';

import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/todoData';

const Todo = () => {
  // 할일 목록을 업데이트 해줘야한다
  const [todos, setTodos] = useState(mockTodoData);

  // 할일을 입력하면 추가하는 함수
  // 입력된 할일이 들어옴 - 매개변수로 받아주자
  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createdDate: new Date().toLocaleDateString(),
    };
    setTodos([newTodo, ...todos]);
    // todos = mockTodoData
    // 먼저 기존에 있는 todos를 넣어주고, 그 뒤에 새로운 todo값을 넣어줘라. 새로운 todo의 형식은? 기존의 목업데이터 참고
  };
  // 완료 시 체크 함수
  const onUpdate = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };
  // 할일 아이템 삭제 함수
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
