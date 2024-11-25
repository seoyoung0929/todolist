'use client';

import Todo from '@/components/Todo';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemaContext } from './layout';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const theme = useTheme();
  return (
    <div className={theme.background}>
      <Todo />
    </div>
  );
}
