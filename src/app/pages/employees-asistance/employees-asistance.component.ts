import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrquestFullTableWeeklyFilteredComponent } from 'projects/orquest-components/src/lib/organisms/orquest-full-table-weekly-filtered/orquest-full-table-weekly-filtered.component';
import { EMPLOYEES_ASISTANCE_CONFIG_TABLE, JUST_DATE } from './employees-asistance.constants';
import { IModelEmployeesAsistance } from 'src/app/domain/ports/i-model-displayer';
import { Observable, firstValueFrom } from 'rxjs';
import { IFullTableDataSource } from 'projects/orquest-components/src/lib/organisms/orquest-full-table/orquest-full-table.component';

@Component({
  selector: 'app-employees-asistance',
  standalone: true,
  imports: [OrquestFullTableWeeklyFilteredComponent],
  templateUrl: './employees-asistance.component.html',
  styleUrls: ['./employees-asistance.component.scss']
})
export class EmployeesAsistanceComponent {
  constructor(@Inject('IModelEmployeesAsistance') public _modelEmployeesAsistance: IModelEmployeesAsistance) {}
  dataSource: IFullTableDataSource | null = null;
    
  employeesAsistanceTableConfig = EMPLOYEES_ASISTANCE_CONFIG_TABLE;
  doAction(data: {action: string, value: unknown}) {
    const {action = undefined, value = undefined} = data || {};
    switch(action) {
      case 'changeVisualizatedWeek':
        const {dateFrom = undefined, dateTo = undefined } = value as {dateFrom: Date, dateTo: Date} || {};
        if(dateFrom && dateTo) {
          firstValueFrom(this._modelEmployeesAsistance.getAsistanceByWeek(dateFrom, dateTo))
            .then(dataSource => this.dataSource = dataSource as unknown as IFullTableDataSource);
        }
        break;
    }
  }
}
