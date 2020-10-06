import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { FormGroup, FormControl } from '@angular/forms';
import { makatCopyValidator } from '../../../validation-directives/makat-copy.directive';
import { EventEquipments } from '../../../events-forms.templates';

@Component({
  selector: 'ngx-equipments-makat-custom-input',
  templateUrl: './equipments-makat-custom-input.component.html',
  styleUrls: ['./equipments-makat-custom-input.component.scss']
})
export class EquipmentsMakatCustomInputComponent extends DefaultEditor implements OnInit {

  eventEquipments: EventEquipments = new EventEquipments();
  constructor() {super() }
  data=""
  fieldsValid = false
  flagToString=0
  funcInterval:any;
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
      if(this.flagToString==0){
        this.data=this.eventEquipments.equipmentMakat
        this.flagToString=1
      }
      this.fieldsValid =true
      
    }
  }
  return this.fieldsValid
  }
  setValueTable(){
    if(this.checkFieldsValid(this.eventEquipments.equipmentMakat)){
    this.cell.setValue(this.data)
    clearInterval( this.funcInterval )
  }
}
}