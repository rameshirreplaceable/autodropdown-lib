import { TestBed } from '@angular/core/testing';

import { AutodropdownLibService } from './autodropdown-lib.service';

describe('AutodropdownLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutodropdownLibService = TestBed.get(AutodropdownLibService);
    expect(service).toBeTruthy();
  });
});
