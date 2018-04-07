import {
  inject,
  TestBed
} from '@angular/core/testing';

import {BtnService} from './btn.service';

describe('BtnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtnService]
    });
  });

  it('should be created', inject([BtnService], (service: BtnService) => {
    expect(service).toBeTruthy();
  }));
});
