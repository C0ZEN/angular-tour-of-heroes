import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AdmFwkDisabledDirective} from './disabled/disabled.directive';

@NgModule({
	imports     : [
		CommonModule
	],
	declarations: [
		AdmFwkDisabledDirective
	],
	exports     : [
		AdmFwkDisabledDirective
	]
})

export class AdmFwkDirectivesModule {
}
