import { Component } from '@angular/core';
import { TestTableView } from './testEntity_display.component';
import { TestSummaryView } from './testSummaryView.component';

@Component({
  selector: 'my-app',
  template: `
  			<summary-view></summary-view>
  			<h3>Data Table</h3>
  			<br>
  			<data-table></data-table>`,
})
export class AppComponent  { name = 'Angular';
}





 
