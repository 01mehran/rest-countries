// Type
import type { TAllCountries } from '@/servises/GetAllCountries';

// hooks;
import { useEffect, useState } from 'react';

function useCountrySearch(allCountries: TAllCountries[]) {
  //  States
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedCountries, setSearchedCountries] = useState(allCountries);
  const [msg, setMsg] = useState('');

  // Update searched countries when allCountries changes
  useEffect(() => {
    setSearchedCountries(allCountries);
  }, [allCountries]);

  const handleSearchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    setSearchQuery(value);

    // If search input is empty, show all countries
    if (value.trim() === '') {
      setSearchedCountries(allCountries);
      setMsg('');
      return;
    }

    // Filter countries based on search query;
    const searchedCountries = allCountries.filter((c) =>
      c.name.common.toLowerCase().includes(value?.toLowerCase()),
    );

    // Update searched countries state
    setSearchedCountries(searchedCountries);

    // Set message if no country found
    setMsg(searchedCountries.length ? '' : 'No country found');
  };

  return { handleSearchCountry, searchedCountries, msg, searchQuery };
}

export default useCountrySearch;
