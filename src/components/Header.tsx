// Icons;
import { IoMoonOutline } from 'react-icons/io5';
// import { LuSunMedium } from 'react-icons/lu';

function Header() {
  return (
    <header className="bg-text-dark text-element-dark flex h-17 items-center justify-between px-4 shadow-sm lg:px-24">
      <h1 className="text-lg font-extrabold sm:text-xl">Where in the world?</h1>

      <div className="flex items-center gap-1 sm:gap-3">
        <span className="transition-scale cursor-pointer text-xl duration-200 hover:scale-105">
          <IoMoonOutline />
        </span>
        <p className="font-bold tracking-wider">
          <span className="pr-1">Dark</span>Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
