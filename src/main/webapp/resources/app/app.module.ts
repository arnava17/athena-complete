import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { TestEntityService } from './services/testEntity.service';
import { TestSummaryService } from './services/testSummary.service';
import { FunctionalSummaryService } from './services/functionalSummary.service';
import { TestSubTypeSummaryService } from './services/testSubTypeSummary.service';


import { TestTableView }  from './view/testEntity_display.component';
import { TestSummaryView } from './view/testSummaryView.component';
import { HttpModule } from '@angular/http';
import { DonutChart } from './angular_charts/donutChart.component';
import { BarChart } from './angular_charts/barChart.component';
import { PyramidChart } from './angular_charts/pyramidChart.component';
import { PathView } from './view/pathView.component';
@NgModule({
  imports:      [
  					BrowserModule ,
  					HttpModule,
  				],

  declarations: [
  				  AppComponent ,
  				  TestTableView ,
            TestSummaryView,
            DonutChart,
            BarChart,
            PyramidChart,
            PathView
  				],

  bootstrap:    [ AppComponent ],

  providers: [
              TestEntityService,
              TestSummaryService,
              FunctionalSummaryService,
              TestSubTypeSummaryService
             ]
})
export class AppModule { }
