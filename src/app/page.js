'use client';

import Todo from '@/components/Todo';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemaContext } from './layout';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@chakra-ui/react';

export default function Home() {
  const theme = useTheme();
  return (
    <div className={theme.background}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Todo />
    </div>
  );
}
