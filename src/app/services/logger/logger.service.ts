import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class LoggerService {
	public constructor(protected logger: NGXLogger) {
	}
}
