package com.barclays.service;

import com.barclays.model.PortfolioSummary;
import com.barclays.model.Result;
import com.barclays.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by RNagmoti on 1/11/2017.
 */
@Service
public class PortfolioService {

    @Autowired
    ResultRepository resultRepository;
    @Autowired
    PortfolioSummaryCalculator portfolioSummaryCalculator;

    public List<String> getAllPortfolioNames(){
        List<Result> resultList = resultRepository.findAll();
        List<String> portfolioNames = new ArrayList<>();

        Map<String, Integer> portfolioMap = new HashMap<String, Integer>();
        for(Result result : resultList){
            if(!portfolioMap.containsKey(result.getPortfolio())){
                portfolioMap.put(result.getPortfolio(), 0);
            }
        }

        Iterator it = portfolioMap.entrySet().iterator();
        while(it.hasNext()){
            Map.Entry pair = (Map.Entry) it.next();
            portfolioNames.add(pair.getKey().toString());
        }

        Collections.sort(portfolioNames);
        return portfolioNames;
    }

    public PortfolioSummary getPortfolioSummary(String portfolioName) {
        List<Result> resultListByPortfolio = resultRepository.findByPortfolio(portfolioName);
        PortfolioSummary portfolioSummary = portfolioSummaryCalculator.getPortfolioSummary(portfolioName, resultListByPortfolio);
        return portfolioSummary;
    }

    public List<Result> getLatestRuns(String portfolioName, int latestRuns){
        List<Result> resultListByPortfolio = resultRepository.findByPortfolio(portfolioName);
        List<Result> latestRunsDetails = portfolioSummaryCalculator
                .getLatestRunsDetails(portfolioName,resultListByPortfolio, latestRuns);
        return latestRunsDetails;
    }
}