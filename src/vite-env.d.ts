/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_UNYCOS_API_URL: string;
  readonly VITE_BASE_REST_COUNTRIES_API_URL: string;
  readonly VITE_BASE_WHATSAPP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
