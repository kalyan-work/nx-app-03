import { Given, When, Then } from '@cucumber/cucumber';
import * as utils from '../utilities/pageUtils';
import { assert } from 'chai';
const { getElement, getLocator } = require("../locators/getElementLocators");


// Read element CSS properties from CSSProperties file and validate with actual
When(/^I validate css properties for "(.*)\"$/, function (element) {
  utils.verifyIsDisplayed(element);
  let property = '';
  let cssProperties = utils.getCSSProperties(element).split("|");
  for (let item = 0; item < cssProperties.length; item++) {
    property = cssProperties[item].split(':');
    var actualValue = getElement(element).getCSSProperty(property[0])
    // Add margine for 3 pixals 
    if (element.includes('mage') && (property[0] == 'height' || property[0] == 'width')) {
      let expectedVal = parseInt(property[1].replace('px', ''));
      let actualVal = Number(actualValue.value.replace('px', ''));
      assert.isTrue(expectedVal + 3 > actualVal && expectedVal - 3 < actualVal, 'CSS property of "' + getLocator(element) + '" does not match. Expected is ' +property[1] + ' but actual is ' + actualValue.value );
    } else {
      assert.include(
        JSON.stringify(actualValue.value).toLowerCase(),
        property[1].trim().toLowerCase(),
        'CSS property of "' + getLocator(element)  + '" does not match'
      );
    }
  }
});




// Read element CSS properties from feature file and validate with actual
When(/^I validate "(.*)\" css properties for "(.*)\"$/, function (cssProp, element) {
  utils.verifyIsDisplayed(element);
  let property = '';
  let cssProperties = cssProp.split('|');
  for (let item = 0; item < cssProperties.length; item++) {
    property = cssProperties[item].split(':');
    var actualValue = getElement(element).getCSSProperty(property[0])
    assert.include(
      JSON.stringify(actualValue.value).toLowerCase(),
      property[1].trim().toLowerCase(),
      'CSS property does not match'
    );
  }
});