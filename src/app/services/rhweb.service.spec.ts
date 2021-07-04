import { TestBed } from '@angular/core/testing';

import { RhwebService } from './rhweb.service';

describe('RhwebService', () => {
  let service: RhwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
