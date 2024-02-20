import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrquestFullTableComponent } from './orquest-full-table.component';

describe('OrquestFullTableComponent', () => {
  let component: OrquestFullTableComponent;
  let fixture: ComponentFixture<OrquestFullTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrquestFullTableComponent]
    });
    fixture = TestBed.createComponent(OrquestFullTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
