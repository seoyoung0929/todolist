'use client';

import React from 'react';

const TodoItem = ({ task, createdDate, isDone, id, onUpdate, onDelete }) => {
  //console.log(mockTodoData);
  return (
    <li key={id}>
      <input
        type="checkbox"
        onChange={() => {
          onUpdate(id);
        }}
        checked={isDone}
        name=""
        id=""
      />
      <strong className={`${isDone ? 'line-through' : null}`}>{task}</strong>
      <span>{createdDate}</span>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
