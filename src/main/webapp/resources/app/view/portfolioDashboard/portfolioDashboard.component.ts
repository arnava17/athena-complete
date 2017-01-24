import { Component } from '@angular/core';
import {Subscription } from 'rxjs';
import { DonutChart } from '../../angular_charts/donutChart.component';
import { BarChart } from '../../angular_charts/barChart.component';
import { Router , ActivatedRoute } from '@angular/router';
import { OnInit,OnDestroy } from '@angular/core';
import { PortfolioDashboardService } from '../../services/portfolioDashboard.service';
import {Observable} from "rxjs/Rx";
import { ENV_CONST } from '../../const/environment.const'
import { PortfolioSummary } from './portfolioSummary.component';
import { PortfolioTable } from './portfolioTable.component';
import { TileView } from './tile.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
var Highcharts = require('highcharts');

@Component({
    selector : 'porfolio-dashboard',
    template : `
    	<ul *ngIf = "portfolioName" class="breadcrumb active" style="background-color:white !important;font-size:15px !important">
        <li>{{portfolioName}}</li>
      </ul>
    	<br>
    	
      <div *ngIf="portfolioSummary">
    		<portfolio-summary [sValues]="portfolioSummary"></portfolio-summary>
    	</div>
    	
      <div *ngIf="barChartData">
    		<bar-chart [chartData]="barChartData"></bar-chart>
    	</div>
    	
      <div *ngIf="tileData">	
        <portfolioTile-view *ngFor="let tData of tileData" [tileData]="tData"></portfolioTile-view>
    	</div>
      <br>
      <div *ngIf="portfolioTableData">
    		<portfolio-table [tableData]="portfolioTableData"></portfolio-table>
    	</div>
    `
})
export class PortfolioDashboard implements OnInit , OnDestroy{
  private subscription: Subscription;
  portfolioName :any;
  portfolioSummary : any;
  barChartData : any;
  portfolioTableData : any;
  tileData : any;
  constructor(private activatedRoute: ActivatedRoute,private pdService : PortfolioDashboardService) {}

	ngOnInit() {
	// subscribe to router event
		this.subscription = this.activatedRoute.params.subscribe(
	    	(param : any) => {
	        this.portfolioName = param['name'];
	        //console.log(this.portfolioName);   
	        this.setBarChartData();
	        this.setPortfolioSummary();
	        this.setPortfolioTableData();
	        this.setTileData();
	    });
	}


	setBarChartData(){
  		this.pdService.getBarChartData(this.portfolioName).subscribe( data => {
  			this.barChartData =  data;
  		});
  	}

	setPortfolioSummary(){
		this.pdService.getPortfolioSummary(this.portfolioName).subscribe( (data:any) => {
  			this.portfolioSummary =  data;
  		});	
	}

	setPortfolioTableData(){
		this.pdService.getPortfolioTableData(this.portfolioName).subscribe( data => {
  			this.portfolioTableData =  data;
  		});	
	}

	setTileData(){
		this.pdService.getTileData(this.portfolioName).subscribe( data => {
  			this.tileData =  data;
  		});	
	}

  	ngOnDestroy() {
    	this.subscription.unsubscribe();
  	}
}


