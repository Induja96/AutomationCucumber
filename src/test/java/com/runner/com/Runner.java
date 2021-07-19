package com.runner.com;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactin_Baseclass.Baseclass;

import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\com\\feature\\com", glue = "com\\stepdefinition\\com", 
plugin = { "pretty", "html:report", "com.cucumber.listener.ExtentCucumberFormatter:Report/extentReport.html" } , monochrome = true , dryRun = false , strict = true)
public class Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void setup() throws Throwable {
		String browser = FileReaderManager.getInstanceFR().getInstanceCR().Getbrowser();
		driver = Baseclass.browserLaunch("Chrome");

	}
}
