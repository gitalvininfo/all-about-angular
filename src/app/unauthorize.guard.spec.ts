import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unauthorizeGuard } from './unauthorize.guard';

describe('unauthorizeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unauthorizeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
