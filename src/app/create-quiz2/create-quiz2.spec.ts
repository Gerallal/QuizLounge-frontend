import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuiz2 } from './create-quiz2';

describe('CreateQuiz2', () => {
  let component: CreateQuiz2;
  let fixture: ComponentFixture<CreateQuiz2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQuiz2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuiz2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
