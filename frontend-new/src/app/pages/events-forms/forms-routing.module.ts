import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
// import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { LostFormComponent } from './lost-form/lost-form.component';
import { EquipmentReviewComponent } from './equipment-review/equipment-review.component';
import { CorruptionFormComponent } from './corruption-form/corruption-form.component';
// import { CorruptionFormComponent } from './corruption-form/corruption-form.component';
// import { EquipmentReviewComponent } from './equipment-review/equipment-review.component';
import {PendingChangesGuardGuard}from '../pending-changes-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'lost-form',
        component: LostFormComponent,
        canDeactivate: [PendingChangesGuardGuard],
      },
      {
        path: 'corruption-form',
        component: CorruptionFormComponent,
        canDeactivate: [PendingChangesGuardGuard],
      },
      {
        path: 'equipment-review',
        component: EquipmentReviewComponent,
        canDeactivate: [PendingChangesGuardGuard],
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

