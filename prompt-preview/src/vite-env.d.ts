/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AZURE_ENDPOINT: string;
  readonly VITE_AZURE_API_KEY: string;
  readonly VITE_AZURE_MODEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
