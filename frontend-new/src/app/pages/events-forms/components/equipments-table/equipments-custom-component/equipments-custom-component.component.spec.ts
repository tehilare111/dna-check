import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsCustomComponentComponent } from './equipments-custom-component.component';

describe('EquipmentsCustomComponentComponent', () => {
  let component: EquipmentsCustomComponentComponent;
  let fixture: ComponentFixture<EquipmentsCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
