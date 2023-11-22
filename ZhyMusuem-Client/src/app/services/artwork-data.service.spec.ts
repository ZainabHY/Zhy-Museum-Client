import { TestBed } from '@angular/core/testing';

import { ArtworkDataService } from './artwork-data.service';

describe('ArtworkDataService', () => {
  let service: ArtworkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
