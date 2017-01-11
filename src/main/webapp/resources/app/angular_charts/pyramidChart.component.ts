import { Component } from '@angular/core';
import { TestSubTypeSummaryService } from '../services/testSubTypeSummary.service';
import { OnInit } from '@angular/core'
import { ENV_CONST } from '../const/environment.const';
var Highcharts = require('highcharts');
require('funnel')(Highcharts);
require('exporting')(Highcharts);

var completeArray : any[] = [];
@Component({
	selector : 'pyramid-chart',
	template : `
		<div id="pyramid-div"></div>
	`
})
export class PyramidChart {
	foo:any;
    constructor(private fsService : TestSubTypeSummaryService){};
	
	ngAfterViewInit(){
		this.getTestSubTypeSummary();
	}

	getTestSubTypeSummary() : void{
		this.fsService.getTestSubTypeSummary().subscribe( data => {
            //console.log("Chart Data: "+JSON.stringify(data));
            this.parseData(data);
      		this.renderChart();
    	});
    }

    parseData(data : any) : void{
    	var count = data.length;
        for(var i = 0 ; i < count ; i++){
            var funcObjArray : [string,number];
            var typeName = data[i].testSubTypeName;
            var typeCount = data[i].testSubTypeCount
            funcObjArray = [typeName,typeCount];
            completeArray.push(funcObjArray);       
        }
    }

    renderChart() : void{
    	Highcharts.chart({
        chart: {
            renderTo : 'pyramid-div',
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
    });
	       
    }
}