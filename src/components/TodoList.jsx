'use client';

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoData, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const filteredTodos = () => {
    return mockTodoData.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
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
