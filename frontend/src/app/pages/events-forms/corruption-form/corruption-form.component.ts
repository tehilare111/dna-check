import { Component } from '@angular/core';

import { LostFormTemplate } from '../events-forms.templates';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./corruption-form.component.scss'],
  templateUrl: './corruption-form.component.html',
})
export class CorruptionFormComponent {
  lostForm: LostFormTemplate = new LostFormTemplate();
  submitted = false;

  constructor(private RestApiService: RestApiService) { }

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
    this.save();
  }
}