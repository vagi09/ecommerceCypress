const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
     projectId: "8pc2ov",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=common',

  },

  "env": {
    REGISTER_PAGE_URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    LOGIN_PAGE_URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    MY_ACCOUNT_PAGE_URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/account',
    "email": "vagi.buddy@gmail.com",
    "password": "ibGRzf7BQnpfFHJ"
  },


  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": false,
    "html": true,
    "json": true,
    "charts": true,
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": true
  }






})



