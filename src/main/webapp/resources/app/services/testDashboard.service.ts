import { Injectable } from '@angular/core';
import { ENV_CONST } from '../const/environment.const';
import { DEFAULT_CHART_CONFIG } from '../const/chart.const'
import { HttpGetService } from './httpGet.service';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
var Highcharts = require('highcharts');

@Injectable()
export class TestDashboardService{
	
	constructor(private httpGetService : HttpGetService){}

	barChartData : any = DEFAULT_CHART_CONFIG.BAR_CHART;

	donutChartData : any = DEFAULT_CHART_CONFIG.DONUT_CHART;

	pyramidChartData : any = DEFAULT_CHART_CONFIG.PYRAMID_CHART;

	testSummaryData : any = {};

	testTableData : any = [];

	testPathData : any = {};
		
	getBarChartData(testRunId:any) : Observable<any> {
		this.barChartData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.FUNCTIONAL_SUMMARY;
			url = url.replace("{test_run_id}",testRunId);
			//console.log(url);
			this.httpGetService.getData(url).subscribe( data =>{
				//console.log("DATA");
				//console.log(data);
				var cData = this.parseBarChartData(data);
				observer.next(cData);
			});
		});
		return this.barChartData;
	}

	getDonutChartData(testRunId: any) : Observable<any>{
		this.donutChartData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.TEST_SUMMARY;
			url = url.replace("{test_run_id}",testRunId);
			//console.log(url);
			this.httpGetService.getData(url).subscribe( data =>{
				//console.log("DATA");
				//console.log(data);
				var cData = this.parseDonutChartData(data);
				observer.next(cData);
			});
		});
		return this.donutChartData;
	}

	getPyramidChartData(testRunId: any) : Observable<any>{
		this.pyramidChartData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.TEST_SUBTYPE_SUMMARY;
			url = url.replace("{test_run_id}",testRunId);
			//console.log(url);
			this.httpGetService.getData(url).subscribe( data =>{
				//console.log("DATA");
				//console.log(data);
				var cData = this.parsePyramidChartData(data);
				observer.next(cData);
			});
		});
		return this.pyramidChartData;
	}

	getTestTableData(testRunId: any) : Observable<any>{
		this.testTableData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.TEST_DATA;
			url = url.replace("{test_run_id}",testRunId);
			//console.log(url);
			this.httpGetService.getData(url).subscribe( data =>{
				//console.log("DATA");
				//console.log(data);
				var cData = this.parseTestTableData(data);
				observer.next(cData);
			});
		});
		return this.testTableData;
	}

	getTestPath(testRunId: any) : Observable<any>{
		this.testPathData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.TEST_DATA;
			url = url.replace("{test_run_id}",testRunId);
			//console.log(url);
			this.httpGetService.getData(url).subscribe( data =>{
				//console.log("DATA");
				//console.log(data);
				var cData = this.parseTestPathData(data);
				observer.next(cData);
			});
		});
		return this.testPathData;
	}

	getTestSummaryData(testRunId: any) : Observable<any>{
		this.testSummaryData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.TEST_SUMMARY;
			url = url.replace("{test_run_id}",testRunId);
			//console.log(url);
			this.httpGetService.getData(url).subscribe( data =>{
				//console.log("DATA");
				//console.log(data);
				var cData = this.parseSummaryViewData(data);
				observer.next(cData);
			});
		});
		return this.testSummaryData;
	}

	parseSummaryViewData(data:any){
		return data;
	}

	parseTestPathData(data:any){
		return data[0];
	}
	parseTestTableData(data:any){
		return data;
	}
	parseBarChartData(data:any) {
		//var data = this.functionalSummary;

		var cat : string[] = [];
		var passed : number[] = [];
		var failed : number[] = [];
		var skipped : number[] = [];

		var count = data.length;
	    for(var i = 0 ; i < count ; i++){
	        cat.push(data[i].functionalAreaName);
	        passed.push(data[i].passCount);
	        failed.push(data[i].failCount);
	        skipped.push(data[i].skipCount);
	    }

	    var cData = {
	    	chart: {
	        	renderTo : 'test_bar_div',
	            type: 'bar'
	        },
	        title: {
	            text: 'Functional Area vs Tests'
	        },
	        subtitle: {
	        },
	        xAxis: {
	            categories: cat,
	            title: {
	                text: ''
	            }
	        },
	        yAxis: {
	            min: 0,
	            allowDecimals : false,
	            title: {
	                text: 'Number of tests',
	                align: 'high'
	            },
	            labels: {
	                overflow: 'justify'
	            }
	        },
	        tooltip: {
	            valueSuffix: 'tests'
	        },
	        plotOptions: {
	            bar: {
	                dataLabels: {
	                    enabled: true
	                }
	            }
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'top',
	            x: -40,
	            y: 80,
	            floating: true,
	            borderWidth: 1,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FFFFFF',
	            shadow: true
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
            	name: 'Passed',
            	color:ENV_CONST.COLORS.PASS_COLOR,
            	data: passed
        	}
	        , {
	            name: 'Failed',
	            color: ENV_CONST.COLORS.FAIL_COLOR,
	            data: failed
	        },
	    	{
	            name: 'Skipped',
	            color:ENV_CONST.COLORS.SKIP_COLOR,
	            data: skipped
	    	}]
		}
		return cData;
	}

	parseDonutChartData(data:any) : any{
		var colorsArray :  string[] = [ENV_CONST.COLORS.PASS_COLOR,ENV_CONST.COLORS.FAIL_COLOR,ENV_CONST.COLORS.SKIP_COLOR];
		var cData = 
		{
	        chart: {
	            renderTo : 'test_donutdiv',
	            type: 'pie',
	            options3d: {
	                enabled: true,
	                alpha: 45
	            }
	        },
	        credits: {
	            enabled: false
	        },
	        title: {
	            text: 'Status of tests'
	        },
	        subtitle: {
	            text: 'passed/failed/skipped'
	        },
	        plotOptions: {
	            pie: {
	                innerSize: 100,
	                depth: 45
	            }
	        },
	        colors : colorsArray,
	        series: [{
	            name: ' Tests',
	            data: [
	                ['Pass', data.totalTestsPassed],
	                ['Fail', data.totalTestsFailed],
	                ['Skipped', data.totalTestsSkipped],
	            ]
	        }]
	    }
	    return cData;
	}

	parsePyramidChartData(data:any){
		var count = data.length;
		var completeArray :any = [];

        for(var i = 0 ; i < count ; i++){
            var funcObjArray : [string,number];
            var typeName = data[i].testSubTypeName;
            var typeCount = data[i].testSubTypeCount
            funcObjArray = [typeName,typeCount];
            completeArray.push(funcObjArray);       
        }
		var cData = {
        chart: {
            renderTo : 'test_pyramid_div',
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'Test Subtype Pyramid',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'Tests',
            data: completeArray
        }]
    }
    return cData;
	}
}
