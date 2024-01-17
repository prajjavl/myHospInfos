import { TestBed } from '@angular/core/testing';

import { HospInfoService } from './hosp-info.service';

describe('HospInfoService', () => {
  let service: HospInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
