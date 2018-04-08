import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {AdmFwkLoggerService} from './logger.service';
import {AdmFwkConfigService} from '../../app-config.service';

@Injectable()
export class AdmFwkLoggerInfoService extends AdmFwkLoggerService {
	public constructor(
		protected logger: NGXLogger,
		protected config: AdmFwkConfigService
	) {
		super(logger, config);
	}

	public callbackOnDefaultValue(defaultValue: any): void {
		if (this.loggerEnabled()) {
			this.logger.info(`Callback on default value <${defaultValue}>`);
		}
	}
}
