import {Component} from '@angular/core';
import {AdmFwkButtonStyles} from './components/button/button.enums';

@Component({
	selector   : 'adm-fwk-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.scss']
})

export class AppComponent {
	public disabled: boolean = true;
	public outline: boolean  = true;
	public buttonStyles: any = AdmFwkButtonStyles;
	public style: any        = AdmFwkButtonStyles.Success;

	public randomStyle(): void {
		this.style = AppComponent.pickRandomProperty(AdmFwkButtonStyles);
	}

	private static pickRandomProperty(obj: object): any {
		let result: any;
		let count: any = 0;
		for (const prop in obj) {
			if (Math.random() < 1 / ++count) {
				result = obj[prop];
			}
		}
		console.log(result);
		return result;
	}
}
