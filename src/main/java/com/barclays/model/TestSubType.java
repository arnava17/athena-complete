package com.barclays.model;

/**
 * Created by RNagmoti on 1/6/2017.
 */
public class TestSubType {
    String testSubTypeName;
    int testSubTypeCount;

    public TestSubType(String testSubTypeName, int testSubTypeCount) {
        this.testSubTypeName = testSubTypeName;
        this.testSubTypeCount = testSubTypeCount;
    }

    public String getTestSubTypeName() {
        return testSubTypeName;
    }

    public void setTestSubTypeName(String testSubTypeName) {
        this.testSubTypeName = testSubTypeName;
    }

    public int getTestSubTypeCount() {
        return testSubTypeCount;
    }

    public void setTestSubTypeCount(int testSubTypeCount) {
        this.testSubTypeCount = testSubTypeCount;
    }
}
