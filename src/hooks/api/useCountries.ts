import useAsync from "../useAsync";
import { getCountries } from "../../services/countries";

interface Country {
  alpha2Code: string;
  translations: {
    es: string;
  };
  numericCode: string;
  callingCodes: string[];
}

export default function useCountries() {
  const { data, error, loading, act } = useAsync<Country[]>(getCountries);

  return {
    countries: data,
    createCountriesError: error,
    createCountriesLoading: loading,
    getCountries: act,
  };
}
