import {Component} from '@angular/core';

@Component({
	selector   : 'adm-fwk-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.css']
})

export class AppComponent {
	public title: string     = 'Tour of Heroes';
	public disabled: boolean = true;
}
