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
};
