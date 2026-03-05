export interface TAllCountries {
  id: number;
  flag: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
  cca3: string;
  borders?: string[];
}

// Types that come from the raw api;
export interface TRawApi {
  capital?: string[];
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  population: number;
  region: string;
  borders?: string[];
}

export interface LocationState {
  allCountries: TAllCountries[];
}

export interface TCountryInfoProps {
  countryData: TAllCountries;
  allCountries: TAllCountries[];
}

export interface ISelectOptions {
  isRegionListOpen: boolean;
  selectedRegion: string | null;
  handleSelectedRegion: (region: string) => void;
  handleOpenOptions: () => void;
}

export interface TCountryDetail {
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
