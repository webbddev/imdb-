'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useTheme } from 'next-themes';
export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleDarkMode = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button onClick={toggleDarkMode}>
      {currentTheme === 'dark' ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' />
      ) : (
        <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' />
      )}
    </button>
  );
}
