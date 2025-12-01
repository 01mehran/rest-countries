// Components;
import CountryInfo from '@/components/CountryInfo';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

// Icons;
import { MdSearch } from 'react-icons/md';

// Services;
import GetAllCountries from '@/servises/GetAllCountries';
import { useEffect, useState } from 'react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { allCountries, isLoading, isError } = GetAllCountries();
  const [searchedCountries, setSearchedCountries] = useState(allCountries);
  const [msg, setMsg] = useState<string | null>('');

  useEffect(() => {
    setSearchedCountries(allCountries);
  }, [allCountries]);

  const handleSearchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === '') {
      setSearchedCountries(allCountries);
      setMsg('');
      return;
    }
    const searchedCountries = allCountries.filter((c) =>
      c.name.common
        .toLocaleLowerCase()
        .includes(searchQuery?.toLocaleLowerCase()),
    );
    if (!searchedCountries.length) {
      setMsg('No country found');
    } else {
      setMsg('');
    }
    setSearchedCountries(searchedCountries);
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
              className="placeholder:text-input-light dark:text-text-dark dark:placeholder:text-text-dark h-full w-full rounded-md border-0 pr-4 pl-18 tracking-tight outline-0 placeholder:text-[14px] placeholder:font-medium"
              onChange={handleSearchCountry}
            />
            <MdSearch className="text-input-light dark:text-text-dark absolute top-1/2 translate-7 -translate-y-1/2 transform text-2xl" />
          </form>
          {/* Filter by region */}
          <article className="bg-text-dark dark:bg-element-dark w-42 rounded-md px-1.5 shadow-sm">
            <select className="text-element-dark dark:text-text-dark dark:bg-element-dark flex h-12 w-full items-center rounded-md border-0 pr-4 text-2xl text-[14px] font-semibold outline-0">
              <option defaultValue="Filter by Region" disabled hidden></option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </article>
        </section>

        <section className="mx-10 mt-8 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-6 sm:mx-0 sm:gap-4 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] lg:gap-18">
          {isError && (
            <p className="font-bold text-red-600 text-shadow-md text-shadow-slate-300 dark:text-shadow-black">
              {isError}
            </p>
          )}

          {msg && (
            <p className="font-bold text-red-600 text-shadow-md text-shadow-slate-300 dark:text-shadow-black">
              {msg}
            </p>
          )}

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
