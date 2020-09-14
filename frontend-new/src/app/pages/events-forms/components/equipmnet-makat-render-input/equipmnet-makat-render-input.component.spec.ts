import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmnetMakatRenderInputComponent } from './equipmnet-makat-render-input.component';

describe('EquipmnetMakatRenderInputComponent', () => {
  let component: EquipmnetMakatRenderInputComponent;
  let fixture: ComponentFixture<EquipmnetMakatRenderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmnetMakatRenderInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmnetMakatRenderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
