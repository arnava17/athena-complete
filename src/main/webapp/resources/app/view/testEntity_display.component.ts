import { Component } from '@angular/core';
import { TestEntity } from '../testEntity';
import { TestEntityService } from '../services/testEntity.service';
import { OnInit } from '@angular/core';
//import { HttpModule }    from '@angular/http';


@Component({
	selector : 'data-table',
	template : `
          <table class="table">
    				<thead>
    					<th>Test Name</th>
              <th>Functional Area</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>End Time</th>
    				</thead>
    				<tbody>
      				<tr *ngFor="let tValue of tValues">
      					<td>{{tValue.testName}}</td>
      					<td>{{tValue.functionalArea}}</td>
      					<td>{{tValue.status}}</td>
                <td>{{tValue.startTime}}</td>
                <td>{{tValue.endTime}}</td>
      				</tr>
    				</tbody>
  			 </table>`,
  providers : [TestEntityService]
})
export class TestTableView implements OnInit{
	tValues : TestEntity[];
  //restUrl:string = "/service/demo"
  constructor(private teService: TestEntityService){}
  
  getTests():void{
    this.teService.getTests().subscribe( data => {
        this.tValues = data;
        for(var i=0; i< this.tValues.length ; i++){
          this.tValues[i].startTime = this.parseDate(this.tValues[i].startTime);
          this.tValues[i].endTime = this.parseDate(this.tValues[i].endTime);
        }
        //console.log(this.tValues);
      }
       );
    //this.teService.getTests().then( tValues => this.tValues = tValues );
  }

  ngOnInit(): void{
    this.getTests();
  }

  parseDate(date:string) : string {
    var d = new Date(date);
    return d.toUTCString();
  }


}