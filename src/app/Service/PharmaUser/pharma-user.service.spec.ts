import { TestBed, inject } from '@angular/core/testing';

import { PharmaUserService } from './pharma-user.service';

describe('PharmaUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmaUserService]
    });
  });

  it('should be created', inject([PharmaUserService], (service: PharmaUserService) => {
    expect(service).toBeTruthy();
  }));
});
