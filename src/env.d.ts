interface ImportMetaEnv {
  readonly PUBLIC_CMS_API_TOKEN: string;
  readonly PUBLIC_CMS_API_URL: string;
  readonly PUBLIC_CMS_IMG_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}