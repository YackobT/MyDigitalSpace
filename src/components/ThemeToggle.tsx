'use client';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-2 rounded border text-sm font-medium border-gray-200 bg-white dark:bg-gray-500 dark:border-gray-500 dark:text-gray-10 shadow"
    >
      {isDark ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}
