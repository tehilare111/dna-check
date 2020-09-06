import { Component, OnInit, Input } from '@angular/core';

import { Form } from '../../events-forms.templates';

@Component({
  selector: 'ngx-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  
  @Input() form: Form = new Form();
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
