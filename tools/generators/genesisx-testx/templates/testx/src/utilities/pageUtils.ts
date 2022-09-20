/* eslint-disable @typescript-eslint/no-var-requires */
import { assert } from 'chai';

const { getElement, getLocator } = require('../locators/getElementLocators');
const { geturl } = require('../config/environment');
const { waitforTimeout } = require('../config/base.config');
const testData = require('../testData/data.' + process.env.ENV);

/// ============= Generic Functions ========
const verifyIsDisplayed = (elementDescription: string): void => {
  const element = getElement(elementDescription);
  const isVisible = element.isDisplayed();
  assert.equal(isVisible, true);
};

const verifyIsClickable = (elementDescription: string): void => {
  const element = getElement(elementDescription);
  const isClickable = element.isClickable();
  assert.equal(isClickable, true);
};

const verifyText = (elementDescription: string, expectedText: string): void => {
  const element = getElement(elementDescription);
  const elementText = element.getText();
  assert.equal(elementText, expectedText);
};

const containsNumberOfCharacters = (elementDescription: string, expectedText: number): void => {
  const element = getElement(elementDescription);
  const elementText = element.getText();
  assert.equal(elementText.length, expectedText);
};

const verifyTestData = (elementDescription: string, expectedText: string): void => {
  const element = getElement(elementDescription);
  const elementText = element.getText();
  const dataString = expectedText.split('.').reduce((dataObj: string, index: string) => dataObj[index], testData);
  assert.equal(elementText, dataString);
};

const containsText = (elementDescription: string, expectedText: string): void => {
  const element = getElement(elementDescription);
  const elementText = element.getText();
  assert.include(elementText, expectedText);
};

const containsTestData = (elementDescription: string, expectedText: string): void => {
  const element = getElement(elementDescription);
  const elementText = element.getText();
  const dataString = expectedText.split('.').reduce((dataObj: string, index: string) => dataObj[index], testData);
  assert.include(elementText, dataString);
};

const open = (pageDescription: string): string => {
  const url = geturl(pageDescription);
  //const url = envUrls['BASE_URL'] + path;
  return browser.url(url);
};

const visualOpen = (pageDescription: string): string => {
  return browser.url(pageDescription);
};

const click = (elementDescription: string): void => {
  const element = getElement(elementDescription);
  element.scrollIntoView();
  browser.waitUntil(() => element.isClickable());
  element.click();
};

const setTextValue = (elementDescription: string, text: string): void => {
  if (text == '#random#') {
    text = randomString(6);
  }
  const element = getElement(elementDescription);
  element.setValue(text);
};

const setRandomEmail = (elementDescription: string): void => {
  let sampleEmail = randomString(6) + '@' + randomString(3) + '.com';

  const element = getElement(elementDescription);
  element.setValue(sampleEmail);
};

const setValueFromTestData = (elementDescription: string, testDataId: string): void => {
  const element = getElement(elementDescription);
  const dataString = testDataId.split('.').reduce((dataObj: string, index: string) => dataObj[index], testData);
  element.addValue(dataString);
};

const selectDropdownOption = (elementDescription: string, text: string): void => {
  const element = getElement(elementDescription);
  element.click();
  element.selectByVisibleText(text);
};

const wait = (seconds: number): void => {
  browser.pause(seconds * 1000);
};

/// ==============================

const verifyTextData = (element: string, expectedText: string): void => {
  const testElement = getElement(element);
  const actualText = testElement.getText();
  assert.equal(getTestData(expectedText), actualText);
};

const openUrl = (path: string): string => {
  const url = envUrls['CUST_URL'] + path;
  return browser.url(url);
};

const validateFormat = (element: string, expectedText: string): void => {
  const testElement = getElement(element);
  const actualText = testElement.getText();

  const regexp = new RegExp(expectedText);
  assert.equal(true, regexp.test(actualText), `text found : ${actualText}Expected regext${expectedText}`);
};

const enterText = (elementtext: string, element: string): void => {
  if (elementtext == 'randomString') {
    elementtext = generateRandom(8);
  }
  const testElement = getElement(element);
  testElement.scrollIntoView();
  testElement.addValue(elementtext);
};

const generateRandom = (numberOfLetter: number): string => {
  return Math.random().toString(36).substr(2, numberOfLetter);
};

const getTestData = (data): WebdriverIO.Element => {
  if (data.split('.').length > 1) {
    return data.split('.').reduce((dataObj: string, index: number) => dataObj[index], testData);
  } else {
    return data;
  }
};

const clickOnElementWithText = (locatorName: string, name: string): void => {
  const locator = getLocator(locatorName);
  const finalLocator = locator.replace('#replace#', name);
  const testLocator = $(finalLocator);
  testLocator.waitForDisplayed({ timeout: waitforTimeout });
  testLocator.click();
};

const compareAttributeText = (element: string, attributeName: string, elementText: string): void => {
  const testElement = getElement(element);
  const actualAttributeValue = testElement.getAttribute(attributeName);
  assert.equal(getTestData(elementText), actualAttributeValue);
};

const clearInputTextValue = (element: string): void => {
  const testElement = getElement(element);
  testElement.click();
  browser.pause(1000);
  testElement.clearValue();
};

const keyPress = (key: string): void => {
  browser.keys([key]);
};

const getCSSProperties = (key: string): void => {
  let environment_Data = require('../cssProperties/desktop');

  console.log(' Value', environment_Data[key]);
  return environment_Data[key];
  // Code need to update to read mobile or desktop properties.
};

// const visualCheck = (pageName: string): void => {
//   let results = browser.checkDocument();
//   let FileString = ', "Page_URL" : "' + userData.getField('url') + '"';
//   FileString = FileString + ', "Status" : ' + JSON.stringify(results) + '}';
//   fs.appendFileSync('../screenshots/visual-results/' + screenReportFile, FileString);

//   //results.forEach((result) => assert.isTrue(result.isExactSameImage, `${pageName} visual regression`));
// };

const visualCheck = (pageName: string): void => {
  browser.saveFullPageScreen(pageName, {});
};

const switchIFrame = (iFrameName: string): void => {
  const testElement = getElement(iFrameName);
  testElement.waitForDisplayed({ timeout: waitforTimeout });
  browser.switchToFrame(testElement);
};

const switchToParentFrame = (): void => {
  browser.switchToParentFrame();
};

//function randomString(length) {
const randomString = (length: number): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const randomNumeric = (length: number): string => {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
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
  verifyIsDisplayed,
  verifyIsClickable,
  verifyTestData,
  verifyText,
  setValueFromTestData,
  setTextValue,
  containsText,
  containsTestData,
  selectDropdownOption,
  open,
  openUrl,
  click,
  validateFormat,
  enterText,
  verifyTextData,
  wait,
  clickOnElementWithText,
  compareAttributeText,
  clearInputTextValue,
  keyPress,
  getCSSProperties,
  visualCheck,
  switchIFrame,
  setRandomEmail,
  containsNumberOfCharacters,
  switchToParentFrame,
  visualOpen,
  imageComparisonExcludeSave,
  imageComparisonExcludeCompare,
};
