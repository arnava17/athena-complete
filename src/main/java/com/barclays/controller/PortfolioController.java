package com.barclays.controller;

import com.barclays.model.PortfolioSummary;
import com.barclays.model.Result;
import com.barclays.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by
 * RNagmoti on 1/11/2017.
 */
@RestController
@RequestMapping("/api/v1/portfolio")
public class PortfolioController {

    @Autowired
    PortfolioService portfolioService;

    @RequestMapping(value="/{portfolio_name}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public PortfolioSummary getPortfolioSummary(@PathVariable("portfolio_name") String portfolioName ) {
        return portfolioService.getPortfolioSummary(portfolioName);
    }

    @RequestMapping(value="/{portfolio_name}/history/{latest_runs}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<Result> getLatestRuns(@PathVariable("portfolio_name") String portfolioName, @PathVariable("latest_runs") int latestRuns) {
        return portfolioService.getLatestRuns(portfolioName, latestRuns);
    }
}