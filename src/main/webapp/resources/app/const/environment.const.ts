export const ENV_CONST = {
	
	COLORS:{
		PASS_COLOR : '#3EF95A',
		FAIL_COLOR : '#F73D44',
		SKIP_COLOR : '#F9B07F',
		EXECUTION_COLOR : '#00AFF0'
		//SKIP_COLOR : '#6C7A87'
	},

	API_HOST: 'http://localhost:8080',
	
	API:{
		TEST_DATA : '/api/v1/results/{test_run_id}/tests',
		TEST_SUMMARY : '/api/v1/results/{test_run_id}/result_summary',
		FUNCTIONAL_SUMMARY : '/api/v1/results/{test_run_id}/functional_summary',
		TEST_SUBTYPE_SUMMARY : '/api/v1/results/{test_run_id}/test_sub_type_summary',
		PORTFOLIO_SUMMARY : '/api/v1/portfolio/{portfolio_name}',
		PORTFOLIO_DATA : '/api/v1/portfolio/{portfolio_name}/history/{latest_runs}'
	}
	
}