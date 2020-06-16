import { Component, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { LostFormTemplate } from '../events-forms.templates';
import { RestApiService } from '../../../services/rest-api.service';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { ChatComponent } from '../components/chat/chat.component';
import { textValidator } from "../validation-directives/text.directive";
import { stdFieldValidator } from "../validation-directives/std-field.directive";
import { dateValidator } from "../validation-directives/date.directive";
import { idValidator } from "../validation-directives/id.directive";
import { makatCopyValidator } from "../validation-directives/makat-copy.directive";
import { markValidator } from "../validation-directives/mark.directive";
import { timeValidator } from "../validation-directives/time.directive";

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
  @ViewChild("dialog2") dialog2 : ElementRef;
  @ViewChild("status") eventStatusForm : EventStatusComponent;
  @ViewChild("chat") chatMessages : ChatComponent;
  reference = undefined;
  formFiles : {'id': string, 'file': File}[] = []; 
  readonly : boolean = true;
  popUpDialogContext: string = '';
  msgs: any[] = [];

  baseUrl: string = '';
  
  // select fields options:
  results = ["טופל", "טרם טופל"]
  units = ["מצוב", "מעוף", "מצפן"]
  ranks = ["סמל", "רבט", "טוראי"]
  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  equipments = [{"name": "ציוד", "list" : this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions = []  
  constructor(private RestApiService: RestApiService, public activatedRoute: ActivatedRoute, private dialogService: NbDialogService, private router: Router) { this.baseUrl = this.RestApiService.baseUrl; }

  // id of all validation fields
  @ViewChild("signerName") signerName : ElementRef;
  @ViewChild("signerId",{'static': true}) signerId : ElementRef;
  @ViewChild("position") position : ElementRef;
  @ViewChild("eventDate") eventDate : ElementRef;
  @ViewChild("eventHour") eventHour : ElementRef;
  @ViewChild("equipmentMark") equipmentMark : ElementRef;
  @ViewChild("equipmentMakat") equipmentMakat : ElementRef;
  @ViewChild("eventRelevantPlacesAndFactors") eventRelevantPlacesAndFactors : ElementRef;
  @ViewChild("eventInitialDetails") eventInitialDetails : ElementRef;
  @ViewChild("investigationDate") investigationDate : ElementRef;
  @ViewChild("findingDate") findingDate : ElementRef;
  @ViewChild("handlingDate") handlingDate : ElementRef;

  formGroupEle: ElementRef[] = [
    this.signerName, 
    this.signerId,
    this.position,
    this.eventDate,
    this.eventHour,
    this.equipmentMark,
    this.equipmentMakat,
    this.eventRelevantPlacesAndFactors,
    this.eventInitialDetails,
    this.investigationDate,
    this.findingDate,
    this.handlingDate
  ] 

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
      this.msgs = this.lostForm.messages.map( msg => { return JSON.parse(msg); } )
    });
  }

  save() {
    const formData: FormData = new FormData();
    this.lostForm = this.eventStatusForm.pushFormFields<LostFormTemplate>(this.lostForm);
    
    // insert lostForm to FormData object
    for(let [key, value] of Object.entries(this.lostForm)){
      if (value && ! this.eventFilesFields.includes(key)) {console.log(key, value); formData.append(key, value); }
    
    }
    // insert all files to FormData object
    for( let formFile of this.formFiles ){
      formData.append(formFile['id'], formFile['file'], formFile['file'].name);
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

  checkFieldsValid(){
    let formGroup = new FormGroup({
    'signerName': new FormControl(this.lostForm.signerName, [stdFieldValidator()]),
    'signerId': new FormControl(this.lostForm.signerId, [idValidator()]),
    'position': new FormControl(this.lostForm.position, [stdFieldValidator()]),
    'eventDate': new FormControl(this.lostForm.eventDate, [dateValidator()]),
    'eventHour': new FormControl(this.lostForm.eventHour, [timeValidator()]),
    'equipmentMark': new FormControl(this.lostForm.equipmentMark, [markValidator()]),
    'equipmentMakat': new FormControl(this.lostForm.equipmentMakat, [makatCopyValidator()]),
    'eventRelevantPlacesAndFactors': new FormControl(this.lostForm.eventRelevantPlacesAndFactors, [textValidator()]),
    'eventInitialDetails': new FormControl(this.lostForm.eventInitialDetails, [textValidator()]),
    'investigationDate': new FormControl(this.lostForm.investigationDate, [dateValidator()]),
    'findingDate': new FormControl(this.lostForm.findingDate, [dateValidator()]),
    'handlingDate': new FormControl(this.lostForm.handlingDate, [dateValidator()]), 
  })
    
    let fieldsValid = true
    for (const field in formGroup.controls){
      if (!formGroup.controls[field].valid){
    //  if(field.valid && field.dirty) {
        fieldsValid = false
      }
    }
    return fieldsValid
  }

  onSubmit() {
    this.uploadLoading = true
    if (this.checkFieldsValid()){
      this.openWithoutBackdropClick(this.dialog);
      this.save();
    } else {
      this.uploadLoading = false
      this.popUpDialogContext = `שדה אחד לפחות לא תקין או חסר`;
      this.openWithoutBackdropClick(this.dialog2)
    }
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

  updateEditState(){
    this.lostForm.editStateBlocked = !this.lostForm.editStateBlocked;

    this.uploadLoading = true;
    this.openWithoutBackdropClick(this.dialog2);

    const formData: FormData = new FormData();
    formData.append('editStateBlocked', (this.lostForm.editStateBlocked).toString())
    
    this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          (data: LostFormTemplate) => {
            this.uploadLoading = false;
            if (data.editStateBlocked){
              this.popUpDialogContext = `האירוע נסגר לעריכה`;
            } else {
              this.popUpDialogContext = `האירוע נפתח לעריכה`;
            }
    
          },
          error => console.log(error));   
  }
}