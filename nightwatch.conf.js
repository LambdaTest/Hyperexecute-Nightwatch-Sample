// Nightwatch 3.x Configuration for LambdaTest HyperExecute
// https://nightwatchjs.org/gettingstarted/configuration/

module.exports = {
  // Test source folders
  src_folders: ['tests'],

  // Output folder for reports
  output_folder: 'reports',

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://lambdatest.github.io/sample-todo-app',
      request_timeout_options: {
        timeout: 1000000
      },
      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },

    //////////////////////////////////////////////////////////////////////////////
    // LambdaTest Remote Configuration                                          //
    // Set credentials via environment variables:                               //
    // - LT_USERNAME                                                            //
    // - LT_ACCESS_KEY                                                          //
    //////////////////////////////////////////////////////////////////////////////
    remote: {
      selenium: {
        start_process: false,
        server_path: '',
        host: process.env.SELENIUM_HOST || 'hub.lambdatest.com',
        port: process.env.SELENIUM_PORT || 443
      },

      username: process.env.LT_USERNAME || '',
      access_key: process.env.LT_ACCESS_KEY || '',

      webdriver: {
        timeout_options: {
          timeout: 100000,
          retry_attempts: 3
        },
        ssl: true,
        keep_alive: true,
        start_process: false
      },

      desiredCapabilities: {
        'LT:Options': {
          build: 'Nightwatch-Selenium-Sample-Hypertest',
          visual: true,
          project: 'HyperExecute-Nightwatch',
          console: true,
          network: true,
          enableCustomTranslation: true,
          platformName: process.env.HYPEREXECUTE_PLATFORM || '',
          selenium_version: '4.0.0',
          w3c: true,
          plugin: 'node_js-nightwatch_js'
        }
      }
    },

    // Chrome environment - use with: nightwatch -e remote.chrome
    'remote.chrome': {
      extends: 'remote',
      desiredCapabilities: {
        browserName: 'chrome',
        browserVersion: 'latest',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },

    // Firefox environment - use with: nightwatch -e remote.firefox
    'remote.firefox': {
      extends: 'remote',
      desiredCapabilities: {
        browserName: 'firefox',
        browserVersion: 'latest',
        'moz:firefoxOptions': {
          args: []
        }
      }
    },

    // Edge environment - use with: nightwatch -e remote.edge
    'remote.edge': {
      extends: 'remote',
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        browserVersion: 'latest'
      }
    },

    // Safari environment - use with: nightwatch -e remote.safari
    'remote.safari': {
      extends: 'remote',
      desiredCapabilities: {
        browserName: 'safari',
        browserVersion: 'latest'
      }
    },

    //////////////////////////////////////////////////////////////////////////////
    // Legacy environment aliases (for backward compatibility)                  //
    // These allow using -e chrome instead of -e remote.chrome                  //
    //////////////////////////////////////////////////////////////////////////////
    chrome: {
      extends: 'remote.chrome'
    },
    firefox: {
      extends: 'remote.firefox'
    },
    edge: {
      extends: 'remote.edge'
    },
    safari: {
      extends: 'remote.safari'
    }
  }
};
