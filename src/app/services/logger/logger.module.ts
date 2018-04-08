import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerService} from './logger.service';
import {LoggerWarnService} from './logger-warn.service';
import {LoggerInfoService} from './logger-info.service';

@NgModule({
	imports  : [
		CommonModule
	],
	providers: [
		LoggerService,
		LoggerWarnService,
		LoggerInfoService
	]
})

export class LoggerModule {
}
