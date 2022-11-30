const assert = require("assert");
const { By, until } = require("selenium-webdriver");

const login = async (driver, email, password) => {
  let loginButton = await driver.findElement(By.partialLinkText("Login"));
  await loginButton.click();

  let emailTextBox = await driver.findElement(By.name("email"));
  let passwordTextBox = await driver.findElement(By.name("password"));
  let submitButton = await driver.findElement(By.name("login_submit"));

  await emailTextBox.sendKeys(email);
  await passwordTextBox.sendKeys(password);

  await submitButton.click();
};

module.exports = login;
