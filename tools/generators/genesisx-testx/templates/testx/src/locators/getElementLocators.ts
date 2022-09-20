/* eslint-disable @typescript-eslint/no-var-requires */

// import dataQaIds from '../../src/dataModel/dataQaIds';
import homepage from "./homepage.locators";
console.log("homepage elements", homepage);
import { waitforTimeout } from "../config/base.config";

const selectorsMap = {
    "Personal Button": `div[class=main-buttons] a[data-tealium-narrative="Personal"]`,
    ...homepage,
};

const getElement = (testElement): WebdriverIO.Element => {
    const element = $(selectorsMap[testElement]);
    element.waitForDisplayed({ timeout: waitforTimeout });
    return element;
};

const getLocator = (testElement): WebdriverIO.Element => {
    const element = selectorsMap[testElement];
    return element;
};

export { getElement, getLocator };
