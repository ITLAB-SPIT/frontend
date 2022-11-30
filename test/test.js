const { By, Builder, until } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");

const login = require("./utils/login.js");
const signup = require("./utils/register.js");
const url = "http://localhost:3000";
const email = "shreyashb.dhamane0@gmail.com";
const password = "Shrey@sh22mar";
suite(function (env) {
  describe("Login and visit script", function () {
    let driver;
    beforeEach(async function () {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });
    afterEach(() => driver.quit());
    it("Signup", async function () {
      await driver.get(url + "/signup");
      await signup(
        driver,
        "samwell",
        "hatakehatake",
        "kshieno@gmail.com",
        "S@m22rerere"
      );
    });
    it("Login", async function () {
      await driver.get(url + "/login");
      await login(driver, email, password);
    });
  });
});
