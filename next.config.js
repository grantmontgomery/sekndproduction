require(`dotenv`).config();

module.exports = {
  env: {
    YELP_API_KEY: process.env.YELP_API_KEY,
    TICKETMASTER_API_KEY: process.env.TICKETMASTER_API_KEY,
  },
  serverRuntimeConfig: {
    YELP_API_KEY: process.env.YELP_API_KEY,
    TICKETMASTER_API_KEY: process.env.TICKETMASTER_API_KEY,
  },
  target: "serverless",
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
