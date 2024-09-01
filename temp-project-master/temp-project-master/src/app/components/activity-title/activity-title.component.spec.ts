import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTitleComponent } from './activity-title.component';

describe('ActivityTitleComponent', () => {
  let component: ActivityTitleComponent;
  let fixture: ComponentFixture<ActivityTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
