import { Component , Input } from '@angular/core';

@Component({
	selector: 'portfolio-table',
	template:`
		<table class="table">
            <thead>
                <tr>
	              <th>#</th>
	              <th>Application</th>
	              <th>Build</th>
	              <th>release</th>
			  	  <th>test name</th>
			      <th>status</th>
			  	  <th>functional area</th>
                </tr>
            </thead>
            <tbody>
            	<tr *ngFor="let td of tableData;let i = index">
                  <th scope="row">{{i+1}}</th>
                  <td>{{td.application}}</td>
                  <td>{{td.build}}</td>
                  <td>{{td.release}}</td>
				  <td>{{td.testName}}</td>
			      <td>{{td.status}}</td>
			  	  <td>{{td.functionalArea}}</td>
                </tr>
                        
            </tbody>
        </table>
	`
})
export class PortfolioTable{
	@Input() tableData : any;
}