import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {DirectivesModule} from '../../directives/directives.module';
import {ButtonConfigService} from './button-config.service';
import {ServicesModule} from '../../services/services.module';

@NgModule({
	imports     : [
		CommonModule,
		DirectivesModule,
		ServicesModule
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
