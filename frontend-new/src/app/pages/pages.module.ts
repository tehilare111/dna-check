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
import { RegisterComponent } from './details_users/register/register.component';
import { ManagementComponent } from './management/management.component';
import { TreeModule } from 'angular-tree-component';
import { LoginComponent } from './details_users/login/login.component';
import {MatTableModule} from '@angular/material'
import {MatInputModule,MatOptionModule, MatSelectModule,MatPaginatorModule ,MatSortModule,MatFormFieldModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import { NgxSelectModule } from 'ngx-select-ex';

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
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    NgxSelectModule,
    MatFormFieldModule,
    
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ControlTableComponent,
    ManagementComponent,
    LoginComponent,
    ConstantsFieldsComponent,
    FieldBoxComponent,
    RegisterComponent,
  


  ],
})
export class PagesModule {
}
