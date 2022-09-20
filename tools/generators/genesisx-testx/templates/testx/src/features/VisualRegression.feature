
Feature: Image comparison

    @imagesave
    Scenario: Take element screenshot
        Given I have launched the app "http://time-time.net/timer/digital-clock.php"
        Then User takes "time" element for image comparison

    