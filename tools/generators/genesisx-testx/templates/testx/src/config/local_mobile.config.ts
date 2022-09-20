const baseConfig = require('./base.config');
const { getTags } = require('../support/bddTags');

exports.config = {
  ...baseConfig,
  capabilities: [
    {
      maxInstances: 2,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions':
      {
        args: ['--window-size=375,812'],
      }

    },
  ],
};