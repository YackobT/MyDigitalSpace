import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'MyDigitalSpace',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}