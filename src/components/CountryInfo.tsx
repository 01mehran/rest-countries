function CountryInfo() {
  return (
    <div className="bg-text-dark mx-auto h-full cursor-pointer rounded-md shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md sm:w-62 md:w-[22%]">
      <article>
        <img
          src="https://flagcdn.com/de.svg"
          alt="country flag"
          className="rounded-t-md"
        />
      </article>
      <article className="p-4">
        <p className="mb-3 font-bold">Germany</p>
        <div className="flex flex-col space-y-px">
          <p className="text-[13px] font-medium">
            Population: <span className="font-light">81.770.770</span>
          </p>
          <p className="text-[13px] font-medium">
            Region: <span className="font-light">Europe</span>
          </p>
          <p className="text-[13px] font-medium">
            Capital: <span className="font-light">Berlin</span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default CountryInfo;
