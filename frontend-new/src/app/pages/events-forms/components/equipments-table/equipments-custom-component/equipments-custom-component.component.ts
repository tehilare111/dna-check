import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { EventEquipments}from '../../../events-forms.templates';
import { RestApiService } from '../../../../../services/rest-api.service';
import { clear } from 'console';
@Component({
  selector: 'ngx-equipments-custom-component',
  templateUrl: './equipments-custom-component.component.html',
  styleUrls: ['./equipments-custom-component.component.scss']
})
export class EquipmentsCustomComponentComponent extends DefaultEditor implements OnInit {
  results = ["טופל", "טרם טופל"]
  units = ["מצוב", "מעוף", "מצפן"]
  ranks = ["סמל", "רבט", "טוראי"]
  equipmentsType = ["סוג1", "סוג2","סוג3"]
  materialsType = ["חומר1" , "חומר2", "חומר3"]
  // results = []
  // units = []
  // ranks = []
  // equipmentsType = []
  // materialsType = []
  data="";
  equipments = [{"name":"select"},{"name": "ציוד", "list" : this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions=[]; 
  constans_array=[]
  myFunc;
  eventEquipments: EventEquipments = new EventEquipments();
  constructor(private RestApiService:RestApiService) {
    super();  
  }

  ngOnInit() {
    this.cell.setValue("");
    this.cell.getRow().cells[1].setValue("");
    console.log(this.cell.newValue)
    // this.myFunc=setInterval(() => {this.getConstasFeilds()}, 500);
    this.getConstasFeilds()
    if(this.cell.getValue() != ""){
      this.data = this.eventEquipments.equipment;
    }

  }
  setValueType(){
    for(let i in this.equipments){
      if(this.data ===this.equipments[i]["name"]){
        this.cell.getRow().cells[1].setValue(this.equipments[i].list)
        console.log("cell[1]:",this.cell.getRow().cells[1])
        this.updateEquipment()
      }  
    }
  }
  updateEquipment(){
    console.log("status updateEqupment: ok")
    this.cell.setValue(this.data);
    // this.setValueType();
  }
  getConstasFeilds() {
    this.RestApiService.getConstansFieldsAndUnitsArray().subscribe((data) => {
      this.equipmentsType = data.equipmentType
      // this.ranks = data.rank
      this.materialsType = data.materialType
      // this.results = data.eventStatus
      this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
      
    });
  }

}