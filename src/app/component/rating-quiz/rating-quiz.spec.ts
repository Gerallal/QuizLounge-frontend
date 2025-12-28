import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingQuiz } from './rating-quiz';

describe('RatingQuiz', () => {
  let component: RatingQuiz;
  let fixture: ComponentFixture<RatingQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingQuiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
