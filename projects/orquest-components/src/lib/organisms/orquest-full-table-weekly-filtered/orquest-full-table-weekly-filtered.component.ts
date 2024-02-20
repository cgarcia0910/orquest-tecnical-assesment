import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFullTableConfig, IFullTableDataSource, OrquestFullTableComponent } from '../orquest-full-table/orquest-full-table.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'lib-orquest-full-table-weekly-filtered',
  standalone: true,
  imports: [CommonModule, OrquestFullTableComponent, CalendarModule, BrowserAnimationsModule, ReactiveFormsModule],
  templateUrl: './orquest-full-table-weekly-filtered.component.html',
  styleUrls: ['./orquest-full-table-weekly-filtered.component.css']
})
export class OrquestFullTableWeeklyFilteredComponent implements OnInit{
  @Input() dataSource: IFullTableDataSource | null = [];
  @Input() config: IFullTableConfig | null = [];
  @Output() Emitter = new EventEmitter<{action: string, value: unknown}>(undefined);
  
  date = new FormControl();
  
  ngOnInit(): void {
    this.date.valueChanges.subscribe((selectedDate: Date) => {
      this.Emitter.next({
        action: 'changeVisualizatedWeek', 
        value: {
          dateFrom: new Date(selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay() +1)), 
          dateTo: new Date(selectedDate.setDate(selectedDate.getDate() + 7 - selectedDate.getDay()))
        }});
    } )
    this.date.setValue(new Date());
  }
}
