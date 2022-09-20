const pagesMap = {
  'AOV Page': 'journey-view-account-overview',
  'Personal Details Page': 'journey-view-personal-details/personal-details/details',
  'Transactions Page': ''
};

const getPageRoute = (pageDescription): WebdriverIO.Element => {
  return pagesMap[pageDescription];
};

export {getPageRoute};
