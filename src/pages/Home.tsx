// Components;
import CountryInfo from '@/components/CountryInfo';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';

// Icons;
import { MdSearch } from 'react-icons/md';

export interface TCountry {
  id: number;
  flag: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
}

function Home() {
  const [data, setData] = useState<TCountry[]>([]);
  const [lodaing, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const base_url = `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags`;

  useEffect(() => {
    setLoading(true);
    async function getCountries() {
      try {
        const res = await fetch(base_url);
        if (!res.ok) throw new Error('Something went wrong');

        const rawData = await res.json();

        const formatted: TCountry[] = rawData.map((c: any, i: number) => ({
          id: i,
          flag: { png: c.flags?.png },
          name: { common: c.name?.common },
          population: c.population,
          region: c.region,
          capital: c.capital,
        }));

        setData(formatted);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    }

    getCountries();
  }, []);

  return (
    <div className="bg-bg-light dark:bg-bg-dark min-h-dvh pb-4">
      <Header />
      <main className="px-4 lg:px-24">
        {/* Search input */}
        <section className="mt-8 items-center space-y-6 sm:justify-between md:flex md:space-y-0">
          <article className="bg-text-dark dark:bg-element-dark relative mx-auto h-12 w-full rounded-md shadow-sm sm:mx-0 sm:max-w-[400px]">
            <input
              type="text"
              placeholder="Search for a country..."
              className="placeholder:text-input-light dark:text-text-dark dark:placeholder:text-text-dark h-full w-full rounded-md border-0 pr-4 pl-18 tracking-tight outline-0 placeholder:text-[14px] placeholder:font-medium"
            />
            <MdSearch className="text-input-light dark:text-text-dark absolute top-1/2 translate-7 -translate-y-1/2 transform text-2xl" />
          </article>
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

        <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-6 sm:gap-4 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] lg:gap-18">
          {error && <p className="font-bold text-white">{error}</p>}

          {lodaing ? (
            <div className="absolute top-1/2 left-1/2 size-18 -translate-x-1/2 transform animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          ) : (
            data.map((country) => (
              <CountryInfo key={country.id} data={country} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
