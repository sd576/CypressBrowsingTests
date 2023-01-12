import loginPage from '../../pages/loginPage';

describe('login actions', () => {
  beforeEach(() => {
    Cypress.session.clearAllSavedSessions();
  });

  it('Valid Logon', () => {
    // const login = new loginPage();
    login.navigate();
    login.makeAppointment();
    login.enterUserName('John Doe');
    login.enterPassword('ThisIsNotAPassword');
    login.submit();
    cy.get('h2').should('have.text', 'Make Appointment');
  });

  it('Invalid Logon', () => {
    // const login = new loginPage();
    login.navigate();
    login.makeAppointment();
    login.enterUserName('Jeff Blah');
    login.enterPassword('Password');
    login.submit();
    cy.get('.text-danger').should(
      'have.text',
      'Login failed! Please ensure the username and password are valid.'
    );
  });

  it('login without UI', () => {
    cy.request({
      url: '/authenticate.php',
      method: 'POST',
      followRedirect: true,
      form: true,
      body: {
        user: {
          username: 'John Doe',
          password: 'ThisIsNotAPassword',
        },
      },
    }).then(resp => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment');
    });
  });

  it.only('login session', () => {
    cy.login('John Doe', 'ThisIsNotAPassword');

    cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment');
  });
});
