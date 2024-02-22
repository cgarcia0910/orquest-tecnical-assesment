import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCellComponent } from './date-cell.component';
import { By } from '@angular/platform-browser';

describe('DateCellComponent', () => {
  let component: DateCellComponent;
  let fixture: ComponentFixture<DateCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateCellComponent]
    });
    fixture = TestBed.createComponent(DateCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render correct date', () => {
    const config = { "field": "day0StartTime", "fieldType": "FIXED_CET_CEST_DATE" };
    const data = { "name": "Antonio", "lastName": "Genaro", "day0StartTime": "2024-02-05T08:00:00Z", "day0EndTime": "2024-02-05T12:00:00Z", "day0Incomplete": false, "day1StartTime": "2024-02-06T10:00:00Z", "day1EndTime": "2024-02-06T18:00:00Z", "day1Incomplete": false, "day2StartTime": "2024-02-07T08:00:00Z", "day2Incomplete": true, "day3StartTime": "2024-02-08T08:00:00Z", "day3EndTime": "2024-02-08T12:00:00Z", "day3Incomplete": false, "day5StartTime": "2024-02-10T08:00:00Z", "day5EndTime": "2024-02-10T12:00:00Z", "day5Incomplete": false };
    component.fieldConfig = config;
    component.rowData = data as any;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeNode.innerText).toBe('09:00');
  })
});
