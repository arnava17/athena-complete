import { Component , Input } from '@angular/core';
import  {TileView} from './tile.component';

@Component({
	selector : 'portfolioTile-view',
	template : `
		<div>
			<div *ngFor="let td of tileData">
				<tile-view [tileData]="td"></tile-view>
			</div>
		</div>
	`
})
export class PortfolioTileView{
	@Input() tileData:any;
}