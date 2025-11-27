import type { TCountry } from '@/pages/Home';

interface CountryInfoProps {
  data: TCountry;
}

function CountryInfo({ data }: CountryInfoProps) {
  return (
    <div className="bg-text-dark dark:bg-element-dark dark:text-bg-light/90 dark:shadow-bg-dark h-80 w-full cursor-pointer rounded-md shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md dark:shadow-xl">
      <article className="h-40">
        <img
          src={data.flag}
          alt="country flag"
          className="h-full w-full rounded-t-md object-cover"
        />
      </article>
      <article className="p-5">
        <p className="mb-3 font-bold">{data.name}</p>
        <div className="flex flex-col space-y-px leading-6">
          <p className="text-[13px] font-medium">
            Population:{' '}
            <span className="dark:text-bg-light/75 font-light">
              {data.population.toLocaleString()}
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
