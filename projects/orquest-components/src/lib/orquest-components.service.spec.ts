import { TestBed } from '@angular/core/testing';

import { OrquestComponentsService } from './orquest-components.service';

describe('OrquestComponentsService', () => {
  let service: OrquestComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrquestComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
