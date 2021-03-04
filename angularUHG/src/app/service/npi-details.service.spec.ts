import { TestBed } from '@angular/core/testing';

import { NpiDetailsService } from './npi-details.service';

describe('NpiDetailsService', () => {
  let service: NpiDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpiDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
