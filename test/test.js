const { By, Builder, until } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");
const login = require("./utils/login.js");
const register = require("./utils/register.js");

const url = "http://localhost:3000";
const email = "shreyashb.dhamane0@gmail.com";
const password = "Shrey@sh22mar";

const timeout = 10000;

suite(function (env) {
  describe("Login and visit script", function () {
    let driver;

    beforeEach(async function () {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });

    afterEach(() => driver.quit());

    // it('Register and Unblur using views script', async function() {
    //     await driver.get(url);

    //     let title = await driver.getTitle();
    //     assert.equal("Studypaq", title);

    //     await driver.manage().setTimeouts({ implicit: 500 });

    //     await register(driver,tempEmailWithViews,passwordWithViews);

    //     driver.manage().window().maximize();

    //     let prevViewCount = await driver.findElement(By.id("viewCountNavbar"));
    //     prevViewCount = parseInt(await prevViewCount.getText());

    //     await driver.get(docUrl);

    //     await driver.manage().setTimeouts({ implicit: 500 });

    //     let unblurButton = await driver.findElement(By.name("docUnblurButton"));

    //     await unblurButton.click();

    //      await driver.manage().setTimeouts({ implicit: 4000 });

    //     let zoomControls = await driver.wait(until.elementLocated(By.className("PdfRenderer_zoomControls__T8SXE")), 20000);

    //     let viewCount = await driver.findElement(By.id("viewCountNavbar"));

    //     viewCount = parseInt(await viewCount.getText());

    //     assert.equal(prevViewCount-1,viewCount);
    // })

    it("Login", async function () {
      await driver.get(url);

      await login(driver, email, password);

      //   let authorLink = await driver.wait(
      //     until.elementLocated(By.partialLinkText("Authors")),
      //     5000
      //   );
      //   authorLink.click();

      //   const author = await driver.wait(
      //     until.elementLocated(By.name("author_card")),
      //     20000
      //   );
      //   author.click();

      //   const pages = await driver.wait(
      //     until.elementsLocated(By.name("book_page")),
      //     20000
      //   );
      //   for (let i = 0; i < pages.length; i = i + 2) {
      //     await driver.sleep(1000).then(() => pages[i].click());
      //   }

      //   for (let i = pages.length - 1; i >= 0; i = i - 2) {
      //     await driver.sleep(1000).then(() => pages[i].click());
      //   }
    });

    // it('Login and create a post', async function () {

    //     await driver.get(url);

    //     await login(driver, email, password);

    // })

    // it('Login and upload script', async function () {

    //     await driver.get(url);

    //     let title = await driver.getTitle();
    //     assert.equal("Studypaq", title);

    //     await driver.manage().setTimeouts({ implicit: 500 });

    //     await login(driver, email, password);

    //     driver.manage().window().maximize();

    //     await driver.get(`${url}/create`);

    //     let fileInput = await driver.findElement(By.id("uploadFile"));

    //     driver.executeScript("arguments[0].style.display = 'block';", fileInput);

    //     await fileInput.sendKeys(__dirname + '\\sample.pdf');

    //     let schoolInput = await driver.wait(until.elementLocated(By.xpath("//input[@type='search']")), 10000);
    //     await schoolInput.sendKeys('Harvard University');

    //     let inputOption = await driver.wait(until.elementLocated(By.xpath("//li[@class='SchoolInput_searchListItem__etB8W']")), 10000);
    //     await inputOption.click();

    //     let continueButton = await driver.findElement(By.xpath("//button[@name='schoolPopupContinueButton']"));
    //     await continueButton.click();

    //     let coursePopup = await driver.wait(until.elementLocated(By.id("coursePopup")), 2000);

    //     let deptInput = await driver.findElement(By.name("department"));
    //     let courseNoInput = await driver.findElement(By.name("courseno"));
    //     let courseTitleInput = await driver.findElement(By.name("coursetitle"));

    //     await deptInput.sendKeys('CS');
    //     await courseNoInput.sendKeys('50');
    //     await courseTitleInput.sendKeys('Introduction to Computer Science');

    //     let submitCourse = await driver.findElement(By.xpath("//button[@name='submitCoursePopupButton']"));
    //     await submitCourse.click();

    //     let submitFilesButton = await driver.wait(until.elementLocated(By.name("submitFiles")), 10000);
    //     await submitFilesButton.click();

    //     let successPopupTitle = await driver.wait(until.elementLocated(By.id("swal2-title")), 60000);

    //     assert.equal("Thank you for uploading your documents", await successPopupTitle.getText());

    // })
  });
});
