import { Component , Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ENV_CONST } from '../../const/environment.const';

@Component({
	selector : 'summary-view',
	template : `
                    <div *ngIf ="sValues" class="row tile_count">
                      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span class="count_top"><i class="fa fa-folder"></i> Total Tests</span>
                        <div class="count" >{{sValues.totalTests}}</div>
                        <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
                      </div>
                      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span class="count_top"><i class="fa fa-check"></i> Passed</span>
                        <div class="count" id="passDiv" [style.color]="const.COLORS.PASS_COLOR">{{sValues.totalTestsPassed}}</div>
                        <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
                      </div>
                      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span class="count_top"><i class="fa fa-times"></i> Failed</span>
                        <div class="count" id="failDiv" [style.color]="const.COLORS.FAIL_COLOR">{{sValues.totalTestsFailed}}</div>
                        <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
                      </div>
                      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span class="count_top"><i class="fa fa-mail-forward"></i> Skipped</span>
                        <div class="count"  id="skipDiv" [style.color]="const.COLORS.SKIP_COLOR">{{sValues.totalTestsSkipped}}</div>
                        <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-6 tile_stats_count">
                        <span class="count_top"><i class="fa fa-clock-o"></i> Total Execution Time</span>
                        <div class="count" style="color:grey;">{{sValues.totalExecutionTime}}</div>
                        <!--<span class="count_bottom"><i class="green">4% </i> From last Week</span>-->
                      </div>
                    </div>`,
  styles : [
    '.count{font-size : 28px !important;}'
    ],
})
export class TestSummaryView{
	@Input() sValues : any;
  const = ENV_CONST;
}
