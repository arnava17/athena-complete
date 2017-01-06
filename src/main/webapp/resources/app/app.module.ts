import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { TestEntityService } from './testEntity.service';
import { TestSummaryService } from './testSummary.service';
import { AppComponent }  from './app.component';
import { TestTableView }  from './testEntity_display.component';
import { TestSummaryView } from './testSummaryView.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ 
  					BrowserModule ,
  					HttpModule
  				],
  
  declarations: [ 
  				  AppComponent ,
  				  TestTableView ,
            TestSummaryView
  				],
  
  bootstrap:    [ AppComponent ],
  
  providers: [
              TestEntityService,
              TestSummaryService
             ]
})
export class AppModule { }
  