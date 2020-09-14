import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { EventEquipments}from '../../events-forms.templates';
import { RestApiService } from '../../../../services/rest-api.service';
@Component({
  selector: 'ngx-equipmants-custom-component',
  templateUrl: './equipmants-custom-component.component.html',
  styleUrls: ['./equipmants-custom-component.component.scss']
})
export class EquipmantsCustomComponentComponent extends DefaultEditor implements OnInit {
  results = ["טופל", "טרם טופל"]
  units = ["מצוב", "מעוף", "מצפן"]
  ranks = ["סמל", "רבט", "טוראי"]
  equipmentsType = ["סוג1", "סוג2","סוג3"]
  materialsType = ["חומר1" , "חומר2", "חומר3"]
  data:any = {};
  equipments = [{"name": "ציוד", "list" : this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions = [] 
  constans_array=[]
  eventEquipments: EventEquipments = new EventEquipments();
  constructor(private RestApiService:RestApiService) {
    super();  
  }

  ngOnInit() {
    this.cell.setValue("");
    this.cell.getRow().cells[1].setValue("");
    console.log(this.cell.newValue)
    this.getConstasFeilds()
    if(this.cell.getValue() !== ""){
      this.data = Object.assign({}, this.cell.getValue());
    }

  }
  setValueType(){
    for(let i in this.equipments){
      if(this.data ===this.equipments[i]["name"]){
        this.equipmentsTypeOptions=this.equipments[i].list
        this.cell.getRow().cells[1].setValue(this.equipmentsTypeOptions)
      }  
    }
  }
  updateEquipment(){
    this.cell.setValue(this.data);
    this.setValueType();
  }
  getConstasFeilds() {
    this.constans_array=["equipmentType","rank","materialType","eventStatus"]
    this.RestApiService.getConstansFialdsNotPermissions(this.constans_array).subscribe((data_from_server) => {
      console.log(data_from_server.data)
      this.equipmentsType=data_from_server.data.equipmentType
      this.materialsType=data_from_server.data.materialType
      this.results=data_from_server.data.eventStatus
      this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
    });
  }

}
