import {NgModule} from '@angular/core'
import { RouterModule, Routes, Router } from '@angular/router';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbAlertModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { RegisterComponent} from './register/register.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

const routes:Routes=[
]

@NgModule({
  imports:[
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule.forRoot(),
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbAlertModule,
    ngFormsModule,
  ],
  declarations: [RegisterComponent, PermissionsComponent],
})
export class managementModule { 
  constructor(){

  }
}
