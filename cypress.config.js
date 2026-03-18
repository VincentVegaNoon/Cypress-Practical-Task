const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress Test Results",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  allowCypressEnv: false,
  env: {
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD,
  },
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
