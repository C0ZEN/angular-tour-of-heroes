import {
	APP_INITIALIZER,
	NgModule
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {
	LoggerModule,
	NgxLoggerLevel
} from 'ngx-logger';

import {AppComponent} from './app.component';

import {AdmFwkButtonModule} from './components/button/button.module';
import {AdmFwkDirectivesModule} from './directives/directives.module';
import {AdmFwkButtonConfigService} from './components/button/button-config.service';
import {environment} from '../environments/environment';
import {AdmFwkServicesModule} from './services/services.module';
import {AdmFwkConfigService} from './app-config.service';

export function configFactory(
	buttonConfig: AdmFwkButtonConfigService,
	config: AdmFwkConfigService
): any {
	return (): void => {
		config.debug       = environment.debug;
		config.logs        = environment.logs;
		buttonConfig.label = environment.components.button.label;
	};
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		FormsModule,
		AdmFwkButtonModule,
		AdmFwkDirectivesModule,
		LoggerModule.forRoot({
			level         : NgxLoggerLevel.DEBUG,
			serverLogLevel: NgxLoggerLevel.OFF
		}),
		AdmFwkServicesModule
	],
	providers   : [
		AdmFwkConfigService,
		AdmFwkButtonConfigService,
		{
			provide   : APP_INITIALIZER,
			useFactory: configFactory,
			deps      : [
				AdmFwkButtonConfigService,
				AdmFwkConfigService
			],
			multi     : true
		}
	],
	bootstrap   : [AppComponent]
})

export class AdmFwkModule {
}
