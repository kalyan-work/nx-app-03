Feature: Validate CSS properties

  Scenario: Validate CSS properties
    Given I have launched the "Home Page"
    Then I verify the "App Banner" is displayed
    And I validate css properties for "App Banner"
    And I validate "color: rgb(55,65,81)" css properties for "App Banner"