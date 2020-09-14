import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { FormGroup, FormControl } from '@angular/forms';
import { makatCopyValidator } from '../../validation-directives/makat-copy.directive';
import { EventEquipments } from '../../events-forms.templates';

@Component({
  selector: 'ngx-equipmnet-makat-custom-input',
  templateUrl: './equipmnet-makat-custom-input.component.html',
  styleUrls: ['./equipmnet-makat-custom-input.component.scss']
})
export class EquipmnetMakatCustomInputComponent extends DefaultEditor implements OnInit {

  eventEquipments: EventEquipments = new EventEquipments();
  constructor() {super() }
  data=""
  fieldsValid = false
  ngOnInit() {
    if(this.cell.getValue() !== ""){
      this.data = this.eventEquipments.equipmentMakat;
    }
    setInterval(() => {this.setValueTable()}, 500);
    
  }
  checkFieldsValid(data){
    let formGroup=new FormGroup({
      'equipmentMakat': new FormControl(data, [makatCopyValidator()]),
  })
  for (const field in formGroup.controls){
    if (formGroup.controls[field].valid){
  //  if(field.valid && field.dirty) {
      this.fieldsValid =true
    }
  }
  return this.fieldsValid
  }
  setValueTable(){
    if(this.checkFieldsValid(this.data)){
    this.cell.setValue(this.data)
  }
}
}
