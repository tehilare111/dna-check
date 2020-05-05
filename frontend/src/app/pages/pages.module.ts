import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagementComponent } from './management/management.component';
import { managementModule } from './management/management.module';
import {HttpClientModule} from '@angular/common/http'
//import { ControlTableComponent } from './control-table/control-table.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    managementModule,
    HttpClientModule,
  ],
  declarations: [
    PagesComponent,
    ManagementComponent,
    //  ControlTableComponent,
    ],
})
export class PagesModule {
}
