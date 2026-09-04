import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMW } from './bmw';

describe('BMW', () => {
  let component: BMW;
  let fixture: ComponentFixture<BMW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BMW],
    }).compileComponents();

    fixture = TestBed.createComponent(BMW);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
