import { Component , Input } from '@angular/core';

@Component({
	selector: 'portfolio-table',
	template:`
		<div>
			<table class="table">
	            <thead>
	                <tr>
		              <th>#</th>
		              <th>Application</th>
		              <th>Release</th>
		              <th>Build</th>
				  	  <th>Test Run ID</th>
	                </tr>
	            </thead>
	            <tbody>
	            	<tr *ngFor="let td of tableData;let i = index">
	                  <th scope="row">{{i+1}}</th>
	                  <td>{{td.application}}</td>
	                  <td>{{td.release}}</td>
	                  <td>{{td.build}}</td>
					  <td>{{td.testRunId}}</td>
	                </tr>
	            </tbody>
	        </table>
        </div>
	`
})
export class PortfolioTable{
	@Input() tableData : any;
}