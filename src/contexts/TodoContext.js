'use client';

import { ADD_TODO, DELETE_TODO, setTodos, UPDATE_TODO } from '@/states/todoReducer';

const { createContext, useContext, useReducer, useEffect } = require('react');

// 생성 (컴포넌트)
const TodoContext = createContext();

// 공급 (컴포넌트)
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(setTodos, []);

  // 로컬 스토리지 키 선언
  const LOCAL_STORAGE_KEY = 'my-todo-app-todos';

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    //setTodos(savedTodos);
    savedTodos.forEach((item) => {
      return dispatch({
        type: ADD_TODO,
        payload: item,
      });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = {};

    dispatch({ type: ADD_TODO, payload: { task } });
  };

  const onUpdate = (id) => {
    dispatch({
      type: UPDATE_TODO,
      payload: { id },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  };

  const value = {
    todos,
    addTodo,
    onUpdate,
    onDelete,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// 사용 (함수)
export const useTodo = () => {
  return useContext(TodoContext);
};
