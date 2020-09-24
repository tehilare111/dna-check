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
  NbTreeGridModule,
  NbSelectModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagementComponent } from './management/management.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { TreeModule } from 'angular-tree-component';
import { ConstantsFieldsComponent } from './constants-fields/constants-fields.component';
import { FieldBoxComponent } from './constants-fields/components/field-box.component';
import { FsIconComponent } from './tables/tree-grid/tree-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './details_users/login/login.component';
import { RegisterComponent } from './details_users/register/register.component';;


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
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbSelectModule,
    HttpClientModule,
    
    
  ],
  declarations: [
    PagesComponent,
    ManagementComponent,
    FsIconComponent,
    ControlTableComponent,
    ConstantsFieldsComponent,
    FieldBoxComponent,

    RegisterComponent,
    LoginComponent,
    ],
})
export class PagesModule {
}
