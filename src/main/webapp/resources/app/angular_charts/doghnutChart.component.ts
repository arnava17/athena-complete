import { Component } from '@angular/core';
import { TestSummaryService } from '../services/testSummary.service';
import { TestSummary } from '../testSummary';
import { OnInit } from '@angular/core'
//declare var HighCharts : any;
//import 'https://code.highcharts.com/modules/funnel.js';
declare var $:JQueryStatic;
@Component({
	selector : 'doughnut-chart',
	template : `
		<div *ngIf="chartData" id="chartdiv" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
	`
})
export class DoughnutChart {
	chartData : TestSummary;
	totalPass : number;
	totalFail : number;
	totalSkipped : number;
	constructor(private tsService : TestSummaryService){};
	
	ngAfterInit(){
		this.getTestSummary();
	}

	getTestSummary() : void{
		this.tsService.getTestSummary().subscribe( data => {
      		this.chartData = data;
      		this.renderChart();
    	});
    }

    renderChart() : void{
    	console.log("ghusa");
    	$('#chartdiv').highcharts({

        chart: {
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
        series: [{
            name: ' Tests',
            data: [
                ['Pass', this.totalPass],
                ['Fail', this.totalFail],
                ['Skipped', this.totalSkipped]
            ]
        }]
    });
	       
    }

}