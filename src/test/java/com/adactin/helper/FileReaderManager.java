package com.adactin.helper;

public class FileReaderManager {

	private FileReaderManager() {

	}

	public static FileReaderManager getInstanceFR() {
		FileReaderManager fr = new FileReaderManager();
		return fr;

	}

	// Config.reader constructor object

	public ConfigurationReader getInstanceCR() throws Throwable {

		ConfigurationReader cr = new ConfigurationReader();
		return cr;

	}

}
