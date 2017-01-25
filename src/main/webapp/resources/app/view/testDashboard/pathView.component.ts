import { Component , Input } from '@angular/core';

@Component({
	selector : 'path-view',
	template : `
          <div *ngIf="tValue" >
          	<ul class="breadcrumb" style="background-color:white !important;font-size:15px !important">
          		<li><a routerLink="/portfolio/{{tValue.portfolio}}" routerLinkActive="active"><span class="inactive">{{tValue.portfolio}}</span></a></li>
          		<li><a href="#"><span class="inactive">{{tValue.application}}</span></a></li>
          		<li><a href="#"><span class="inactive">{{tValue.release}}</span></a></li>
                    <li><a href="#"><span class="inactive">{{tValue.build}}</span></a></li>
          		<li class="active">{{tValue.testRunId}}</li>
          	</ul>
          </div>
          `,
     styles : ['.inactive{text-decoration:underline}']
})
export class PathView {
  @Input() tValue : any ;
}