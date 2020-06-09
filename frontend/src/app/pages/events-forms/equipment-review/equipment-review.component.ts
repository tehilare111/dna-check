import { Component, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { EquipmentReviewTemplate } from '../events-forms.templates';
import { RestApiService } from '../../../services/rest-api.service';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { textValidator } from "../validation-directives/text.directive";
import { stdFieldValidator } from "../validation-directives/std-field.directive";
import { dateValidator } from "../validation-directives/date.directive";
import { idValidator } from "../validation-directives/id.directive";
import { makatCopyValidator } from "../validation-directives/makat-copy.directive";
import { markValidator } from "../validation-directives/mark.directive";
import { timeValidator } from "../validation-directives/time.directive";

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./equipment-review.component.scss'],
  templateUrl: './equipment-review.component.html',
})

export class EquipmentReviewComponent {
  eventType: string = 'ביקורת ציוד';
  eventFilesFields: string[] = ['reviewFile'];

  equipmentReview: EquipmentReviewTemplate = new EquipmentReviewTemplate();
  uploadLoading = false;
  @ViewChild("dialog") dialog : ElementRef;
  @ViewChild("dialog2") dialog2 : ElementRef;
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
    this.equipmentReview.eventType = this.eventType
    
    // Recieve form data from db according to its reference
    this.reference = this.activatedRoute.snapshot.params.reference;
    if (this.reference){
      this.exisitingFormLoadData(this.reference);
    } else {
      this.readonly = false;
      this.newFormLoadData();
      this.get_constas_feilds();
    }
  }

  get_constas_feilds() {
    this.RestApiService.getConstatnsFields().subscribe((data_from_server) => {
      this.equipmentsType=data_from_server.equipmentType
      this.ranks = data_from_server.rank
      this.materialsType=data_from_server.materialType
      this.results=data_from_server.handlingStatus
      this.eventStatusForm=data_from_server.eventStatus
      this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
    });
  }


  newFormLoadData() {
    this.RestApiService.getNewEventForm().subscribe((data_from_server) => {
      this.equipmentReview.date = data_from_server.datetime
    });
  }

  exisitingFormLoadData(reference: string){
    this.RestApiService.getExistingEventForm(reference).subscribe((data_from_server: EquipmentReviewTemplate) => {
      console.log(data_from_server)
      this.equipmentReview = data_from_server
    });
  }

  save() {
    const formData: FormData = new FormData();
    this.equipmentReview = this.eventStatusForm.pushFormFields<EquipmentReviewTemplate>(this.equipmentReview);
  
    // insert equipmentReview to FormData object
    for(let [key, value] of Object.entries(this.equipmentReview)){
      if (value && ! this.eventFilesFields.includes(key)) { formData.append(key, value); }
    }

    // insert all files to FormData object
    for( let formFile of this.formFiles ){
      formData.append(formFile['id'], formFile['file'], formFile['file'].name);
    }    

    if (this.reference){
      this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          (data: EquipmentReviewTemplate) => {
            this.uploadLoading = false;
            this.reference = data.reference;
            this.popUpDialogContext = `האירוע התעדכן בהצלחה, סימוכין: ${this.reference}`;
          },
          error => console.log(error));
    } else {
      this.RestApiService.createNewEventFormWithFiles(formData)
      .subscribe(
        (data: EquipmentReviewTemplate) => {
          this.uploadLoading = false;
          this.reference = data.reference;
          this.popUpDialogContext = `האירוע נוצר בהצלחה, סימוכין: ${this.reference}`;
        },
        error => console.log(error));
    }
    //this.equipmentReview = new EquipmentReviewTemplate(); // initialize form
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
    'equipmentMark': new FormControl(this.equipmentReview.equipmentMark, [markValidator()]),
    'equipmentMakat': new FormControl(this.equipmentReview.equipmentMakat, [makatCopyValidator()]),
    'reviewReference': new FormControl(this.equipmentReview.reviewReference, [textValidator()]),
    'reviewDate': new FormControl(this.equipmentReview.reviewDate, [dateValidator()]),
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
        (data: EquipmentReviewTemplate) => {
          this.uploadLoading = false;
          this.popUpDialogContext = `אירוע עם סימוכין ${this.reference} נמחק`;
        },
        error => console.log(error));
  }

  getFileName(fileNameWithPath){
    if (fileNameWithPath) return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1)
  }

  updateEditState(){
    this.equipmentReview.editStateBlocked = !this.equipmentReview.editStateBlocked;

    this.uploadLoading = true;
    this.openWithoutBackdropClick(this.dialog2);

    const formData: FormData = new FormData();
    formData.append('editStateBlocked', (this.equipmentReview.editStateBlocked).toString())
    
    this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          (data: EquipmentReviewTemplate) => {
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