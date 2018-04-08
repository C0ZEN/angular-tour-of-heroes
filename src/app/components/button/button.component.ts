import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output
} from '@angular/core';
import {ButtonConfigService} from './button-config.service';
import {
	AdmFwkButtonStyles,
	AdmFwkButtonTypes
} from './button.enums';
import {LoggerWarnService} from '../../services/logger/logger-warn.service';
import {LoggerInfoService} from '../../services/logger/logger-info.service';
import * as _ from 'lodash';

@Component({
	selector   : 'adm-fwk-button',
	templateUrl: './button.component.html',
	styleUrls  : ['./button.component.scss'],
	providers  : [
		LoggerWarnService,
		LoggerInfoService
	]
})

export class ButtonComponent implements OnInit, OnChanges {
	@Input() public admFwkButtonLabel: string             = this.buttonConfigService.label;
	@Input() public admFwkButtonType: AdmFwkButtonTypes   = this.buttonConfigService.type;
	@Input() public admFwkButtonStyle: AdmFwkButtonStyles = this.buttonConfigService.style;
	@Input() public admFwkButtonDisabled: boolean         = false;

	@Output() public admFwkButtonOnClick: EventEmitter<string> = new EventEmitter();

	public constructor(private buttonConfigService: ButtonConfigService, private warn: LoggerWarnService, private info: LoggerInfoService) {
	}

	public ngOnInit(): void {
	}

	public ngOnChanges(data: any): void {
		if (_.has(data, 'admFwkButtonType')) {
			if (!(Object.values(AdmFwkButtonTypes).includes(data.admFwkButtonType.currentValue))) {
				this.warn.notInEnumValues(data.admFwkButtonType.currentValue, 'AdmFwkButtonTypes');
				this.info.callbackOnDefaultValue(this.buttonConfigService.type);
				this.admFwkButtonType = this.buttonConfigService.type;
			}
		}
		if (_.has(data, 'admFwkButtonStyle')) {
			if (!(Object.values(AdmFwkButtonStyles).includes(data.admFwkButtonStyle.currentValue))) {
				this.warn.notInEnumValues(data.admFwkButtonStyle.currentValue, 'AdmFwkButtonStyles');
				this.info.callbackOnDefaultValue(this.buttonConfigService.style);
				this.admFwkButtonStyle = this.buttonConfigService.style;
			}
		}
	}

	public buttonClick(): void {
		this.admFwkButtonOnClick.emit();
	}
}
