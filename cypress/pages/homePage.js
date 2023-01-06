class homePage {
  navigate() {
    cy.visit('/');
  }

  makeAppointment() {
    cy.get('#btn-make-appointment').click();
  }
}
export default homePage;
