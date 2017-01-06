package com.barclays.service;


import com.barclays.model.FunctionalAreaSummary;
import com.barclays.model.Result;
import com.barclays.model.ResultSummary;
import com.barclays.model.StatusCount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by RAggarwal on 12/22/2016.
 */
@Component
public class ResultSummaryCalculator {

    ResultSummary resultSummary;
    FunctionalAreaSummary functionalAreaSummary;

    public ResultSummary getResultSummary(List<Result> resultList) {
        int totalTests = 0;
        int totalPass = 0;
        int totalFail = 0;
        int totalSkipped = 0;
        String totalExecutionTime = "";
        long executionTime = 0L;
        int hours = 0;
        int minutes = 0;
        int seconds = 0;

        for (Result result : resultList) {
            if (result.getStatus().equals("PASS")) {
                totalPass++;
            } else if (result.getStatus().equals("FAIL")) {
                totalFail++;
            } else {
                totalSkipped++;
            }

            executionTime += result.getEndTime().getTime() - result.getStartTime().getTime();
            totalTests++;
        }

        if (executionTime / (60 * 60 * 1000) > 0) {
            hours += executionTime / (60 * 60 * 1000);
            executionTime = executionTime % (60 * 60 * 1000);
            totalExecutionTime = hours + "h ";
        }

        if (executionTime / (60 * 1000) > 0) {
            minutes += executionTime / (60 * 1000);
            executionTime = executionTime % (60 * 1000);
        }

        seconds += executionTime / 1000;
        totalExecutionTime += minutes + "m " + seconds + "s";

        resultSummary = new ResultSummary();
        resultSummary.setTotalTests(totalTests);
        resultSummary.setTotalTestsPassed(totalPass);
        resultSummary.setTotalTestsFailed(totalFail);
        resultSummary.setTotalTestsSkipped(totalSkipped);
        resultSummary.setTotalExecutionTime(totalExecutionTime);
        System.out.println(resultSummary.getTotalTests());
        return resultSummary;
    }

    public FunctionalAreaSummary getFunctionalAreaSummary(List<Result> resultList) {

        functionalAreaSummary = new FunctionalAreaSummary();
        Map<String, StatusCount> functionalAreaStatusCount = new HashMap<String, StatusCount>();

        for (Result result : resultList) {

            String functionalAreaOfResultTest = result.getFunctionalArea();

            if (!functionalAreaStatusCount.containsKey(functionalAreaOfResultTest)) {

                functionalAreaStatusCount.put(functionalAreaOfResultTest, new StatusCount(0, 0, 0));
            }


            if (result.getStatus().equals("PASS")) {
                StatusCount statusCountOfResultTest = functionalAreaStatusCount.get(functionalAreaOfResultTest);
                statusCountOfResultTest.setPassCount(statusCountOfResultTest.getPassCount() + 1);
                functionalAreaStatusCount.put(functionalAreaOfResultTest, statusCountOfResultTest);
            } else if (result.getStatus().equals("FAIL")) {
                StatusCount statusCountOfResultTest = functionalAreaStatusCount.get(functionalAreaOfResultTest);
                statusCountOfResultTest.setFailCount(statusCountOfResultTest.getFailCount() + 1);
                functionalAreaStatusCount.put(functionalAreaOfResultTest, statusCountOfResultTest);
            } else {
                StatusCount statusCountOfResultTest = functionalAreaStatusCount.get(functionalAreaOfResultTest);
                statusCountOfResultTest.setSkipCount(statusCountOfResultTest.getSkipCount() + 1);
                functionalAreaStatusCount.put(functionalAreaOfResultTest, statusCountOfResultTest);
            }
        }

        functionalAreaSummary.setFunctionalAreaStatusCount(functionalAreaStatusCount);
        return functionalAreaSummary;
    }
}
