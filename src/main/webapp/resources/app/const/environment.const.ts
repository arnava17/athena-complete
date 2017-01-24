export const ENV_CONST = {
	
	COLORS:{
		//PASS_COLOR : '#3EF95A',
		//FAIL_COLOR : '#F73D44',
		//SKIP_COLOR : '#F9B07F',
		//EXECUTION_COLOR : '#00AFF0'
		
		//Bootstrap label colors
		PASS_COLOR 		: '#5CB85C',
		FAIL_COLOR 		: '#D9534F',
		SKIP_COLOR 		: '#F0AD4E',
		EXECUTION_COLOR : '#337AB7'
	},

	API_HOST: 'http://localhost:8080',
	
	API:{
		TEST_DATA : '/api/v1/results/{test_run_id}/tests',
		TEST_SUMMARY : '/api/v1/results/{test_run_id}/result_summary',
		FUNCTIONAL_SUMMARY : '/api/v1/results/{test_run_id}/functional_summary',
		TEST_SUBTYPE_SUMMARY : '/api/v1/results/{test_run_id}/test_sub_type_summary',
		PORTFOLIO_SUMMARY : '/api/v1/portfolio/{portfolio_name}',
		PORTFOLIO_DATA : '/api/v1/portfolio/{portfolio_name}/history/{latest_runs}'
	},

	LABELS:{
		PASS_LABEL 		: 'label label-success',
		FAIL_LABEL 		: 'label label-danger',
		SKIP_LABEL 		: 'label label-warning',
		EXECUTION_LABEL : 'label label-primary'
	}
	
}