import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsMarkCustomInputComponent } from './equipments-mark-custom-input.component';

describe('EquipmentsMarkCustomInputComponent', () => {
  let component: EquipmentsMarkCustomInputComponent;
  let fixture: ComponentFixture<EquipmentsMarkCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsMarkCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsMarkCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
