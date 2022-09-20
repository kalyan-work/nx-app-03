import { Given, When, Then } from '@cucumber/cucumber';

import * as allyUtils from '../utilities/accessibilityCheck';
import * as utils from '../utilities/pageUtils';
import * as api from '../utilities/apiCalls';

When(/^I click on the "([^"]*)?"$/, (element: string): void => {
  utils.click(element);
});

Given(/^I have launched the "(.*)"$/, (page: string): void => {
  utils.open(page);
});

When(/^I verify the "(.*)" is clickable$/, (element: string) => {
  utils.verifyIsClickable(element);
});

Then(/^I land on page "(.*)"$/, (element: string) => {
  utils.verifyIsDisplayed(element);
});

Then(/^I verify the "(.*)" is test data "(.*)"$/, (elementDescription: string, actualText: string) => {
  utils.verifyTestData(elementDescription, actualText);
});

Then(/^I verify the "(.*)" contains text "(.*)"$/, (elementDescription: string, actualText: string) => {
  utils.containsText(elementDescription, actualText);
});

Then(/^I verify the "(.*)" contains test data "(.*)"$/, (elementDescription: string, actualText: string) => {
  utils.containsTestData(elementDescription, actualText);
});

When(/^I click on the "(.*)" "(.*)" times$/, (element: string, times: number) => {
  for (let i = 0; i < times; i++) {
    utils.click(element);
  }
});

// When(/^I click on the "(.*)"$/, (element: string) => {
//   utils.click(element);
// });

Then(/^I verify the "(.*)" character count as "(.*)"$/, (elementDescription: string, characterCount: number) => {
  utils.containsNumberOfCharacters(elementDescription, characterCount);
});

When(/^I fill the "(.*)" with "(.*)"$/, (elementDescription: string, text: string) => {
  utils.setTextValue(elementDescription, text);
});

When(/^I fill the "(.*)" with random email$/, (elementDescription: string) => {
  utils.setRandomEmail(elementDescription);
});

When(/^I fill the "(.*)" with test data "(.*)"$/, (elementDescription: string, testDataId: string) => {
  utils.setValueFromTestData(elementDescription, testDataId);
});

When(/^I select option from the "(.*)" as "(.*)"$/, (elementDescription: string, text: string) => {
  utils.selectDropdownOption(elementDescription, text);
});

When(/^I wait for (\d+) seconds?$/, (seconds: number) => {
  utils.wait(seconds);
});

Then(/^I run accessibility on "(.*)"$/, (pageName: string) => {
  allyUtils.accessibilityRun(pageName);
});

// ============= Journey steps ==========

Given(/^I am on application homepage url "(.*)"$/, (url: string) => {
  utils.openUrl(url);
});

Then(/^I verify the "(.*)" text as "(.*)"$/, (element: string, actualText: string) => {
  utils.verifyText(element, actualText);
});

Then(/^I verify the "(.*)" text with "(.*)" expected data$/, (element: string, actualText: string) => {
  utils.verifyTextData(element, actualText);
});

When(/^I verify the "(.*)" is displayed$/, (element: string) => {
  utils.verifyIsDisplayed(element);
});

Then(/^I verify the "(.*)" sortcode format as "(.*)"$/, (element: string, expectedText: string) => {
  utils.validateFormat(element, expectedText);
});

When(/^I should see "(.*)" field "(.*)" value as "(.*)"$/, (element: string, attribute: string, elementText: string) => {
  utils.compareAttributeText(element, attribute, elementText);
});

When(/^I click on "(.*)" for "(.*)" account$/, (element: string, name: string) => {
  utils.clickOnElementWithText(element, name);
});

When(/^I enter "(.*)" in "(.*)" text box$/, (elementtext: string, element: string) => {
  utils.enterText(elementtext, element);
});

When(/^I clear "(.*)" field$/, (element: string) => {
  utils.clearInputTextValue(element);
});

When(/^I press "(.*)" key$/, (key: string) => {
  utils.keyPress(key);
});

let getResponse = {}

When(/^I request "(.*)" get call$/, (requestType: string) => {
  console.log("1.Request Type get call", requestType )
  api.getCall(requestType);
});

When(/^I request "(.*)" post call$/, (requestType: string) => {
  api.postCall(requestType, requestType);
});

When(/^I validate response status as "(.*)"$/, (requestType: string) => {
  console.log("2.Request Type get call validate response status", requestType )
  api.validateStatus(requestType);
});

When(/^I validate "(.*)" field data as "(.*)"$/, (path: string, value: string) => {
  api.validateData(path, value);
});

When(/^I compare screenshot for "([^"]*)"$/, (pageName: string) => {
  utils.visualCheck(pageName);
});

When(/^I switch to "([^"]*)" iFrame$/, (pageName: string) => {
  utils.switchIFrame(pageName);
});

When(/^I switch to parent iFrame$/, () => {
  utils.switchToParentFrame();
});
