import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { EventEquipments } from '../../events-forms.templates';
import { markValidator } from "../../validation-directives/mark.directive";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-equipmnet-mark-custom-input',
  templateUrl: './equipmnet-mark-custom-input.component.html',
  styleUrls: ['./equipmnet-mark-custom-input.component.scss']
})
export class EquipmnetMarkCustomInputComponent extends DefaultEditor  implements OnInit {

  eventEquipments: EventEquipments = new EventEquipments();
  data="";
  flag_to_string=0
  fieldsValid = false
  constructor() {super() }

  ngOnInit() {
    this.cell.setValue(this.data)
    if(this.cell.getValue() !== ""){
      this.data =this.eventEquipments.equipmentMark;
    }
    // setInterval(() => {this.checkFieldsValid()}, 500);
    setInterval(() => {this.setValueTable()}, 500);
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
    console.log(this.flag_to_string)
    // console.log(this.eventEquipments.equipmentMark)
    console.log(this.checkFieldsValid(this.data))
    if(this.checkFieldsValid(this.eventEquipments.equipmentMark)){
    this.cell.setValue(this.data)
  }
  }
  

}
