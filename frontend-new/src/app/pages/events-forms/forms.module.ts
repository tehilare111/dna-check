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
// import { FormInputsComponent } from './form-inputs/form-inputs.component';
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
    NbChatModule
  ],
  declarations: [
    FormsComponent,
    // FormInputsComponent,
    LostFormComponent,
    // CorruptionFormComponent,
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
  ],
})
export class FormsModule { }