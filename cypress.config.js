const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=common',
    
  },

  "env": {
    REGISTER_PAGE_URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    LOGIN_PAGE_URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    MY_ACCOUNT_PAGE_URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/account',
    "email": "vagi.buddy@gmail.com",
    "password": "ibGRzf7BQnpfFHJ"
  }
})
