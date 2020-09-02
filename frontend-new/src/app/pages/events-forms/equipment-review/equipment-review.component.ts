import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { FormBaseComponent } from '../form-base.component'
import { EquipmentReviewTemplate, EventEquipments } from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { AuthService } from '../../../services/auth.service';
import { markValidator } from '../validation-directives/mark.directive';
import { makatCopyValidator } from '../validation-directives/makat-copy.directive';
import { textValidator } from '../validation-directives/text.directive';
import { dateValidator } from '../validation-directives/date.directive';

@Component({
  selector: 'ngx-equipment-review',
  templateUrl: './equipment-review.component.html',
  styleUrls: ['./equipment-review.component.scss']
})
export class EquipmentReviewComponent extends FormBaseComponent<EquipmentReviewTemplate, EventStatusComponent> implements OnInit{
  eventType: string = 'ביקורת ציוד';
  form: EquipmentReviewTemplate = new EquipmentReviewTemplate();
  eventFilesFields: string[] = ['reviewFile'];

  @ViewChild("status") eventStatusForm : EventStatusComponent;

  // @ViewChild("chat") chatMessages : ChatComponent;
  @ViewChild("directingDialog") directingDialog : ElementRef;
  @ViewChild("simpleDialog") simpleDialog : ElementRef;
  
 eventStatusOptions = ["טופל", "טרם טופל"]
  units = []
  ranks = []
  eventEquipments:EventEquipments=new EventEquipments()
  reference = undefined;
  formFiles : {'id': string, 'file': File}[] = []; 
  readonly : boolean = true;
  popUpDialogContext: string = '';
  constans_array=[]
  baseUrl: string = '';
  array_permission;
  auth:AuthService=new AuthService();
  // select fields options:
  arrayEquipments={"equipment":"hjhkhjk","equipmentType": " kjghjkhk","equipmentMark": "liuhguih ","equipmentMakat": " ;iugiugui"}
  results = ["טופל", "טרם טופל"]
  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions = []
  
  constructor(
    ) {
      super();
    }
  
  ngOnInit() {
    // Load all pages constants
    this.getConstasFeilds()

    // Set eventType field according to the form event type
    this.form.eventType = this.eventType
    
    super.ngOnInit()
  }


  getConstasFeilds() {
    this.RestApiService.getConstansFieldsAndUnitsArray().subscribe((data) => {
      this.equipmentsType = data.equipmentType
      this.ranks = data.rank
      this.materialsType = data.materialType
      this.eventStatusOptions = data.eventStatus
      this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
    });
  }

  updateValidationFormGroup(){
    this.formGroup = new FormGroup({
    'equipmentMark': new FormControl(this.form.equipmentMark, [this.markValidator()]),
    'equipmentMakat': new FormControl(this.form.equipmentMakat, [this.makatCopyValidator()]),
    'reviewReference': new FormControl(this.form.reviewReference, [this.textValidator()]),
    'reviewDate': new FormControl(this.form.reviewDate, [this.dateValidator()]),
    })
  }
  save() {
    const formData: FormData = new FormData();
    console.log(this.eventStatusForm)
    let equipments2:string
    equipments2=JSON.stringify(this.arrayEquipments)
    console.log(equipments2)
    this.form = this.eventStatusForm.pushFormFields<EquipmentReviewTemplate>(this.form);
  
    // insert equipmentReview to FormData object
    for(let [key, value] of Object.entries(this.form)){
      if (value && ! this.eventFilesFields.includes(key)) {
        formData.append(key, value); 
        }
    }
    console.log(this.arrayEquipments)
    // insert all files to FormData object
    for( let formFile of this.formFiles ){
      formData.append(formFile['id'], formFile['file'], formFile['file'].name);
    }
      formData.append("array",equipments2)
    
    console.log(formData)
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
    'equipmentMark': new FormControl(this.eventEquipments.equipmentMark, [markValidator()]),
    'equipmentMakat': new FormControl(this.eventEquipments.equipmentMakat, [makatCopyValidator()]),
    'reviewReference': new FormControl(this.form.reviewReference, [textValidator()]),
    'reviewDate': new FormControl(this.form.reviewDate, [dateValidator()]),
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
    
    this.updateValidationFormGroup();

    super.onSubmit();
  }
}