//import { should } from "chai";

import { company, webSite, taxId } from '../support/AffiliateAccount.js';
import bankDetail from '../fixtures/bankDetail.json';
describe("Testing registration of Affiliate account", () => {

  before('logging in', () => {

    cy.login();

  });

  it("fill account", () => {
    // cy.contains('Register for an affiliate account').click()
    //   .url().should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/affiliate/add');

    cy.contains('Edit your affiliate information').click().url().should('eq','https://naveenautomationlabs.com/opencart/index.php?route=account/affiliate/edit');

    cy.get('#input-company').clear().type(company);
    cy.get('#input-website').type(webSite);
    cy.get('#input-tax').type(taxId);

    cy.contains('Bank Transfer').check();

    cy.get('#input-bank-name').type(bankDetail.Bank_Name);
    cy.get('#input-bank-branch-number').type(bankDetail.Branch_no);
    cy.get('#input-bank-swift-code').type(bankDetail.swift_code);
    cy.get('#input-bank-account-name').type(bankDetail.Account_name);
    cy.get('#input-bank-account-number').type(bankDetail.Account_no);
    cy.get("#input[value='1']").check();
    cy.get("input[value='Continue']").click();
})


});