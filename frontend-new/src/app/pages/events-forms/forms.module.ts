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

//angular Material Modules
import {AngularMaterialModule} from '../../material-module';
//time picker
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxSelectModule } from 'ngx-select-ex';
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

import {NbDateFnsDateModule} from '@nebular/date-fns';
import { PendingChangesGuardGuard } from '../pending-changes-guard.guard';
import { EquipmentTableComponent } from './components/equipment-table/equipment-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    NbDialogModule.forChild(),
    ThemeModule,
    NgxMaterialTimepickerModule,
    NgxSelectModule,
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
    AngularMaterialModule,
    NbDateFnsDateModule,
    AgGridModule.withComponents([])
  ],
  providers:[
    [PendingChangesGuardGuard],
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
    FileDownloadButtonComponent,
    FormTopButtonsComponent,
    EquipmentTableComponent,
  ],
})
export class FormsModule { }