/* eslint-disable @typescript-eslint/no-var-requires */

const { getElement, getLocator } = require('../locators/getElementLocators');

/// ============= Generic Functions ========
const imageComparisonSave = (page: string, pageLength: string): void => {
  browser.pause(5000);

  if (pageLength.includes('screenshots')) {
    browser.saveScreen();
  } else if (pageLength.includes('fullpageScreenshot')) {
    browser.saveFullPageScreen(page, {
      /* some options */
    });
  }
};

const imageComparisonCompare = (page: string, pageLength: string): void => {
  browser.pause(5000);

  if (pageLength.includes('screenshots')) {
    expect(
      browser.checkScreen(page, {
        /* some options */
      })
    ).toEqual(0);
  } else if (pageLength.includes('fullpageScreenshot')) {
    expect(
      browser.checkFullPageScreen(page, {
        /* some options */
      })
    ).toEqual(0);
  }
};

const imageEleSave = (timeele: string): void => {
  const element = getElement(timeele);
  browser.saveElement(element, timeele, {
    /* some options */
  });
};

const imageEleCompare = (timeele: string): void => {
  browser.pause(5000);
  const element = getElement(timeele);
  expect(
    browser.checkElement(element, timeele, {
      /* some options */
    })
  ).toEqual(0);
};

const imageComparisonExcludeSave = (page: string, pageLength: string, ele1: string, ele2: string): void => {
  browser.pause(5000);

  if (pageLength.includes('fullpageScreenshot')) {
    const elm1 = getElement(ele1);
    const elm2 = getElement(ele2);
    browser.saveFullPageScreen(page, {
      hideElements: [elm1, elm2] /* some options */,
    });
  }
};

const imageComparisonExcludeCompare = (page: string, pageLength: string, ele1: string, ele2: string): void => {
  browser.pause(5000);
  if (pageLength.includes('fullpageScreenshot')) {
    const elm1 = getElement(ele1);
    const elm2 = getElement(ele2);
    expect(
      browser.checkFullPageScreen(page, {
        hideElements: [elm1, elm2] /* some options */,
      })
    ).toEqual(0);
  }
};

export {
  imageComparisonSave,
  imageComparisonCompare,
  imageEleSave,
  imageEleCompare,
  imageComparisonExcludeSave,
  imageComparisonExcludeCompare,
};
