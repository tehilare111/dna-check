import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmantsCustomComponentComponent } from './equipmants-custom-component.component';

describe('EquipmantsCustomComponentComponent', () => {
  let component: EquipmantsCustomComponentComponent;
  let fixture: ComponentFixture<EquipmantsCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmantsCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmantsCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
