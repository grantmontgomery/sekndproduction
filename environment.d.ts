declare global {
  namespace NodeJS {
    interface ProcessEnv {
      YEP_API_KEY: string;
      TICKETMASTER_API_KEY: string;
      AWS_ACCESS_KEY_ID: string;
      GA_TRACKING_ID: string;
      DB_ENDPOINT: string;
      DB_DATABASE: string;
      DB_TABLE: string;
      DB_USER: string;
      DB_PASSWORD: string;
      REFRESH_SECRET: string;
      ACCESS_SECRET: string;
    }
  }
}

export {};
