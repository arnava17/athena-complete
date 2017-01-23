import { Routes , RouterModule } from '@angular/router';
import { TestDashboard } from './view/testDashboard/testDashboard.component';
import { PortfolioDashboard } from './view/portfolioDashboard/portfolioDashboard.component';
import { NgModule } from '@angular/core';
const routes : Routes = [
	{ path:'' , redirectTo :'testdashboard/testRun1' , pathMatch : 'full'},
	{ path:'testdashboard/:id' , component : TestDashboard },
	{ path: 'portfolio/:name' , component : PortfolioDashboard },
	{ path: 'portfolio' , redirectTo : 'portfolio/portfolio1' , pathMatch : 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouter {}
