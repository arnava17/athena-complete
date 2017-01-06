package com.barclays.service;

import org.junit.Test;

import com.barclays.model.Result;
import com.barclays.model.ResultSummary;
import org.junit.Assert;
import org.junit.Before;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

import static org.junit.Assert.*;

/**
 * Created by AJaimini on 1/5/2017.
 */
public class ResultSummaryCalculatorTest {

    DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.'511Z'");


    List<Result> resultList;

    @Mock
    Result firstResult;

    @Mock
    Result secondResult;

    @Mock
    Result thirdResult;

    ResultSummary resultSummary;

    @InjectMocks
    ResultSummaryCalculator resultSummaryCalculator;

    @Before
    public void setUp() throws ParseException {
        MockitoAnnotations.initMocks(this);
        resultList = new ArrayList<Result>();

        firstResult = new Result();
        secondResult = new Result();
        thirdResult = new Result();

        firstResult.setPortfolio("portfolio1");
        firstResult.setApplication("application1");
        firstResult.setRelease("release1");
        firstResult.setBuild("build1");
        firstResult.setTestRunId("testRun1");
        firstResult.setTestName("Add Card Details");
        firstResult.setFunctionalArea("Settings");
        firstResult.setStatus("PASS");
        firstResult.setStartTime(df.parse("2012-10-14T18:30:53.511Z"));
        firstResult.setEndTime(df.parse("2012-10-14T19:40:53.511Z"));
        firstResult.setMachineName("WILPDM31517");
        firstResult.setExecutedBy("E200");
        firstResult.setOs("Windows7");
        firstResult.setBrowser("Chrome");
        firstResult.setRunCount(1);
        firstResult.setTestType("Automated");
        firstResult.setTestSubType("E2E");
        firstResult.setUserStory("JIRA-123");
        firstResult.setDefectId("JIRA-123");
        firstResult.setTestTool("Selenium");


        secondResult.setPortfolio("portfolio1");
        secondResult.setApplication("application1");
        secondResult.setRelease("release1");
        secondResult.setBuild("build1");
        secondResult.setTestRunId("testRun1");
        secondResult.setTestName("Check Balance");
        secondResult.setFunctionalArea("Settings");
        secondResult.setStatus("FAIL");
        secondResult.setStartTime(df.parse("2016-10-14T08:30:43.511Z"));
        secondResult.setEndTime(df.parse("2016-10-15T10:40:53.511Z"));
        secondResult.setMachineName("WILPDM31517");
        secondResult.setExecutedBy("E200");
        secondResult.setOs("Windows7");
        secondResult.setBrowser("Chrome");
        secondResult.setRunCount(2);
        secondResult.setTestType("Manual");
        secondResult.setTestSubType("Unit");
        secondResult.setUserStory("JIRA-123");
        secondResult.setDefectId("JIRA-123");
        secondResult.setTestTool("Seetest");


        thirdResult.setPortfolio("portfolio1");
        thirdResult.setApplication("application1");
        thirdResult.setRelease("release1");
        thirdResult.setBuild("build1");
        thirdResult.setTestRunId("testRun1");
        thirdResult.setTestName("Transfer Funds");
        thirdResult.setFunctionalArea("Settings");
        thirdResult.setStatus("SKIPPED");
        thirdResult.setStartTime(df.parse("2015-10-14T08:30:43.511Z"));
        thirdResult.setEndTime(df.parse("2015-10-15T06:40:53.511Z"));
        thirdResult.setMachineName("WILPDM31517");
        thirdResult.setExecutedBy("E200");
        thirdResult.setOs("Windows7");
        thirdResult.setBrowser("Chrome");
        thirdResult.setRunCount(3);
        thirdResult.setTestType("Manual");
        thirdResult.setTestSubType("API");
        thirdResult.setUserStory("JIRA-123");
        thirdResult.setDefectId("JIRA-123");
        thirdResult.setTestTool("Junit");

        resultList.add(firstResult);
        resultList.add(secondResult);
        resultList.add(thirdResult);
    }

    @Test
    public void testGetResultSummary() throws Exception {

        String expected = "TotalTests: 3, TotalPassed: 1, TotalFailed: 1, TotalSkipped: 1, TotalExecutionTime: 49h 30m 20s";

        resultSummary = resultSummaryCalculator.getResultSummary(resultList);

        int totalTests = resultSummary.getTotalTests();
        int totalPass = resultSummary.getTotalTestsPassed();
        int totalFail = resultSummary.getTotalTestsFailed();
        int totalSkipped = resultSummary.getTotalTestsSkipped();
        String totalExecutionTime = resultSummary.getTotalExecutionTime();

        String actual = "TotalTests: " + totalTests + ", TotalPassed: " + totalPass + ", TotalFailed: " + totalFail + "," +
                " TotalSkipped: " + totalSkipped + ", TotalExecutionTime: " + totalExecutionTime;
        Assert.assertEquals(expected, actual);

    }

    @Test
    public void testGetFunctionalAreaSummary() throws Exception {

        Assert.assertEquals(1,resultSummaryCalculator.getFunctionalAreaSummary(resultList).getFunctionalAreaStatusCount().get("Settings").getPassCount());
        Assert.assertEquals(1,resultSummaryCalculator.getFunctionalAreaSummary(resultList).getFunctionalAreaStatusCount().get("Settings").getFailCount());
        Assert.assertEquals(1,resultSummaryCalculator.getFunctionalAreaSummary(resultList).getFunctionalAreaStatusCount().get("Settings").getSkipCount());

    }
}