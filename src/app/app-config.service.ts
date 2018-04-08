import {Injectable} from '@angular/core';

@Injectable()
export class AdmFwkConfigService {

	/**
	 * Used to checkout some possible errors in the code made by the developer
	 * This allow the Framework to notify some types error undetected by Angular
	 * Slow down the app with checking: recommended at `false` in production
	 */
	private _debug: boolean = true;

	public get debug(): boolean {
		return this._debug;
	}

	public set debug(value: boolean) {
		this._debug = value;
	}

	/**
	 * Enable logs provided by the Framework
	 * When this option is set to `true`, the `debug` option should be also `true`
	 * In complement of the debug (which is silent), this option will show additional logs as a living feed
	 * Slow down the app with checking: recommended at `false` in production
	 */
	private _logs: boolean = true;

	public get logs(): boolean {
		return this._logs;
	}

	public set logs(value: boolean) {
		this._logs = value;
	}

	public constructor() {
	}
}
