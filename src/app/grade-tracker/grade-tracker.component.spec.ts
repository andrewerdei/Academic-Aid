import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTrackerComponent } from './grade-tracker.component';

describe('GradeTrackerComponent', () => {
  let component: GradeTrackerComponent;
  let fixture: ComponentFixture<GradeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradeTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
