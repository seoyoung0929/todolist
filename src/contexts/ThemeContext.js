'use client';

import { createContext, useContext } from 'react';

// 생성
const themas = {
  light: {
    background: 'bg-white',
    text: 'text-black',
    btn: 'bg-gray-900',
    input: 'bg-gray-700',
    white: 'white',
    black: 'black',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-white',
    btn: 'bg-gray-200',
  },
};
const ThemaContext = createContext(themas.light);

// 공급 (함수로 감싸기)
export const ThemeProvider = ({ children }) => {
  return <ThemaContext.Provider value={themas.light}>{children}</ThemaContext.Provider>;
};

// 사용 (함수로 감싸기)
export const useTheme = () => {
  return useContext(ThemaContext);
};
