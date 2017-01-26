package com.barclays.service;

import com.barclays.model.Application;
import com.barclays.model.PortfolioSummary;
import com.barclays.model.Result;
import org.springframework.stereotype.Component;

import java.text.DecimalFormat;
import java.util.*;

/**
 * Created by RNagmoti on 1/11/2017.
 */
@Component
public class PortfolioSummaryCalculator {

    String portfolioName;

    public PortfolioSummary getPortfolioSummary(String portfolioName, List<Result> resultList) {
        this.portfolioName = portfolioName;

        int totalTests = 0;
        int passTests = 0;
        int failTests = 0;
        int skipTests = 0;

        int totalTestsPerApplication = 0;
        int passTestsPerApplication = 0;
        int failTestsPerApplication = 0;
        int skipTestsPerApplication = 0;

        double executionPercentagePerPortfolio = 0;
        double passPercentagePerPortfolio = 0;
        double executionPercentagePerApplication = 0;
        double passPercentagePerApplication = 0;

        Map<String, Application> applicationMap = new HashMap<>();
        List<Application> applicationList = new ArrayList<Application>();

        for (Result result : resultList) {
            String applicationName = result.getApplication();

            if (!(applicationMap.containsKey(applicationName))) {
                applicationMap.put(applicationName, new Application(applicationName));
            }
            Application tempApp = applicationMap.get(applicationName);

            if (result.getStatus().equals("PASS")) {
                passTests++;
                tempApp.setPassTests(tempApp.getPassTests() + 1);
            } else if (result.getStatus().equals("FAIL")) {
                failTests++;
                tempApp.setFailTests(tempApp.getFailTests() + 1);
            } else {
                skipTests++;
                tempApp.setSkipTests(tempApp.getSkipTests() + 1);
            }
            totalTests++;
            tempApp.setTotalTests(tempApp.getTotalTests() + 1);
            if (result.getTestType().equals("Automated")) {
                tempApp.setAutomatedTests(tempApp.getAutomatedTests() + 1);
            } else if (result.getTestType().equals("Manual")) {
                tempApp.setManualTests(tempApp.getManualTests() + 1);
            }

            applicationMap.put(applicationName, tempApp);

        }

        DecimalFormat df = new DecimalFormat("#.00");
        Iterator it = applicationMap.entrySet().iterator();

        while(it.hasNext()){
            Map.Entry pair = (Map.Entry) it.next();
            Application application = (Application) pair.getValue();

            totalTestsPerApplication = application.getTotalTests();
            passTestsPerApplication = application.getPassTests();
            failTestsPerApplication = application.getFailTests();
            skipTestsPerApplication = application.getSkipTests();

            double executionPercentagePerApplicationInitial = (((1.0*totalTestsPerApplication)-(1.0*skipTestsPerApplication))/(1.0*totalTestsPerApplication))*100;
            String executionPercentagePerApplicationString = df.format(executionPercentagePerApplicationInitial);
            executionPercentagePerApplication = Double.parseDouble(executionPercentagePerApplicationString);
            application.setExecutionPercentage(executionPercentagePerApplication);

            double passPercentagePerApplicationInitial = ((1.0*passTestsPerApplication)/(1.0*totalTestsPerApplication))*100;
            String passPercentagePerApplicationString = df.format(passPercentagePerApplicationInitial);
            passPercentagePerApplication = Double.parseDouble(passPercentagePerApplicationString);
            application.setPassPercentage(passPercentagePerApplication);

            applicationMap.put(application.getApplicationName(), application);
        }

        it = applicationMap.entrySet().iterator();

        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            applicationList.add((Application) pair.getValue());

        }


        double passPercentageInitial = (1.0 * passTests) / (1.0 * totalTests) * 100;
        String passPercentageString = df.format(passPercentageInitial);
        passPercentagePerPortfolio = Double.parseDouble(passPercentageString);

        double executionPercentageInitial = ((1.0 * totalTests) - (1.0 * skipTests)) / (1.0 * totalTests) * 100;
        String executionPercentageString = df.format(executionPercentageInitial);
        executionPercentagePerPortfolio = (Double.parseDouble(executionPercentageString));

        PortfolioSummary portfolioSummary = new PortfolioSummary();
        portfolioSummary.setPortfolioName(portfolioName);
        portfolioSummary.setTotalTests(totalTests);
        portfolioSummary.setApplicationList(applicationList);
        portfolioSummary.setPassPercentage(passPercentagePerPortfolio);
        portfolioSummary.setExecutionPercentage(executionPercentagePerPortfolio);

        Map<Date, ArrayList> m = new TreeMap<Date, ArrayList>();

        return portfolioSummary;
    }

    public List<Result> getLatestRunsDetails(String portfolioName, List<Result> resultList, int latestRuns) {

        Collections.sort(resultList, new Comparator<Result>() {
            @Override
            public int compare(Result result1, Result result2) {
                return result2.getEndTime().compareTo(result1.getEndTime());
            }
        });

        Map <String, Result> latestRunMap = new HashMap<String, Result>();

        for(Result result : resultList){
            if(!latestRunMap.containsKey(result.getTestRunId())){
                if(latestRunMap.size() < latestRuns){
                    latestRunMap.put(result.getTestRunId(), result);
                }
            }
        }

        List<Result> latestRunList = new ArrayList<Result>();

        Iterator it = latestRunMap.entrySet().iterator();
        while(it.hasNext()){
            Map.Entry pair = (Map.Entry) it.next();
            latestRunList.add((Result) pair.getValue());
        }

        Collections.sort(latestRunList, new Comparator<Result>() {
            @Override
            public int compare(Result result1, Result result2) {
                return result2.getEndTime().compareTo(result1.getEndTime());
            }
        });

        return latestRunList;
    }
}
