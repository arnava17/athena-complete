import { Component , Input , AfterViewInit } from '@angular/core';
import { DEFAULT_CHART_CONFIG } from '../const/chart.const'
import { ENV_CONST } from '../const/environment.const';

var Highcharts = require('highcharts');
require('funnel')(Highcharts);
require('exporting')(Highcharts);

@Component({
	selector : 'pyramid-chart',
	template : `
		<div id="{{chartData.chart.renderTo}}"></div>
	`
})
export class PyramidChart implements AfterViewInit{
    @Input() chartData : any;
    
    ngAfterViewInit(){
        this.renderChart(this.chartData);
    }

    renderChart(data:any) : void{
        Highcharts.chart(data);
    }
}