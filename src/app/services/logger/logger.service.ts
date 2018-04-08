import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class AdmFwkLoggerService {
	public constructor(protected logger: NGXLogger) {
	}
}
