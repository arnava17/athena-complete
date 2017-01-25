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
				  	  <th>Test Run</th>
	                </tr>
	            </thead>
	            <tbody>
	            	<tr *ngFor="let td of tableData;let i = index">
	                  <th scope="row">{{i+1}}</th>
	                  <td>{{td.application}}</td>
	                  <td>{{td.release}}</td>
	                  <td>{{td.build}}</td>
					  <td><a style="text-decoration:underline" routerLink="/testdashboard/{{td.testRunId}}">Launch Test Results</a></td>
	                </tr>
	            </tbody>
	        </table>
        </div>
	`
})
export class PortfolioTable{
	@Input() tableData : any;
}