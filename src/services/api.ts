import axios from "axios";

export const unycosInstanceApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_UNYCOS_API_URL,
});

export const restCountriesinstanceApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_REST_COUNTRIES_API_URL,
});

export const whatsappInstanceApi = import.meta.env.VITE_BASE_WHATSAPP_API_URL;
