package com.barclays.model;

/**
 * Created by RNagmoti on 1/3/2017.
 */
public class StatusCount {

    private String functionalAreaName;
    private int passCount;
    private int failCount;
    private int skipCount;


    public StatusCount(String functionalAreaName, int passCount, int failCount, int skipCount) {
        this.functionalAreaName = functionalAreaName;

        this.passCount = passCount;
        this.failCount = failCount;
        this.skipCount = skipCount;
    }

    public int getPassCount() {
        return passCount;
    }

    public String getFunctionalAreaName() {
        return functionalAreaName;
    }

    public void setFunctionalAreaName(String functionalAreaName) {
        this.functionalAreaName = functionalAreaName;
    }

    public void setPassCount(int passCount) {
        this.passCount = passCount;
    }

    public int getFailCount() {
        return failCount;
    }

    public void setFailCount(int failCount) {
        this.failCount = failCount;
    }

    public int getSkipCount() {
        return skipCount;
    }

    public void setSkipCount(int skipCount) {
        this.skipCount = skipCount;
    }
}