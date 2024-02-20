import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrquestFullTableWeeklyFilteredComponent } from './orquest-full-table-weekly-filtered.component';

describe('OrquestFullTableWeeklyFilteredComponent', () => {
  let component: OrquestFullTableWeeklyFilteredComponent;
  let fixture: ComponentFixture<OrquestFullTableWeeklyFilteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrquestFullTableWeeklyFilteredComponent]
    });
    fixture = TestBed.createComponent(OrquestFullTableWeeklyFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
