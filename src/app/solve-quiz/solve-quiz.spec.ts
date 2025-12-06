import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveQuiz } from './solve-quiz';

describe('SolveQuiz', () => {
  let component: SolveQuiz;
  let fixture: ComponentFixture<SolveQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolveQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveQuiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
