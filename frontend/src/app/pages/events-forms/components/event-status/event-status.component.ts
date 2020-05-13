import { Component, OnInit, Input } from '@angular/core';

import { EventForm } from '../../events-forms.templates';

@Component({
  selector: 'ngx-event-status',
  templateUrl: './event-status.component.html',
  styleUrls: ['./event-status.component.scss']
})
export class EventStatusComponent implements OnInit {

  @Input() eventForm: EventForm = new EventForm();
  @Input() readonly: boolean = true;

  @Input() results = [];

  eventStatusOptions = ["פתוח", "סגור"]
  handlingStatusOptions = ["אבד", "נמצא"]

  constructor() { }

  ngOnInit(): void {
  }

  pushFormFields<T extends EventForm>(form: T): T {
    form.caseIdOnMetzah = this.eventForm.caseIdOnMetzah;
    form.handlingResults = this.eventForm.handlingResults;
    form.eventStatus = this.eventForm.eventStatus;
    form.handlingStatus = this.eventForm.handlingStatus;
    return form;
  }
}