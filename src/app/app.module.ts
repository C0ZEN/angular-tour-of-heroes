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

import {ButtonModule} from './components/button/button.module';
import {DirectivesModule} from './directives/directives.module';
import {ButtonConfigService} from './components/button/button-config.service';
import {environment} from '../environments/environment';
import {ServicesModule} from './services/services.module';

export function configFactory(buttonConfigService: ButtonConfigService): any {
	return (): void => {
		buttonConfigService.label = environment.components.button.label;
	};
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		FormsModule,
		ButtonModule,
		DirectivesModule,
		LoggerModule.forRoot({
			level         : NgxLoggerLevel.DEBUG,
			serverLogLevel: NgxLoggerLevel.OFF
		}),
		ServicesModule
	],
	providers   : [
		ButtonConfigService,
		{
			provide   : APP_INITIALIZER,
			useFactory: configFactory,
			deps      : [ButtonConfigService],
			multi     : true
		}
	],
	bootstrap   : [AppComponent]
})

export class AppModule {
}
