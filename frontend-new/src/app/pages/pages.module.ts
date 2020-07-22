import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
<<<<<<< HEAD
import { ControlTableComponent } from './control-table/control-table.component';
=======
import { ManagementComponent } from './management/management.component';
import { TreeModule } from 'angular-tree-component';
>>>>>>> 6a1a4c0... new management page

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
  ],
  declarations: [
    ...PAGES_COMPONENTS,
<<<<<<< HEAD
    ControlTableComponent,
=======
    ManagementComponent,
>>>>>>> 6a1a4c0... new management page
  ],
})
export class PagesModule {
}
