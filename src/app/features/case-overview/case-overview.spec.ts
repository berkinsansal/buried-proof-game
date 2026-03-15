import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseOverview } from './case-overview';

describe('CaseOverview', () => {
  let component: CaseOverview;
  let fixture: ComponentFixture<CaseOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
