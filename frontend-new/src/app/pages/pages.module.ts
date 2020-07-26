import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagementComponent } from './management/management.component';
import { TreeModule } from 'angular-tree-component';
import { LostFormComponent } from './events-forms/lost-form/lost-form.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    TreeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ManagementComponent,
    LostFormComponent,
  ],
})
export class PagesModule {
}
