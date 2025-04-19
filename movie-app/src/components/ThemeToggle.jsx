import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all duration-300"
    >
      <div
        className={`absolute w-4 h-4 bg-white dark:bg-indigo-500 rounded-full transform transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <span className="flex items-center justify-center text-xs">🌙</span>
        ) : (
          <span className="flex items-center justify-center text-xs">☀️</span>
        )}
      </div>
    </button>
  );
}

export default ThemeToggle;