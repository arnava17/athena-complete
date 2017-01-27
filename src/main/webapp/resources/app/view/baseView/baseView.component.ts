import { Component, Input ,AfterViewInit } from '@angular/core';
import { SideMenu } from '../sideMenu/sideMenu.component';


@Component({
	selector: 'base-view',
	template : `
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="index.html" class="site_title"><!--<i class="fa fa-paw"></i>--><span>Barclaycard UK</span></a>
          </div>

          <div class="clearfix"></div>
          <br />

          <side-menu></side-menu>

          <!-- /menu footer buttons -->
          <!-- /menu footer buttons -->
        </div>
      </div>

      <!-- top navigation -->
      <div class="top_nav">
        <div class="nav_menu">
          <nav class="" role="navigation">
            <div class="nav toggle">
              <a id="menu_toggle"><i class="fa fa-bars"></i></a>
            </div>
          </nav>
        </div>
      </div>
      <!-- /top navigation -->

      <!-- page content -->
      <div class="right_col" role="main">
        <div class="">
          <!--<div class="page-title">
            <div class="title_left">
              <h3>Plain Page</h3>
            </div>

            <div class="title_right">
              <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for...">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
          </div>-->

          <div class="clearfix"></div>

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="x_panel">
                <!--<div class="x_title">
                  <h2>Plain Page</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>-->
                <div class="x_content">
                  <!-- top tiles -->
                  <router-outlet></router-outlet>
                  <!--<div>
                    <div id="bardiv" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto"></div>
                    <div id="chartdiv" style="min-width: 200px; max-width: 500px; height: 400px; margin: 0 auto"></div>

                    <div id="pyramid-div" style="min-width: 200px; max-width: 500px; height: 400px; margin: 0 auto"></div>
                  </div>-->
                    <!-- <table class="table">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                        </tr>
                      </tbody>
                    </table> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /page content -->

      <!-- footer content -->
      <footer>
      </footer>
      <!-- /footer content -->
    </div>
  </div>
	`
})
export class BaseView implements AfterViewInit{

	ngAfterViewInit(){
		require ('../../../gentelella/vendors/jquery/dist/jquery.min.js');
		require ('../../../gentelella/vendors/bootstrap/dist/js/bootstrap.min.js');
		require ('../../../gentelella/vendors/fastclick/lib/fastclick.js');
		require ('../../../gentelella/vendors/nprogress/nprogress.js');
		//require ('../../../gentelella/build/js/custom.min.js')
	}
}