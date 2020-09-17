import { OnInit } from '@angular/core';

import { EventForm } from '../events-forms.templates';
import { EquipmnetsTableComponent } from '../components/equipmnets-table/equipmnets-table.component';

export class EventStatusBase implements OnInit {
  constructor(){}
  ngOnInit(){}
  pushFormFields<T extends EventForm>(form: T): T {return;}
}
