Feature: Testing the booking functionality of the Adactin Hotel Booking application. 

Scenario Outline:User checking login functionality using valid username and password. 
	Given user must launch the login page. 
	When User must enter valid username "<username>" in the username field. 
	And User must enter the valid password "<password>" in the password field. 
	Then User must click on the login Button and navigate to search page. 
	Examples: 
		|username|password|
		|Induja96|Induram@96|
		|Induja96Anatharaman|Induram@96|
		
Scenario: User Checking the search hotel functionality based on required field. 

	Given User must have logged in using valid username and password. 
	When User must select the location from the drop down. 
	And User must select the hotels from the drop down. 
	And User must select the room type from the drop down. 
	And User must select the Number of rooms from the drop down. 
	And User must enter the Check in date in the given format 
	And User must enter the check out date in the given format 
	And User must select the Adult per room from the drop down. 
	And User must select the Child per room from the drop down. 
	Then User must click on search button and navigate to Select hotel page. 
	
Scenario: User checking searched details functionality. 

	Given User must have searched the hotel details. 
	When User must click on the radio button of searched details. 
	And  User must click on continue button. 
	Then User must navigate to Hotel booking page. 
	
Scenario: User checking hotel Booking functionality. 

	Given User must have confirmed the search hotel details. 
	When User must enter the first name. 
	And User must enter the last name. 
	And User must enter the billing address. 
	And User must enter the valid credit card number. 
	And User must enter the Valid Credit Card Type. 
	And User must select the valid expire date from the drop down. 
	And User must select the valild expire month from the dropdown. 
	And User must enter the valid CVV number. 
	Then User must click on Book now button and navigate to booking confirmed page. 
	
Scenario: User checking logout functionlity. 

	Given User must have confirmed the hotel booking. 
	When User must click on the logout button. 
	And  User must logged out of the page. 
	Then Navigate to log out page. 
	
	
	
