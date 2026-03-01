class ProfilePage {
  openProfileTab() {
    cy.get('[data-test="nav-profile"]').click();
  }

  verifyEmail(expectedEmail) {
    cy.get("#email").should("have.value", expectedEmail);
  }
}

export const profilePage = new ProfilePage();
