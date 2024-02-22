import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig } from '../../organisms/orquest-full-table/orquest-full-table.component';
import { DateCellComponent } from '../../atoms/date-cell/date-cell.component';
import { TextCellComponent } from '../../atoms/text-cell/text-cell.component';
import { WarningComponentComponent } from '../../atoms/warning-component/warning-component.component';

@Component({
  selector: 'lib-data-cell',
  standalone: true,
  imports: [CommonModule, DateCellComponent, TextCellComponent, WarningComponentComponent],
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent {
  @Input() fieldConfig?: FieldConfig;
  @Input() rowData?: {[key: string]: string | number | Date | null | undefined};
}
