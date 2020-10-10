import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FieldBoxComponent } from "./constants-fields/components/field-box.component";
import { ConstantsFieldsComponent } from './constants-fields/constants-fields.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { ManagementComponent } from './management/management.component';
import { TreeModule } from 'angular-tree-component';
import { LoginComponent } from './details_users/login/login.component';
import {AngularMaterialModule} from '../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationDialogComponent } from './management/components/confirmation-dialog/confirmation-dialog.component';
import { UserPermissionsComponent } from './management/components/table-columns/user-permissions/user-permissions.component';
import { UserPermissionsRenderComponent } from './management/components/table-columns/user-permissions-render/user-permissions-render.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    Ng2SmartTableModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    TreeModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ControlTableComponent,
    ManagementComponent,
    LoginComponent,
    ConstantsFieldsComponent,
    FieldBoxComponent,
    ConfirmationDialogComponent,
    UserPermissionsComponent,
    UserPermissionsRenderComponent

  ],
  entryComponents:[
    ConfirmationDialogComponent,
    UserPermissionsComponent,
    UserPermissionsRenderComponent
  ],
})
export class PagesModule {
}
