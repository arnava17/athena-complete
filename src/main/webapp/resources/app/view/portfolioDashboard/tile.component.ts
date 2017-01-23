import { Component , Input } from '@angular/core';
import { DonutChart } from '../../angular_charts/donutChart.component';
import { OnInit } from '@angular/core';
import { DEFAULT_CHART_CONFIG } from '../../const/chart.const';
import { ENV_CONST } from '../../const/environment.const';
@Component({
	selector : 'portfolioTile-view',
	template :`
			<div class="col-md-2 col-sm-1 col-xs-1">
                <div class="x_panel">
                  <div class="x_title">
			  		<h2>{{tileData.applicationName}}</h2>		
                    <div class="clearfix"></div>
                  </div>
		 		  <table style="width:90%">
 					<tr font-style: normal>
    					<td>Execution%</td>
    					<td>{{tileData.executionPercentage}}</td> 
  					</tr>
  					<tr>
    					<td>Pass%</td>
    					<td>{{tileData.passPercentage}}</td> 
  					</tr> 
				  </table> 
                  <div class="x_content">
                    <div *ngIf="chartData" style="height:205px;width:170px;margin-top:-20px;border:1px solid black" ><donut-chart [chartData]="chartData"></donut-chart></div>
                  </div>
                </div>
              </div>        
	`
})
export class TileView implements OnInit{
	@Input() tileData :any;
	chartData :any;

  ngOnInit(){
    this.chartData=this.parseDonutChartData(this.tileData);
  }
  parseDonutChartData(data:any){
    var colorsArray :  string[] = [ENV_CONST.COLORS.PASS_COLOR,ENV_CONST.COLORS.FAIL_COLOR,ENV_CONST.COLORS.SKIP_COLOR];
    var cData = {
          chart: {
              renderTo : "donut_chart_"+data.applicationName,
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
              text: ''
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              pie: {
                  innerSize: 10,
                  depth: 25
              }
          },
          colors : colorsArray,
          series: [{
                      name: ' Tests',
                      data: [
                              ['Automated Tests', data.automatedTests],
                              ['Manual Tests', data.manualTests]
                      ]
                    }]
  }
    return cData;
  }
}

    