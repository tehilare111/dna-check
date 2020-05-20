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
  NbSearchModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { RegisterComponent} from './register/register.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';

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
    NbSearchModule,

   // ...
   NbAuthModule.forRoot({
         strategies: [
           NbPasswordAuthStrategy.setup({
             name: 'email',

             token: {
               class: NbAuthJWTToken,
             }
           }),
         ],
         forms: {},
       }), 
  ],
  declarations: [RegisterComponent,LoginComponent],
})
export class managementModule { 
  constructor(){

  }
}