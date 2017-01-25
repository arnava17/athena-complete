//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Routes , RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

//Routes
import { AppRouter } from './app.routes'

//Services
import { HttpGetService } from './services/httpGet.service';
import { TestDashboardService } from './services/testDashboard.service';
import { PortfolioDashboardService } from './services/portfolioDashboard.service';
//Highcharts Components
import { DonutChart } from './angular_charts/donutChart.component';
import { BarChart } from './angular_charts/barChart.component';
import { PyramidChart } from './angular_charts/pyramidChart.component';

//Test Dashboard Components
import { TestDashboard } from './view/testDashboard/testDashboard.component';
import { TestTableView }  from './view/testDashboard/testEntity_display.component';
import { TestSummaryView } from './view/testDashboard/testSummaryView.component';
import { PathView } from './view/testDashboard/pathView.component';

//Portfolio Dashboard Components
import { PortfolioDashboard } from './view/portfolioDashboard/portfolioDashboard.component';
import { TileView } from './view/portfolioDashboard/tile.component';
import { PortfolioSummary } from './view/portfolioDashboard/portfolioSummary.component';
import { PortfolioTable } from './view/portfolioDashboard/portfolioTable.component';
import { PortfolioTileView } from './view/portfolioDashboard/porfolioTiles.component';


@NgModule({
  imports:      [
  					BrowserModule ,
  					HttpModule,
            AppRouter
  				],

  declarations: [
  				  AppComponent ,
            TestDashboard,
            PortfolioDashboard,
  				  TestTableView ,
            TestSummaryView,
            DonutChart,
            BarChart,
            PyramidChart,
            PathView,
            TileView,
            PortfolioSummary,
            PortfolioTable,
            PortfolioTileView
  				],

  bootstrap:    [ AppComponent ],

  providers: [
              HttpGetService,
              TestDashboardService,
              PortfolioDashboardService
             ]
})
export class AppModule { }
