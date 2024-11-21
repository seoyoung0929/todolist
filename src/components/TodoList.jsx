import React from 'react';

const TodoList = () => {
  return (
    <div>
      <h2>할 일 목록</h2>
      <input type="text" placeholder="검색어를 입력하세요" />
      <ul>
        <li>
          <strong>고양이 밥주기</strong>
          <span>2024.04.22</span>
          <button>삭제</button>
        </li>
        <li>
          <strong>감자 캐기</strong>
          <span>2024.04.22</span>
          <button>삭제</button>
        </li>
        <li>
          <strong>고양이 놀아주기</strong>
          <span>2024.04.22</span>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
