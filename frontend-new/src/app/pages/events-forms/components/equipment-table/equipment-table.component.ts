import { Component, OnInit,ViewChild,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { RestApiService } from '../../../../services/rest-api.service';
import { ConstantsFieldsComponent } from '../../../constants-fields/constants-fields.component';
import 'ag-grid-enterprise';
import { CountryOrderService } from '../../../../@core/mock/country-order.service';
import { HttpClient } from '@angular/common/http';
import { ThemeSettingsComponent } from '../../../../@theme/components';
import { AppInjector } from '../../../../services/app-injector.service';
import { Observable } from 'rxjs';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


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
  @Input()editBlockState
  equipmentsType2=[]
  materialsType2=[]
  saveArrayEquipment=[]
  equipmentChoice=[]
  equipmentsTitle=["ציוד","חומר פיסי","חומר לוגי"]
  // public modules: Module[] = [ClientSideRowModelModule];
  private gridApi;
  private gridColumnApi;
  private arrayRemoveingInTable=[]
  private columnDefs;
  private columnDefs2;
  private defaultColDef;
  rowData;
  arraySaveEqupments=[]
  protected iconRegistry:MatIconRegistry;
  protected sanitizer: DomSanitizer;
  protected restApiService:RestApiService;
  constantsFieldsComponent = new ConstantsFieldsComponent(null, null)
  constructor() {
  this.restApiService = AppInjector.injector.get(RestApiService);
  this.iconRegistry=AppInjector.injector.get(MatIconRegistry);
  this.sanitizer=AppInjector.injector.get(DomSanitizer);
    this.iconRegistry.addSvgIcon(
      'delete',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\delete_outline-24px.svg'));
  this.columnDefs = [
    {headerName:'מקט ציוד' ,field:'equipmentMakat', sortable: true, filter: true,editable:true},
    {headerName:'מספר ציוד' ,field: 'equipmentMark', sortable: true, filter: true,editable:true},
    {headerName:'סוג ציוד/חומר' ,field: "equipmentType", sortable: true, filter: true,editable:true,cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: cellCellEditorParams,
  },
    {headerName:'ציוד/חומר',field: 'equipment', sortable: true, filter: true,editable:true,cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      
      values: this.equipmentsTitle,
    },
  },
];
this.columnDefs2 = [
  {headerName:'מקט ציוד' ,field:'equipmentMakat', sortable: true, filter: true,editable:false},
  {headerName:'מספר ציוד' ,field: 'equipmentMark', sortable: true, filter: true,editable:false},
  {headerName:'סוג ציוד/חומר' ,field: "equipmentType", sortable: true, filter: true,editable:false,cellEditor: 'agRichSelectCellEditor',
  cellEditorParams: cellCellEditorParams,
},
  {headerName:'ציוד/חומר',field: 'equipment', sortable: true, filter: true,editable:false,cellEditor: 'agRichSelectCellEditor',
  cellEditorParams: {
    values: this.equipmentsTitle,
  },
},
];
  this.defaultColDef=[{
    suppressChangeDetection:true,
    showRowGroup: true,
    resizable: true,
    editable:true
    }]
  this.rowData = [];
}
  ngOnInit(){
   constantsChoice("ציוד")
  }

  addNewRow(){
    this.gridApi.api.updateRowData({
      add: [{equipment: 'ציוד/חומר', equipmentType: 'סוג ציוד/חומר', equipmentMark: "מספר ציוד",equipmentMakat:"מקט ציוד"}]
    });
    if(this.form.equipmentsArray==undefined){
      this.arraySaveEqupments.push(JSON.stringify({equipment: 'ציוד/חומר', equipmentType: 'סוג ציוד/חומר', equipmentMark: "מספר ציוד",equipmentMakat:"מקט ציוד"}))
      this.form.equipmentsArray=this.arraySaveEqupments.slice()
    }
    else{
      this.form.equipmentsArray.push(JSON.stringify({equipment: 'ציוד/חומר', equipmentType: 'סוג ציוד/חומר', equipmentMark: "מספר ציוד",equipmentMakat:"מקט ציוד"}))
    }

  }

  onRemoveSelected() {
    var selectedData = this.gridApi.api.getSelectedRows();
    console.log("selected",selectedData[0])
    this.gridApi.api.updateRowData({ remove: selectedData });
    const index =  this.form.equipmentsArray.indexOf(selectedData[0]);
    if (index > -1) {
      this.form.equipmentsArray.splice(index, 1);
    
  }

  }

  onGridReady(params) {
    this.gridApi = params;
    this.gridColumnApi = params.columnApi;
}

  onCellValueChanged(event) {
    var selectedCategory=event.colDef
    if (selectedCategory["field"]==="equipment") {
      event.node.setDataValue('equipmentType', null);
    }
    for(let i in  this.form.equipmentsArray){
      if(i==event.rowIndex){
        this.form.equipmentsArray[i]=event.data
      }
    }
  }

  exisitingFormLoadData(array:any[]){
    this.rowData=array.slice()
  }
}

function cellCellEditorParams(params) {
  var selectedCategory = params.data.equipment;
  if(selectedCategory==="ציוד"){
    return {
      values:constantsChoice("equipmentType"),
    }
  }
  else{
    return {
      values:constantsChoice("materialType"),
    }
  }
  
}
var eqArray = [];
var shouldGetConstatnsFields=true
function constantsChoice(match) {
  let equipmentType=undefined
  let materialType=undefined
  
  if(shouldGetConstatnsFields){
    var constantsFieldsComponent = new ConstantsFieldsComponent(null, null)
    var restApiService:RestApiService=AppInjector.injector.get(RestApiService);
    shouldGetConstatnsFields=false
    restApiService.getConstatnsFields().subscribe(
    (data) => {
        constantsFieldsComponent.fillListOfCategoryfromdata(data);
        constantsFieldsComponent.listOfCategories;
        materialType = constantsFieldsComponent.getFieldsFromCategoryName("materialType")
        equipmentType = constantsFieldsComponent.getFieldsFromCategoryName("equipmentType")
        setEquipmentsArray([materialType, equipmentType]);
    },
    (err) => {
    });
  }
    var map={
      equipmentType:eqArray[1],
      materialType:eqArray[0]
    }
    return map[match]}
 
function setEquipmentsArray(newArr)
{
  eqArray = newArr.slice();
}
