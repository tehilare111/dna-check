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
import { LoginComponent } from './details_users/login/login.component';
import { NotReadMsgsColComponent } from './control-table/components/not-read-msgs-col/not-read-msgs-col.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationDialogComponent } from './management/components/confirmation-dialog/confirmation-dialog.component';
import { UserPermissionsComponent } from './management/components/table-columns/user-permissions/user-permissions.component';
import { UserPermissionsRenderComponent } from './management/components/table-columns/user-permissions-render/user-permissions-render.component';

//angular Material Modules
import {AngularMaterialModule} from '../material-module';

//time picker
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NbDateFnsDateModule} from '@nebular/date-fns';
import { PendingChangesGuardGuard } from './pending-changes-guard.guard';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    AngularMaterialModule,
    NgxMaterialTimepickerModule,
    Ng2SmartTableModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbDateFnsDateModule,
    AngularMultiSelectModule,
    ],
    providers:[
      [PendingChangesGuardGuard],
    ],
  entryComponents: [
    NotReadMsgsColComponent,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationDialogComponent,
    UserPermissionsComponent,
    UserPermissionsRenderComponent
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ControlTableComponent,
    ManagementComponent,
    LoginComponent,
    ConstantsFieldsComponent,
    FieldBoxComponent,
    NotReadMsgsColComponent,
    ConfirmationDialogComponent,
    UserPermissionsComponent,
    UserPermissionsRenderComponent
  ],
})
export class PagesModule {
}