import { Component } from '@angular/core';

import { LostFormTemplate } from '../events-forms.templates';
import { CustomerService } from '../../../services/rest-api.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  lostForm: LostFormTemplate = new LostFormTemplate();
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.lostForm = new LostFormTemplate();
  }

  save() {
    this.customerService.createCustomer(this.lostForm)
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