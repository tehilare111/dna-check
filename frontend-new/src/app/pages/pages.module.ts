import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FieldBoxComponent } from "./constants-fields/components/field-box.component";
import { ConstantsFieldsComponent } from './constants-fields/constants-fields.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { RegisterComponent } from './details_users/register/register.component';
import { ManagementComponent } from './management/management.component';
import { TreeModule } from 'angular-tree-component';
import { LoginComponent } from './details_users/login/login.component';
import { NotReadMsgsColComponent } from './control-table/components/not-read-msgs-col/not-read-msgs-col.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

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
    TreeModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    NbDateFnsDateModule,
    AngularMultiSelectModule,
    ],
    providers:[
      [PendingChangesGuardGuard],
    ],
  entryComponents: [
    NotReadMsgsColComponent,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ControlTableComponent,
    ManagementComponent,
    LoginComponent,
    ConstantsFieldsComponent,
    FieldBoxComponent,
    RegisterComponent,
    NotReadMsgsColComponent,
  ],
})
export class PagesModule {
}