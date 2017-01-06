package com.barclays.model;

/**
 * Created by RNagmoti on 1/3/2017.
 */
public class StatusCount {

    int passCount;
    int failCount;
    int skipCount;

    public StatusCount(int passCount, int failCount, int skipCount) {
        this.passCount = passCount;
        this.failCount = failCount;
        this.skipCount = skipCount;
    }

    public int getPassCount() {
        return passCount;
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