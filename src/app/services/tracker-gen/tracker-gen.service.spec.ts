import { TestBed } from '@angular/core/testing';

import { TrackerGenService } from './tracker-gen.service';

describe('TrackerGenService', () => {
  let service: TrackerGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackerGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
