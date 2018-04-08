import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerModule} from './logger/logger.module';

@NgModule({
	imports: [
		CommonModule,
		LoggerModule
	]
})

export class ServicesModule {
}
