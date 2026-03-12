export const getTestData = () => {
  const timestamp = Date.now();

  return {
    newUser: {
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-01",
      address: "Test Street 1",
      postcode: "12345",
      city: "Test City",
      state: "Test State",
      country: "Poland",
      phone: "123456789",
      email: `testuser_${timestamp}@example.com`,
    },

    category: "Hand Tools",
    sortOption: "Name (A - Z)",
    productToCart: "Claw Hammer",
    productToFavorites: "Sheet Sander",

    paymentMethod: "Cash on Delivery",
    successMessage: "Payment was successful",
    favoriteToastMessage: "Product added to your favorites list",
  };
};
