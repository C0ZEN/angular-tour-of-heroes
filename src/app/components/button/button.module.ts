import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {DirectivesModule} from '../../directives/directives.module';
import {ButtonConfigService} from './button-config.service';

@NgModule({
	imports     : [
		CommonModule,
		DirectivesModule
	],
	declarations: [
		ButtonComponent
	],
	exports     : [
		ButtonComponent
	],
	providers   : [
		ButtonConfigService
	]
})

export class ButtonModule {
}
