import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";

import { FormBaseComponent } from '../form-base.component'
import { EquipmentReviewTemplate} from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { ConstantsFieldsComponent } from '../../constants-fields/constants-fields.component';
import { EquipmentTableComponent } from '../components/equipment-table/equipment-table.component';
import { NotReadMsgsColComponent } from '../../control-table/components/not-read-msgs-col/not-read-msgs-col.component';


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
  @ViewChild("equipmentTable")equipmentTable:EquipmentTableComponent
 eventStatusOptions = ["טופל", "טרם טופל"]
  units = []
  ranks = []
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
    this.form.equipmentsArray=[]
    super.ngOnInit()
  }

  getConstasFeilds() {
    this.RestApiService.getConstatnsFields().subscribe(
      (data) => {
        this.constantsFieldsComponent.fillListOfCategoryfromdata(data);
        this.constantsFieldsComponent.listOfCategories;
        this.ranks = this.constantsFieldsComponent.getFieldsFromCategoryName("rank")
        this.eventStatusOptions = this.constantsFieldsComponent.getFieldsFromCategoryName("eventStatus")
      },
      err => {
      }
    );
  }

  updateValidationFormGroup(){
    this.formGroup = new FormGroup({
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