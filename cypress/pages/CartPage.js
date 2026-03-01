class CartPage {
  proceedToCheckout() {
    cy.get('[data-test="proceed-1"]').click();
  }
}

export const cartPage = new CartPage();
