import { TestBed } from '@angular/core/testing';

import { AllQuizzesService } from './all-quizzes-service';

describe('AllQuizzesService', () => {
  let service: AllQuizzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllQuizzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
