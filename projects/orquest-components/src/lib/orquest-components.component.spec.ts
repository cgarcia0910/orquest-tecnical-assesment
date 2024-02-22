import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrquestComponentsComponent } from './orquest-components.component';

describe('OrquestComponentsComponent', () => {
  let component: OrquestComponentsComponent;
  let fixture: ComponentFixture<OrquestComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrquestComponentsComponent]
    });
    fixture = TestBed.createComponent(OrquestComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
