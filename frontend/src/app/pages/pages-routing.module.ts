import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ManagementComponent } from './management/management.component';
import { ConstantsFieldsComponent } from './constants-fields/constants-fields.component';

import { LoginComponent } from './details_users/login/login.component';
import { RegisterComponent } from './details_users/register/register.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  /*{
      path: 'control-table',
      component: ControlTableComponent,
      },*/
    {
      path: '',
      component: ControlTableComponent,
    },
    {
      path: 'control-table',
      component: ControlTableComponent,
    },
    {
      path: 'management',
      component: ManagementComponent,
    },
    {

      path: 'constants-fields',
      component: ConstantsFieldsComponent,
    },
    {
      path:'login',
      component:LoginComponent,
    },
      
    
    {
      path:'register',
      component:RegisterComponent,

    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'events-forms',
      loadChildren: () => import('./events-forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    /*{
    	  path: 'control-table',
	      component: ControlTableComponent,
      	loadChildren: () => import('./control-table/tables.module')
        .then(m => m.TablesModule),
    },*/
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
