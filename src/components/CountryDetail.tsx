// Components;
import Header from './Header';

// Icons;
import { IoIosArrowRoundBack } from 'react-icons/io';

function CountryDetail() {
  return (
    <div className="bg-bg-light h-dvh">
      <Header />
      <main className="px-4 pt-8 lg:px-24">
        <button className="text-text-light/80 flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-px font-semibold shadow-[0px_0px_5px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-x-px">
          <IoIosArrowRoundBack className="text-3xl" />
          Back
        </button>

        <section className="mt-8 pb-4 lg:gap-22 xl:flex">
          {/* Country flag */}
          <div className="md:w-[70%] lg:w-[40%]">
            <img
              src="https://flagcdn.com/de.svg"
              alt=""
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          {/* Country details */}
          <div className="mt-6 flex flex-col justify-around space-y-6">
            <div className="w-full">
              {/* Details */}
              <h3 className="text-2xl font-bold">Germany</h3>
              <div className="mt-4 w-full space-y-6 md:flex md:gap-22">
                <article className="leading-6 md:leading-8 lg:leading-6">
                  <p className="font-medium md:text-xl">
                    Native Name:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      Belgium
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Population:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      11.319.915
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Region:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      Europe
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Sub Region:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      Western Europe
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Capital:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      Brussels
                    </span>
                  </p>
                </article>
                <article className="leading-6 md:leading-8">
                  <p className="font-medium md:text-xl">
                    Top Level Domain:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      .be
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Currencies:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      Euro
                    </span>
                  </p>
                  <p className="font-medium md:text-xl">
                    Languages:{' '}
                    <span className="text-[14px] font-light md:text-lg">
                      Dutch, French, German
                    </span>
                  </p>
                </article>
              </div>
            </div>
            {/* Border countries */}
            <div className="gap-4 space-y-2 sm:flex lg:items-center lg:space-y-0">
              <p className="font-medium md:text-xl">Border Countries:</p>
              <button className="w-26 cursor-pointer rounded-sm px-2 py-px shadow-md">
                France
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CountryDetail;
