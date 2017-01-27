import { Component , Input } from '@angular/core';
import { ENV_CONST } from '../../const/environment.const';
@Component({
	selector: 'portfolio-summary',
	template: `
					<div *ngIf ="sValues" class="row tile_count">
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-folder"></i> Total Test Runs</span>
              <div class="count" >{{sValues.totalTestRuns}}</div>
              <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-play"></i>  Avg. Execution %</span>
              <div class="count" id="passDiv" [style.color]="const.COLORS.EXECUTION_COLOR">{{sValues.executionPercentage}}</div>
              <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-check"></i>  Avg. Pass %</span>
              <div class="count" id="failDiv" [style.color]="const.COLORS.PASS_COLOR">{{sValues.passPercentage}}</div>
              <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
            </div>
          </div>
          `,
  styles : [
    '.count{font-size : 28px !important;}'
    ],
})
export class PortfolioSummary{
	@Input() sValues : any;
	const = ENV_CONST;
}