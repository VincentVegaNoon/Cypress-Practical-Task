import { homePage } from "../pages/HomePage";
import { cartPage } from "../pages/CartPage";
import { checkoutPage } from "../pages/CheckoutPage";
import { navbar } from "../pages/Navbar";
import { loginPage } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";
import { productPage } from "../pages/ProductPage";
import { profilePage } from "../pages/ProfilePage";
import { favoritesPage } from "../pages/FavoritesPage";
import { getTestData } from "../data/testData";

describe("ToolShop User Journey - Cypress", () => {
  const registerAndLogin = (userData) => {
    loginPage.open();
    loginPage.goToRegistration();

    cy.env(["USER_PASSWORD"]).then((envVars) => {
      userData.password = envVars.USER_PASSWORD;

      registerPage.registerUser(userData);
      loginPage.login(userData.email, userData.password);

      homePage.open();
    });
  };

  it("Filter and sort products", () => {
    const data = getTestData();
    homePage.open();
    homePage.filterByCategory(data.category);
    homePage.sortBy(data.sortOption);
    homePage.verifyProductsAreSortedAlphabetically();
  });
  it("Successful checkout", () => {
    const data = getTestData();
    registerAndLogin(data.newUser);

    homePage.searchForProduct(data.productToCart);
    cy.contains("h5", data.productToCart).click();

    productPage.addToCart();

    navbar.goToCart();
    cartPage.proceedToCheckout();
    checkoutPage.completeCheckout(data.paymentMethod);

    checkoutPage.verifySuccessMessage(data.successMessage);
  });
  it("Check User Profile", () => {
    const data = getTestData();
    registerAndLogin(data.newUser);

    navbar.goToMyAccount();
    profilePage.openProfileTab();

    profilePage.verifyEmail(data.newUser.email);
  });
  it("Add an item to the favorites list", () => {
    const data = getTestData();
    registerAndLogin(data.newUser);

    homePage.searchForProduct(data.productToFavorites);
    homePage.openProductDetails(data.productToFavorites);

    productPage.addToFavorites();
    productPage.verifyToastMessage(data.favoriteToastMessage);

    navbar.goToMyFavorites();
    favoritesPage.verifyProductIsInFavorites(data.productToFavorites);
  });
});
