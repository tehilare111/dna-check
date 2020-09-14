import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmnetMarkCustomInputComponent } from './equipmnet-mark-custom-input.component';

describe('EquipmnetMarkCustomInputComponent', () => {
  let component: EquipmnetMarkCustomInputComponent;
  let fixture: ComponentFixture<EquipmnetMarkCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmnetMarkCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmnetMarkCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
