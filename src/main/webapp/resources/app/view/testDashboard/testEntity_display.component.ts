import { Component , Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { ENV_CONST } from '../../const/environment.const';

@Component({
	selector : 'data-table',
	template : `
          <table class="table">
    				<thead>
              <tr>
                <th>#</th>
      					<th>TEST NAME</th>
                <th>USER STORY</th>
                <th>TEST TOOL</th>
                <th>FUNCTIONAL AREA</th>
                <th>STATUS</th>
                <th>START TIME</th>
                <th>END TIME</th>
              </tr>
    				</thead>
    				<tbody>
      				<tr *ngFor="let tValue of tValues;let i = index">
                <th scope="row">{{i+1}}</th>
      					<td>{{tValue.testName}}</td>
                <td>{{tValue.userStory}}</td>
                <td>{{tValue.testTool}}</td>
      					<td>{{tValue.functionalArea}}</td>
      					<!--<td ><div class="testStatus" [style.background-color] = "getColor(tValue.status)">{{tValue.status}}</div></td>-->
                <td><span class="{{getLabelClass(tValue.status)}}">{{tValue.status}}</span></td>
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
          this.tValues[i].executionTime = this.calculateExecutionTime(this.tValues[i].startTime,this.tValues[i].endTime);
          this.tValues[i].startTime = this.parseDate(this.tValues[i].startTime);
          this.tValues[i].endTime = this.parseDate(this.tValues[i].endTime);
    }
  }

  calculateExecutionTime(d1:any,d2:any):any{
    var sDate = new Date(d1);
    var eDate = new Date(d2);
    //console.log(sDate.getTime());
    var time = (eDate.getTime() - sDate.getTime())/1000;
    var mins = (time%60);
    console.log(mins);
    return 1;
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

  getLabelClass(status:string) : string{
    var resultLabel = "";
    status = status.toUpperCase();
    if(status == "PASS" || status == "PASSED"){
      resultLabel =  ENV_CONST.LABELS.PASS_LABEL;
    }
    else if(status == "FAIL" || status == "FAILED"){
      resultLabel = ENV_CONST.LABELS.FAIL_LABEL;
    }
    else if(status == "SKIP" || status=="SKIPPED"){
      resultLabel = ENV_CONST.LABELS.SKIP_LABEL;
    }
    //console.log(resultLabel);
    return resultLabel;

  }    
}

