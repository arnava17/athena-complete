import { Component } from '@angular/core';
import { TestEntity } from '../testEntity';
import { TestEntityService } from '../services/testEntity.service';
import { OnInit } from '@angular/core';
//import { HttpModule }    from '@angular/http';


@Component({
	selector : 'path-view',
	template : `
          <div *ngIf="tValue"><p>{{tValue.portfolio}}/{{tValue.application}}/{{tValue.build}}/{{tValue.release}}/{{tValue.testRunId}}</div>`,
  providers : [TestEntityService]
})
export class PathView implements OnInit{
	tValues : TestEntity[];
  tValue : TestEntity;
  //restUrl:string = "/service/demo"
  constructor(private teService: TestEntityService){}
  
  getTests():void{
    this.teService.getTests().subscribe( data => {
        this.tValues = data;
        this.tValue = this.tValues[0];
        console.log(this.tValues);
      }
       );
    //this.teService.getTests().then( tValues => this.tValues = tValues );
  }

  ngOnInit(): void{
    this.getTests();
  }


}