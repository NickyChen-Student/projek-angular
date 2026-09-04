import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McLaren } from './mc-laren';

describe('McLaren', () => {
  let component: McLaren;
  let fixture: ComponentFixture<McLaren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McLaren],
    }).compileComponents();

    fixture = TestBed.createComponent(McLaren);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
