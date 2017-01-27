import { Component,OnInit,AfterViewInit } from '@angular/core';
import { SideMenuService } from '../../services/sideMenu.service';

@Component({
	selector:'side-menu',
	template : `
		  <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
              <ul class="nav side-menu">
                <li><a><i class="fa fa-home"></i> Portfolio <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li><a href="index.html">Dashboard</a></li>
                    <li><a href="index2.html">Dashboard2</a></li>
                    <li><a href="index3.html">Dashboard3</a></li>
                    <!--<li *ngFor="let pN of portfolioArray"><a routerLink="{{pN}}">{{pN}}</a></li>-->
                  </ul>
                </li>
                <li><a><i class="fa fa-bug"></i> Additional Pages <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li><a href="e_commerce.html">E-commerce</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="project_detail.html">Project Detail</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="profile.html">Profile</a></li>
                  </ul>
                </li>
                <li><a><i class="fa fa-bar-chart"></i> Performance <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li><a href="e_commerce.html">E-commerce</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="project_detail.html">Project Detail</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="profile.html">Profile</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- /sidebar menu -->
	`
})
export class SideMenu implements OnInit,AfterViewInit{
	portfolioArray : any =[]
	constructor(private smService:SideMenuService){}

	ngOnInit(){
		this.setPortfolioNames();
	}

	setPortfolioNames(){ 
		this.portfolioArray = this.getPortfolioNames();
	}
	getPortfolioNames(){
		this.smService.getPortfolionames();
	}

	ngAfterViewInit(){
		require ('../../../gentelella/vendors/jquery/dist/jquery.min.js');
		require ('../../../gentelella/vendors/bootstrap/dist/js/bootstrap.min.js');
		require ('../../../gentelella/vendors/fastclick/lib/fastclick.js');
		require ('../../../gentelella/vendors/nprogress/nprogress.js');
		//require ('../../../gentelella/build/js/custom.min.js')
	}
}