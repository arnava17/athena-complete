package com.barclays.model;

import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * Created by RNagmoti on 1/4/2017.
 */
@Component
public class FunctionalAreaSummary {

    private Map<String, StatusCount> functionalAreaStatusCount;

    public Map<String, StatusCount> getFunctionalAreaStatusCount() {
        return functionalAreaStatusCount;
    }

    public void setFunctionalAreaStatusCount(Map<String, StatusCount> functionalAreaStatusCount) {
        this.functionalAreaStatusCount = functionalAreaStatusCount;
    }
}