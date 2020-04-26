import { Component, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

import { LostFormTemplate } from '../events-forms.templates';
import { RestApiService } from '../../../services/rest-api.service';
import { EventStatusComponent } from '../components/event-status/event-status.component';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./lost-form.component.scss'],
  templateUrl: './lost-form.component.html',
})
export class LostFormComponent {
  lostForm: LostFormTemplate = new LostFormTemplate();
  uploadLoading = false;
  @ViewChild("dialog") dialog : ElementRef;
  @ViewChild("status") eventStatusForm : EventStatusComponent;
  reference = "";

  constructor(private RestApiService: RestApiService, public activatedRoute: ActivatedRoute, private dialogService: NbDialogService) { }

  // ----------------------
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  // ----------------------
  
  ngOnInit() {
    this.loadData();
    // Recieve form type from navigation router
    this.lostForm.eventType = this.activatedRoute.snapshot.params.eventType;
  }

  loadData() {
    this.RestApiService.getNewEventForm().subscribe((data_from_server) => {
      this.lostForm.date = data_from_server.datetime
    });
  }

  newCustomer(): void {
    this.lostForm = new LostFormTemplate();
  }

  save() {
    const formData: FormData = new FormData();
    this.lostForm = this.eventStatusForm.pushFormFields<LostFormTemplate>(this.lostForm);
  
    // insert lostForm to FormData object
    for(let [key, value] of Object.entries(this.lostForm)){
      formData.append(key, value);
    }
    // insert all files to FormData object
    formData.append('investigationFile', this.fileToUpload, this.fileToUpload.name);
  
    this.RestApiService.createNewEventFormWithFiles(formData)
      .subscribe(
        (data: LostFormTemplate) => {
          console.log("response:", data)
          this.uploadLoading = false;
          this.reference = data.reference;
        },
        error => console.log(error));
    //this.lostForm = new LostFormTemplate(); // initialize form
  }

  openWithoutBackdropClick(dialog) {
    this.dialogService.open(
      dialog,
      {
        //context: this.formUploadResult.reference,
        closeOnBackdropClick: false,
      });
  }

  onSubmit() {
    this.uploadLoading = true;
    this.openWithoutBackdropClick(this.dialog);
    this.save();
  }
}