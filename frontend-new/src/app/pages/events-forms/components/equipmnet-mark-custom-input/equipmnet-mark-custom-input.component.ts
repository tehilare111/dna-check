import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { EventEquipments } from '../../events-forms.templates';
import { markValidator } from "../../validation-directives/mark.directive";
import { FormGroup, FormControl } from '@angular/forms';
import { clear } from 'console';

@Component({
  selector: 'ngx-equipmnet-mark-custom-input',
  templateUrl: './equipmnet-mark-custom-input.component.html',
  styleUrls: ['./equipmnet-mark-custom-input.component.scss']
})
export class EquipmnetMarkCustomInputComponent extends DefaultEditor  implements OnInit {

  eventEquipments: EventEquipments = new EventEquipments();
  data="";
  flag_to_string=0
  myVar;
  fieldsValid = false
  constructor() {super() }

  ngOnInit() {
    this.cell.setValue(this.data)
    if(this.cell.getValue() !== ""){
      this.data =Object.assign(this.cell.newValue);
    }
    // setInterval(() => {this.checkFieldsValid()}, 500);
    this.myVar =setInterval(() => {this.setValueTable()}, 500);
  }
  checkFieldsValid(data){
    let formGroup=new FormGroup({
      'equipmentMark': new FormControl(data, [markValidator()]),
  })
  for (const field in formGroup.controls){
    if (formGroup.controls[field].valid){
      if(this.flag_to_string==0){
        this.data=this.eventEquipments.equipmentMark
        this.flag_to_string=1
      }
      
  //  if(field.valid && field.dirty) {
      this.fieldsValid =true
    }
  }
  return this.fieldsValid
  }
  setValueTable(){
    // console.log(this.eventEquipments.equipmentMark)
    if(this.checkFieldsValid(this.eventEquipments.equipmentMark)){
    this.cell.setValue(this.data)
    clearInterval( this.myVar )
  }
  }
  

}
