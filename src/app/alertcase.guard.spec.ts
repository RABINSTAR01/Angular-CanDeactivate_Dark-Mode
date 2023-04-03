import { TestBed } from '@angular/core/testing';

import { AlertcaseGuard } from './alertcase.guard';

describe('AlertcaseGuard', () => {
  let guard: AlertcaseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlertcaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
