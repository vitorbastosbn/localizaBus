import { TestBed } from '@angular/core/testing';

import { OnibusService } from './onibus.service';

describe('OnibusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnibusService = TestBed.get(OnibusService);
    expect(service).toBeTruthy();
  });
});
