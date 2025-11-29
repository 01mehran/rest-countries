// Components;
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

// Icons;
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useEffect, useState } from 'react';

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

function CountryDetail() {
  const { cca3 } = useParams();
  const [data, setData] = useState<TCountryDetail | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getACountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        if (!res.ok) throw new Error('Network Error!');

        const data = await res.json();
        setData(data[0]);
      } catch (err) {
        console.error(err);
      }
    }

    getACountry();
  }, [cca3]);
  console.log(data);
  const nativeCommon =
    data?.name.nativeName[Object.keys(data?.name.nativeName)[0]].common;

  const currencyName = data?.currencies
    ? data.currencies[Object.keys(data.currencies)[0]].name
    : 'N/A';

  const currencySymbol = data?.currencies
    ? data.currencies[Object.keys(data.currencies)[0]].symbol
    : '';
  const allLanguages = data?.languages
    ? Object.values(data.languages).join(', ')
    : 'N/A';

  return (
    <div className="bg-bg-light dark:bg-bg-dark min-h-dvh">
      <Header />
      <main className="px-4 pt-8 lg:px-24">
        <button
          onClick={() => navigate(-1)}
          className="text-text-light/80 dark:text-text-dark dark:bg-element-dark flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-px font-semibold shadow-[0px_0px_5px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-x-px"
        >
          <IoIosArrowRoundBack className="text-3xl" />
          Back
        </button>

        <section className="mt-8 pb-4 lg:gap-22 xl:flex">
          {/* Country flag */}
          <div className="md:w-[70%] lg:w-[40%]">
            <img
              src={data?.flags.png}
              alt={`${data?.name.common} flag`}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          {/* Country details */}
          <div className="mt-6 flex flex-col justify-around space-y-6">
            <div className="dark:text-text-dark/80 w-full">
              {/* Details */}
              <h3 className="text-2xl font-bold">{data?.name.common}</h3>
              <div className="mt-4 w-full space-y-6 md:flex md:gap-22">
                <article className="leading-6 md:leading-8 lg:leading-6">
                  <p className="font-medium md:text-xl">
                    Native Name:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {nativeCommon}
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Population:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {data?.population.toLocaleString()}
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Region:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {data?.region}
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Sub Region:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {data?.subregion}
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Capital:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {data?.capital}
                    </span>
                  </p>
                </article>
                <article className="leading-6 md:leading-8">
                  <p className="font-medium md:text-xl">
                    Top Level Domain:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {data?.tld?.toLocaleString()}
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Currencies:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {currencyName} {currencySymbol && currencySymbol}
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Languages:{' '}
                    <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                      {allLanguages}
                    </span>
                  </p>
                </article>
              </div>
            </div>
            {/* Border countries */}
            <div className="dark:text-text-dark/80 flex-wrap gap-4 space-y-2 sm:flex lg:items-center lg:space-y-0">
              <p className="font-medium md:text-xl">Border Countries:</p>
              {data?.borders?.map((b) => (
                <button className="dark:bg-element-dark w-26 cursor-pointer rounded-sm px-2 py-px shadow-md">
                  {b}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CountryDetail;
