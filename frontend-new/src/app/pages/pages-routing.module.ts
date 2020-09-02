import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ManagementComponent } from './management/management.component';
import { LoginComponent } from './details_users/login/login.component';
import { RegisterComponent } from './details_users/register/register.component';
import { ConstantsFieldsComponent } from './constants-fields/constants-fields.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  },{
    path: 'management',
    component: ManagementComponent,
  },{
    path: 'constants-fields',
    component: ConstantsFieldsComponent,
  },{
    path: 'iot-dashboard',
    component: DashboardComponent,
  },{
    path: 'control-table',
    component: ControlTableComponent,
  }, {
    path:'',
    component:LoginComponent,
  },{
  path:'login',
    component:LoginComponent,
  },{path:'register',
    component:RegisterComponent,
  },{
  path: 'register',
    component: RegisterComponent,
  },{
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },{
    path: 'events-forms',
    loadChildren: './events-forms/forms.module#FormsModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
