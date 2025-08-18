import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Next Stack Navigation Demo',
};

export default function RootLayout({
  children,
  stack,
}: {
  children: ReactNode;
  stack: ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div id="page-root">{children}</div>
        <div id="stack-root">{stack}</div>
      </body>
    </html>
  );
}
