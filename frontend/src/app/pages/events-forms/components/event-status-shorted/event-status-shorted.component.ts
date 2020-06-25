import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../../../services/rest-api.service';
import { EventForm } from '../../events-forms.templates';
import { JwtService } from '../../../../services/jwt.service';

@Component({
  selector: 'ngx-event-status-shorted',
  templateUrl: './event-status-shorted.component.html',
  styleUrls: ['./event-status-shorted.component.scss']
})
export class EventStatusShortedComponent implements OnInit {

  @Input() eventForm: EventForm = new EventForm();
  @Input() readonly: boolean = true;
  constatns_array=[]
  @Input() results = [];

  eventStatusOptions = ["פתוח","סגור"]

  constructor(private jwt:JwtService,private RestApiService:RestApiService) { }

  ngOnInit(): void {
    this.get_constas_feilds()
  }
  get_constas_feilds() {
    this.constatns_array=["eventStatus"]
    this.jwt.Get_constans_fiald(this.constatns_array).subscribe((data_from_server) => {
      
      this.eventStatusOptions=data_from_server.data
    });
  }
  

  pushFormFields<T extends EventForm>(form: T): T {
    form.eventStatus = this.eventForm.eventStatus;
    return form;
  }
}