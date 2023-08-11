class addToCart {
  constructor() {
    this.$item1 = () => $("#add-to-cart-sauce-labs-backpack");
  };

  async select() {
    await this.$item1().click();
  };
};
export default new addToCart();
