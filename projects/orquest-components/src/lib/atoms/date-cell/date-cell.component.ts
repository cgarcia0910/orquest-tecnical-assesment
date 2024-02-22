import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig } from '../../organisms/orquest-full-table/orquest-full-table.component';

@Component({
  selector: 'lib-date-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-cell.component.html',
  styleUrls: ['./date-cell.component.css']
})
export class DateCellComponent {
  @Input() fieldConfig: FieldConfig | undefined;
  @Input() rowData?: {[key: string]: string | number | Date | null | undefined} | undefined;
}
