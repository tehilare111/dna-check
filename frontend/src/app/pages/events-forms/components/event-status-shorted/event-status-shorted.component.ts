import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../../../services/rest-api.service';
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

  eventStatusOptions = ["פתוח","סגור"]

  constructor(private RestApiService:RestApiService) { }

  ngOnInit(): void {
    this.get_constas_feilds()
  }
  get_constas_feilds() {
    this.RestApiService.getConstatnsFields().subscribe((data_from_server) => {
      
      this.eventStatusOptions=data_from_server.eventStatus
    });
  }
  

  pushFormFields<T extends EventForm>(form: T): T {
    form.eventStatus = this.eventForm.eventStatus;
    return form;
  }
}