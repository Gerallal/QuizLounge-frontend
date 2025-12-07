import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuiz1 } from './create-quiz';

describe('CreateQuiz1', () => {
  let component: CreateQuiz1;
  let fixture: ComponentFixture<CreateQuiz1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQuiz1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuiz1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
