$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the booking functionality of the Adactin Hotel Booking application.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User checking login functionality using valid username and password.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user must launch the login page.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User must enter valid username \"\u003cusername\u003e\" in the username field.",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User must enter the valid password \"\u003cpassword\u003e\" in the password field.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User must click on the login Button and navigate to search page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.;;1"
    },
    {
      "cells": [
        "Induja96",
        "Induram@96"
      ],
      "line": 10,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.;;2"
    },
    {
      "cells": [
        "Induja96Anatharaman",
        "Induram@96"
      ],
      "line": 11,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User checking login functionality using valid username and password.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user must launch the login page.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User must enter valid username \"Induja96\" in the username field.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User must enter the valid password \"Induram@96\" in the password field.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User must click on the login Button and navigate to search page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_must_launch_the_login_page()"
});
formatter.result({
  "duration": 2999753500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Induja96",
      "offset": 32
    }
  ],
  "location": "Stepdefinition.user_must_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 101343700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Induram@96",
      "offset": 36
    }
  ],
  "location": "Stepdefinition.user_must_enter_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 110822800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_the_login_Button_and_navigate_to_search_page()"
});
formatter.result({
  "duration": 692355400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User checking login functionality using valid username and password.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-login-functionality-using-valid-username-and-password.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user must launch the login page.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User must enter valid username \"Induja96Anatharaman\" in the username field.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User must enter the valid password \"Induram@96\" in the password field.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User must click on the login Button and navigate to search page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_must_launch_the_login_page()"
});
formatter.result({
  "duration": 386794200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Induja96Anatharaman",
      "offset": 32
    }
  ],
  "location": "Stepdefinition.user_must_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 80804700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Induram@96",
      "offset": 36
    }
  ],
  "location": "Stepdefinition.user_must_enter_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 70632500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_the_login_Button_and_navigate_to_search_page()"
});
formatter.result({
  "duration": 4827523600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Checking the search hotel functionality based on required field.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-the-search-hotel-functionality-based-on-required-field.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User must have logged in using valid username and password.",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User must select the location from the drop down.",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User must select the hotels from the drop down.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User must select the room type from the drop down.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User must select the Number of rooms from the drop down.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User must enter the Check in date in the given format",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User must enter the check out date in the given format",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User must select the Adult per room from the drop down.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User must select the Child per room from the drop down.",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User must click on search button and navigate to Select hotel page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_must_have_logged_in_using_valid_username_and_password()"
});
formatter.result({
  "duration": 5011546900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_location_from_the_drop_down()"
});
formatter.result({
  "duration": 197473800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_hotels_from_the_drop_down()"
});
formatter.result({
  "duration": 7156667800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_room_type_from_the_drop_down()"
});
formatter.result({
  "duration": 136382200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_Number_of_rooms_from_the_drop_down()"
});
formatter.result({
  "duration": 87558900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_Check_in_date_in_the_given_format()"
});
formatter.result({
  "duration": 97070000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_check_out_date_in_the_given_format()"
});
formatter.result({
  "duration": 82930900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_Adult_per_room_from_the_drop_down()"
});
formatter.result({
  "duration": 119788500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_Child_per_room_from_the_drop_down()"
});
formatter.result({
  "duration": 112939700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_search_button_and_navigate_to_Select_hotel_page()"
});
formatter.result({
  "duration": 973175900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User checking searched details functionality.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-searched-details-functionality.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User must have searched the hotel details.",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User must click on the radio button of searched details.",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User must click on continue button.",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User must navigate to Hotel booking page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_must_have_searched_the_hotel_details()"
});
formatter.result({
  "duration": 5017104300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_the_radio_button_of_searched_details()"
});
formatter.result({
  "duration": 105290400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_continue_button()"
});
formatter.result({
  "duration": 1238445000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_navigate_to_Hotel_booking_page()"
});
formatter.result({
  "duration": 5005405100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User checking hotel Booking functionality.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-hotel-booking-functionality.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User must have confirmed the search hotel details.",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User must enter the first name.",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User must enter the last name.",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User must enter the billing address.",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User must enter the valid credit card number.",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User must enter the Valid Credit Card Type.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User must select the valid expire date from the drop down.",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User must select the valild expire month from the dropdown.",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User must enter the valid CVV number.",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User must click on Book now button and navigate to booking confirmed page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_must_have_confirmed_the_search_hotel_details()"
});
formatter.result({
  "duration": 3016357500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_first_name()"
});
formatter.result({
  "duration": 110815400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_last_name()"
});
formatter.result({
  "duration": 99106600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_billing_address()"
});
formatter.result({
  "duration": 120083700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_valid_credit_card_number()"
});
formatter.result({
  "duration": 102670100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_Valid_Credit_Card_Type()"
});
formatter.result({
  "duration": 174908900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_valid_expire_date_from_the_drop_down()"
});
formatter.result({
  "duration": 135121500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_select_the_valild_expire_month_from_the_dropdown()"
});
formatter.result({
  "duration": 141918000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_enter_the_valid_CVV_number()"
});
formatter.result({
  "duration": 90013800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_Book_now_button_and_navigate_to_booking_confirmed_page()"
});
formatter.result({
  "duration": 73125100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User checking logout functionlity.",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application.;user-checking-logout-functionlity.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "User must have confirmed the hotel booking.",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User must click on the logout button.",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User must logged out of the page.",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Navigate to log out page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_must_have_confirmed_the_hotel_booking()"
});
formatter.result({
  "duration": 5015292400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_click_on_the_logout_button()"
});
formatter.result({
  "duration": 1031951400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_must_logged_out_of_the_page()"
});
formatter.result({
  "duration": 1004336700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.navigate_to_log_out_page()"
});
formatter.result({
  "duration": 1011915100,
  "status": "passed"
});
});