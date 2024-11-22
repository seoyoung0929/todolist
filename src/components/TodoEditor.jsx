'use client';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';

const TodoEditor = ({ addTodo }) => {
  const [task, setTask] = useState('');
  // inputRef 변수 선언
  const inputRef = useRef();
  const onChangeTask = (e) => {
    setTask(e.target.value);
  };
  const onSubmit = () => {
    // 빈 입력 방지
    if (!task) return;

    // 할 일 추가
    addTodo(task);
    // 입력창 초기화 및 포커스
    setTask('');
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>새로운 Todo 작성하기</h2>
      <form className="flex">
        <div className="relative flex-3">
          <input
            ref={inputRef}
            type="text"
            value={task}
            onChange={onChangeTask}
            name=""
            id=""
            placeholder="할 일을 추가로 입력해주세요."
            className="p-3 w-full"
          />
          <button className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center text-black">
            <IoClose />
          </button>
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          disabled={!task}
          className={classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-200')}
        >
          할 일 추가
        </button>
        {/* input에 텍스트가 입력되지 않으면 버튼 비활성화 */}
        {/* 하나의 버튼에 true/false로 반전되는 작업이라면 ! 부정연산자를 써주자 (그냥 외워^^..)*/}
      </form>
    </div>
  );
};

export default TodoEditor;
