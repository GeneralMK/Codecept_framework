Feature("login");
const LoginPage = require("../pages/login");
const { invalidCreds, validCreds } = require("../data/logInfo");
let loginPage = new LoginPage();
Scenario("TC1: Login with valid credentials", ({ I }) => {
  I.amOnPage("");
  I.wait(9);
  loginPage.fillLoginFields(validCreds);
  loginPage.logInToDashBoard();
  I.waitForElement(loginPage.validateUser.class, 30);
  I.see(loginPage.validateUser.text);
});

Scenario("TC2:  Login with invalid credentials", ({ I }) => {
  I.amOnPage("");
  I.wait(5);
  loginPage.fillLoginFields(invalidCreds);
  loginPage.invalidLogIn();
  I.waitForElement(loginPage.errorMessage.class);
  I.wait(6);
  I.see(loginPage.errorMessage.text);
});
