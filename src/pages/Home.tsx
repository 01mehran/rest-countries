// Components;
import Header from '@/components/Header';

// Icons;
import { MdSearch } from 'react-icons/md';

function Home() {
  return (
    <div className="bg-bg-light h-dvh">
      <Header />
      <main className="px-4 lg:px-24">
        {/* Search input */}
        <section className="mt-8 items-center space-y-8 sm:flex sm:justify-between sm:space-y-0">
          <article className="bg-text-dark relative mx-auto h-12 w-full rounded-md shadow-sm sm:mx-0 sm:max-w-[400px]">
            <input
              type="text"
              placeholder="Search for a country..."
              className="placeholder:text-input-light h-full w-full rounded-md border-0 pr-4 pl-18 tracking-tight outline-0 placeholder:text-[14px] placeholder:font-medium"
            />
            <MdSearch className="text-input-light absolute top-1/2 translate-7 -translate-y-1/2 transform text-2xl" />
          </article>
          {/* Filter by region */}
          <article className="bg-text-dark w-42 rounded-md px-1.5 shadow-sm">
            <select className="text-element-dark flex h-12 w-full items-center rounded-md border-0 pr-4 text-2xl text-[14px] font-semibold outline-0">
              <option selected disabled hidden>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Home;
