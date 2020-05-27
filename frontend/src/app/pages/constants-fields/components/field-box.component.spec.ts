import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBoxComponent } from './field-box.component';

describe('FieldBoxComponent', () => {
  let component: FieldBoxComponent;
  let fixture: ComponentFixture<FieldBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
