import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DisabledDirective} from './disabled/disabled.directive';

@NgModule({
	imports     : [
		CommonModule
	],
	declarations: [
		DisabledDirective
	],
	exports     : [
		DisabledDirective
	]
})

export class DirectivesModule {
}
