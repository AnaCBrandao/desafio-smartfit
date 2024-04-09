import { TestBed } from '@angular/core/testing';

import { FindUnitsService } from './find-units.service';

describe('FindUnitsService', () => {
  let service: FindUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
