package com.barclays.model;

import org.springframework.stereotype.Component;

/**
 * Created by RAggarwal on 12/22/2016.
 */

public class ResultSummary {

    private int totalTests;
    private int totalTestsPassed;
    private int totalTestsFailed;
    private int totalTestsSkipped;
    private String totalExecutionTime = "";

    public ResultSummary() {
    }

    public int getTotalTests() {
        return totalTests;
    }

    public void setTotalTests(int totalTests) {
        this.totalTests = totalTests;
    }

    public int getTotalTestsPassed() {
        return totalTestsPassed;
    }

    public void setTotalTestsPassed(int totalTestsPassed) {
        this.totalTestsPassed = totalTestsPassed;
    }

    public int getTotalTestsFailed() {
        return totalTestsFailed;
    }

    public void setTotalTestsFailed(int totalTestsFail) {
        this.totalTestsFailed = totalTestsFail;
    }

    public int getTotalTestsSkipped() {
        return totalTestsSkipped;
    }

    public void setTotalTestsSkipped(int totalTestsSkipped) {
        this.totalTestsSkipped = totalTestsSkipped;
    }

    public String getTotalExecutionTime() {
        return totalExecutionTime;
    }

    public void setTotalExecutionTime(String totalExecutionTime) {
        this.totalExecutionTime = totalExecutionTime;
    }
}