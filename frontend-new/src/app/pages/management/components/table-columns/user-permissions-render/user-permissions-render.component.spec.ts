import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionsRenderComponent } from './user-permissions-render.component';

describe('UserPermissionsRenderComponent', () => {
  let component: UserPermissionsRenderComponent;
  let fixture: ComponentFixture<UserPermissionsRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPermissionsRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPermissionsRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
