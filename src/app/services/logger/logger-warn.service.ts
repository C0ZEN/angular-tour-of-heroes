import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {AdmFwkLoggerService} from './logger.service';
import {AdmFwkConfigService} from '../../app-config.service';

@Injectable()
export class AdmFwkLoggerWarnService extends AdmFwkLoggerService {
	public constructor(
		protected logger: NGXLogger,
		protected config: AdmFwkConfigService
	) {
		super(logger, config);
	}

	public notInEnumProperties(
		property: any,
		enumName: string
	): void {
		if (this.loggerEnabled()) {
			this.logger.warn(`The property <${property}> is not in <${enumName}> enum`);
		}
	}

	public notInEnumValues(
		value: any,
		enumName: string
	): void {
		if (this.loggerEnabled()) {
			this.logger.warn(`The value <${value}> is not in <${enumName}> enum`);
		}
	}
}
