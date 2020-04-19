import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LostFormTemplate } from '../events-forms.templates';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./lost-form.component.scss'],
  templateUrl: './lost-form.component.html',
})
export class LostFormComponent {
  lostForm: LostFormTemplate = new LostFormTemplate();
  submitted = false;

  constructor(private RestApiService: RestApiService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
    this.lostForm.eventType = this.activatedRoute.snapshot.params.eventType;
  }

  loadData() {
    this.RestApiService.getNewEventForm().subscribe((data_from_server) => {
      this.lostForm.date = data_from_server.datetime
    });
  }

  newCustomer(): void {
    this.submitted = false;
    this.lostForm = new LostFormTemplate();
  }

  save() {
    this.RestApiService.createCustomer(this.lostForm)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.lostForm = new LostFormTemplate();
  }

  onSubmit() {
    //console.log(this.lostForm);
    this.save();
  }
}