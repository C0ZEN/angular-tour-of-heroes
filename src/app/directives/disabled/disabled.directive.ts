import {
	Directive,
	ElementRef,
	Input,
	Renderer2
} from '@angular/core';

@Directive({
	selector: '[admFwkDisabled]'
})

export class DisabledDirective {
	@Input()
	public set admFwkDisabled(disabled: boolean) {
		disabled ? this.disable() : this.enable();
	}

	public constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	private disable(): void {
		this.renderer.addClass(this.el.nativeElement, 'disabled');
		this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '-1');
		this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
	}

	private enable(): void {
		this.renderer.removeClass(this.el.nativeElement, 'disabled');
		this.renderer.removeAttribute(this.el.nativeElement, 'tabindex');
		this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
	}
}
