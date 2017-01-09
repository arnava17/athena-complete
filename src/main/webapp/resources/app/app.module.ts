import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestEntityService } from './services/testEntity.service';
import { TestSummaryService } from './services/testSummary.service';
import { AppComponent }  from './app.component';
import { TestTableView }  from './view/testEntity_display.component';
import { TestSummaryView } from './view/testSummaryView.component';
import { HttpModule } from '@angular/http';
import { DoughnutChart } from './angular_charts/doghnutChart.component';


@NgModule({
  imports:      [
  					BrowserModule ,
  					HttpModule
  				],

  declarations: [
  				  AppComponent ,
  				  TestTableView ,
            TestSummaryView,
            DoughnutChart
  				],

  bootstrap:    [ AppComponent ],

  providers: [
              TestEntityService,
              TestSummaryService
             ]
})
export class AppModule { }
