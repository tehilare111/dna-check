import { Component, OnInit, Input } from '@angular/core';

import { EventForm } from '../../events-forms.templates';

@Component({
  selector: 'ngx-event-status',
  templateUrl: './event-status.component.html',
  styleUrls: ['./event-status.component.scss']
})
export class EventStatusComponent implements OnInit {

  @Input() eventForm: EventForm = new EventForm();

  constructor() { }

  ngOnInit(): void {
  }

}
