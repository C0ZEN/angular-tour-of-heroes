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
	@Input() public admFwkButtonLabel: string             = this.buttonConfig.label;
	@Input() public admFwkButtonType: AdmFwkButtonTypes   = this.buttonConfig.type;
	@Input() public admFwkButtonStyle: AdmFwkButtonStyles = this.buttonConfig.style;
	@Input() public admFwkButtonDisabled: boolean         = false;

	@Output() public admFwkButtonOnClick: EventEmitter<string> = new EventEmitter();

	public constructor(
		private config: AdmFwkConfigService,
		private buttonConfig: AdmFwkButtonConfigService,
		private warn: AdmFwkLoggerWarnService,
		private info: AdmFwkLoggerInfoService
	) {
	}

	public ngOnInit(): void {
	}

	public ngOnChanges(data: any): void {
		if (this.config.debug) {
			if (_.has(data, 'admFwkButtonType')) {
				if (!(Object.values(AdmFwkButtonTypes).includes(data.admFwkButtonType.currentValue))) {
					this.warn.notInEnumValues(data.admFwkButtonType.currentValue, 'AdmFwkButtonTypes');
					this.info.callbackOnDefaultValue(this.buttonConfig.type);
					this.admFwkButtonType = this.buttonConfig.type;
				}
			}
			if (_.has(data, 'admFwkButtonStyle')) {
				if (!(Object.values(AdmFwkButtonStyles).includes(data.admFwkButtonStyle.currentValue))) {
					this.warn.notInEnumValues(data.admFwkButtonStyle.currentValue, 'AdmFwkButtonStyles');
					this.info.callbackOnDefaultValue(this.buttonConfig.style);
					this.admFwkButtonStyle = this.buttonConfig.style;
				}
			}
		}
	}

	public buttonClick(): void {
		this.admFwkButtonOnClick.emit();
	}
}
