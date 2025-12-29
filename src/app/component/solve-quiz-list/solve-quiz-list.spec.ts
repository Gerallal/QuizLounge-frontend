import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveQuizList } from './solve-quiz-list';

describe('SolveQuizList', () => {
  let component: SolveQuizList;
  let fixture: ComponentFixture<SolveQuizList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolveQuizList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveQuizList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
