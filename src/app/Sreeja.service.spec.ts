import { TestBed } from '@angular/core/testing';

import { SreejaService } from './Sreeja.service';

describe('SreejaService', () => {
  let service: SreejaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SreejaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
