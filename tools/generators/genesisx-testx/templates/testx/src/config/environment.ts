/* eslint-disable @typescript-eslint/no-var-requires */

const envMap = {
  local: {
    'Home Page': `TARGET_URL`,
  },
  bld: {
    'Home Page': `TARGET_URL`,
  },
  int: {
    'Home Page': `TARGET_URL`,
  },
};

const geturl = (urls): WebdriverIO.Element => {
  return envMap[process.env.ENV][urls];
};

export { geturl };
