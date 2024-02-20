import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrquestFullTableWeeklyFilteredComponent } from 'projects/orquest-components/src/lib/organisms/orquest-full-table-weekly-filtered/orquest-full-table-weekly-filtered.component';
import { EMPLOYEES_ASISTANCE_CONFIG_TABLE } from './employees-asistance.constants';
import { IModelEmployeesAsistance } from 'src/app/domain/ports/i-model-displayer';
import { Observable } from 'rxjs';
import { IFullTableDataSource } from 'projects/orquest-components/src/lib/organisms/orquest-full-table/orquest-full-table.component';

@Component({
  selector: 'app-employees-asistance',
  standalone: true,
  imports: [CommonModule, OrquestFullTableWeeklyFilteredComponent],
  templateUrl: './employees-asistance.component.html',
  styleUrls: ['./employees-asistance.component.scss']
})
export class EmployeesAsistanceComponent implements OnInit{
  constructor(@Inject('IModelEmployeesAsistance') public _modelEmployeesAsistance: IModelEmployeesAsistance) {}
  dataSource: IFullTableDataSource | null = null;
  ngOnInit(): void {
    this._modelEmployeesAsistance.getAsistanceByWeek(1).subscribe(e => this.dataSource = e as unknown as IFullTableDataSource)
  }
    
  employeesAsistanceTableConfig = EMPLOYEES_ASISTANCE_CONFIG_TABLE;
}
