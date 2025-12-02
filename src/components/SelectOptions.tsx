// Hooks;
import { Activity } from 'react';

// Icons;
import { MdKeyboardArrowDown } from 'react-icons/md';

interface ISelectOptions {
  isRegionListOpen: boolean;
  selectedRegion: string | null;
  handleSelectedRegion: (region: string) => void;
  handleOpenOptions: () => void;
}

function SelectOptions({
  isRegionListOpen,
  handleSelectedRegion,
  handleOpenOptions,
  selectedRegion,
}: ISelectOptions) {
  return (
    <div className="dark:text-text-dark relative w-50 md:w-60">
      <article
        onClick={handleOpenOptions}
        className="bg-text-dark dark:bg-element-dark flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-3 shadow-sm"
      >
        <p className="text-sm">{selectedRegion || 'Filter by Region'}</p>
        <span
          className={`text-2xl ${isRegionListOpen ? 'rotate-180' : ''} transition-transform duration-300`}
        >
          <MdKeyboardArrowDown />
        </span>
      </article>

      {/* Regions list; */}
      <Activity mode={isRegionListOpen ? 'visible' : 'hidden'}>
        <ul className="text-element-dark dark:text-text-dark dark:bg-element-dark bg-text-dark absolute -bottom-45 z-10 w-full cursor-pointer items-center space-y-3 rounded-md border-0 px-5 py-3 text-sm font-semibold shadow-sm outline-0">
          <li
            className="transition-px duration-200 hover:px-1.5"
            onClick={() => handleSelectedRegion('Africa')}
          >
            Africa
          </li>
          <li
            className="transition-px duration-200 hover:px-1.5"
            onClick={() => handleSelectedRegion('America')}
          >
            America
          </li>
          <li
            className="transition-px duration-200 hover:px-1.5"
            onClick={() => handleSelectedRegion('Asia')}
          >
            Asia
          </li>
          <li
            className="transition-px duration-200 hover:px-1.5"
            onClick={() => handleSelectedRegion('Europe')}
          >
            Europe
          </li>
          <li
            className="transition-px duration-200 hover:px-1.5"
            onClick={() => handleSelectedRegion('Oceania')}
          >
            Oceania
          </li>
        </ul>
      </Activity>
    </div>
  );
}

export default SelectOptions;
