import { Component , Input } from '@angular/core';

@Component({
	selector : 'path-view',
	template : `
          <div *ngIf="tValue" >
          	<ul class="breadcrumb" style="background-color:white !important;font-size:15px !important">
          		<li><a routerLink="/portfolio/{{tValue.portfolio}}" routerLinkActive="active">{{tValue.portfolio}} </a></li>
          		<li><a href="#">{{tValue.application}} </a></li>
          		<li><a href="#">{{tValue.build}} </a></li>
          		<li><a href="#">{{tValue.release}} </a></li>
          		<li class="active">{{tValue.testRunId}}</li>
          	</ul>
          </div>
          `
})
export class PathView {
  @Input() tValue : any ;
}