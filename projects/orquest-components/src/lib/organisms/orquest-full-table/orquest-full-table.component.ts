import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

export type IFullTableDataSource = {[key: string]: unknown}[];

export type IFullTableConfig = {
  header: Header
  data: Data
}[];

interface Header {
  label: string;
  id: string;
};

interface Data {
  field: string;
};

interface Field {
  cols: Col[];
};

interface Col {
  field: string[];
};

@Component({
  selector: 'lib-orquest-full-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './orquest-full-table.component.html',
  styleUrls: ['./orquest-full-table.component.css']
})
export class OrquestFullTableComponent {
  @Input() dataSource: IFullTableDataSource | null = [];
  @Input() config: IFullTableConfig | null = [];
  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  }
  ]
}
