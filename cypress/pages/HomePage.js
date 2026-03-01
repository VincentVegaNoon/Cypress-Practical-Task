class HomePage {
  open() {
    cy.visit("/");
  }

  filterByCategory(categoryName) {
    cy.contains("label", categoryName).click();
  }

  sortBy(option) {
    cy.get('[data-test="sort"]').select(option);
    cy.wait(1000); //zapytac jak to zrobic bez wait
  }

  verifyProductsAreSortedAlphabetically() {
    cy.get('[data-test="product-name"]')
      .should("have.length.above", 0)
      .then(($elements) => {
        const originalNames = $elements.toArray().map((el) => el.innerText.trim());

        const sortedInJs = [...originalNames].sort();

        expect(originalNames).to.deep.equal(sortedInJs, "Products are not sorted alphabetically!");
      });
  }
  searchForProduct(productName) {
    cy.get('[data-test="search-query"]').type(productName);
    cy.get('[data-test="search-submit"]').click();
  }
  openProductDetails(productName) {
    cy.contains("h5", productName).click();
  }
}

export const homePage = new HomePage();
