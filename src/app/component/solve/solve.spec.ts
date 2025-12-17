import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solve } from './solve';

describe('Solve', () => {
  let component: Solve;
  let fixture: ComponentFixture<Solve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
