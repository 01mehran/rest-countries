// Hooks;
import { useEffect, useState } from 'react';

// Type for all countries data from api;
export interface TAllCountries {
  id: number;
  flag: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
  cca3: string;
  borders?: string[];
}

// Types that come from the raw api;
export interface TRawApi {
  capital?: string[];
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  population: number;
  region: string;
  borders?: string[];
}

function GetAllCountries() {
  // States;
  const [allCountries, setAllCountries] = useState<TAllCountries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const base_url = `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3,borders`;

  useEffect(() => {
    setIsLoading(true);

    async function getCountries() {
      try {
        const res = await fetch(base_url);
        if (!res.ok) throw new Error('Something went wrong');

        const rawData = await res.json();
        
        const formatted: TAllCountries[] = rawData.map(
          (c: TRawApi, i: number) => ({
            id: i,
            flag: { png: c.flags?.png },
            name: { common: c.name?.common },
            population: c.population,
            region: c.region,
            capital: c.capital,
            cca3: c.cca3,
            borders: c.borders,
          }),
        );
        setAllCountries(formatted);
      } catch (err) {
        console.error(err);

        // Check error;
        if (err instanceof Error) {
          setIsError(err.message);
        } else {
          setIsError(String(err));
        }
      } finally {
        setIsLoading(false);
      }
    }

    getCountries();
  }, []);

  return { allCountries, isLoading, isError };
}

export default GetAllCountries;
