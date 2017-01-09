import { Component } from '@angular/core';
import { TestTableView } from './view/testEntity_display.component';
import { TestSummaryView } from './view/testSummaryView.component';
import { DoughnutChart } from './angular_charts/doghnutChart.component';


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
    <summary-view></summary-view>
    <br>
    <doughnut-chart></doughnut-chart>
    <h3>Data Table</h3>
  <br>
  <data-table></data-table>
  `,
})
export class AppComponent  { name = 'Angular';
}






