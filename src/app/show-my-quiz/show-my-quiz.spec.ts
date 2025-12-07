import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyQuiz } from './show-my-quiz';

describe('ShowMyQuiz', () => {
  let component: ShowMyQuiz;
  let fixture: ComponentFixture<ShowMyQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMyQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyQuiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
