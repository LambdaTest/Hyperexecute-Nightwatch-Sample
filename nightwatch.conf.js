module.exports = (function (settings) {


  var HtmlReporter = require('nightwatch-html-reporter');
  var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports'
  });



  console.log(settings["test_settings"]["default"]["username"]);
  console.log(settings["test_settings"]["default"]["username"]);


  if (process.env.LT_USERNAME) {
    settings["test_settings"]["default"]["username"] = process.env.LT_USERNAME;
  }

  if (process.env.LT_ACCESS_KEY) {
    settings["test_settings"]["default"]["access_key"] = process.env.LT_ACCESS_KEY;
  }
  if (process.env.HYPEREXECUTE_PLATFORM) {
    settings["test_settings"]["default"]["platformName"] = process.env.HYPEREXECUTE_PLATFORM;
  }
  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  console.log(settings);
  return settings;
})(require('./nightwatch.json'));
