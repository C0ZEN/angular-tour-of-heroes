import {Injectable} from '@angular/core';
import {
	AdmFwkButtonStyles,
	AdmFwkButtonTypes
} from './button.enums';

@Injectable()
export class AdmFwkButtonConfigService {

	/**
	 * Label display on the button
	 */
	private _label: string = 'Label';

	public get label(): string {
		return this._label;
	}

	public set label(value: string) {
		this._label = value;
	}

	/**
	 * Literally the attribute `type` attached to the button
	 * Should respect the conventional choices from W3C
	 */
	private _type: AdmFwkButtonTypes = AdmFwkButtonTypes.Button;

	public get type(): AdmFwkButtonTypes {
		return this._type;
	}

	public set type(value: AdmFwkButtonTypes) {
		this._type = value;
	}

	/**
	 * Class added on the root element of the button
	 * Used to change the design of the button
	 */
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
