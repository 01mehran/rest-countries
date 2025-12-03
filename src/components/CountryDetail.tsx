// Hooks;
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// Components;
import Header from './Header';

// Icons;
import { IoIosArrowRoundBack } from 'react-icons/io';

// Services;
import GetcountryDetails from '@/servises/GetcountryDetails';
import Loading from './Loading';
import type { TAllCountries } from '@/servises/GetAllCountries';

interface LocationState {
  allCountries: TAllCountries[];
}

function CountryDetail() {
  // Get cca3(code) from url params;
  const { cca3 } = useParams();

  // Get all countries data from location state;
  const location = useLocation();
  const { allCountries } = location.state as LocationState;

  // Get country details from service;
  const {
    allDetails,
    nativeName,
    currencyName,
    currencySymbol,
    allLanguages,
    isLoading,
    isError,
  } = GetcountryDetails(cca3!);

  // Navigate hook for direct navigation;
  const navigate = useNavigate();

  const allBorders =
    allDetails?.borders && allCountries
      ? allCountries
          .filter((country: { cca3: string }) =>
            allDetails?.borders?.includes(country.cca3),
          )
          .map((country: { name: { common: string } }) => country.name.common)
      : [];

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
        {isError ? (
          <p className="mt-4 font-bold text-red-600 text-shadow-md text-shadow-slate-300 dark:text-shadow-black">
            {isError}
          </p>
        ) : (
          <section className="mt-8 items-center pb-4 lg:gap-22 xl:flex">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {/* Country flag */}
                <div className="small:w-84 lg:min-w-[400px] xl:min-w-1/3">
                  <img
                    src={allDetails?.flags.png}
                    alt={`${allDetails?.name.common} flag`}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                {/* Country details */}
                <div className="mt-6 flex flex-col justify-around space-y-6">
                  <div className="dark:text-text-dark/80 w-full">
                    {/* Details */}
                    <h3 className="text-2xl font-bold">
                      {allDetails?.name.common}
                    </h3>
                    <div className="mt-4 w-full space-y-6 sm:flex md:gap-20">
                      <article className="leading-6 text-nowrap sm:mr-22 md:mr-0 md:leading-8 lg:leading-6">
                        <p className="font-medium md:text-xl">
                          Native Name:{' '}
                          <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                            {nativeName}
                          </span>
                        </p>
                        <p className="font-medium md:text-xl">
                          Population:{' '}
                          <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                            {allDetails?.population.toLocaleString()}
                          </span>
                        </p>
                        <p className="font-medium md:text-xl">
                          Region:{' '}
                          <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                            {allDetails?.region}
                          </span>
                        </p>
                        <p className="font-medium md:text-xl">
                          Sub Region:{' '}
                          <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                            {allDetails?.subregion}
                          </span>
                        </p>
                        <p className="font-medium md:text-xl">
                          Capital:{' '}
                          <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                            {allDetails?.capital}
                          </span>
                        </p>
                      </article>
                      <article className="leading-6 text-nowrap md:leading-8">
                        <p className="font-medium md:text-xl">
                          Top Level Domain:{' '}
                          <span className="dark:text-bg-light/75 text-[14px] font-light md:text-lg">
                            {allDetails?.tld?.toLocaleString()}
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
                  <div className="dark:text-text-dark/80 flex flex-wrap items-center gap-2">
                    <p className="font-medium md:text-xl">Border Countries:</p>
                    <article className="flex flex-wrap items-center gap-2">
                      {allBorders && allBorders.length > 0 ? (
                        allBorders.map((name: string) => (
                          <button
                            key={name}
                            className="dark:bg-element-dark w-32 cursor-pointer rounded-sm px-2 py-1.5 text-sm shadow-lg"
                          >
                            {name}
                          </button>
                        ))
                      ) : (
                        <span className="text-input-light text- font-bold italic">
                          No borders
                        </span>
                      )}
                    </article>
                  </div>
                </div>
              </>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default CountryDetail;
