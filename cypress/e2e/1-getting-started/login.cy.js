// cypress/e2e/login.cy.js
import LoginPage from '../../support/pageObjects/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('OrangeHRM Login Test with POM', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials', () => {
    // ACTION
    loginPage.login(loginData.valid.username, loginData.valid.password);

    // ASSERTION
    loginPage.verifySuccessfulLogin();
  });

  it('should show error for invalid credentials', () => {
    // ACTION
    loginPage.login(loginData.invalid.username, loginData.invalid.password);

    // ASSERTION
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});
