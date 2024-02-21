import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig } from '../../organisms/orquest-full-table/orquest-full-table.component';

@Component({
  selector: 'lib-warning-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-component.component.html',
  styleUrls: ['./warning-component.component.css']
})
export class WarningComponentComponent {
  @Input() fieldConfig: FieldConfig | undefined;
  @Input() rowData?: {[key: string]: string | number | Date | null | undefined} | undefined;
}
