/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POKEMON_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
