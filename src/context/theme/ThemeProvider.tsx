// src/context/ThemeProvider.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from '../../types/types';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        return savedTheme;
      }

      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }

    return defaultTheme;
  });

  // Apply theme to document when theme changes
  useEffect(() => {
    const root = document.documentElement;

    // Remove any existing theme attributes
    root.removeAttribute('data-theme');

    // Set new theme
    root.setAttribute('data-theme', theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Optional: Add transition class to prevent flash during theme switch
    root.classList.add('theme-transitioning');

    // Remove transition class after a brief moment
    const timer = setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 100);

    return () => clearTimeout(timer);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Add listener for system theme changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
