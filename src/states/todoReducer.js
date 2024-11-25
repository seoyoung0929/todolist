import { v4 as uuidv4 } from 'uuid';

// 액션 타입 정의
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// 현재 상태값, dispatch가 보내오는 값
export const setTodos = (state, action) => {
  // state = [{id:1, task:'할일', isDone:fasle}]
  // action = {type: 'DELETE_TODO', payload:{id:1}}
  switch (action.type) {
    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE_TODO':
      return state.map((item) => (item.id === action.payload.id ? { ...item, isDone: !item.isDone } : item));
    case 'ADD_TODO':
      return [
        {
          id: uuidv4(),
          isDone: false,
          task: action.payload.task,
          createdDate: new Date().toLocaleDateString(),
        },
        ...state,
      ];

    default:
      return state;
  }
};
