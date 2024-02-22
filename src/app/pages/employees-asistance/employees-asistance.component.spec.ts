@Component({
  selector: 'lib-orquest-full-table-weekly-filtered',
  standalone: true,
  template: ``,
})
class LibOrquestFullTableWeeklyFilteredMock {
  @Input() public config: any;
  @Input() dataSource: any;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { EmployeesAsistanceComponent } from './employees-asistance.component';
import { IModelEmployeesAsistance } from 'src/app/domain/ports/i-model-displayer';
import { OrquestFullTableWeeklyFilteredComponent } from 'projects/orquest-components/src/lib/organisms/orquest-full-table-weekly-filtered/orquest-full-table-weekly-filtered.component';
import { Component, Input } from '@angular/core';

describe('DashboardComponent', () => {
  let component: EmployeesAsistanceComponent;
  let fixture: ComponentFixture<EmployeesAsistanceComponent>;
  let spyIModelEmployeeAsistance: jasmine.SpyObj<IModelEmployeesAsistance>;
  
  beforeEach(async () => {
    spyIModelEmployeeAsistance = jasmine.createSpyObj('IModelEmployeesAsistance', ['getAsistanceByWeek']);
    await TestBed.configureTestingModule({
      imports: [ EmployeesAsistanceComponent ],
      providers: [{ provide: 'IModelEmployeesAsistance', useValue: spyIModelEmployeeAsistance }]
    }).overrideComponent(EmployeesAsistanceComponent, {
            remove: { imports: [ OrquestFullTableWeeklyFilteredComponent ] },
            add: { imports: [ LibOrquestFullTableWeeklyFilteredMock ] }
          }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAsistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAsistanceByWeek if the week changes', () => {
    const getAsistanceByWeekSpy = spyIModelEmployeeAsistance.getAsistanceByWeek.and.returnValue(of([]));
    const changeDateTableAction = {action: 'changeVisualizatedWeek', value: {dateFrom: new Date(), dateTo: new Date()}};
    component.doAction(changeDateTableAction);
    expect(getAsistanceByWeekSpy).toHaveBeenCalled();
  })
});