package com.barclays.service;

import com.barclays.model.FunctionalAreaSummary;
import com.barclays.model.Result;
import com.barclays.model.ResultSummary;
import com.barclays.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by RAggarwal on 12/21/2016.
 */

@Service
public class ResultService {

	@Autowired
	ResultRepository resultRepository;
	@Autowired
	ResultSummaryCalculator resultSummaryCalculator;

	public void addResult(Result result) {

		resultRepository.save(result);
	}

	public List<Result> getResultTests(String testRunId) {

		List<Result> resultTests = resultRepository.findByTestRunId(testRunId);
		return resultTests;
	}

	public ResultSummary getResultSummary(String testRunId) {

		List<Result> resultList = getResultTests(testRunId);
		ResultSummary resultSummary = resultSummaryCalculator.getResultSummary(resultList);
		return resultSummary;
	}

	public FunctionalAreaSummary getFunctionalAreaSummary(String testRunId) {

		List<Result> resultList = getResultTests(testRunId);
		FunctionalAreaSummary functionalAreaSummary = resultSummaryCalculator.getFunctionalAreaSummary(resultList);
		return functionalAreaSummary;
	}
}
