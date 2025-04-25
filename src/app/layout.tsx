import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Yackob Tamire – Business Analyst Portfolio',
  description: 'Certified Scrum Master and Business Analyst Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
