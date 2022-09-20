Feature: Test page accessibility

  Scenario: Test page accessibility
    Given I have launched the "Home Page"
    Then I verify the "App Banner" is displayed
    And I run accessibility on "Home Page"