const Common = require ("./common.js");
const listedPrices = [];
let array = [];
class cartPage extends Common  {
  constructor() {
    super();
    this.$item1 = () => $("#add-to-cart-sauce-labs-backpack");
    this.$sortItemMenu = () => $('.product_sort_container');
    this.$sortAsPrice = () => $('.product_sort_container').shadow$('//option[@value="lohi"]');
    this.$$priceElements = () => $$('.inventory_item_price');

  };

  async sortPrice() {
    await this.$sortItemMenu().click();
    await this.$sortItemMenu().selectByAttribute('value','lohi');
    await browser.pause (3000);
    for (const $element of await this.$$priceElements()) {
        let b = await $element.getText();
        let price = b.replace(/\D/g, "");
        array.push(price);
        console.log(array)
      }
      return this.isAscending(array);  
    };
    };


module.exports = {
  addToCart: new cartPage(),
};

// const { expect } = require('chai');
// const { remote } = require('webdriverio');

// (async () => {
//   const browser = await remote({
//     // WebDriver configuration options
//   });

//   // Step 1: Save Listed Prices to an Array
//   await browser.url('https://example.com'); // Replace with the actual URL
//   const priceElements = await browser.$$('.price'); // Replace with the actual selector
//   const listedPrices = [];
  
//   for (const element of priceElements) {
//     const priceText = await element.getText();
//     listedPrices.push(priceText);
//   }

//   // Step 2: Remove Special Characters
//   const cleanedPrices = listedPrices.map(price => price.replace(/[^0-9.]/g, ''));

//   // Step 3: Verify Sorted in Descending Order
//   const sortedPrices = [...cleanedPrices].sort((a, b) => b - a);
//   expect(cleanedPrices).to.deep.equal(sortedPrices, 'Prices are not sorted in descending order');

//   await browser.deleteSession();
// })();

