import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <button className={styles.toggle} onClick={toggle} aria-label={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}>
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
};

export default ThemeToggle;