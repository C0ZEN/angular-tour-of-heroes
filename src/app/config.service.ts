import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  constructor() {
  }

  public init(): Promise<any> {
    return new Promise((resolve) => {
      console.log('ConfigService:init:begin');
      setTimeout(() => {
        console.log('ConfigService:init:end');
        resolve();
      }, 1000);
    });
  }
}
