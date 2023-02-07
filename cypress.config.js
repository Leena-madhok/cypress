const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // these are global level changes made in the project for testing purposes.
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,

    //default settings.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
