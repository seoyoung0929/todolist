'use client';

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useTodo } from '@/contexts/TodoContext';

const TodoList = ({}) => {
  const [search, setSearch] = useState('');
  const { onUpdate, onDelete, todos } = useTodo();
  const filteredTodos = () => {
    return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <input
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="검색어를 입력하세요"
      />

      <ul>
        {filteredTodos().map((item) => (
          <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
