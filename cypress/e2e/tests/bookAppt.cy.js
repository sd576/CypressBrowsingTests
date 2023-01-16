// import loginPage from '../../pages/loginPage';
// import {login} from '../elements/pages/login.js'
import newDate from '../../support/businessDays.js';

describe('book appointment', () => {
  it('Appointment 1', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment');
    cy.get('h2').should('have.text', 'Make Appointment');
    cy.get('select').select(0);
    cy.get('option:nth-child(1)').should(
      'have.text',
      'Tokyo CURA Healthcare Center'
    );
    cy.get('#radio_program_medicaid').click();
    cy.get('label:nth-child(2)').should('contain', 'Medicaid');
    // select date picker
    cy.get('div:nth-child(4)').click();
    cy.log(newDate);
  });
});
