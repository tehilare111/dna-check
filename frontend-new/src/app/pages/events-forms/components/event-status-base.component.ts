import { OnInit } from '@angular/core';

import { EventForm } from '../events-forms.templates';

export abstract class EventStatusBase implements OnInit {
  constructor(){}
  ngOnInit(){}
  pushFormFields<T extends EventForm>(form: T): T {return;}
}
