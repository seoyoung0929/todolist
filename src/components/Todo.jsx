'use client';

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
  // 할일 목록을 업데이트 해줘야한다
  const [todos, setTodos] = useState([]);

  // 마운트 시
  // 1. 초기 데이터 로드
  useEffect(() => {
    // localStorage에서 'todos' 키로 저장된 데이터를 가져옴
    // JSON.parse() 함수를 이용하여 문자열을 객체로 변환
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    // 가져온 데이터로 상태 업데이트
    setTodos(savedTodos);
  }, []); // 빈 배열: 컴포넌트가 처음 마운트될 때만 실행

  // 2. 데이터 자동 저장
  useEffect(() => {
    // todos 상태가 변경될 때마다 localStorage에 저장
    // JSON.stringify() 함수를 이용하여 객체를 문자열로 변환
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // todos가 변경될 때마다 실행

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
