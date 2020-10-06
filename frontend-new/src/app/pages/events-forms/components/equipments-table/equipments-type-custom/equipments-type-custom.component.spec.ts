import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsTypeCustomComponent } from './equipments-type-custom.component';

describe('EquipmentsTypeCustomComponent', () => {
  let component: EquipmentsTypeCustomComponent;
  let fixture: ComponentFixture<EquipmentsTypeCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsTypeCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsTypeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
