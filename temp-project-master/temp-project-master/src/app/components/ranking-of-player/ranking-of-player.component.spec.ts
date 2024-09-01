import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingOfPlayerComponent } from './ranking-of-player.component';

describe('RankingOfPlayerComponent', () => {
  let component: RankingOfPlayerComponent;
  let fixture: ComponentFixture<RankingOfPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingOfPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingOfPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
