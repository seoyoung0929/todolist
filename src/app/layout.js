'use client';

import { Provider } from '@/components/ui/provider';
import './globals.css';
import { Providers } from '@/contexts';
import { ThemeProvider } from '@mui/material';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Provider>
            <Providers>{children}</Providers>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
