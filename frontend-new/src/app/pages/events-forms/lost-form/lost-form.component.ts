import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { FormBaseComponent } from '../form-base.component'
import { LostFormTemplate } from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import {ConstantsFieldsComponent} from '../../constants-fields/constants-fields.component'
@Component({
  selector: 'ngx-form-layouts',
  templateUrl: './lost-form.component.html',
  styleUrls: ['./lost-form.component.scss'],
})
export class LostFormComponent extends FormBaseComponent<LostFormTemplate, EventStatusComponent> implements OnInit {
  eventType: string = 'אובדנים';
  form: LostFormTemplate = new LostFormTemplate();
  eventFilesFields: string[] = ['handlingFile', 'findingFile', 'investigationFile'];

  @ViewChild("status") eventStatusForm : EventStatusComponent;
  // @ViewChild("chat") chatMessages : ChatComponent;
  @ViewChild("directingDialog") directingDialog : ElementRef;
  @ViewChild("simpleDialog") simpleDialog : ElementRef;
  
  constantsFieldsComponent = new ConstantsFieldsComponent(null, null)
  eventStatusOptions = ["טופל", "טרם טופל"]
  handlingStatusOptions = []
  units = []
  ranks = []
  equipmentsType = []
  materialsType = []
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

  updateValidationFormGroup(){
    /* Each form should have its own fields to be validated */
    // Has to be generated each time
    this.formGroup = new FormGroup({
    'signerName': new FormControl(this.form.signerName, [this.stdFieldValidator()]),
    'signerId': new FormControl(this.form.signerId, [this.idValidator()]),
    'position': new FormControl(this.form.position, [this.stdFieldValidator()]),
    'eventDate': new FormControl(this.form.eventDate, [this.dateValidator()]),
    'eventHour': new FormControl(this.form.eventHour, [this.timeValidator()]),
    'equipmentMark': new FormControl(this.form.equipmentMark, [this.markValidator()]),
    'equipmentMakat': new FormControl(this.form.equipmentMakat, [this.makatCopyValidator()]),
    'eventRelevantPlacesAndFactors': new FormControl(this.form.eventRelevantPlacesAndFactors, [this.textValidator()]),
    'eventInitialDetails': new FormControl(this.form.eventInitialDetails, [this.textValidator()]),
    'investigationDate': new FormControl(this.form.investigationDate, [this.dateValidator()]),
    'findingDate': new FormControl(this.form.findingDate, [this.dateValidator()]),
    'handlingDate': new FormControl(this.form.handlingDate, [this.dateValidator()]), 
    })
  }
  
  getConstasFeilds() {
    this.RestApiService.getConstansFieldsAndUnitsArray().subscribe((data) => {  
      this.units = data.units
    });

    this.RestApiService.getConstatnsFields().subscribe(
      (data) => {
        this.constantsFieldsComponent.fillListOfCategoryfromdata(data);
        this.constantsFieldsComponent.listOfCategories;
        console.log(this.constantsFieldsComponent.listOfCategories)
        this.equipmentsType = this.constantsFieldsComponent.getFieldsFromCategoryName("equipmentType")
        this.ranks = this.constantsFieldsComponent.getFieldsFromCategoryName("rank")
        this.materialsType = this.constantsFieldsComponent.getFieldsFromCategoryName("materialType")
        this.eventStatusOptions = this.constantsFieldsComponent.getFieldsFromCategoryName("eventStatus")
        this.handlingStatusOptions = this.constantsFieldsComponent.getFieldsFromCategoryName("handlingStatus")
        this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
        this.equipmentsTypeOptions = this.equipments.map(el => {if(el['name']==this.form.equipment) return el['list']; else return undefined; }).filter(el => el!=null)[0]
        console.log()
      },
      err => {
      }
    );
  }
  onSubmit() {
    this.uploadLoading = true
    
    this.updateValidationFormGroup();

    super.onSubmit();
  }  
}