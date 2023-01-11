import loginPage from '../../pages/loginPage';

describe('login actions', () => {
  beforeEach(() => {
    Cypress.session.clearAllSavedSessions()

  });

  it('Valid Logon', () => {
    const login = new loginPage();
    login.navigate();
    login.makeAppointment();
    login.enterUserName('John Doe');
    login.enterPassword('ThisIsNotAPassword');
    login.submit();
    cy.get('h2').should('have.text', 'Make Appointment');
  });

  it('Invalid Logon', () => {
    const login = new loginPage();
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

  // it('login without UI', () => {
  //   cy.visit('/');
  //   cy.get('h2').should('have.text', 'Make Appointment');
  // });

  it('login without UI', () => {

    // cy.setCookie('PHPSESSID', 'iioomaaebn6pa1ncim7avm0kg45hrjmr')
    // cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')
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
    })
    .then(resp => {
      // redirect status code is 302
      // expect(resp.status).to.eq(302);
      // expect(resp.redirectedToUrl).to.eq(
      //   'https://katalon-demo-cura.herokuapp.com/profile.php#login'
      // );

      // const cookie = resp[0].headers['set-cookie'][0].match(/(?<=\=)(.*?)(?=\;)/g)

    

      // "PHPSESSID=abcd; path=/"

        // cy.setCookie('PHPSESSID', cookie[0])

      // cy.wait(3000)
      cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')

    });
  });

  it.only('login session', () => {
    
    cy.login('John Doe', 'ThisIsNotAPassword')

    cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')
    
  });
});
