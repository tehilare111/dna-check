import { Component, OnInit, Input } from '@angular/core';

import { RestApiService } from '../../../../services/rest-api.service';
import { EventForm } from '../../events-forms.templates';
import { EventStatusBase } from '../event-status-base.component'; 

@Component({
  selector: 'ngx-event-status',
  templateUrl: './event-status.component.html',
  styleUrls: ['./event-status.component.scss']
})
export class EventStatusComponent extends EventStatusBase implements OnInit {

  @Input() eventForm: EventForm = new EventForm();
  @Input() readonly: boolean = true;
  constants_array = []
  @Input() eventStatusOptions = [];
  @Input() handlingStatusOptions = []
  results = ["פתוח", "סגור"]
 

  constructor(private RestApiService:RestApiService) { super(); }

  ngOnInit(): void {
    // this.get_constas_feilds()
  }
  get_constas_feilds() {
    this.constants_array=["eventStatus","handlingStatus"]
    this.RestApiService.getConstansFialdsNotPermissions(this.constants_array).subscribe((data_from_server) => {
      this.eventStatusOptions=data_from_server.data.eventStatus
      this.handlingStatusOptions=data_from_server.data.handlingStatus
    });
  }
  pushFormFields<T extends EventForm>(form: T): T {
    form.caseIdOnMetzah = this.eventForm.caseIdOnMetzah;
    form.handlingResults = this.eventForm.handlingResults;
    form.eventStatus = this.eventForm.eventStatus;
    form.handlingStatus = this.eventForm.handlingStatus;
    return form;
  }
}