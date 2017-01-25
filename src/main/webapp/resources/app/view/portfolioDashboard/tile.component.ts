import { Component , Input } from '@angular/core';
import { DonutChart } from '../../angular_charts/donutChart.component';
import { OnInit } from '@angular/core';
import { DEFAULT_CHART_CONFIG } from '../../const/chart.const';
import { ENV_CONST } from '../../const/environment.const';
var Highcharts = require ('highcharts');
@Component({
	selector : 'tile-view',
	template :
  `
  <div style="width:175px;float:left;margin:10px;padding:10px;box-shadow: 0px 0px 2px #2A3F54;">
    <div>
      <h2>{{tileData.applicationName}}</h2>
    </div>
    <hr style="width:80%,color:grey">
    <div>
      <table style="width:100%">
        <tr>
          <th style="text-align:left">Execution %</th>
          <td style="text-align:right">{{tileData.executionPercentage}}</td> 
        </tr>
        <tr>
          <th style="text-align:left">Pass %</th>
          <td  style="text-align:right">90</td> 
        </tr>
      </table>
  </div>
<div id="{{tileData.divName}}" *ngIf="chartData" style="min-width: 100px; max-width:100%;height:175px">
</div>
<!--<div *ngIf="chartData" style="min-width:100px;max-width:100%;height:150px">
  <donut-chart [chartData]="chartData"></donut-chart>
</div>-->
</div>
  `

})
export class TileView implements OnInit{
	@Input() tileData :any;
	chartData :any;
  divName="";
  ngOnInit(){
    this.chartData=this.parseDonutChartData(this.tileData);
    this.divName = "donut_div"+this.tileData.applicationName;
    this.tileData.divName = this.divName;
    
  }

  ngAfterViewInit(){
    Highcharts.chart(this.tileData.divName,this.chartData);
  }
  parseDonutChartData(data:any){
    var colorsArray :  string[] = [ENV_CONST.COLORS.PASS_COLOR,ENV_CONST.COLORS.FAIL_COLOR,ENV_CONST.COLORS.SKIP_COLOR];
    
    var cData = {
        chart: {
            //renderTo : 'donut_div'+data.applicationName,
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
           text: ''
        },
        subtitle: {
            text: ''
        },           
    exporting: { enabled: false },
        plotOptions: {
            pie: {
            size:'100%',

                depth: 45,
      allowPointSelect: true,
        cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
            }
  },
   
  credits: {
    enabled: false
  },
        series: [{
            name: ' Tests',
            data: [
                ['Automation tests', data.automatedTests],
                ['manual tests', data.manualTests]
            ]
        }]
    }
    return cData;
  }
}

    