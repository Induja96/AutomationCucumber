package com.Adactin_POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RadiobtnPOM {

	public static WebDriver driver;

	public RadiobtnPOM(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getRadiobtn() {
		return radiobtn;
	}

	public WebElement getContinuebtn() {
		return continuebtn;
	}

	@FindBy(name = "radiobutton_0")
	private WebElement radiobtn;

	@FindBy(name = "continue")
	private WebElement continuebtn;
}
