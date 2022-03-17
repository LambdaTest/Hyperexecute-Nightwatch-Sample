var https = require("https");
var lambdaRestClient = require("@lambdatest/node-rest-client");
var lambdaCredentials = {
  username: process.env.LT_USERNAME,
  accessKey: process.env.LT_ACCESS_KEY
};
var lambdaAutomationClient = lambdaRestClient.AutomationClient(
  lambdaCredentials
);
module.exports = {
  "@tags": ["test"],
  Google: function(client) {
    
    client
    
      .url("https://lambdatest.github.io/sample-todo-app/")
      .waitForElementPresent("body", 1000)
      .click("body > div > div > div > ul > li:nth-child(1) > input")
      .click("body > div > div > div > ul > li:nth-child(2) > input")
      .click("body > div > div > div > ul > li:nth-child(3) > input")
      .click("body > div > div > div > ul > li:nth-child(4) > input")
      .click("body > div > div > div > ul > li:nth-child(5) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(6) > input")


      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(7) > input")
      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(8) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(9) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(10) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(11) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(12) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(13) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(14) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(15) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(16) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(17) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(18) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(19) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(20) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(21) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(22) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(23) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(24) > input")

      .setValue("#sampletodotext", "Hypertest LambdaTest")
      .click("#addbutton")
      .click("body > div > div > div > ul > li:nth-child(25) > input")


      .pause(1000)
    
      .end();
  },
  after: function(browser) {
    console.log("Closing down...");
  },

};
