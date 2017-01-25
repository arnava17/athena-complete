import { Component , Input } from '@angular/core';

@Component({
	selector: 'portfolio-table',
	template:`
		<div>
			<table class="table">
	            <thead>
	                <tr>
		              <th>#</th>
		              <th>APPLICATION</th>
		              <th>BUILD</th>
		              <th>RELEASE</th>
				  	  <th>TEST NAME</th>
				      <th>STATUS</th>
				  	  <th>FUNCTIONAL AREA</th>
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
        </div>
	`
})
export class PortfolioTable{
	@Input() tableData : any;
}