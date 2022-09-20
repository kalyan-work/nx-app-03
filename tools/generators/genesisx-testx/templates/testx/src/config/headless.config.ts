// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./base.config');
const { getTags } = require('../support/bddTags');

exports.config = {
  ...baseConfig,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--ignore-certificate-errors',
          '--allow-running-insecure-content',
          '--no-sandbox',
          '--disable-infobars',
          '--headless',
          '--disable-gpu',
          '--window-size=1024,768',
        ],
      },
    },
  ],
};
