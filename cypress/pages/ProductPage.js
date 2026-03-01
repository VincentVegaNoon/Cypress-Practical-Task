class ProductPage {
  addToCart() {
    cy.get('[data-test="add-to-cart"]').click();
  }
  addToFavorites() {
    cy.get('[data-test="add-to-favorites"]').click();
  }

  verifyToastMessage(expectedMessage) {
    cy.contains(expectedMessage).should("be.visible");
  }
}
export const productPage = new ProductPage();
