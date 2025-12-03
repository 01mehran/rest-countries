// Type;
import type { TAllCountries } from '@/servises/GetAllCountries';

// Libraries
import { Link } from 'react-router-dom';

// Type for country info props;
interface TCountryInfoProps {
  countryData: TAllCountries;
  allCountries: TAllCountries[];
}

function CountryInfo({ countryData, allCountries }: TCountryInfoProps) {
  return (
    <Link to={`/countryDetailes/${countryData.cca3}`} state={{ allCountries }}>
      <div className="bg-text-dark dark:bg-element-dark dark:text-bg-light/90 dark:shadow-bg-dark h-80 w-full cursor-pointer rounded-md shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md dark:shadow-xl">
        {/* Country flag; */}
        <article className="h-40">
          <img
            src={countryData.flag.png}
            alt={`${countryData.name.common} flag`}
            className="h-full w-full rounded-t-md object-cover"
          />
        </article>

        {/* More information(name,population,...) */}
        <article className="p-5">
          <p className="mb-3 font-bold">{countryData.name.common}</p>
          <div className="flex flex-col space-y-px leading-6">
            <p className="text-[13px] font-medium">
              Population:{' '}
              <span className="dark:text-bg-light/75 font-light">
                {countryData.population.toLocaleString()}
              </span>
            </p>
            <p className="text-[13px] font-medium">
              Region:{' '}
              <span className="dark:text-bg-light/75 font-light">
                {countryData.region}
              </span>
            </p>
            <p className="text-[13px] font-medium">
              Capital:{' '}
              <span className="dark:text-bg-light/75 font-light">
                {countryData.capital}
              </span>
            </p>
          </div>
        </article>
      </div>
    </Link>
  );
}

export default CountryInfo;
