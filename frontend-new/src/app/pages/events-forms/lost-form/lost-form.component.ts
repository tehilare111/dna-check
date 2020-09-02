import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { FormBaseComponent } from '../form-base.component'
import { LostFormTemplate } from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { stdFieldValidator } from '../validation-directives/std-field.directive';
import { idValidator } from '../validation-directives/id.directive';
import { dateValidator } from '../validation-directives/date.directive';
import { timeValidator } from '../validation-directives/time.directive';
import { markValidator } from '../validation-directives/mark.directive';
import { makatCopyValidator } from '../validation-directives/makat-copy.directive';
import { textValidator } from '../validation-directives/text.directive';

@Component({
  selector: 'ngx-form-layouts',
  templateUrl: './lost-form.component.html',
  styleUrls: ['./lost-form.component.scss'],
})
export class LostFormComponent extends FormBaseComponent<LostFormTemplate, EventStatusComponent> implements OnInit {
  eventType: string = 'אובדן ציוד';
  form: LostFormTemplate = new LostFormTemplate();
  eventFilesFields: string[] = ['handlingFile', 'findingFile', 'investigationFile'];

  @ViewChild("status") eventStatusForm : EventStatusComponent;
  // @ViewChild("chat") chatMessages : ChatComponent;
  @ViewChild("directingDialog") directingDialog : ElementRef;
  @ViewChild("simpleDialog") simpleDialog : ElementRef;
  
  eventStatusOptions = ["טופל", "טרם טופל"]
  units = []
  ranks = []
  // @ViewChild("status") eventStatusForm : EventStatusComponent;
  disableEdit:boolean;
  number_select=[]
  uploadLoading = false
  results = ["טופל", "טרם טופל"]
  // units = [,"מצוב", "מעוף", "מצפן", "פלגת החוד"]
  // ranks = ["סמל", "רבט", "טוראי"]

  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  //equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  //equipmentsTypeOptions = []
  
  constructor(
    ) {
      super();
    }


  ngOnInit() {
    // Load all pages constants
    this.getConstasFeilds()

    // Set eventType field according to the form event type

    this.form.eventType = this.eventType
    // this.get_constas_feilds()
    // Recieve form data from db according to its reference
    this.reference = this.activatedRoute.snapshot.params.reference;
    if (this.reference){
      this.exisitingFormLoadData(this.reference);
    } else {
       this.readonly = false;
       this.newFormLoadData();
      // this.get_constas_feilds()
    } 
    
  }
  openWithoutBackdropClick(dialog) {
    this.dialogService.open(
      dialog,
      {
        //context: this.formUploadResult.reference,
        closeOnBackdropClick: true,
      });
  }
  // checkFieldsValid(){
  //   let formGroup = new FormGroup({
  //   'signerName': new FormControl(this.form.signerName, [stdFieldValidator()]),
  //   'signerId': new FormControl(this.form.signerId, [idValidator()]),
  //   'position': new FormControl(this.form.position, [stdFieldValidator()]),
  //   'eventDate': new FormControl(this.form.eventDate, [dateValidator()]),
  //   'eventHour': new FormControl(this.form.eventHour, [timeValidator()]),
  //   'equipmentMark': new FormControl(this.form.equipmentMark, [markValidator()]),
  //   'equipmentMakat': new FormControl(this.form.equipmentMakat, [makatCopyValidator()]),
  //   'eventRelevantPlacesAndFactors': new FormControl(this.form.eventRelevantPlacesAndFactors, [textValidator()]),
  //   'eventInitialDetails': new FormControl(this.form.eventInitialDetails, [textValidator()]),
  //   'investigationDate': new FormControl(this.form.investigationDate, [dateValidator()]),
  //   'findingDate': new FormControl(this.form.findingDate, [dateValidator()]),
  //   'handlingDate': new FormControl(this.form.handlingDate, [dateValidator()]), 
  // })

    
  //   super.ngOnInit()
  // }

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
      this.equipmentsType = data.equipmentType
      this.ranks = data.rank
      this.materialsType = data.materialType
      this.eventStatusOptions = data.eventStatus
      this.units = data.units
      //this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
      //this.equipmentsTypeOptions = this.equipments.map(el => {if(el['name']==this.form.equipment) return el['list']; else return undefined; }).filter(el => el!=null)[0]
    });
  }

  onSubmit() {
    this.uploadLoading = true
    
    this.updateValidationFormGroup();

    super.onSubmit();
  }  
}