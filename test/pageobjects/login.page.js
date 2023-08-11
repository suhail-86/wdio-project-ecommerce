class loginPage {
  constructor() {
    // super();
    this.$title = () => $(".login_logo");
    this.$clickUsername = () => $("#user-name");
    this.$clickPassword = () => $("#password");
    this.$clickLogin = () => $("#login-button");
    this.$checkTitle = () => $(".app_logo");
  };

  /**
   * 
   * @param {string} url 
   */
  async openUrl(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  };

  /**
   * 
   * @param {string} string1 
   * @param {string} string2 
   */
  async login(string1, string2) {
    await this.$clickUsername().click();
    await this.$clickUsername().setValue(string1);
    await this.$clickPassword().click();
    await this.$clickPassword().setValue(string2);
    await this.$clickLogin().click();
  };
};
export default new loginPage();
