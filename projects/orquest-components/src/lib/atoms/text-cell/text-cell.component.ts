import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig } from '../../organisms/orquest-full-table/orquest-full-table.component';

@Component({
  selector: 'lib-text-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-cell.component.html',
  styleUrls: ['./text-cell.component.css']
})
export class TextCellComponent {
  @Input() fieldConfig: FieldConfig | undefined;
  @Input() rowData?: {[key: string]: string | number | Date | null | boolean | undefined} | undefined;
}
