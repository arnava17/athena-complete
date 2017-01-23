import { Component , Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { ENV_CONST } from '../../const/environment.const';

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
      					<td ><div class="testStatus" [style.background-color] = "getColor(tValue.status)">{{tValue.status}}</div></td>
                <td>{{tValue.startTime}}</td>
                <td>{{tValue.endTime}}</td>
      				</tr>
    				</tbody>
  			 </table>`,
  styles : ['.testStatus{width:45px;text-align:center;color:white;border-radius:3px;font-weight:bold}'],
})
export class TestTableView implements OnInit{
	@Input() tValues : any;
  parseTests():void{ 
    for(var i=0; i< this.tValues.length ; i++){
          this.tValues[i].startTime = this.parseDate(this.tValues[i].startTime);
          this.tValues[i].endTime = this.parseDate(this.tValues[i].endTime);
    }
  }

  ngOnInit(): void{
    this.parseTests();
  }

  parseDate(date:string) : string {
    var d = new Date(date);
    var str = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    return str;
  }

  getColor(status:string) : string{
    var resultColor = "";
    if(status == "PASS"){
      resultColor =  ENV_CONST.COLORS.PASS_COLOR;
    }
    else if(status == "FAIL"){
      resultColor = ENV_CONST.COLORS.FAIL_COLOR;
    }
    else if(status == "SKIP"){
      resultColor = ENV_CONST.COLORS.SKIP_COLOR;
    }
    return resultColor;

  }

}