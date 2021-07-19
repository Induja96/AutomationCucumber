package com.Adactin_POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchhotelPOM {

	public static WebDriver driver;

	public SearchhotelPOM(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomtype() {
		return roomtype;
	}

	public WebElement getRoomnos() {
		return roomnos;
	}

	public WebElement getCheckindate() {
		return checkindate;
	}

	public WebElement getCheckoutdate() {
		return checkoutdate;
	}

	public WebElement getAdultroom() {
		return adultroom;
	}

	public WebElement getChildroom() {
		return childroom;
	}

	public WebElement getSearch() {
		return search;
	}

	@FindBy(name="location")
	private WebElement location;

	@FindBy(name = "hotels")
	private WebElement hotels;

	@FindBy(name = "room_type")
	private WebElement roomtype;

	@FindBy(name = "room_nos")
	private WebElement roomnos;

	@FindBy(xpath = "(//input[@class='date_pick'])[1]")
	private WebElement checkindate;

	@FindBy(xpath = "(//input[@class='date_pick'])[2]")
	private WebElement checkoutdate;

	@FindBy(name = "adult_room")
	private WebElement adultroom;

	@FindBy(name = "child_room")
	private WebElement childroom;

	@FindBy(name = "Submit")
	private WebElement search;

}
