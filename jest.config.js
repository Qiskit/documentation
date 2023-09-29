module.exports = {
  transform: {
    ".(js|ts)$": ["@swc/jest"],
  },
  testMatch: ["**/*.test.(js|ts)"],
  transformIgnorePatterns: [],
};
