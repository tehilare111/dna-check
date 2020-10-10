import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { FormBaseComponent } from '../form-base.component'
import { EquipmentReviewTemplate } from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { ConstantsFieldsComponent } from '../../constants-fields/constants-fields.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-equipment-review',
  templateUrl: './equipment-review.component.html',
  styleUrls: ['./equipment-review.component.scss']
})
export class EquipmentReviewComponent extends FormBaseComponent<EquipmentReviewTemplate, EventStatusComponent> implements OnInit{
  eventType: string = 'ספירות';
  form: EquipmentReviewTemplate = new EquipmentReviewTemplate();
  eventFilesFields: string[] = ['reviewFile'];

  @ViewChild("status") eventStatusForm : EventStatusComponent;
  // @ViewChild("chat") chatMessages : ChatComponent;
  @ViewChild("directingDialog") directingDialog : ElementRef;
  @ViewChild("simpleDialog") simpleDialog : ElementRef;
  
 eventStatusOptions = ["טופל", "טרם טופל"]
  units = []
  ranks = []
  equipmentsType = []
  materialsType = []
  equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions = []
  
  //event to eventApproval component.
  eventsSubject: Subject<void> = new Subject<void>();

  // Used for emmiting the submit to the eventApproval component.
  emitEventToChild() {
    this.eventsSubject.next();
  }

  updateEventAuthorizers(event){
    this.form.eventAuthorizers = event;
  }

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
    this.RestApiService.getConstatnsFields().subscribe(
      (data) => {
        this.constantsFieldsComponent.fillListOfCategoryfromdata(data);
        this.constantsFieldsComponent.listOfCategories;
        console.log(this.constantsFieldsComponent.listOfCategories)
        this.equipmentsType = this.constantsFieldsComponent.getFieldsFromCategoryName("equipmentType")
        this.ranks = this.constantsFieldsComponent.getFieldsFromCategoryName("rank")
        this.materialsType = this.constantsFieldsComponent.getFieldsFromCategoryName("materialType")
        this.eventStatusOptions = this.constantsFieldsComponent.getFieldsFromCategoryName("eventStatus")
        this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
        this.equipmentsTypeOptions = this.equipments.map(el => {if(el['name']==this.form.equipment) return el['list']; else return undefined; }).filter(el => el!=null)[0]
        console.log()
      },
      err => {
      }
    );
  }

  updateValidationFormGroup(){
    this.formGroup = new FormGroup({
    'equipmentMark': new FormControl(this.form.equipmentMark, [this.markValidator()]),
    'equipmentMakat': new FormControl(this.form.equipmentMakat, [this.makatCopyValidator()]),
    'reviewReference': new FormControl(this.form.reviewReference, [this.textValidator()]),
    'reviewDate': new FormControl(this.form.reviewDate, [this.dateValidator()]),
    })
  }

  onEventSubmit(isFinished: boolean) {
    this.uploadLoading = true

    this.emitEventToChild(); // updates the eventAuthorizers.
    
    this.updateValidationFormGroup();

    (isFinished) ? this.sendEvent() : this.saveEvent();
    //super.onSubmit(this.eventAuthorizers, isFinished);
  }
}