// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./base.config');

exports.config = {
  ...baseConfig,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'firefox',
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 3,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 3,
      browserName: 'MicrosoftEdge',
    },
  ],
};

// Sauce Labs sample configuration page for reference:  https://saucelabs.com/platform/platform-configurator#/
