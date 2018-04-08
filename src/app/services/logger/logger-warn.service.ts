import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {AdmFwkLoggerService} from './logger.service';

@Injectable()
export class AdmFwkLoggerWarnService extends AdmFwkLoggerService {
	public constructor(protected logger: NGXLogger) {
		super(logger);
	}

	public notInEnumProperties(property: any, enumName: string): void {
		this.logger.warn(`The property <${property}> is not in <${enumName}> enum`);
	}

	public notInEnumValues(value: any, enumName: string): void {
		this.logger.warn(`The value <${value}> is not in <${enumName}> enum`);
	}
}
