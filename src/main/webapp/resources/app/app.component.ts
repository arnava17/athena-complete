import { Component } from '@angular/core';
import { TestTableView } from './view/testEntity_display.component';
import { TestSummaryView } from './view/testSummaryView.component';
import { DonutChart } from './angular_charts/donutChart.component';
import { BarChart } from './angular_charts/barChart.component';
import { PyramidChart } from './angular_charts/pyramidChart.component';
import { PathView } from './view/pathView.component';
//<summary-view></summary-view>
//<div>
//<div id="bardiv" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
//</div>
//<h3>Data Table</h3>
//<br>
//<data-table></data-table>
@Component({
  selector: 'my-app',
  template: `
    <path-view></path-view>
    <br>
    <summary-view></summary-view>
    <br>
    <bar-chart></bar-chart>
    <br>
    <div style="width:100%">
      <div  style="float: left;width:50%;max-height: 400px; margin: 0 auto"><donut-chart></donut-chart></div>
      <div  style="float: right;width:50%; max-height: 400px; margin: 0 auto"><pyramid-chart></pyramid-chart></div>
    </div>
    <br>
    <h3>Data Table</h3>
    <br>
    <data-table></data-table>
  `,
})
export class AppComponent  { name = 'Angular';
}






