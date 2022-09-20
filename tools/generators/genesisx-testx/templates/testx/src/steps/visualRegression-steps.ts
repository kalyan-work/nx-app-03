import { Given, When, Then } from '@cucumber/cucumber';
import * as visual from '../utilities/visualRegression';
import * as utils from '../utilities/pageUtils';

Given(/^User take the "(.*)" page ((.*)| (.*)) for image comparison$/, (page: string, pageLength: string): void => {
  visual.imageComparisonSave(page, pageLength);
});

Then(/^User compares the "(.*)" page ((.*)| (.*)) for image comparison$/, (page: string, pageLength: string): void => {
  visual.imageComparisonCompare(page, pageLength);
});

Then(/^User takes "(.*)" element for image comparison$/, (ele: string): void => {
  visual.imageEleSave(ele);
});

Then(/^User compare "(.*)" element for image comparison$/, (ele: string): void => {
  visual.imageEleCompare(ele);
});

Given(/^I have launched the app "(.*)"$/, (url: string): void => {
  utils.visualOpen(url);
});

Given(
  /^User take the "(.*)" page ((.*)| (.*)) for image comparison excluding "(.*)", "(.*)" elements$/,
  (page: string, pageLength: string, ele1: string, ele2: string): void => {
    utils.imageComparisonExcludeSave(page, pageLength, ele1, ele2);
  }
);

Then(
  /^User compares the "(.*)" page ((.*)| (.*)) for image comparison excluding "(.*)", "(.*)" elements$/,
  (page: string, pageLength: string, ele1: string, ele2: string): void => {
    utils.imageComparisonExcludeCompare(page, pageLength, ele1, ele2);
  }
);
