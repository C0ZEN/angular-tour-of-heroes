import {Injectable} from '@angular/core';

@Injectable()
export class AdmFwkConfig {
	private _debug: boolean = true;

	public get debug(): boolean {
		return this._debug;
	}

	public set debug(value: boolean) {
		this._debug = value;
	}

	public constructor() {
	}
}
