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
<<<<<<< HEAD
  NbTreeGridModule,
  NbSelectModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
=======
  NbSelectModule,
  NbOptionModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

>>>>>>> 713a471... update and check perosnal number and fix alert register and login page

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagementComponent } from './management/management.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { TreeModule } from 'angular-tree-component';
<<<<<<< HEAD
import { ConstantsFieldsComponent } from './constants-fields/constants-fields.component';
import { FieldBoxComponent } from './constants-fields/components/field-box.component';
=======
import { RegisterComponent } from './management/register/register.component';
import { LoginComponent } from './management/login/login.component';
>>>>>>> 1a2c54c... new file login page and register page and add model and function add user get user

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
<<<<<<< HEAD
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbSelectModule
=======
    NbSelectModule,
    NbOptionModule,                              // <========== Add this line!
    ReactiveFormsModule ,
>>>>>>> 713a471... update and check perosnal number and fix alert register and login page
  ],
  declarations: [
    PagesComponent,
    ManagementComponent,
<<<<<<< HEAD
    ControlTableComponent,
    ConstantsFieldsComponent,
    FieldBoxComponent,
=======
    RegisterComponent,
    LoginComponent,
    //  ControlTableComponent,
>>>>>>> 1a2c54c... new file login page and register page and add model and function add user get user
    ],
})
export class PagesModule {
}
