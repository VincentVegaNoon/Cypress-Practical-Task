class Navbar {
  goToLogin() {
    cy.get('[data-test="nav-sign-in"]').click();
  }
  goToCart() {
    cy.get('[data-test="cart-quantity"]').click();
  }
  goToMyAccount() {
    cy.get('[data-test="nav-menu"]').click();
    cy.get('[data-test="nav-my-account"]').click();
  }
  goToMyFavorites() {
    cy.get('[data-test="nav-menu"]').click();
    cy.get('[data-test="nav-my-favorites"]').click();
  }
}
export const navbar = new Navbar();
