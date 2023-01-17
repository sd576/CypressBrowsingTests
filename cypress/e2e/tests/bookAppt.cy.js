import { addBusinessDays } from './dateHelper';

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

    // select the date for the appointment
    cy.get('div:nth-child(4)').clear().type('05/11/2023');

    cy.get('#btn-book-appointment').click();

    // Assertions
    cy.get('h2').should('have.text', 'Appointment Confirmation');
    cy.get('#facility').should('have.text', 'Tokyo CURA Healthcare Center');
    cy.get('#program').should('have.text', 'Medicaid');
    cy.get('#visit_date').should('have.text', '05/11/2023');
  });
});

