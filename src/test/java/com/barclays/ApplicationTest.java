package com.barclays;

import com.barclays.model.Result;
import com.barclays.repository.ResultRepository;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.path.json.JsonPath;
import org.json.JSONArray;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.jayway.restassured.RestAssured.given;
import static com.jayway.restassured.RestAssured.when;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.lessThan;
import static org.hamcrest.core.IsCollectionContaining.hasItem;
import static org.hamcrest.core.IsCollectionContaining.hasItems;
import static org.hamcrest.core.IsEqual.equalTo;
import org.hamcrest.Matchers;

import org.hamcrest.Matchers.*;

/**
 * Created by Rohan on 1/2/2017.
 */

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationTest {

    //GetResultTests
    private String portfolio = "portfolio1";
    private String application = "application1";
    private String release = "Release 1";
    private String build = "Build1";
    private String testRunId = "testRun1";
    private String testName = "Add Card Details";
    private String functionalArea = "Settings";
    private String status = "PASS";

    DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.'511Z'");

    private String startTimeString = "2012-10-14T18:30:53.511Z";
    private Date startTime = df.parse(startTimeString);

    private String endTimeString = "2012-10-14T19:40:53.511Z";
    private Date endTime = df.parse(endTimeString);

    private String machineName = "WILPDM31517";
    private String executedBy = "E200";
    private String os = "Windows7";
    private String browser = "Chrome";
    private int runCount = 1;
    private String testType = "Automated";
    private String testSubType = "E2E";
    private String userStory = "JIRA-123";
    private String defectId = "JIRA-123";
    private String testTool = "Selenium";

    //GetResultSummary
    private int totalTests = 1;
    private  int totalPass = 1;
    private int totalFail = 0;
    private int totalSkipped = 0;
    private String totalExecutionTime = "1h 10m 0s";

    @Mock
    Result result;

    @LocalServerPort
    private int serverPort;


    @Autowired
    ResultRepository resultRepository;

    public ApplicationTest() throws ParseException {
    }

    @Before
    public void setUp() {
        resultRepository.deleteAll();

        result = new Result();
        result.setPortfolio(portfolio);
        result.setApplication(application);
        result.setRelease(release);
        result.setBuild(build);
        result.setTestRunId(testRunId);
        result.setTestName(testName);
        result.setFunctionalArea(functionalArea);
        result.setStatus(status);
        result.setStartTime(startTime);
        result.setEndTime(endTime);
        result.setMachineName(machineName);
        result.setExecutedBy(executedBy);
        result.setOs(os);
        result.setBrowser(browser);
        result.setRunCount(runCount);
        result.setTestType(testType);
        result.setTestSubType(testSubType);
        result.setUserStory(userStory);
        result.setDefectId(defectId);
        result.setTestTool(testTool);

        resultRepository.save(result);
        RestAssured.port = serverPort;
    }

    @Test
    public void getResultTestsShouldReturnListOfTestsForATestRunId() {
        when()
                .get("/api/v1/results/{testRunId}/tests", "testRun1")
                .then()
                .statusCode(200)
                .body("portfolio",hasItem(portfolio) )
                .body("application", hasItem(application))
                .body("release", hasItem(release))
                .body("build", hasItem(build))
                .body("testRunId", hasItem(testRunId))
                .body("testName", hasItem(testName))
                .body("status", hasItem(status))
                .body("startTime", hasItem(startTime.getTime()))
                .body("endTime", hasItem(endTime.getTime()))
                .body("machineName", hasItem(machineName))
                .body("executedBy", hasItem(executedBy))
                .body("os", hasItem(os))
                .body("browser", hasItem(browser))
                .body("runCount", hasItem(runCount))
                .body("testType", hasItem(testType))
                .body("testSubType", hasItem(testSubType))
                .body("userStory", hasItem(userStory))
                .body("defectId", hasItem(defectId))
                .body("testTool", hasItem(testTool));

    }

    @Test
    public void getResultSummaryShouldReturnResultSummaryWhenCalled(){
        when()
                .get("/api/v1/results/{testRunId}/result_summary","testRun1")
                .then()
                .statusCode(200)
                .body("totalTests",equalTo(totalTests))
                .body("totalTestsPassed",equalTo(totalPass))
                .body("totalTestsFailed",equalTo(totalFail))
                .body("totalTestsSkipped",equalTo(totalSkipped))
                .body("totalExecutionTime",equalTo(totalExecutionTime));
    }
    @Test
    public void getFunctionalAreaSummaryShouldReturnFunctionalAreaSummaryWhenCalled(){
        when()
                .get("/api/v1/results/{testRunId}/functional_summary","testRun1")
                .then()
                .statusCode(200)
                .body("passCount", hasItems(1))
                .body("failCount", hasItems(0))
                .body("skipCount", hasItems(0));

    }

    @Test
    public void getTestSubTypeSummaryShouldReturnTestSubTypeSummaryWhenCalled(){
        when()
                .get("/api/v1/results/{testRunId}/test_sub_type_summary","testRun1")
                .then()
                .statusCode(200)
                .body("testSubtypeName", hasItems("E2E"))
                .body("testSubTypeCount", hasItems(1));
    }

    @Test
    public void addResultShouldPostResultIntoDatabase(){
        Map<String,String> testCase = new HashMap<String,String>();
        testCase.put("portfolio" , "p1");
        testCase.put("application" , "ap1");
        testCase.put("release" , "r1");
        testCase.put("build" , "b1");
        testCase.put("testRunId" , "lol5");
        testCase.put("testName" , "t1");
        testCase.put("functionalArea" , "fa1");
        testCase.put("status" , "PASS");
        testCase.put("startTime" , "2012-04-23T18:25:43.511Z");
        testCase.put("endTime" , "2012-04-23T19:45:63.511Z");
        testCase.put("machineName" , "mn1");
        testCase.put("executedBy" , "eb1");
        testCase.put("os" , "os1");
        testCase.put("browser" , "browser1");
        testCase.put("runCount" , "1");
        testCase.put("testType" , "automated");
        testCase.put("testSubType" , "E2E");
        testCase.put("userStory" , "JIRA");
        testCase.put("defectId" , "JIRA");
        testCase.put("testTool" , "Selenium");

        given()
                .contentType("application/json")
                .body(testCase)
                .when()
                .post("/api/v1/results/")
                .then()
                .statusCode(201);
    }
}