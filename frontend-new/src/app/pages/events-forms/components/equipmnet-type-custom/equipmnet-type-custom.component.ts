import { Component, OnInit } from '@angular/core';
import { EventEquipments}from '../../events-forms.templates';
import { DefaultEditor } from 'ng2-smart-table';
import { count } from 'console';
@Component({
  selector: 'ngx-equipmnet-type-custom',
  templateUrl: './equipmnet-type-custom.component.html',
  styleUrls: ['./equipmnet-type-custom.component.scss']
})
export class EquipmnetTypeCustomComponent extends DefaultEditor implements OnInit {

  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  eventEquipments: EventEquipments = new EventEquipments();
  equipments=['ציוד','חומר פיסי','חומר לוגי']
  equipmentsTypeOptions=["--select--"]
  count_flag=0
  equipment_cell_0=""
  data="";
  myFunc;
  myFunc1;
  constructor() {
    
    super()
    
  }

  ngOnInit() {
    if(this.cell.getValue() != ''){
      this.data = Object.assign({}, this.cell.getValue());
    }
    this.equipment_cell_0=this.cell.getRow().cells[0].newValue
    
    // this.myFunc=setInterval(() => {this.getValueOnTable()},1000);
    // this.myFunc1=setInterval(() => {this.setValueOnTable()}, 500);
    // setTimeout(()=>{this.getValueOnTable()}, 1000);
  }
  setValueOnTable(){
     console.log("status setValueOnTable: ok")
     console.log("data:",this.data)
    if(this.equipmentsTypeOptions.length!=0){
    if (this.data!=''){
        this.cell.getRow().cells[1].setValue(this.data)
  // }
  }
  }

}
  getValueOnTable(){
    console.log("equipments cell 0:",this.equipment_cell_0)
    if(this.equipment_cell_0!=this.cell.getRow().cells[0].newValue){
      this.equipment_cell_0=this.cell.getRow().cells[0].newValue
    if(this.cell.getRow().cells[0].newValue===this.equipments[1]){
      this.equipmentsTypeOptions=this.cell.getRow().cells[1].newValue
      // this.equipmentsTypeOptions = this.equipments.map(el => {if(el['name']==this.form.equipment) return el['list']; else return undefined; }).filter(el => el!=null)[0]
      
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

console.log(this.count_flag)
}
 
}
