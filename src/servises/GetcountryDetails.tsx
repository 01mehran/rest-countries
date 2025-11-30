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
  capital?: string;
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

  useEffect(() => {
    async function getACountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        if (!res.ok) throw new Error('Network Error!');

        const data = await res.json();
        setAllDetails(data[0]);
      } catch (err) {
        console.error(err);
      }
    }

    getACountry();
  }, [cca3]);

  const nativeName =
    allDetails?.name.nativeName[Object.keys(allDetails?.name.nativeName)[0]]
      .common;

  const currencyName = allDetails?.currencies
    ? allDetails.currencies[Object.keys(allDetails.currencies)[0]].name
    : 'N/A';

  const currencySymbol = allDetails?.currencies
    ? allDetails.currencies[Object.keys(allDetails.currencies)[0]].symbol
    : '';
  const allLanguages = allDetails?.languages
    ? Object.values(allDetails.languages).join(', ')
    : 'N/A';

  return {
    allDetails,
    nativeName,
    currencyName,
    currencySymbol,
    allLanguages,
  };
}

export default GetcountryDetails;
