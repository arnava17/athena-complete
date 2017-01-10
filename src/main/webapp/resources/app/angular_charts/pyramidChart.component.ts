import { Component } from '@angular/core';
import { TestSubTypeSummaryService } from '../services/testSubTypeSummary.service';
import { OnInit } from '@angular/core'
var Highcharts = require('highcharts');
//require('highcharts-3d');
//var more = require('highcharts-more');
//import 'highcharts-more';

//var fun = require ('funnel');
//var exp = require('exporting');
var completeArray : any[] = [];
@Component({
	selector : 'pyramid-chart',
	template : `
		<div id="pyramid-div" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
	`
})
export class PyramidChart {
	foo:any;
    constructor(private fsService : TestSubTypeSummaryService){
        //console.log(hmore);
        //this.foo = new Highcharts();
        //this.foo = new Highcharts();
        //this.foo = new hmore(Highcharts);
        //System.import("node_modules/highcharts/highcharts-more.src.js");
        //import 'http://code.highcharts.com/highcharts-more.js';
    };
	
	ngAfterViewInit(){
		this.getTestSubTypeSummary();
	}

	getTestSubTypeSummary() : void{
		this.fsService.getTestSubTypeSummary().subscribe( data => {
            console.log("Chart Data: "+JSON.stringify(data));
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
            text: 'Test pyramid',
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