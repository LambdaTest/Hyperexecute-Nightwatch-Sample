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

  "Simple Form Demo": function (client) {

    client
      .url("https://testmuai.com/selenium-playground/simple-form-demo")

      .waitForElementVisible("body", 10000)
      .waitForElementVisible("#user-message", 10000)

      .setValue("#user-message", "Hello TestMu AI")

      .click("#showInput")

      .assert.textContains("#message", "Hello TestMu AI")

      .end();
  },

  after: function(browser) {
    console.log("Closing down...");
  }
};