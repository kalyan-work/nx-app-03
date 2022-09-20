Feature: Functional test case

  Scenario: Functional test case
    Given I have launched the "Home Page"
    Then I verify the "Learning Materials Section" is displayed
    When I click on the "Commands Hyperlink"
    Then I verify the "Commands Section" is displayed