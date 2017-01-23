package com.barclays.model;

/**
 * Created by RNagmoti on 1/11/2017.
 */
public class Application {

    private String applicationName;
    private int totalTests;
    private int passTests;
    private int failTests;
    private int skipTests;
    private double executionPercentage;
    private double passPercentage;
    private int automatedTests;
    private int manualTests;

    public Application(String applicationName) {
        this.applicationName = applicationName;
    }

    public int getTotalTests() {
        return totalTests;
    }

    public void setTotalTests(int totalTests) {
        this.totalTests = totalTests;
    }

    public int getPassTests() {
        return passTests;
    }

    public void setPassTests(int passTests) {
        this.passTests = passTests;
    }

    public int getFailTests() {
        return failTests;
    }

    public void setFailTests(int failTests) {
        this.failTests = failTests;
    }

    public int getSkipTests() {
        return skipTests;
    }

    public void setSkipTests(int skiTests) {
        this.skipTests = skiTests;
    }


    public double getExecutionPercentage() {
        return executionPercentage;
    }

    public void setExecutionPercentage(double executionPercentage) {
        this.executionPercentage = executionPercentage;
    }

    public String getApplicationName() {
        return applicationName;
    }

    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }

    public double getPassPercentage() {
        return passPercentage;
    }

    public void setPassPercentage(double passPercentage) {
        this.passPercentage = passPercentage;
    }

    public int getAutomatedTests() {
        return automatedTests;
    }

    public void setAutomatedTests(int automatedTests) {
        this.automatedTests = automatedTests;
    }

    public int getManualTests() {
        return manualTests;
    }

    public void setManualTests(int manualTests) {
        this.manualTests = manualTests;
    }
}