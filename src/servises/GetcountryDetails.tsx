import { useEffect, useState } from 'react';

// Type for country details;
interface TCountryDetail {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  languages: {
    [key: string]: string;
  };
  cca3: string;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  tld?: string[];
  borders?: string[];
}

function GetcountryDetails(cca3: string) {
  const [allDetails, setAllDetails] = useState<TCountryDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    
    async function getACountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        if (!res.ok) throw new Error('Network Error!');

        const data = await res.json();
        setAllDetails(data[0]);
      } catch (err) {
        console.error(err);

        // Check error
        if (err instanceof Error) {
          setIsError(err.message);
        } else {
          setIsError(String(err));
        }
      } finally {
        setIsLoading(false);
      }
    }

    getACountry();
  }, [cca3]);

  // Get navive name dynamically;
  const nativeName =
    allDetails?.name.nativeName[Object.keys(allDetails?.name.nativeName)[0]]
      .common;

  // Get currenny dynamically;
  const currencyName = allDetails?.currencies
    ? allDetails.currencies[Object.keys(allDetails.currencies)[0]].name
    : 'N/A';
 
    // Get currency symbol dynamically;
  const currencySymbol = allDetails?.currencies
    ? allDetails.currencies[Object.keys(allDetails.currencies)[0]].symbol
    : '';

  // Get all languages dynamically;
  const allLanguages = allDetails?.languages
    ? Object.values(allDetails.languages).join(', ')
    : 'N/A';

  return {
    allDetails,
    nativeName,
    currencyName,
    currencySymbol,
    allLanguages,
    isLoading,
    isError,
  };
}

export default GetcountryDetails;
