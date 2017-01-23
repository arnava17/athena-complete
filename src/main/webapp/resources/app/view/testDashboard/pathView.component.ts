import { Component , Input } from '@angular/core';

@Component({
	selector : 'path-view',
	template : `
          <div *ngIf="tValue"><p>{{tValue.portfolio}}/{{tValue.application}}/{{tValue.build}}/{{tValue.release}}/{{tValue.testRunId}}</div>`,
})
export class PathView {
  @Input() tValue : any;
}