import { TestBed } from '@angular/core/testing';

import { DbConectionService } from './db-conection.service';

describe('DbConectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbConectionService = TestBed.get(DbConectionService);
    expect(service).toBeTruthy();
  });
});
