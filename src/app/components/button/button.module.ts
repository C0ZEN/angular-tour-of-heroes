import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdmFwkButtonComponent} from './button.component';
import {AdmFwkDirectivesModule} from '../../directives/directives.module';
import {AdmFwkButtonConfigService} from './button-config.service';
import {AdmFwkServicesModule} from '../../services/services.module';

@NgModule({
	imports     : [
		CommonModule,
		AdmFwkDirectivesModule,
		AdmFwkServicesModule
	],
	declarations: [
		AdmFwkButtonComponent
	],
	exports     : [
		AdmFwkButtonComponent
	],
	providers   : [
		AdmFwkButtonConfigService
	]
})

export class AdmFwkButtonModule {
}
