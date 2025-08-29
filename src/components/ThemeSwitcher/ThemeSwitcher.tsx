import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeSwitcher.module.scss';

// Import your preferred icons - using Lucide React as example
import { Sun, Moon } from 'lucide-react';

// Simple toggle version
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

// Button with text version
export const ThemeSwitcherButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeSwitcher}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <>
          <Moon size={16} />
          Dark Mode
        </>
      ) : (
        <>
          <Sun size={16} />
          Light Mode
        </>
      )}
    </button>
  );
};

// Dropdown/Select version
export const ThemeSelect = () => {
  const { setTheme } = useTheme();

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
  ] as const;

  return (
    <div className={styles.themeSelect}>
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={styles.themeOption}
          aria-label={`Switch to ${label} theme`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  );
};
