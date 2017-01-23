package com.barclays.service;

import com.barclays.model.PortfolioSummary;
import com.barclays.model.Result;
import com.barclays.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by RNagmoti on 1/11/2017.
 */
@Service
public class PortfolioService {

    @Autowired
    ResultRepository resultRepository;
    @Autowired
    PortfolioSummaryCalculator portfolioSummaryCalculator;
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