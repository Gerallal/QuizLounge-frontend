import { TestBed } from '@angular/core/testing';

import { FriendProfileService } from './friend-profile-service';

describe('FriendProfileService', () => {
  let service: FriendProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
