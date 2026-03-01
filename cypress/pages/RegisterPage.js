class RegisterPage {
  registerUser(userData) {
    cy.get("#first_name").type(userData.firstName);
    cy.get("#last_name").type(userData.lastName);
    cy.get("#dob").type(userData.dob);
    cy.get("#street").type(userData.address);
    cy.get("#postal_code").type(userData.postcode);
    cy.get("#city").type(userData.city);
    cy.get("#state").type(userData.state);
    cy.get("#country").select(userData.country);
    cy.get("#phone").type(userData.phone);
    cy.get("#email").type(userData.email);
    cy.get("#password").type(userData.password);

    cy.get('[data-test="register-submit"]').click();
    cy.url().should("contain", "/auth/login");
  }
}
export const registerPage = new RegisterPage();
