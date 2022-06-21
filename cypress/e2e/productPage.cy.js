import Address from '../fixtures/Address.json'
import randomItem from '../support/countries.js'



describe('Testing Proucts page', () => {




  before('Login to Home page', () => {

    cy.login();
  })
  it.only('Adding new address', () => {

    cy.contains('Address Book').click()
      .url().should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/address');

    cy.contains('New Address').click()
      .should('be.visible');

    cy.get('#input-firstname').type(Address.first_name);
    cy.get('#input-lastname').type(Address.last_namee);
    cy.get('#input-company').type(Address.Company);
    //cy.wait(7000);
    cy.get('#input-address-1').type(Address.Address1)
    cy.get('#input-address-2').type(Address.Address2);
    cy.get('#input-city').type(Address.City);
    cy.get('#input-postcode').type(Address.pin_code);
    cy.get('#input-country').select(randomItem);
    //cy.get('#input-zone').select('Pine Cay');
    cy.get("input[value='1']").check();
    cy.get("input[value='Continue']").click()
      .should('be.visible');

    cy.get('.btn.btn-primary').click()
      .should('be.visible');//should('have.css','background-color').and('be.colored', '#229ac8'); //new address
  })

  it('click on peoducts', () => {

    cy.contains('Desktops').click();
    cy.contains('Show All Desktops').click();




  })




  // after('logging out',()=>{

  //   cy.logout();


  // })



})