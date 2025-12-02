// Components;
import CountryInfo from '@/components/CountryInfo';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

// Icons;
import { MdSearch } from 'react-icons/md';

// Services;
import GetAllCountries from '@/servises/GetAllCountries';

// Hooks;
import useCountrySearch from '@/hooks/useCountrySearch';
// import SelectOptions from '@/components/SelectOptions';
import { useState } from 'react';
import SelectOptions from '@/components/SelectOptions';

function Home() {
  // Data fetching;
  const { allCountries, isLoading, isError } = GetAllCountries();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isRegionListOpen, setIsRegionOpen] = useState(false);

  // Country search hook;
  const { handleSearchCountry, searchedCountries, msg, searchQuery } =
    useCountrySearch(allCountries, selectedRegion);

  // Update selected region;
  const handleSelectedRegion = (region: string) => {
    setSelectedRegion(region);
    setIsRegionOpen((prev) => !prev);
  };

  // Toggle options list;
  const handleOpenOptions = () => {
    setIsRegionOpen((prev) => !prev);
  };
  return (
    <div className="bg-bg-light dark:bg-bg-dark min-h-dvh pb-4">
      <Header />
      <main className="px-4 lg:px-24">
        {/* Search input */}
        <section className="mt-8 items-center space-y-6 sm:justify-between md:flex md:space-y-0">
          <form className="bg-text-dark dark:bg-element-dark relative mx-auto h-12 w-full rounded-md shadow-sm sm:mx-0 sm:max-w-[400px]">
            <input
              type="text"
              placeholder="Search for a country..."
              className="placeholder:text-input-light dark:text-text-dark dark:placeholder:text-text-dark transition-outline dark:focus:outline-text-dark text-md h-full w-full rounded-md border-0 pr-4 pl-18 tracking-wide capitalize accent-blue-600 outline-0 placeholder:text-[14px] placeholder:font-medium focus:outline-2 focus:outline-blue-600"
              onChange={handleSearchCountry}
              value={searchQuery}
            />
            <MdSearch className="text-input-light dark:text-text-dark absolute top-1/2 translate-7 -translate-y-1/2 transform text-2xl" />
          </form>

          {/* Filter by region */}
          <SelectOptions
            isRegionListOpen={isRegionListOpen}
            handleSelectedRegion={handleSelectedRegion}
            handleOpenOptions={handleOpenOptions}
            selectedRegion={selectedRegion}
          />
        </section>

        <section className="small:mx-0 mx-14 mt-8 grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6 sm:mx-0 sm:gap-4 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:gap-14">
          {/* show error message if any */}
          {isError && (
            <p className="font-bold text-red-600 text-shadow-md text-shadow-slate-300 dark:text-shadow-black">
              {isError}
            </p>
          )}
          {/* show message if no country found */}
          {msg && (
            <p className="font-bold text-red-600 text-shadow-md text-shadow-slate-300 dark:text-shadow-black">
              {msg}
            </p>
          )}

          {/* show loading spinner */}
          {isLoading ? (
            <Loading />
          ) : (
            searchedCountries.map((country) => (
              <CountryInfo key={country.id} countryData={country} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
