import {Injectable} from '@angular/core';
import {
	AdmFwkButtonStyles,
	AdmFwkButtonTypes
} from './button.enums';

@Injectable()
export class AdmFwkButtonConfigService {
	private _label: string = 'Label';

	public get label(): string {
		return this._label;
	}

	public set label(value: string) {
		this._label = value;
	}

	private _type: AdmFwkButtonTypes = AdmFwkButtonTypes.Button;

	public get type(): AdmFwkButtonTypes {
		return this._type;
	}

	public set type(value: AdmFwkButtonTypes) {
		this._type = value;
	}

	private _style: AdmFwkButtonStyles = AdmFwkButtonStyles.Primary;

	public get style(): AdmFwkButtonStyles {
		return this._style;
	}

	public set style(value: AdmFwkButtonStyles) {
		this._style = value;
	}

	public constructor() {
	}
}
