import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmnetTypeCustomComponent } from './equipmnet-type-custom.component';

describe('EquipmnetTypeCustomComponent', () => {
  let component: EquipmnetTypeCustomComponent;
  let fixture: ComponentFixture<EquipmnetTypeCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmnetTypeCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmnetTypeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
