import { Component } from '@angular/core';
import { TestSummaryService } from '../services/testSummary.service';
import { TestSummary } from '../testSummary';
import { OnInit } from '@angular/core'
var Highcharts = require('highcharts');

@Component({
	selector : 'donut-chart',
	template : `
		<div id="chartdiv" style="min-width: 310px; max-width: 400px; height: 400px; margin: 0 auto"></div>
	`
})
export class DonutChart {
	chartData : TestSummary;
	constructor(private tsService : TestSummaryService){};
	
	ngAfterViewInit(){
		this.getTestSummary();
	}

	getTestSummary() : void{
		this.tsService.getTestSummary().subscribe( data => {
      		this.chartData = data;
            console.log("Chart Data: "+JSON.stringify(data));
      		this.renderChart(this.chartData);
    	});
    }

    renderChart(chartData : any) : void{
    	
        console.log(chartData.totalTestsPassed);
    	Highcharts.chart({


        chart: {
            renderTo : 'chartdiv',
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
                ['Pass', chartData.totalTestsPassed],
                ['Fail', chartData.totalTestsFailed],
                ['Skipped', chartData.totalTestsSkipped],
//['Oranges', 6],
  //              ['Apples', 8],
    //            ['Pears', 4],
      //          ['Clementines', 4],
        //        ['Reddish (bag)', 1],
          //      ['Grapes (bunch)', 1]
            ]
        }]
    });
	       
    }

}