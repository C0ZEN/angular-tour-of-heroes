import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';
import {ButtonConfigService} from './button-config.service';

@Component({
	selector   : 'adm-fwk-button',
	templateUrl: './button.component.html',
	styleUrls  : ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
	@Input() public admFwkButtonLabel: string     = this.buttonConfigService.label;
	@Input() public admFwkButtonType: string      = 'button';
	@Input() public admFwkButtonStyle: string     = 'btn-primary';
	@Input() public admFwkButtonDisabled: boolean = false;

	@Output() public admFwkButtonOnClick: EventEmitter<string> = new EventEmitter();

	public constructor(private buttonConfigService: ButtonConfigService) {
	}

	public ngOnInit(): void {
	}

	public buttonClick(): void {
		this.admFwkButtonOnClick.emit();
	}
}
