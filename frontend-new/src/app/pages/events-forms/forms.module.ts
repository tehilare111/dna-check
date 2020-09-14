import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbInputModule,
  NbRadioModule,
  NbDialogModule,
  NbSelectModule,
  NbUserModule,
  NbSpinnerModule,
  NbChatModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { LostFormComponent } from './lost-form/lost-form.component';
// import { CorruptionFormComponent } from './corruption-form/corruption-form.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { DateDirective } from './validation-directives/date.directive';
import { IdDirective } from './validation-directives/id.directive';
import { StdFieldDirective } from './validation-directives/std-field.directive';
import { TimeDirective } from './validation-directives/time.directive';
import { MarkDirective } from './validation-directives/mark.directive';
import { MakatCopyDirective } from './validation-directives/makat-copy.directive';
import { TextDirective } from './validation-directives/text.directive';
import { EventStatusComponent } from './components/event-status/event-status.component';
import { ChatComponent } from './components/chat/chat.component';
import { EquipmentReviewComponent } from './equipment-review/equipment-review.component';
import { EventStatusShortedComponent } from './components/event-status-shorted/event-status-shorted.component';
import { CorruptionFormComponent } from './corruption-form/corruption-form.component';
import { FileDownloadButtonComponent } from './components/file-download-button/file-download-button.component';
import { FormTopButtonsComponent } from './components/form-top-buttons/form-top-buttons.component';
import { EquipmnetMakatRenderInputComponent } from './components/equipmnet-makat-render-input/equipmnet-makat-render-input.component';
import { EquipmnetMakatCustomInputComponent } from './components/equipmnet-makat-custom-input/equipmnet-makat-custom-input.component';
import { EquipmnetMarkCustomInputComponent } from './components/equipmnet-mark-custom-input/equipmnet-mark-custom-input.component';
import { EquipmnetTypeCustomComponent } from './components/equipmnet-type-custom/equipmnet-type-custom.component';
import { EquipmantsCustomComponentComponent } from './components/equipmants-custom-component/equipmants-custom-component.component';
import { EquipmnetsTableComponent } from './components/equipmnets-table/equipmnets-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';





@NgModule({
  imports: [
    NbDialogModule.forChild(),
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    ngFormsModule,
    NbSpinnerModule,
    NbChatModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    FormsComponent,
    FormInputsComponent,
    LostFormComponent,
    CorruptionFormComponent,
    EventDetailsComponent,
    DateDirective,
    IdDirective,
    StdFieldDirective,
    TimeDirective,
    MarkDirective,
    MakatCopyDirective,
    TextDirective,
    EventStatusComponent,
    ChatComponent,
    EquipmentReviewComponent,
    EventStatusShortedComponent,
<<<<<<< HEAD
    FileDownloadButtonComponent,
    FormTopButtonsComponent,
=======
    EquipmnetsTableComponent,
    EquipmantsCustomComponentComponent,
    EquipmnetTypeCustomComponent,
    EquipmnetMarkCustomInputComponent,
    EquipmnetMakatCustomInputComponent,
    EquipmnetMakatRenderInputComponent,

>>>>>>> a1b6c11... add A new feature of the amount of equipment in one form
  ],
  entryComponents:[EquipmantsCustomComponentComponent, EquipmnetTypeCustomComponent,EquipmnetMarkCustomInputComponent,EquipmnetMakatCustomInputComponent]
})
export class FormsModule { }