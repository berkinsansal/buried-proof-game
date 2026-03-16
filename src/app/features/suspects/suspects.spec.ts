import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suspects } from './suspects';

describe('Suspects', () => {
  let component: Suspects;
  let fixture: ComponentFixture<Suspects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suspects],
    }).compileComponents();

    fixture = TestBed.createComponent(Suspects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
