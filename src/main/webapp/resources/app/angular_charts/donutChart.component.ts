import { Component } from '@angular/core';
import { TestSummaryService } from '../services/testSummary.service';
import { TestSummary } from '../testSummary';
import { OnInit } from '@angular/core'
import { ENV_CONST } from '../const/environment.const';
var Highcharts = require('highcharts');
var colorsArray :  string[] = [ENV_CONST.COLORS.PASS_COLOR,ENV_CONST.COLORS.FAIL_COLOR,ENV_CONST.COLORS.SKIP_COLOR];
@Component({
	selector : 'donut-chart',
	template : `
		<div id="donutdiv"></div>
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
            //console.log("Chart Data: "+JSON.stringify(data));
      		this.renderChart(this.chartData);
    	});
    }

    renderChart(chartData : any) : void{
    	
        //console.log(chartData.totalTestsPassed);
    	Highcharts.chart({


        chart: {
            renderTo : 'donutdiv',
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