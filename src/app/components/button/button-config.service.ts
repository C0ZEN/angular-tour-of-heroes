import {Injectable} from '@angular/core';

@Injectable()
export class ButtonConfigService {
	private _label: string = 'Label';

	public get label(): string {
		return this._label;
	}

	public set label(value: string) {
		this._label = value;
	}

	public constructor() {

	}
}
