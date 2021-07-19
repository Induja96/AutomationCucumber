package com.Adactin_POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BooknowPOM {

	public static WebDriver driver;

	public BooknowPOM(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);

	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCcnum() {
		return ccnum;
	}

	public WebElement getCctype() {
		return cctype;
	}

	public WebElement getCcexpmonth() {
		return ccexpmonth;
	}

	public WebElement getCcecpyear() {
		return ccecpyear;
	}

	public WebElement getCccvv() {
		return cccvv;
	}

	public WebElement getBooknow() {
		return booknow;
	}

	@FindBy(name = "first_name")
	private WebElement firstname;

	@FindBy(name = "last_name")
	private WebElement lastname;

	@FindBy(name = "address")
	private WebElement address;

	@FindBy(name = "cc_num")
	private WebElement ccnum;

	@FindBy(name = "cc_type")
	private WebElement cctype;

	@FindBy(name = "cc_exp_month")
	private WebElement ccexpmonth;

	@FindBy(name = "cc_exp_year")
	private WebElement ccecpyear;

	@FindBy(name = "cc_cvv")
	private WebElement cccvv;

	@FindBy(name = "book_now")
	private WebElement booknow;

}
