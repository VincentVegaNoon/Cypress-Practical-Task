import { homePage } from "../pages/HomePage";
import { cartPage } from "../pages/CartPage";
import { checkoutPage } from "../pages/CheckoutPage";
import { navbar } from "../pages/Navbar";
import { loginPage } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";
import { productPage } from "../pages/ProductPage";
import { profilePage } from "../pages/ProfilePage";
import { favoritesPage } from "../pages/FavoritesPage";

describe("ToolShop User Journey - Cypress", () => {
  it("Filter and sort products", () => {
    homePage.open();
    homePage.filterByCategory("Hand Tools");
    homePage.sortBy("Name (A - Z)");
    homePage.verifyProductsAreSortedAlphabetically();
  });
  it("Successful checkout", () => {
    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    const password = "Pas22sword1223!";

    loginPage.open();
    loginPage.goToRegistration();
    registerPage.registerUser({
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-01",
      address: "Test Street 1",
      postcode: "12345",
      city: "Test City",
      state: "Test State",
      country: "Poland",
      phone: "123456789",
      email: uniqueEmail,
      password: password,
    });

    loginPage.open();
    loginPage.login(uniqueEmail, password);

    homePage.open();

    homePage.searchForProduct("Claw Hammer");
    cy.contains("h5", "Claw Hammer").click();

    productPage.addToCart();

    navbar.goToCart();
    cartPage.proceedToCheckout();
    checkoutPage.completeCheckout("Cash on Delivery");

    checkoutPage.verifySuccessMessage("Payment was successful");
  });
  it("Check User Profile", () => {
    const uniqueEmail = `john.profile_${Date.now()}@example.com`;
    const password = "Password12dsadsa3!";

    loginPage.open();
    loginPage.goToRegistration();
    registerPage.registerUser({
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-01",
      address: "Test Street 1",
      postcode: "12345",
      city: "Test City",
      state: "Test State",
      country: "Poland",
      phone: "123456789",
      email: uniqueEmail,
      password: password,
    });

    loginPage.login(uniqueEmail, password);

    navbar.goToMyAccount();
    profilePage.openProfileTab();

    profilePage.verifyEmail(uniqueEmail);
  });
  it("Add an item to the favorites list", () => {
    const uniqueEmail = `fav_user_${Date.now()}@example.com`;
    const password = "Passwdsadsaord123!";
    const productName = "Sheet Sander";

    loginPage.open();
    loginPage.goToRegistration();
    registerPage.registerUser({
      firstName: "Jane",
      lastName: "Doe",
      dob: "1990-01-01",
      address: "Test Street",
      postcode: "12345",
      city: "Test City",
      state: "Test State",
      country: "Poland",
      phone: "123456789",
      email: uniqueEmail,
      password: password,
    });
    loginPage.login(uniqueEmail, password);

    homePage.open();
    homePage.searchForProduct(productName);
    homePage.openProductDetails(productName);

    productPage.addToFavorites();

    productPage.verifyToastMessage("Product added to your favorites list");

    navbar.goToMyFavorites();
    favoritesPage.verifyProductIsInFavorites(productName);
  });
});
