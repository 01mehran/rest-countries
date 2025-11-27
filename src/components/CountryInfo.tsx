import type { TCountry } from '@/pages/Home';

interface CountryInfoProps {
  data: TCountry;
}

function CountryInfo({ data }: CountryInfoProps) {
  return (
    <div className="bg-text-dark dark:bg-element-dark dark:text-bg-light/90 dark:shadow-bg-dark mx-auto h-full cursor-pointer rounded-md shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md sm:w-62 md:w-[22%] dark:shadow-xl">
      <article>
        <img src={data.flag} alt="country flag" className="rounded-t-md" />
      </article>
      <article className="p-4">
        <p className="mb-3 font-bold">{data.name}</p>
        <div className="flex flex-col space-y-px">
          <p className="text-[13px] font-medium">
            Population:{' '}
            <span className="dark:text-bg-light/75 font-light">
              {data.population}
            </span>
          </p>
          <p className="text-[13px] font-medium">
            Region:{' '}
            <span className="dark:text-bg-light/75 font-light">
              {data.region}
            </span>
          </p>
          <p className="text-[13px] font-medium">
            Capital:{' '}
            <span className="dark:text-bg-light/75 font-light">
              {data.capital}
            </span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default CountryInfo;
