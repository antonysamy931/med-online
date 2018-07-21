import { TestBed, inject } from '@angular/core/testing';

import { PharmaService } from './pharma.service';

describe('PharmaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmaService]
    });
  });

  it('should be created', inject([PharmaService], (service: PharmaService) => {
    expect(service).toBeTruthy();
  }));
});
