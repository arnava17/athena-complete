import { Injectable } from '@angular/core';
import { ENV_CONST } from '../const/environment.const';

@Injectable()
export class SideMenuService{
	
	getPortfolionames(){
		return ['portfolio1','SEC'];
	}
}