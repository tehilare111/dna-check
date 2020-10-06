import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { EventEquipments } from '../../../events-forms.templates';
import { markValidator } from "../../../validation-directives/mark.directive";
import { FormGroup, FormControl } from '@angular/forms';
import { clear } from 'console';

@Component({
  selector: 'ngx-equipments-mark-custom-input',
  templateUrl: './equipments-mark-custom-input.component.html',
  styleUrls: ['./equipments-mark-custom-input.component.scss']
})
export class EquipmentsMarkCustomInputComponent extends DefaultEditor  implements OnInit {

  eventEquipments: EventEquipments = new EventEquipments();
  data="";
  flagToString=0
  funcInterval:any;
  fieldsValid = false
  constructor() {super() }

  ngOnInit() {
    this.cell.setValue(this.data)
    if(this.cell.getValue() !== ""){
      this.data =Object.assign(this.cell.newValue);
    }
    this.funcInterval =setInterval(() => {this.setValueTable()}, 500);
  }
  checkFieldsValid(data){
    let formGroup=new FormGroup({'equipmentMark': new FormControl(data, [markValidator()]),
  })
  for (const field in formGroup.controls){
    if (formGroup.controls[field].valid){
      if(this.flagToString==0){
        this.data=this.eventEquipments.equipmentMark
        this.flagToString=1
      }
      this.fieldsValid =true
    }
  }
  return this.fieldsValid
  }
  setValueTable(){
    if(this.checkFieldsValid(this.eventEquipments.equipmentMark)){
    this.cell.setValue(this.data)
    clearInterval( this.funcInterval )
  }
  }
  

}