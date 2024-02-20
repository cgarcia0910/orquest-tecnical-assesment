import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAsistanceComponent } from './employees-asistance.component';

describe('EmployeesAsistanceComponent', () => {
  let component: EmployeesAsistanceComponent;
  let fixture: ComponentFixture<EmployeesAsistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeesAsistanceComponent]
    });
    fixture = TestBed.createComponent(EmployeesAsistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
