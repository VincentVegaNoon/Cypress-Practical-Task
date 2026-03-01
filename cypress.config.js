const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  env: {
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD,
  },
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
