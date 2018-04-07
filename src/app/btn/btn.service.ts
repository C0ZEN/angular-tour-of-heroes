import {
  Injectable,
  OnDestroy
} from '@angular/core';

@Injectable()
export class BtnService implements OnDestroy {
  private _label: string = 'Default btn label';

  get label(): string {
    console.log('BtnService:get:label');
    return this._label;
  }

  set label(value: string) {
    console.log('BtnService:set:label', value);
    this._label = value;
  }

  constructor() {
    console.log('BtnService created');
  }

  public ngOnDestroy(): void {
    console.log('BtnService destroyed');
  }
}
