import { NgModule } from '@angular/core';
import { 
  NbMenuModule, 
  NbCardModule, 
  NbInputModule, 
  NbIconModule, 
  NbActionsModule,
  NbButtonModule,
  NbTabsetModule,
  NbSpinnerModule,
  NbSelectModule,
  NbOptionModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagementComponent } from './management/management.component';
//import { ControlTableComponent } from './control-table/control-table.component';
import { TreeModule } from 'angular-tree-component';
import { RegisterComponent } from './management/register/register.component';
import { LoginComponent } from './management/login/login.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    TreeModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTabsetModule,
    NbActionsModule,
    NbButtonModule,
    FormsModule,
    NbSpinnerModule,
    NbSelectModule,
    NbOptionModule,                              // <========== Add this line!
    ReactiveFormsModule ,
    NbTreeGridModule,
  ],
  declarations: [
    PagesComponent,
    ManagementComponent,
    RegisterComponent,
    LoginComponent,
    //  ControlTableComponent,
    ],
})
export class PagesModule {
}