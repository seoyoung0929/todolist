import { Children } from 'react';
import { ThemeProvider } from './ThemeContext';
import { TodoProvider } from './TodoContext';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
};
