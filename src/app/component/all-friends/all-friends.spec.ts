import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFriends } from './all-friends';

describe('AllFriends', () => {
  let component: AllFriends;
  let fixture: ComponentFixture<AllFriends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFriends]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFriends);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
