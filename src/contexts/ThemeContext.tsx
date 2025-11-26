import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  handleToggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const themeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (
      (localStorage.getItem('currentTheme') as 'light' | 'dark') || 'light'
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('currentTheme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <themeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
};
