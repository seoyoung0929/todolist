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
      {/* 텍스트를 입력한다 -> onChange */}
      {/* 이걸 어떻게 바꾸고 싶어? 타켓의 벨류값으로 */}
      <ul>
        {filteredTodos().map((item) => (
          <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
        {/* 아이템으로 들어온건 객체 (map을 돌리면서 객체형태로 들어온거임) */}
        {/* 객체들은 가방에 한번 싸서 자식한테 보내야됨 */}
      </ul>
    </div>
  );
};

export default TodoList;
