import { TestBed } from '@angular/core/testing';

import { ShowMyQuizService } from './show-my-quiz-service';

describe('ShowMyQuizService', () => {
  let service: ShowMyQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMyQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
