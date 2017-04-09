$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("location.feature");
formatter.feature({
  "line": 2,
  "name": "Adding New location",
  "description": "As a user\r\nI should be able to add a new location\r\nso that the screen navigates to the new location",
  "id": "adding-new-location",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addnewlocation"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Adding new location showing modal",
  "description": "",
  "id": "adding-new-location;adding-new-location-showing-modal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the smartfocus site page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on New menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on location menu item",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the New location modal",
  "keyword": "Then "
});
formatter.match({
  "location": "LocationStepDef.i_am_on_the_smartfocus_site_page()"
});
formatter.result({
  "duration": 27915283165,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027site-wrapper\u0027]/div/div[1]/div[2]/div/div[2]/div[3]/div[1]/div/div/div/div/div/span[3]/span/span[1]\"}\nCommand duration or timeout: 78 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027Iniya\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d38.0.5, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b09ce142-e28d-4687-9d61-b85d08b557d5\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027site-wrapper\u0027]/div/div[1]/div[2]/div/div[2]/div[3]/div[1]/div/div/div/div/div/span[3]/span/span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:455)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat com.smartfocus.pageobjects.LocationPage.opencontents(LocationPage.java:199)\r\n\tat com.smartfocus.stepdefs.LocationStepDef.i_am_on_the_smartfocus_site_page(LocationStepDef.java:18)\r\n\tat ✽.Given I am on the smartfocus site page(location.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027site-wrapper\u0027]/div/div[1]/div[2]/div/div[2]/div[3]/div[1]/div/div/div/div/div/span[3]/span/span[1]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027Iniya\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Boothi/AppData/Local/Temp/anonymous6612213499505783381webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10299)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Boothi/AppData/Local/Temp/anonymous6612213499505783381webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10308)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Boothi/AppData/Local/Temp/anonymous6612213499505783381webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12282)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Boothi/AppData/Local/Temp/anonymous6612213499505783381webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12287)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Boothi/AppData/Local/Temp/anonymous6612213499505783381webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12229)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LocationStepDef.i_click_on_New_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LocationStepDef.i_click_on_location_menu_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LocationStepDef.i_should_see_the_New_location_modal()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Adding new location information",
  "description": "",
  "id": "adding-new-location;adding-new-location-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am adding new location",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter Name as \u003cName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Major as\u003cMajor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Description as\u003cDescription\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select correct address from drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "latitude and longitude should be populated as \u003clat\u003e and \u003clong\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter radius as \u003cradius\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter catchment area as \u003ccatchment area\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on create button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "New location should be created as \u003cName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "screen should be navigated to new location on \u003clat\u003e and \u003clong\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "adding-new-location;adding-new-location-information;",
  "rows": [
    {
      "cells": [
        "Name",
        "Major",
        "Description",
        "postcode",
        "radius",
        "catchment area",
        "lat",
        "long"
      ],
      "line": 27,
      "id": "adding-new-location;adding-new-location-information;;1"
    },
    {
      "cells": [
        "Automation Test-High road",
        "90",
        "Ilford High street",
        "IG1 1YT",
        "10",
        "20",
        "51.5623078",
        "0.07643529999995735"
      ],
      "line": 28,
      "id": "adding-new-location;adding-new-location-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Adding new location information",
  "description": "",
  "id": "adding-new-location;adding-new-location-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addnewlocation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am adding new location",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter Name as Automation Test-High road",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Major as90",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Description asIlford High street",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode as IG1 1YT",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select correct address from drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "latitude and longitude should be populated as 51.5623078 and 0.07643529999995735",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter radius as 10",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter catchment area as 20",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on create button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "New location should be created as Automation Test-High road",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "screen should be navigated to new location on 51.5623078 and 0.07643529999995735",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LocationStepDef.i_am_adding_new_location()"
});
formatter.result({
  "duration": 20040865121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Test-High road",
      "offset": 16
    }
  ],
  "location": "LocationStepDef.i_enter_Name_as_High_road(String)"
});
formatter.result({
  "duration": 1756475339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 16
    }
  ],
  "location": "LocationStepDef.i_enter_Major(String)"
});
formatter.result({
  "duration": 600639142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ilford High street",
      "offset": 22
    }
  ],
  "location": "LocationStepDef.i_enter_Description(String)"
});
formatter.result({
  "duration": 969453685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IG1 1YT",
      "offset": 20
    }
  ],
  "location": "LocationStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 221962506,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_select_correct_address_from_drop_down_list()"
});
formatter.result({
  "duration": 627698530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51.5623078",
      "offset": 46
    },
    {
      "val": "0.07643529999995735",
      "offset": 61
    }
  ],
  "location": "LocationStepDef.latitude_and_longitude_should_be_populated(String,String)"
});
formatter.result({
  "duration": 202451283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "LocationStepDef.i_enter_radius_as(int)"
});
formatter.result({
  "duration": 323453708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 26
    }
  ],
  "location": "LocationStepDef.i_enter_catchment_area_as(int)"
});
formatter.result({
  "duration": 1364740048,
  "status": "passed"
});
formatter.match({
  "location": "LocationStepDef.i_click_on_create_button()"
});
formatter.result({
  "duration": 442289312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Test-High road",
      "offset": 34
    }
  ],
  "location": "LocationStepDef.new_location_should_be_created(String)"
});
formatter.result({
  "duration": 143756396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51.5623078",
      "offset": 46
    },
    {
      "val": "0.07643529999995735",
      "offset": 61
    }
  ],
  "location": "LocationStepDef.screen_should_be_navigated_to_new_location(String,String)"
});
formatter.result({
  "duration": 232683287,
  "status": "passed"
});
});