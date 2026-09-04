import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mercedez } from './mercedez';

describe('Mercedez', () => {
  let component: Mercedez;
  let fixture: ComponentFixture<Mercedez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mercedez],
    }).compileComponents();

    fixture = TestBed.createComponent(Mercedez);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
