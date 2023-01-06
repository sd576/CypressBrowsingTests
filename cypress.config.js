const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://katalon-demo-cura.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
