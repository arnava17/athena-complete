package com.barclays.controller;

import com.barclays.model.FunctionalAreaSummary;
import com.barclays.model.Result;
import com.barclays.model.ResultSummary;
import com.barclays.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by RAggarwal on 12/21/2016.
 */

@RestController
@RequestMapping("/api/v1/results")
public class ResultController {

	@Autowired
	ResultService resultService;

	@RequestMapping(value="/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void addResult(@RequestBody Result result){
		resultService.addResult(result);
	}

	@RequestMapping(value="/{test_run_id}/tests", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public List<Result> getResultTests(@PathVariable("test_run_id") String testRunId) {
		return resultService.getResultTests(testRunId);
	}

	@RequestMapping(value="/{test_run_id}/result_summary", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public ResultSummary getResultSummary(@PathVariable("test_run_id") String testRunId) {
		return resultService.getResultSummary(testRunId);
	}

	@RequestMapping(value="/{test_run_id}/functional_summary", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public FunctionalAreaSummary getFunctionalAreaSummary(@PathVariable("test_run_id") String testRunId) {
		return resultService.getFunctionalAreaSummary(testRunId);
	}


}