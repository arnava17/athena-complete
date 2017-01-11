import { Component } from '@angular/core';
import { FunctionalSummaryService } from '../services/functionalSummary.service';
import { OnInit } from '@angular/core'
import { ENV_CONST } from '../const/environment.const';
var Highcharts = require('highcharts');
var cat : string[] = [];
var passed : number[] = [];
var failed : number[] = [];
var skipped : number[] = [];
@Component({
	selector : 'bar-chart',
	template : `
		<div id="bardiv" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
	`
})
export class BarChart {
	constructor(private fsService : FunctionalSummaryService){};
	
	ngAfterViewInit(){
		this.getFunctionalSummary();
	}

	getFunctionalSummary() : void{
		this.fsService.getFunctionalSummary().subscribe( data => {
            //console.log("Chart Data: "+JSON.stringify(data));
            this.parseData(data);
      		this.renderChart();
    	});
    }

    parseData(data : any) : void{
    	var count = data.length;
	    for(var i = 0 ; i < count ; i++){
	        cat.push(data[i].functionalAreaName);
	        //console.log(cat[i]);
	        passed.push(data[i].passCount);
	        failed.push(data[i].failCount);
	        skipped.push(data[i].skipCount);
	    }
	    //console.log(cat);
    }

    renderChart() : void{
    	Highcharts.chart({
        chart: {
        	renderTo : 'bardiv',
            type: 'bar'
        },
        title: {
            text: 'Functional Area vs tests status'
        },
        subtitle: {
             },
        xAxis: {
            categories: cat,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Tests ',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' tests'
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
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
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
    });
	       
    }
}