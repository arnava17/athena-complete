package com.barclays.repository;

import com.barclays.model.Result;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by RAggarwal on 12/22/2016.
 */

@Repository
public interface ResultRepository extends MongoRepository<Result, String> {
	List<Result> findAll();
	List<Result> findByTestRunId(String testRunId);
	List<Result> findByPortfolio(String portfolio);
	Long countByTestRunId(String testRunId);
	Long countByTestRunIdAndStatus(String testRunId, String Status);
}