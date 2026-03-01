class FavoritesPage {
  verifyProductIsInFavorites(productName) {
    cy.contains("h5", productName).should("be.visible");
  }
}
export const favoritesPage = new FavoritesPage();
