import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidator } from './cross-field-validator';

describe('CrossFieldValidator', () => {
  let component: CrossFieldValidator;
  let fixture: ComponentFixture<CrossFieldValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossFieldValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossFieldValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
