import '../globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'MyDigitalSpace',
  description: 'Certified Business Analyst and Scrum Master Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
