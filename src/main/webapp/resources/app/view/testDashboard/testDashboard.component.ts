import { Component } from '@angular/core';
import {Subscription } from 'rxjs';
import { TestTableView } from './testEntity_display.component';
import { TestSummaryView } from './testSummaryView.component';
import { DonutChart } from '../../angular_charts/donutChart.component';
import { BarChart } from '../../angular_charts/barChart.component';
import { PyramidChart } from '../../angular_charts/pyramidChart.component';
import { PathView } from './pathView.component';
import { Router , ActivatedRoute } from '@angular/router';
import { OnInit,OnDestroy } from '@angular/core';
import { TestDashboardService } from '../../services/testDashboard.service';

@Component({
	selector : 'test-dashboard',
	template : `
		<div *ngIf="testPathData">
			<path-view [tValue]="testPathData"></path-view>
		</div>
		<br>
		<div *ngIf="testSummaryData">
			<summary-view [sValues]="testSummaryData"></summary-view>
		</div>
		<br>
		<div *ngIf="barChartData">
		<bar-chart [chartData]="barChartData"></bar-chart>
		</div>
		<br>
		<div style="width:100%">
			<div *ngIf="donutChartData" style="float: left;width:50%;max-height: 400px; margin: 0 auto"><donut-chart [chartData]="donutChartData"></donut-chart></div>
			<div *ngIf="pyramidChartData" style="float: right;width:50%; max-height: 400px; margin: 0 auto"><pyramid-chart [chartData]="pyramidChartData"></pyramid-chart></div>
		</div>
		<br>
		<h3>Test Case Details</h3>
		<br>
		<div *ngIf="testTableData">
			<data-table [tValues]="testTableData"></data-table>
		</div>
	`
})
export class TestDashboard implements OnInit , OnDestroy{
	testRunId : string;
	barChartData : any = null;
	donutChartData :any;
	pyramidChartData : any;
	testTableData : any;
	testPathData : any;
	testSummaryData : any;
	private subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute,private tdService : TestDashboardService) {
    	
    }

	ngOnInit() {
	// subscribe to router event
		this.subscription = this.activatedRoute.params.subscribe(
	    	(param : any) => {
	        this.testRunId = param['id'];
	        this.getBarChartData();
	        this.getDonutChartData();
	        this.getPyramidChartData();
	        this.getTestTableData();
	        this.getTestSummaryData();
	        this.getTestPathData();
	    });
	}

  	ngOnDestroy() {
    	// prevent memory leak by unsubscribing
    	this.subscription.unsubscribe();
  	}

  	getBarChartData(){
  		this.tdService.getBarChartData(this.testRunId).subscribe( data => {
  			this.barChartData =  data;
  		});
  	}

  	getPyramidChartData(){
  		this.tdService.getPyramidChartData(this.testRunId).subscribe( data => {
  			this.pyramidChartData =  data;
  		});
  	}

  	getDonutChartData(){
  		this.tdService.getDonutChartData(this.testRunId).subscribe( data => {
  			this.donutChartData =  data;
  		});
  	}

  	getTestTableData(){
  		this.tdService.getTestTableData(this.testRunId).subscribe( data => {
  			this.testTableData =  data;
  		});	
  	}

  	getTestPathData(){
  		this.tdService.getTestPath(this.testRunId).subscribe( data => {
  			this.testPathData =  data;
  		});	
  	}

  	getTestSummaryData(){
  		this.tdService.getTestSummaryData(this.testRunId).subscribe( data => {
  			this.testSummaryData =  data;
  			console.log(this.testSummaryData);
  		});		
  	}

	
}

