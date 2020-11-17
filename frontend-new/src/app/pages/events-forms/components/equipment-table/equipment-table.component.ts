import { Component, OnInit,ViewChild,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule } from '@ag-grid-community';
import { RestApiService } from '../../../../services/rest-api.service';
import { ConstantsFieldsComponent } from '../../../constants-fields/constants-fields.component';
import { GenderCellRenderer } from './gender-cell-renderer.component';

@Component({
  selector: 'ngx-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.scss']
})

export class EquipmentTableComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  @Input() equipments
  @Input() form
  @Input()equipmentsType
  @Input()materialsType
  equipmentsType2=[]
  materialsType2=[]
  private frameworkComponents;
  equipmentChoice=["נשר"]
  equipmentsTitle=["ציוד","חומר פיסי","חומר לוגי"]
  // public modules: Module[] = [ClientSideRowModelModule];
  private columnDefs;
  private defaultColDef;
  private rowData;
  editType = 'fullRow';
  constantsFieldsComponent = new ConstantsFieldsComponent(null, null)
  constructor(private RestApiService:RestApiService) {
  this.getConstasFeilds()
  this.returnCall(this)
  this.columnDefs = [
    {headerName:'מקט ציוד' ,field:'equipmentMakat', sortable: true, filter: true,editable: true,},
    {headerName:'מספר ציוד' ,field: 'equipmentMark', sortable: true, filter: true,editable: true, },
    {headerName:'סוג ציוד/חומר' ,field: "equipmentType", sortable: true, filter: true,editable: true,cellEditor: 'agSelectCellEditor',
    cellEditorParams: 
    {refData: this.equipmentChoice}
    ,
  },
    {headerName:'ציוד/חומר',field: 'equipment', sortable: true, filter: true,editable: true,cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: this.equipmentsTitle,
    },
  },
];
this.defaultColDef=[{
  showRowGroup: true,
  resizable: true,
}
]
this.rowData = [
  { equipment: 'ציוד', equipmentType: 'סוג ציוד/חומר', equipmentMark: "" ,equipmentMakat:""},
];
//   columnDefs = [
 
 
  console.log(this.columnDefs)
 
  
}

  ngOnInit(){
  }
  extractValues(mappings) {
 
  console.log(mappings.data.equipment)
  if(mappings.data.equipment==="ציוד"){
    this.equipmentChoice=Object.keys(this.equipmentsType);
}
else{
  this.equipmentChoice=Object.keys(this.materialsType);
}
}

  getConstasFeilds() {
    this.RestApiService.getConstatnsFields().subscribe(
      (data) => {
        this.constantsFieldsComponent.fillListOfCategoryfromdata(data);
        this.constantsFieldsComponent.listOfCategories;
        console.log(this.constantsFieldsComponent.listOfCategories)
        this.equipmentsType2 = this.constantsFieldsComponent.getFieldsFromCategoryName("equipmentType")
        this.materialsType2 = this.constantsFieldsComponent.getFieldsFromCategoryName("materialType")
      })
    
  }

  onCellValueChanged(event) {
    // countyToCityMap({"arraylists":{"equipmentType":this.equipmentsType,"materialType":this.materialsType}})
    // this.columnDefs[2].cellEditorParams(arrayEquip)
    var selectedCountry = event.data.equipment;
    if(selectedCountry==="ציוד"){
    this.equipmentChoice = this.equipmentsType;
    }
    else{
      this.equipmentChoice = this.materialsType;
    }
    console.log('Data after change is',this.equipmentChoice);

  }
  returnCall(params){
    console.log(params)
  //   if(params.data.equipment==="ציוד"){
  //     return this.materialsType2
  // }else{
  //   return this.materialsType2
      
  //   }  
  }
}
function cellCellEditorParams(params) {
  
  console.log(params)
  var selectedCountry = params.data.equipment;
  if(selectedCountry==="ציוד"){
  var allowedCities = countyToCityMap("equipmentType",this,this);
  }
  else{
    var allowedCities = countyToCityMap("materialType",this,this);
  }
  return {
    values: allowedCities,
  };
}
function countyToCityMap(match,equipmentType,meterialType) {
  console.log(match,equipmentType,meterialType)
  var map = {
    equipmentType:this.equipmentType,
    materialType:this.meterialType
  };
  return map[match];
  }

}
