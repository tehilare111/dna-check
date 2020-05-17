import { Component, OnInit, Input } from '@angular/core';

import { EventForm } from '../../events-forms.templates';

@Component({
  selector: 'ngx-event-status-shorted',
  templateUrl: './event-status-shorted.component.html',
  styleUrls: ['./event-status-shorted.component.scss']
})
export class EventStatusShortedComponent implements OnInit {

  @Input() eventForm: EventForm = new EventForm();
  @Input() readonly: boolean = true;

  @Input() results = [];

  eventStatusOptions = ["פתוח", "סגור"]

  constructor() { }

  ngOnInit(): void {
  }

  pushFormFields<T extends EventForm>(form: T): T {
    form.eventStatus = this.eventForm.eventStatus;
    return form;
  }
}