require(`dotenv`).config();

module.exports = {
  env: {
    YELP_API_KEY: process.env.YELP_API_KEY,
    TICKETMASTER_API_KEY: process.env.TICKETMASTER_API_KEY,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    DB_ENDPOINT: process.env.DB_ENDPOINT,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_TABLE: process.env.DB_TABLE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    ACCESS_SECRET: process.env.ACCESS_SECRET,
    REFRESH_SECRET: process.env.REFRESH_SECRET,
  },
  serverRuntimeConfig: {
    YELP_API_KEY: process.env.YELP_API_KEY,
    TICKETMASTER_API_KEY: process.env.TICKETMASTER_API_KEY,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  target: "serverless",
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
      net: "empty",
      tls: "empty",
    };
    return config;
  },
};
