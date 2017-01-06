package com.barclays.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * Created by RAggarwal on 12/21/2016.
 */

@Document
public class Result {
	@Id
	public String id;

	private String portfolio;
	private String application;
	private String release;
	private String build;
	private String testRunId;
	private String testName;
	private String functionalArea;
	private String status;
	private Date startTime;
	private Date endTime;
	private String machineName;
	private String executedBy;
	private String os;
	private String browser;
	private int runCount;
	private String testType;
	private String testSubType;
	private String userStory;
	private String defectId;
	private String testTool;


	public String getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(String portfolio) {
		this.portfolio = portfolio;
	}

	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}

	public String getRelease() {
		return release;
	}

	public void setRelease(String release) {
		this.release = release;
	}

	public String getBuild() {
		return build;
	}

	public void setBuild(String build) {
		this.build = build;
	}

	public String getTestRunId() {
		return testRunId;
	}

	public void setTestRunId(String testRunId) {
		this.testRunId = testRunId;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getFunctionalArea() {
		return functionalArea;
	}

	public void setFunctionalArea(String functionalArea) {
		this.functionalArea = functionalArea;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public String getMachineName() {
		return machineName;
	}

	public void setMachineName(String machineName) {
		this.machineName = machineName;
	}

	public String getExecutedBy() {
		return executedBy;
	}

	public void setExecutedBy(String executedBy) {
		this.executedBy = executedBy;
	}

	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}

	public String getBrowser() {
		return browser;
	}

	public void setBrowser(String browser) {
		this.browser = browser;
	}

	public int getRunCount() {
		return runCount;
	}

	public void setRunCount(int runCount) {
		this.runCount = runCount;
	}

	public String getTestType() {
		return testType;
	}

	public void setTestType(String testType) {
		this.testType = testType;
	}

	public String getTestSubType() {
		return testSubType;
	}

	public void setTestSubType(String testSubType) {
		this.testSubType = testSubType;
	}

	public String getUserStory() {
		return userStory;
	}

	public void setUserStory(String userStory) {
		this.userStory = userStory;
	}

	public String getDefectId() {
		return defectId;
	}

	public void setDefectId(String defectId) {
		this.defectId = defectId;
	}

	public String getTestTool() {
		return testTool;
	}

	public void setTestTool(String testTool) {
		this.testTool = testTool;
	}
}