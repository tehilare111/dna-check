import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmnetsTableComponent } from './equipmnets-table.component';

describe('EquipmnetsTableComponent', () => {
  let component: EquipmnetsTableComponent;
  let fixture: ComponentFixture<EquipmnetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmnetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmnetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
