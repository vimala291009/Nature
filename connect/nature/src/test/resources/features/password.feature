@password
Feature: Same Password can't be used twice by the user
  As a user
  I shouldn't be allowed to choose the previous / old password when change the password
  So that the system is more secured from hacking

  Scenario Outline: Changing password and choosing the previous / old one
    Given I am an existing user of nature
    And I am on change password page
    When I change the password as <previous password>
    And I click on submit button
    Then I <behaviour> see a warning message
  Examples:
    | previous password | behaviour |
    | previouspass01            | should     |
    | newpass10            | should not |

  Scenario: Forgotten password security Question and  Answer option
    Given I am a new user  of nature
    When registering with nature.com sites
    Then I should see list of security questions to choose and answer



