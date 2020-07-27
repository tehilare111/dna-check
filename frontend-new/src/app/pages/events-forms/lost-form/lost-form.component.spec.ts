import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostFormComponent } from './lost-form.component';

describe('LostFormComponent', () => {
  let component: LostFormComponent;
  let fixture: ComponentFixture<LostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
