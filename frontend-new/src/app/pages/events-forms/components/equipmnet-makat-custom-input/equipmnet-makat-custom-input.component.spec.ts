import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmnetMakatCustomInputComponent } from './equipmnet-makat-custom-input.component';

describe('EquipmnetMakatCustomInputComponent', () => {
  let component: EquipmnetMakatCustomInputComponent;
  let fixture: ComponentFixture<EquipmnetMakatCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmnetMakatCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmnetMakatCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
