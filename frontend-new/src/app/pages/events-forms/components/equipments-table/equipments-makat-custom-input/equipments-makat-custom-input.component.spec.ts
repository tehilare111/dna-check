import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsMakatCustomInputComponent } from './equipments-makat-custom-input.component';

describe('EquipmentsMakatCustomInputComponent', () => {
  let component: EquipmentsMakatCustomInputComponent;
  let fixture: ComponentFixture<EquipmentsMakatCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsMakatCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsMakatCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
