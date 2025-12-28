import { TestBed } from '@angular/core/testing';

import { CreateQuizService2 } from './create-quiz-service';

describe('CreateQuizService', () => {
  let service: CreateQuizService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQuizService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
