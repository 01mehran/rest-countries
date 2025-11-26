// Contexts;
import { useTheme } from '@/contexts/ThemeContext';

// Icons;
import { IoMoonOutline } from 'react-icons/io5';
import { LuSunMedium } from 'react-icons/lu';

function Header() {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <header className="bg-text-dark text-element-dark dark:bg-element-dark dark:text-text-dark flex h-17 items-center justify-between px-4 shadow-sm lg:px-24">
      <h1 className="text-lg font-extrabold sm:text-xl">Where in the world?</h1>

      <div
        className="flex cursor-pointer items-center gap-1 sm:gap-3"
        onClick={handleToggleTheme}
      >
        <span className="transition-scale cursor-pointer text-xl duration-200 hover:scale-105">
          {theme === 'light' ? <IoMoonOutline /> : <LuSunMedium />}
        </span>
        <p className="font-bold tracking-wider">
          <span className="pr-1">{theme === 'light' ? 'Dark' : 'Light'}</span>
          Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
