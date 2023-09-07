const { homePage } = require("../pageobjects/login.page.js");
const { addToCart } = require("../pageobjects/add.cart.js");
const testData = require("../test-data/testdata.json");
describe("Login with valid credential ", () => {

  it("Launch the URL", async () => {
    await homePage.openUrl(testData.suasdemo);
    expect(await homePage.$title()).toHaveTitle("Swag Labs");
  });

  it("Enter valid credentials", async () => {
    await homePage.login(testData.username, testData.password);
    expect(await homePage.$checkTitle()).toHaveTitle("Swag Labs");
  });

});

describe("Add product to the cart", () => {

  it("Sort the price of the items", async () => {
    await addToCart.sortPrice();
    expect (await addToCart.sortPrice()).toBe(false);
  });

});
