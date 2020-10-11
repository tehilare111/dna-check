import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { FormBaseComponent } from '../form-base.component'
import { EquipmentReviewTemplate } from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { EquipmentsTableComponent } from '../components/equipments-table/equipments-table.component';

@Component({
  selector: 'ngx-equipment-review',
  templateUrl: './equipment-review.component.html',
  styleUrls: ['./equipment-review.component.scss']
})
export class EquipmentReviewComponent extends FormBaseComponent<EquipmentReviewTemplate, EventStatusComponent> implements OnInit{
  eventType: string = 'ביקורת ציוד';
  form: EquipmentReviewTemplate = new EquipmentReviewTemplate();
  eventFilesFields: string[] = ['reviewFile'];
  @ViewChild("equipmentsTable") equipmentsTable:EquipmentsTableComponent;
  @ViewChild("status") eventStatusForm : EventStatusComponent;
  // @ViewChild("chat") chatMessages : ChatComponent;
  @ViewChild("directingDialog") directingDialog : ElementRef;
  @ViewChild("simpleDialog") simpleDialog : ElementRef;
  
 eventStatusOptions = ["טופל", "טרם טופל"]
  units = []
  ranks = []
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
      console.log("data",data)
      this.equipmentsType = data.equipmentType
      this.ranks = data.rank
      this.materialsType = data.materialType
      this.eventStatusOptions = data.eventStatus
      this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
    });
  }

  updateValidationFormGroup(){
    this.formGroup = new FormGroup({
<<<<<<< HEAD
=======
    // 'equipmentMark': new FormControl(this.form.equipmentMark, [this.markValidator()]),
    // 'equipmentMakat': new FormControl(this.form.equipmentMakat, [this.makatCopyValidator()]),
>>>>>>> 6e6617b18a610e1e6d6b0f5b162dee78365be452
    'reviewReference': new FormControl(this.form.reviewReference, [this.textValidator()]),
    'reviewDate': new FormControl(this.form.reviewDate, [this.dateValidator()]),
    })
  }

  onSubmit() {
    this.uploadLoading = true
    
    this.updateValidationFormGroup();

    super.onSubmit();
  }
}