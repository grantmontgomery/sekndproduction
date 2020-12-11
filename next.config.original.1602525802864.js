require(`dotenv`).config();

module.exports = {
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
