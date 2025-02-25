"use client"
import React, { useState, useEffect, createContext } from "react";
import { Theme } from "@radix-ui/themes";

type ThemeType = 'light' | 'dark';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: ThemeType;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  switchTheme: () => { },
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  function switchTheme() {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  useEffect(() => {
    const getTheme = localStorage.getItem('theme') as ThemeType
    setTheme(getTheme)
  })

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <Theme appearance={theme} radius="none" accentColor="orange" grayColor="slate" style={{ background: 'var(--gray-1)' }}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export { ThemeContext }

export default ThemeProvider;
