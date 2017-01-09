package com.barclays.model;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Created by RAggarwal on 1/6/2017.
 */
public class TestSubTypeSummary {

    private Map<String, Integer> testSubTypeCount;
    private List<TestSubType> testSubTypeList = new ArrayList<TestSubType>();

    public Map<String, Integer> getTestSubTypeCount() {
        return testSubTypeCount;
    }

    public void setTestSubTypeCount(Map<String, Integer> testSubTypeCount) {
        this.testSubTypeCount = testSubTypeCount;
    }

    public List<TestSubType> getTestSubTypeList() {

        Iterator it = testSubTypeCount.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            testSubTypeList.add(new TestSubType(pair.getKey().toString(), Integer.parseInt(pair.getValue().toString())));

        }
        return testSubTypeList;
    }
}