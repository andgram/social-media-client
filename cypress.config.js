const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', // Adjust to your app's URL
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",  // Updated pattern for Cypress 10.x or later
  },
});
