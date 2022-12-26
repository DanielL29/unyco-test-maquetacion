import { restCountriesinstanceApi } from "./api";

export async function getCountries() {
  const response = await restCountriesinstanceApi.get("/all");

  return response.data;
}
