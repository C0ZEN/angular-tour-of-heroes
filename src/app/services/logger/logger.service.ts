import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {AdmFwkConfigService} from '../../app-config.service';

@Injectable()
export class AdmFwkLoggerService {
	public constructor(
		protected logger: NGXLogger,
		protected config: AdmFwkConfigService
	) {
	}

	protected loggerEnabled(): boolean {
		return this.config.logs;
	}
}
