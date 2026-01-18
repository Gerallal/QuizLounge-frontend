import { TestBed } from '@angular/core/testing';

import { AllFriendsService } from './all-friends-service';

describe('AllFriendsService', () => {
  let service: AllFriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
