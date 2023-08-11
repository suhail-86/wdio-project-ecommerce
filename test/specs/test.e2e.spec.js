import loginPage from "../pageobjects/login.page.js";
import addToCart from "../pageobjects/add.cart.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const testData = require("../test-data/testdata.json");
describe("Login with valid credential ", () => {

  it("Launch the URL", async () => {
    await loginPage.openUrl(testData.suasdemo);
    expect(await loginPage.$title()).toHaveTitle("Swag Labs");
  });

  it("Enter valid credentials", async () => {
    await loginPage.login(testData.username, testData.password);
    expect(await loginPage.$checkTitle()).toHaveTitle("Swag Labs");
  });

});

describe("Add product to the cart", () => {

  it("Sort the items listed", async () => {
    await addToCart.select();
  });

});
