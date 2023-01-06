class loginPage {
  navigate() {
    cy.visit('/');
  }
  // https://katalon-demo-cura.herokuapp.com/profile.php#login

  makeAppointment() {
    cy.get('#btn-make-appointment').click();
  }

  enterUserName(username) {
    cy.get('[id=txt-username]').clear().type(username);
    return this;
  }

  enterPassword(password) {
    cy.get('[id=txt-password]').clear().type(password);
    return this;
  }

  submit() {
    cy.get('[id=btn-login]').click();
  }
}
export default loginPage;
