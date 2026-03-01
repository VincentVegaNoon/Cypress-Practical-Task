class LoginPage {
  open() {
    cy.visit("/auth/login");
  }
  goToRegistration() {
    cy.get('[data-test="register-link"]').click();
  }
  login(email, password) {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('[data-test="login-submit"]').click();

    cy.get('[data-test="nav-menu"]').should("be.visible");
  }
}
export const loginPage = new LoginPage();
