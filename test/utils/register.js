const assert = require("assert");
const { By, until } = require("selenium-webdriver");

const register = async (driver, firstname, lastname, email, password) => {
  let registerButton = await driver.findElement(By.partialLinkText("Signup"));
  await registerButton.click();

  let emailTextBox = await driver.findElement(By.name("email"));
  let passwordTextBox = await driver.findElement(By.name("password"));
  let continueButton = await driver.findElement(By.name("continue"));

  await emailTextBox.sendKeys(email);
  await passwordTextBox.sendKeys(password);
  await continueButton.click();

  await driver.wait(until.elementLocated(By.name("firstname")), 5000);

  let firstnameTextBox = await driver.findElement(By.name("firstname"));
  let lastnameTextBox = await driver.findElement(By.name("lastname"));
  let submitButton = await driver.findElement(By.name("finish"));

  await firstnameTextBox.sendKeys(firstname);
  await lastnameTextBox.sendKeys(lastname);
  await submitButton.click();

  //   let secondaryHeader = await driver.wait(
  //     until.elementLocated(By.name("secondaryHeader")),
  //     20000
  //   );
};

module.exports = register;
