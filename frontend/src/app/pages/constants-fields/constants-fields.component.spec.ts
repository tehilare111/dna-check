import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsFieldsComponent } from './constants-fields.component';

describe('ConstantsFieldsComponent', () => {
  let component: ConstantsFieldsComponent;
  let fixture: ComponentFixture<ConstantsFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantsFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantsFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
