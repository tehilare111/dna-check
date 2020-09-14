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
  eventEquipments: EventEquipments = new EventEquipments();
  equipmnets=['ציוד','חומר פיסי','חומר לוגי']
  equipmentsTypeOptions=["--select--"]
  count_flag=0
  equipment_cell_0=""
  data:any = {};
  constructor() {super()
  }

  ngOnInit() {
    if(this.cell.getValue() !== ""){
      this.data = Object.assign({}, this.cell.getValue());
    }
    this.equipment_cell_0=this.cell.getRow().cells[0].newValue
    
    setInterval(() => {this.getValueOnTable()}, 500);
    // setTimeout(()=>{this.getValueOnTable()}, 1000);
  }
  getValueOnTable(){
    if(this.equipment_cell_0!=this.cell.getRow().cells[0].newValue)
    {
      this.equipment_cell_0=this.cell.getRow().cells[0].newValue
      if(this.cell.getRow().cells[0].newValue===this.equipmnets[0])
      {
      this.equipmentsTypeOptions=this.cell.getRow().cells[1].newValue
      console.log(this.equipmentsTypeOptions)
      this.count_flag=1
      }

      else
      {
        if(this.cell.getRow().cells[0].newValue===this.equipmnets[1]|| this.cell.getRow().cells[0].newValue===this.equipmnets[2]){
          this.equipmentsTypeOptions=this.cell.getRow().cells[1].newValue
        }
      }
    }
  }
  setValueOnTable(){
    if(this.equipmentsTypeOptions.length!=0)
      {
        this.cell.getRow().cells[1].setValue(this.data)
      }
  }

}
