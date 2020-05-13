import { Component, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  eventType: string = 'אובדן ציוד';
  eventFilesFields: string[] = ['handlingFile', 'findingFile', 'investigationFile'];

  lostForm: LostFormTemplate = new LostFormTemplate();
  uploadLoading = false;
  @ViewChild("dialog") dialog : ElementRef;
  @ViewChild("status") eventStatusForm : EventStatusComponent;
  reference = undefined;
  formFiles : {'id': string, 'file': File}[] = []; 
  readonly : boolean = true;
  popUpDialogContext: string = '';

  baseUrl: string = '';

  // select fields options:
  results = ["טופל", "טרם טופל"]
  units = ["מצוב", "מעוף", "מצפן"]
  ranks = ["סמל", "רבט", "טוראי"]
  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  equipments = [{"name": "ציוד", "list" : this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions = []  
  
  constructor(private RestApiService: RestApiService, public activatedRoute: ActivatedRoute, private dialogService: NbDialogService, private router: Router) { this.baseUrl = this.RestApiService.baseUrl; console.log(this.baseUrl) }

  handleFileUpload(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.formFiles.push({'id': target.attributes.id.value, 'file': target.files.item(0)});
  }
  
  ngOnInit() {
    // Set eventType field according to the form event type
    this.lostForm.eventType = this.eventType
    
    // Recieve form data from db according to its reference
    this.reference = this.activatedRoute.snapshot.params.reference;
    if (this.reference){
      this.exisitingFormLoadData(this.reference);
    } else {
      this.readonly = false;
      this.newFormLoadData();
    }
  }

  newFormLoadData() {
    this.RestApiService.getNewEventForm().subscribe((data_from_server) => {
      this.lostForm.date = data_from_server.datetime
    });
  }

  exisitingFormLoadData(reference: string){
    this.RestApiService.getExistingEventForm(reference).subscribe((data_from_server: LostFormTemplate) => {
      this.lostForm = data_from_server
    });
  }

  save() {
    const formData: FormData = new FormData();
    this.lostForm = this.eventStatusForm.pushFormFields<LostFormTemplate>(this.lostForm);
  
    // insert lostForm to FormData object
    for(let [key, value] of Object.entries(this.lostForm)){
      if (value && ! this.eventFilesFields.includes(key)) { formData.append(key, value); console.log('1:', formData); }
    }

    for (var pair of formData.entries()) {
        console.log('1: ', pair[0]+ ', ' + pair[1]); 
    }

    // insert all files to FormData object
    for( let formFile of this.formFiles ){
      formData.append(formFile['id'], formFile['file'], formFile['file'].name);
    }

    for (var pair of formData.entries()) {
        console.log('2: ', pair[0]+ ', ' + pair[1]); 
    }    

    if (this.reference){
      this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          (data: LostFormTemplate) => {
            this.uploadLoading = false;
            this.reference = data.reference;
            this.popUpDialogContext = `האירוע התעדכן בהצלחה, סימוכין: ${this.reference}`;
          },
          error => console.log(error));
    } else {
      this.RestApiService.createNewEventFormWithFiles(formData)
      .subscribe(
        (data: LostFormTemplate) => {
          this.uploadLoading = false;
          this.reference = data.reference;
          this.popUpDialogContext = `האירוע נוצר בהצלחה, סימוכין: ${this.reference}`;
        },
        error => console.log(error));
    }
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

  printForm() {
    window.print()
  }

  deleteEventForm(){
    this.uploadLoading = true;
    this.openWithoutBackdropClick(this.dialog);
    this.RestApiService.deleteExistingEventForm(this.reference)
      .subscribe(
        (data: LostFormTemplate) => {
          this.uploadLoading = false;
          this.popUpDialogContext = `אירוע עם סימוכין ${this.reference} נמחק`;
        },
        error => console.log(error));
  }

  getFileName(fileNameWithPath){
    if (fileNameWithPath) return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1)
  }
}