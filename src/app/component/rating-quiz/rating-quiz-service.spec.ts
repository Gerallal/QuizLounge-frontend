import { TestBed } from '@angular/core/testing';

import { RatingQuizService } from './rating-quiz-service';

describe('RatingQuizService', () => {
  let service: RatingQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
