Feature: api sample test feature

  Scenario: api sample test

    Given I request "getAccounts" get call
    And I validate response status as "200"
    And I validate "$.message" field data as "Welcome to mock-server!"
    Given I request "getUser" get call
    And I validate response status as "200"
    Given I request "createUser" post call
    And I validate response status as "201"
    Given I validate "$.name" field data as "morpheus"

