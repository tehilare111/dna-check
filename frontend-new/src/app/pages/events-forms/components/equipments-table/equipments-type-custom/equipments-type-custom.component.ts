import { Component, OnInit } from '@angular/core';
import { EventEquipments}from '../../../events-forms.templates';
import { DefaultEditor } from 'ng2-smart-table';
import { count } from 'console';
@Component({
  selector: 'ngx-equipments-type-custom',
  templateUrl: './equipments-type-custom.component.html',
  styleUrls: ['./equipments-type-custom.component.scss']
})
export class EquipmentsTypeCustomComponent extends DefaultEditor implements OnInit {

  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  eventEquipments: EventEquipments = new EventEquipments();
  equipments=['ציוד','חומר פיסי','חומר לוגי']
  equipmentsTypeOptions=[]
  equipmentCell0=""
  data="";
  getEquipmentsType:any
  constructor() {
    
    super()
    
  }

  ngOnInit() {
    if(this.cell.getValue() != ''){
      this.data = Object.assign({}, this.cell.getValue());
      // this.equipmentCell0=this.cell.getRow().cells[0].newValue
    }
  
    this.getEquipmentsType=setInterval(() => {this.equipmentCell0=this.cell.getRow().cells[0].newValue},500)
    if(this.equipmentCell0!=" "){
      this.getValueOnTable()
      clearInterval(this.getEquipmentsType)
    }
    else{
      this.equipmentCell0=this.cell.getRow().cells[0].newValue
      this.getValueOnTable()
    } 
  }
  setValueOnTable(){
    if(this.equipmentsTypeOptions.length!=0){
      if (this.data!=''){
          this.cell.getRow().cells[1].setValue(this.data)
    }
  }

}
  getValueOnTable(){
    if(this.equipmentCell0!=this.cell.getRow().cells[0].newValue){
      this.equipmentCell0=this.cell.getRow().cells[0].newValue
      if(this.cell.getRow().cells[0].newValue===this.equipments[1]){
        this.equipmentsTypeOptions=this.cell.getRow().cells[1].newValue
    }
      else{
        
        if(this.cell.getRow().cells[0].newValue===this.equipments[0]|| this.cell.getRow().cells[0].newValue===this.equipments[2]){
          this.equipmentsTypeOptions=this.cell.getRow().cells[1].newValue
        }    
      }
    }
    else{
      this.setValueOnTable()
    }
  }
}
