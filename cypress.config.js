/* eslint-disable no-undef */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', 
    setupNodeEvents(_on, _config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
  },
});
