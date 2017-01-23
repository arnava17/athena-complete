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
export class PortfolioDashboardService{
	
	constructor(private httpGetService : HttpGetService){}

	barChartData : any;
	tileData : any;
	portfolioSummary : any;
	portfolioTableData : any;

	getBarChartData(portfolioName:any) : Observable<any> {
		this.barChartData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.PORTFOLIO_SUMMARY;
			url = url.replace("{portfolio_name}" , portfolioName);
			this.httpGetService.getData(url).subscribe( data =>{
				console.log("DATA");
				console.log(data);
				var cData = this.parseBarChartData(data);
				observer.next(cData);
			});
		});
		return this.barChartData;
	}

	getPortfolioSummary(portfolioName:any){
		this.portfolioSummary = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.PORTFOLIO_SUMMARY;
			url = url.replace("{portfolio_name}" , portfolioName);
			this.httpGetService.getData(url).subscribe( data =>{
				console.log("DATA");
				console.log(data);
				//var cData = this.parseTileData(data);
				observer.next(data);
			});
		});
		return this.portfolioSummary;
	}
	getTileData(portfolioName:any) : Observable<any> {
		this.tileData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.PORTFOLIO_SUMMARY;
			url = url.replace("{portfolio_name}" , portfolioName);
			this.httpGetService.getData(url).subscribe( data =>{
				console.log("DATA");
				console.log(data);
				var cData = this.parseTileData(data);
				observer.next(cData);
			});
		});
		return this.tileData;
	}

	getPortfolioTableData(portfolioName:any) : Observable<any> {
		this.portfolioTableData = new Observable((observer : any) => {
			var url = ENV_CONST.API_HOST + ENV_CONST.API.PORTFOLIO_DATA;
			url = url.replace("{portfolio_name}" , portfolioName);
			url = url.replace("{latest_runs}" , "10");
			this.httpGetService.getData(url).subscribe( data =>{
				console.log("DATA");
				console.log(data);
				observer.next(data);
			});
		});
		return this.portfolioTableData;
	}

	parseBarChartData(data:any){
		var list = data.applicationList;
		var cat : any = [];
		var passArray : any = [];
		var execArray : any =[];
		for(var i = 0 ; i < list.length ; i++){
			cat.push(list[i].applicationName);
			passArray.push(list[i].passPercentage);
			execArray.push(list[i].executionPercentage);
		}

		var cData = {
	    	chart: {
	        	renderTo : 'porfolio_bar_div',
	            type: 'bar'
	        },
	        title: {
	            text: 'Apllication vs Test Coverage'
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
	            title: {
	                text: 'Percentage',
	                align: 'high'
	            },
	            labels: {
	                overflow: 'justify'
	            }
	        },
	        tooltip: {
	            valueSuffix: '%'
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
            	name: 'Pass%',
            	color:ENV_CONST.COLORS.PASS_COLOR,
            	data: passArray
        	}
	        , {
	            name: 'Execution%',
	            color: ENV_CONST.COLORS.EXECUTION_COLOR,
	            data: execArray
	        }]
		}
		return cData;
	}

	parseTileData(data:any){
		return data.applicationList;
	}

}
