import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsTableComponent } from './equipments-table.component';

describe('EquipmentsTableComponent', () => {
  let component: EquipmentsTableComponent;
  let fixture: ComponentFixture<EquipmentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
