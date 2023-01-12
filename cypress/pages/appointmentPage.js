class appointmentPage {
  navigate() {
    cy.visit('/#appointment');
  }

  // cy.get('select').select(1)

  chooseFacility1() {
    // cy.get('[id=combo_facility]').select('Hongkong CURA Healthcare Center');
    cy.get('select')
      .select(1)
      .invoke('val')
      .should('eq', 'Hongkong CURA Healthcare Center');
  }

  // makeAppointment() {
  //   cy.get('#btn-make-appointment').click();
  // }

  //Healthcare Program
  //
  //Visit Date (Required)
  //
  //Comment
  //
  //#btn-book-appointment
}
export default appointmentPage;
