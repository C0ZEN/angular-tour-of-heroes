import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output
} from '@angular/core';
import {AdmFwkButtonConfigService} from './button-config.service';
import {
	AdmFwkButtonStyles,
	AdmFwkButtonStylesOutline,
	AdmFwkButtonTypes
} from './button.enums';
import {AdmFwkLoggerWarnService} from '../../services/logger/logger-warn.service';
import {AdmFwkLoggerInfoService} from '../../services/logger/logger-info.service';
import * as _ from 'lodash';
import {AdmFwkConfigService} from '../../app-config.service';

@Component({
	selector   : 'adm-fwk-button',
	templateUrl: './button.component.html',
	styleUrls  : ['./button.component.scss'],
	providers  : [
		AdmFwkLoggerWarnService,
		AdmFwkLoggerInfoService
	]
})

export class AdmFwkButtonComponent implements OnInit, OnChanges {
	@Input() public admFwkButtonLabel: string           = this.buttonConfig.label;
	@Input() public admFwkButtonType: AdmFwkButtonTypes = this.buttonConfig.type;
	@Input() public admFwkButtonDisabled: boolean       = this.buttonConfig.disabled;
	@Input() public admFwkButtonOutline: boolean        = this.buttonConfig.outline;

	public style: string                                  = this.buttonConfig.style;
	@Input() public admFwkButtonStyle: AdmFwkButtonStyles = this.buttonConfig.style;

	@Output() public admFwkButtonOnClick: EventEmitter<string> = new EventEmitter();

	public constructor(
		private config: AdmFwkConfigService,
		private buttonConfig: AdmFwkButtonConfigService,
		private warn: AdmFwkLoggerWarnService,
		private info: AdmFwkLoggerInfoService
	) {
	}

	public ngOnInit(): void {
		this.setStyle();
	}

	public ngOnChanges(data: any): void {
		if (this.config.debug && _.has(data, 'admFwkButtonType')) {

			// Default type when not in enum
			if (!(Object.values(AdmFwkButtonTypes).includes(data.admFwkButtonType.currentValue))) {
				this.warn.notInEnumValues(data.admFwkButtonType.currentValue, 'AdmFwkButtonTypes');
				this.info.callbackOnDefaultValue(this.buttonConfig.type);
				this.admFwkButtonType = this.buttonConfig.type;
			}
		}
		if (_.has(data, 'admFwkButtonStyle')) {

			// Default style when not in enum
			if (!(Object.values(AdmFwkButtonStyles).includes(data.admFwkButtonStyle.currentValue))) {
				this.warn.notInEnumValues(data.admFwkButtonStyle.currentValue, 'AdmFwkButtonStyles');
				this.info.callbackOnDefaultValue(this.buttonConfig.style);
				this.admFwkButtonStyle = this.buttonConfig.style;
			}
			this.setStyle();
		}
		if (_.has(data, 'admFwkButtonOutline')) {
			this.setStyle();
		}
	}

	public buttonClick(): void {
		this.admFwkButtonOnClick.emit();
	}

	private setStyle(): void {
		this.style = this.admFwkButtonOutline ? AdmFwkButtonStylesOutline[this.getStyleEnumPropertyName()] : this.admFwkButtonStyle;
	}

	private getStyleEnumPropertyName(): string {
		return _.findKey(AdmFwkButtonStyles, (value: string) => {
			return value === this.admFwkButtonStyle;
		});
	}
}
