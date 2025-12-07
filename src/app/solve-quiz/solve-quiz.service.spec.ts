import { TestBed } from '@angular/core/testing';

import { SolveQuizService } from './solve-quiz.service';

describe('SolveQuizService', () => {
  let service: SolveQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolveQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
