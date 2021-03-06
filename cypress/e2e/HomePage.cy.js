import example from '../fixtures/example.json'
import { digits, pwd } from '../support/countries.js'
import mail from '../support/randomemail.js'

describe('Testing Home page', () => {

  it("Visit Home Page", () => {
    cy.visit('home')
      .url()
      .should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=common/home')
      .its('navigator.language')
      .should('not.exist');


    cy.contains('Desktops')
      .should('include.text', 'Desktops')
      .should('have.length', 1)
      .should('be.visible',)
      .should('have.attr', 'href', "https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20")
      .should('have.attr', 'class', 'dropdown-toggle')
      .should('have.attr', 'data-toggle', 'dropdown');
  });

  it('Search Bar', () => {

    cy.get("input[placeholder='Search']").type('mac{enter}');


  });

  it("Visiting Register Page", () => {

    cy.visit(Cypress.env('REGISTER_PAGE_URL'))
      .url()
      .should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    cy.get('#input-firstname').type(example.first_name);
    cy.get('#input-lastname').type(example.last_name);
    cy.get('#input-email').type(mail);
    cy.get('#input-telephone').type(digits);
    cy.get('#input-password').type(pwd);
    cy.get('#input-confirm').type(pwd);
    cy.get("input[value='1'][name='newsletter']").first().check();
    cy.get("input[value='1'][name='agree']").check();
    cy.get("input[value='Continue']").click();
    cy.contains('Continue').click();


  })
  it('login', () => {

    cy.visit(Cypress.env('LOGIN_PAGE_URL'))
      .url()
      .should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const username = Cypress.env('email');
    const pw = Cypress.env('password');
    cy.get('#input-email').type(username);
    cy.get("#input-password").type(pw);
    cy.get("input[value='Login']").click().should('be.visible');
  })

  it('Logging out', () => {
    //let url = Cypress.config().baseurl;

    cy.contains('My Account').click().should('be.visible');

    cy.contains('Logout').click();
    cy.contains('Continue')
      .click()
      .url().should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  })

});







