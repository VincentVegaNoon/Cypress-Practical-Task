class CheckoutPage {
  completeCheckout(paymentMethod = "Cash on Delivery") {
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="proceed-3"]').click();

    cy.get('[data-test="payment-method"]').select(paymentMethod);

    cy.get('[data-test="finish"]').click();
  }

  verifySuccessMessage(expectedText) {
    cy.get('[data-test="payment-success-message"]').should("contain.text", expectedText);
  }
}

export const checkoutPage = new CheckoutPage();
