import { TestBed } from '@angular/core/testing';

import { PlannerGenService } from './planner-gen.service';

describe('PlannerGenService', () => {
  let service: PlannerGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannerGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
