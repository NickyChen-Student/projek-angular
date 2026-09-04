import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUS } from './contact-us';

describe('ContactUS', () => {
  let component: ContactUS;
  let fixture: ComponentFixture<ContactUS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUS],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
