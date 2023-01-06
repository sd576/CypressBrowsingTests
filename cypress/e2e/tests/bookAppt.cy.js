import appointmentPage from '../pages/appointmentPage';

describe('book appointment', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: '/profile.php#login',
      form: true,
      body: {
        user: {
          username: 'John Doe',
          password: 'ThisIsNotAPassword',
        },
      },
    });
    // to prove we have a session
    cy.getCookie('cypress-session-cookie').should('exist');

    cy.visit('/');
  });

  it('Appointment 1', () => {
    // const appt = new appointmentPage();
  });
});
