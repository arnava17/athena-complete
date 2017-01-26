package com.barclays.model;

import java.util.*;

/**
 * Created by RNagmoti on 1/11/2017.
 */
public class PortfolioSummary {

    private String portfolioName;
    private int totalTests;
    private int totalTestRuns;
    private double executionPercentage;
    private double passPercentage;
    List<Application> applicationList;

    public PortfolioSummary() {
    }

    public String getPortfolioName() {
        return portfolioName;
    }

    public void setPortfolioName(String portfolioName) {
        this.portfolioName = portfolioName;
    }

    public int getTotalTests() {

        return totalTests;
    }

    public void setTotalTests(int totalTests) {
        this.totalTests = totalTests;
    }

    public double getExecutionPercentage() {
        return executionPercentage;
    }

    public void setExecutionPercentage(double executionPercentage) {
        this.executionPercentage = executionPercentage;
    }

    public double getPassPercentage() {
        return passPercentage;
    }

    public void setPassPercentage(double passPercentage) {
        this.passPercentage = passPercentage;
    }

    public List<Application> getApplicationList() {
        return applicationList;
    }

    public void setApplicationList(List<Application> applicationList) {
        this.applicationList = applicationList;
    }


    public int getTotalTestRuns() {
        return totalTestRuns;
    }

    public void setTotalTestRuns(int totalTestRuns) {
        this.totalTestRuns = totalTestRuns;
    }
}