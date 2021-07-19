package com.stepdefinition.com;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.Adactin_POM.BooknowPOM;
import com.Adactin_POM.Hotelapplogin_POM;
import com.Adactin_POM.LogoutPOM;
import com.Adactin_POM.RadiobtnPOM;
import com.Adactin_POM.SearchhotelPOM;
import com.adactin.helper.FileReaderManager;
import com.adactin_Baseclass.Baseclass;
import com.runner.com.Runner;

import cucumber.api.java.en.*;

public class Stepdefinition extends Baseclass {

	public static WebDriver driver = Runner.driver;

	@Given("^user must launch the login page\\.$")
	public void user_must_launch_the_login_page() throws Throwable {
		String url = FileReaderManager.getInstanceFR().getInstanceCR().Geturl();
		openurl(url);
	}

	Hotelapplogin_POM hp = new Hotelapplogin_POM(driver);	

	@When("^User must enter valid username \"([^\"]*)\" in the username field\\.$")
	public void user_must_enter_valid_username_in_the_username_field(String arg1) throws Throwable {
		inputvalue(hp.getUsername(), arg1);
	}

	@When("^User must enter the valid password \"([^\"]*)\" in the password field\\.$")
	public void user_must_enter_the_valid_password_in_the_password_field(String arg1) throws Throwable {
		inputvalue(hp.getPass(), arg1);

	}

	@Then("^User must click on the login Button and navigate to search page\\.$")
	public void user_must_click_on_the_login_Button_and_navigate_to_search_page() throws Throwable {
		methodforclick(hp.getLogin());
	}

	@Given("^User must have logged in using valid username and password\\.$")
	public void user_must_have_logged_in_using_valid_username_and_password() throws Throwable {
		Thread.sleep(5000);
	}

	SearchhotelPOM sh = new SearchhotelPOM(driver);

	@When("^User must select the location from the drop down\\.$")
	public void user_must_select_the_location_from_the_drop_down() throws Throwable {
		selectmethodvalue(sh.getLocation(), "Paris");
		
	}

	@When("^User must select the hotels from the drop down\\.$")
	public void user_must_select_the_hotels_from_the_drop_down() throws Throwable {
		Thread.sleep(7000);
		selectmethodvalue(sh.getHotels(), "Hotel Sunshine");
	}

	@When("^User must select the room type from the drop down\\.$")
	public void user_must_select_the_room_type_from_the_drop_down() throws Throwable {
		selectmethodvalue(sh.getRoomtype(), "Super Deluxe");
	}

	@When("^User must select the Number of rooms from the drop down\\.$")
	public void user_must_select_the_Number_of_rooms_from_the_drop_down() throws Throwable {
		methodforclick(sh.getRoomnos());
	}

	@When("^User must enter the Check in date in the given format$")
	public void user_must_enter_the_Check_in_date_in_the_given_format() throws Throwable {
		methodforclick(sh.getCheckindate());
	}

	@When("^User must enter the check out date in the given format$")
	public void user_must_enter_the_check_out_date_in_the_given_format() throws Throwable {
		methodforclick(sh.getCheckoutdate());
	}

	@When("^User must select the Adult per room from the drop down\\.$")
	public void user_must_select_the_Adult_per_room_from_the_drop_down() throws Throwable {
		selectmethodvalue(sh.getAdultroom(), "1");
	}

	@When("^User must select the Child per room from the drop down\\.$")
	public void user_must_select_the_Child_per_room_from_the_drop_down() throws Throwable {
		selectmethodvalue(sh.getChildroom(), "0");
	}

	@Then("^User must click on search button and navigate to Select hotel page\\.$")
	public void user_must_click_on_search_button_and_navigate_to_Select_hotel_page() throws Throwable {
		methodforclick(sh.getSearch());
	}

	@Given("^User must have searched the hotel details\\.$")
	public void user_must_have_searched_the_hotel_details() throws Throwable {
		Thread.sleep(5000);
	}

	RadiobtnPOM rb = new RadiobtnPOM(driver);

	@When("^User must click on the radio button of searched details\\.$")
	public void user_must_click_on_the_radio_button_of_searched_details() throws Throwable {
		methodforclick(rb.getRadiobtn());
	}

	@When("^User must click on continue button\\.$")
	public void user_must_click_on_continue_button() throws Throwable {
		methodforclick(rb.getContinuebtn());
	}

	@Then("^User must navigate to Hotel booking page\\.$")
	public void user_must_navigate_to_Hotel_booking_page() throws Throwable {
		Thread.sleep(5000);
	}

	@Given("^User must have confirmed the search hotel details\\.$")
	public void user_must_have_confirmed_the_search_hotel_details() throws Throwable {
		Thread.sleep(3000);
	}

	BooknowPOM bn = new BooknowPOM(driver);

	@When("^User must enter the first name\\.$")
	public void user_must_enter_the_first_name() throws Throwable {
		inputvalue(bn.getFirstname(), "Induja");

	}

	@When("^User must enter the last name\\.$")
	public void user_must_enter_the_last_name() throws Throwable {
		inputvalue(bn.getLastname(), "Anantharaman");
	}

	@When("^User must enter the billing address\\.$")
	public void user_must_enter_the_billing_address() throws Throwable {
		inputvalue(bn.getAddress(), "No.2 west tamabaram");
	}

	@When("^User must enter the valid credit card number\\.$")
	public void user_must_enter_the_valid_credit_card_number() throws Throwable {
		inputvalue(bn.getCcnum(), "1234567891234567");
	}

	@When("^User must enter the Valid Credit Card Type\\.$")
	public void user_must_enter_the_Valid_Credit_Card_Type() throws Throwable {
		selectmethodvalue(bn.getCctype(), "VISA");
	}

	@When("^User must select the valid expire date from the drop down\\.$")
	public void user_must_select_the_valid_expire_date_from_the_drop_down() throws Throwable {
		selectmethodvalue(bn.getCcexpmonth(), "2");
	}

	@When("^User must select the valild expire month from the dropdown\\.$")
	public void user_must_select_the_valild_expire_month_from_the_dropdown() throws Throwable {
		selectmethodvalue(bn.getCcecpyear(), "2022");
	}

	@When("^User must enter the valid CVV number\\.$")
	public void user_must_enter_the_valid_CVV_number() throws Throwable {
		inputvalue(bn.getCccvv(), "1234");
	}

	@Then("^User must click on Book now button and navigate to booking confirmed page\\.$")
	public void user_must_click_on_Book_now_button_and_navigate_to_booking_confirmed_page() throws Throwable {
		methodforclick(bn.getBooknow());
	}

	@Given("^User must have confirmed the hotel booking\\.$")
	public void user_must_have_confirmed_the_hotel_booking() throws Throwable {
		Thread.sleep(5000);
	}

	LogoutPOM lp = new LogoutPOM(driver);

	@When("^User must click on the logout button\\.$")
	public void user_must_click_on_the_logout_button() throws Throwable {
		methodforclick(lp.getLogout());
	}

	@When("^User must logged out of the page\\.$")
	public void user_must_logged_out_of_the_page() throws Throwable {
		Thread.sleep(1000);
	}

	@Then("^Navigate to log out page\\.$")
	public void navigate_to_log_out_page() throws Throwable {
		Thread.sleep(1000);
	}

}
