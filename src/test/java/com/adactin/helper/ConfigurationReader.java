package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {

	public static Properties p;

	public ConfigurationReader() throws Throwable {
		File f = new File(
				"C:\\Users\\INDHU\\eclipse-workspace\\AdactinCucumber\\src\\test\\java\\com\\adactin\\Properties\\configuration.properties");

		FileInputStream fis = new FileInputStream(f);

		p = new Properties();
		p.load(fis);

	}

	public String Getbrowser() {

		String browser = p.getProperty("browser");
		return browser;

	}

	public String Geturl() {
		String url = p.getProperty("url");
		return url;

	}

	public String getusername() {
		String username = p.getProperty("username");        
		return username;
	}

	public String getpassword() {
		String password = p.getProperty("Password");
		return password;
	}

	public String getcredit() {
		String credit = p.getProperty("credit");
		return credit;
	}

	public String getcvv() {
		String cvv = p.getProperty("cvv");
		return cvv;

	}

}
