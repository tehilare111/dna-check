import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { LostFormComponent } from './lost-form/lost-form.component';
import { CorruptionFormComponent } from './corruption-form/corruption-form.component';
import { EquipmentReviewComponent } from './equipment-review/equipment-review.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'lost-form',
        component: LostFormComponent,
      },
      {
        path: 'corruption-form',
        component: CorruptionFormComponent,
      },
      {
        path: 'equipment-review',
        component: EquipmentReviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

