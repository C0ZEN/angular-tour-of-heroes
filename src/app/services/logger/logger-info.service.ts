import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {LoggerService} from './logger.service';

@Injectable()
export class LoggerInfoService extends LoggerService {
	public constructor(protected logger: NGXLogger) {
		super(logger);
	}

	public callbackOnDefaultValue(defaultValue: any): void {
		this.logger.info(`Callback on default value <${defaultValue}>`);
	}
}
