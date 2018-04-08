import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdmFwkLoggerService} from './logger.service';
import {AdmFwkLoggerWarnService} from './logger-warn.service';
import {AdmFwkLoggerInfoService} from './logger-info.service';

@NgModule({
	imports  : [
		CommonModule
	],
	providers: [
		AdmFwkLoggerService,
		AdmFwkLoggerWarnService,
		AdmFwkLoggerInfoService
	]
})

export class AdmFwkLoggerModule {
}
