import { DEFAULT_THEME_KEY, THEMES } from '@/themeConfig/themeConfig';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentThemeKey, setCurrentThemeKey] = useState(() => {
    return localStorage.getItem('theme') || DEFAULT_THEME_KEY;
  });

  const currentTheme = THEMES[currentThemeKey] || THEMES[DEFAULT_THEME_KEY];

  useEffect(() => {
    localStorage.setItem('theme', currentThemeKey);

    // Apply CSS variables to root
    const root = document.documentElement;
    Object.entries(currentTheme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Handle legacy dark mode class for Tailwind
    if (currentThemeKey === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

  }, [currentThemeKey, currentTheme]);

  const changeTheme = (key) => {
    if (THEMES[key]) {
      setCurrentThemeKey(key);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentThemeKey, currentTheme, changeTheme, isDarkMode: currentThemeKey === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};
