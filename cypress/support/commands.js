//import cypress = require("cypress");

Cypress.Commands.add('login', () => {

  cy.visit(Cypress.env('LOGIN_PAGE_URL'))
    .url()
    .should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  const username = Cypress.env('email');
  const pw = Cypress.env('password');
  cy.get('#input-email').type(username);
  cy.get("#input-password").type(pw);
  cy.get("input[value='Login']").click().should('be.visible');

});


Cypress.Commands.add('logout', () => {

  cy.contains('My Account').click().should('be.visible');

  cy.contains('Logout').click();
  cy.contains('Continue')
    .click()
    .url().should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=common/home');

});