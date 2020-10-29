import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatMenuTrigger, MatTableDataSource} from '@angular/material';
import { AngularMultiSelect} from 'angular2-multiselect-dropdown';
export interface PeriodicElement {
  reference: string;
  eventType: string;
  date: string;
  reporterName: string;
  reporterUnit: string;
  message: string;
  reviewDate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
]
@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit,AfterViewInit{
  displayedColumnsTitle:string[]= [];

  dropdownList = [];
  dropdownSettings = {};
  selectedItems = [];

  dataSource=new MatTableDataSource<any>();
  dataSourceFilter=new MatTableDataSource<any>();
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild('dropdownRef')dropdownRef: AngularMultiSelect;
  draftsTtile=['סימוכין','סוג אירוע','תאריך פתיחת האירוע','שם מדווח','יחידת מדווח','הודעות שנקראו/ לא נקראו']
  draftsColumn=['reference','eventType','date','reporterName','reporterUnit','message']
  eventsToPickUp = {
    'a_defaultForms': {
      'name':"אירועים",
      'route': undefined,
      'type':'html',
      'color':"#5bc0de",
      'title':['סימוכין','סוג אירוע','תאריך פתיחת האירוע','שם מדווח','יחידת מדווח','הודעות שנקראו/ לא נקראו','תאריך עדכון אחרון'],
      'columns': ['reference','eventType','date','reporterName','reporterUnit','message','reviewDate'],
      'status':'info',
    },
    'b_EquipmentReview': {
      'name': 'ספירות',
      'type':'html',
      'route': '/pages/events-forms/equipment-review',
      'title': ['סימוכין','תאריך','שם מדווח','יחידת מדווח'],
      'columns': ['reference', 'date', 'reporterName', 'reporterUnit'],
      'status':'info',
    },
    'c_LostForm': {
      'name': 'אובדנים',
      'status':'info',
      'type':'html',
      'route': '/pages/events-forms/lost-form',
      'title': ['סימוכין','שם מדווח','יחידת מדווח', 'סטאטוס טיפול','סטאטוס אירוע' ,'סוג ציוד/חומר' , 'סימון ציוד/חומר', 'מספר ציוד/חומר', 'תאריך דיווח','תאריך מציאה', 'תאריך בירור','תאריך טיפול'],
      'columns': ['reference','reporterName', 'reporterUnit','eventStatusShorted', 'eventStatus', 'equipmnetsType', 'equipmnetsMark', 'equipmnetsMakat', 'reportDate','bargainDate','clarificationDate','shortDate'],
    },  
}

public arrayItems=[];
jsonArrayItems=[]
  pickedUpEvent = this.eventsToPickUp.a_defaultForms;
  
  routeDrafts=true
  formalsUrl: string = '/forms/';
  draftsUrl: string = '/draft-forms/';
  data = [];
  public toppingList: string[] = [];
  flagDesable:boolean=false;
  isDraft:boolean = false;
  displayedColumns=[]
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: SmartTableData,private RestApiService:RestApiService,private ToastService:ToastService,private router:Router) { 
  }

  ngAfterViewInit (){
    this.dataSourceFilter.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() :void{
    this.dropdownSettings = { 
      singleSelection: false, 
      text:"חיפוש",
      selectAllText:'בחר הכל',
      unSelectAllText:'הסר הכל',
      enableSearchFilter: true,
      searchFilter:"חייפוש",
      classes:"myclass custom-class-example"
    };
    this.displayedColumns=this.pickedUpEvent.columns
    this.displayedColumnsTitle=this.pickedUpEvent.title
    this.dataSource.data=this.data;
    this.dataSourceFilter.paginator = this.paginator;
    this.dataSourceFilter.data=this.data;
    this.createJsonItems(this.pickedUpEvent.columns)
  }

  applyFilter() {
  var arrayEmpty=[]
  var tempData = [];
  this.dataSource.data.forEach(val => tempData.push(Object.assign({}, val)));
  for (let item of this.jsonArrayItems )
  {
    for (let option of item.arrayByColumnOption)
    {
      for (let j of tempData)
      {
        if (!j[item.title].toString().localeCompare(option))
        {
          arrayEmpty.push(j)
        }
      }
    }
      if(item.arrayByColumnOption.length!=0){
        tempData = arrayEmpty
        arrayEmpty = []
      }
      this.dataSourceFilter.data = tempData
    }
  }
  createArraySeclect(value,index){
    this.jsonArrayItems[index].arrayByColumnOption.push(value.itemName)
  }
  removeArraySelect(value,index){
  const indexOfItem = this.jsonArrayItems[index].arrayByColumnOption.indexOf(value.itemName);
  if (indexOfItem > -1) {this.jsonArrayItems[index].arrayByColumnOption.splice(indexOfItem, 1);
}
  }
  createArrayAllSelect(value,index){
    for(let i of value){
    this.jsonArrayItems[index].arrayByColumnOption.push(i.itemName)
  }
  }
  removeArrayAllSelect(index)
  {
    this.jsonArrayItems[index].arrayByColumnOption=[]
  }
  getArrayItems(title,index){
    for(let i in this.dataSource.data)
    {
      var currName = this.dataSource.data[i][title];
      var doesExist = false; 
      for (let j of this.arrayItems) {
        if (!currName.toString().localeCompare(j.itemName)) {
          doesExist = true;
          break;
        }
      }
      if (!doesExist) {
        this.arrayItems.push({"id":i,"itemName":this.dataSource.data[i][title].toString()})
      }
    }
    this.jsonArrayItems[index].array=Array.from(this.arrayItems);
    this.arrayItems=[]
  }
  // openDropList(){
  //   document.getElementsByClassName("custom-class-example")[0].setAttribute("style","visiblty='hidden' !importent")
  // }
  sortData($event){
    const sortId=$event.active;
    const sortDirection=$event.direction
    if(sortDirection==='asc'){
      this.dataSourceFilter.data=this.dataSourceFilter.data.slice().sort((a,b)=>(a[sortId]>b[sortId]?1:0));
    }else{
      this.dataSourceFilter.data=this.dataSourceFilter.data.slice().sort((a,b)=>(a[sortId]<b[sortId]?1:0));
    }
   }
  draftsColumns(){
    this.routeDrafts=false
    this.isDraft=true
    this.displayedColumns=this.draftsColumn
    this.displayedColumnsTitle=this.draftsTtile
    this.loadData("טיוטות")
    this.createJsonItems(this.displayedColumns)
  }
  createJsonItems(titleColumn)
  {
    var array=[]
    for(let title in titleColumn){
      array.push({"title":titleColumn[title],"array":this.toppingList,"flagDisplay":false,"value":[],"arrayByColumnOption":[]})
    }
    this.jsonArrayItems=array    
  }
  loadTable(value){
    this.routeDrafts=true
    this.loadData(value.route?value.name:'');
    this.displayedColumnsTitle=value.title
    this.displayedColumns=value.columns
    this.createJsonItems(this.displayedColumns)
  }
  loadData(eventType: string) {
    this.RestApiService.get(`${(this.isDraft)?this.draftsUrl:this.formalsUrl}${eventType}`).subscribe((data_from_server) => {
      this.data=data_from_server
      this.dataSource.data=this.data
      this.dataSourceFilter.data=this.data
      this.isDraft=false
    });
  }
  formClicked(event) {
    let path = ''
    for(let [key, value] of Object.entries(this.eventsToPickUp)){
      if(value['name'] == event.eventType){
        path = value['route']
        this.ToastService.showToast('success', 'הועברת לטופס: '+event.eventType, '')
      }
    }
    if (path==''){
      this.ToastService.showToast('fail', 'הדף לא נמצא', '')
    }
    else{
      this.router.navigate([path, {reference: event.reference, isDraft: this.isDraft}]);
    }
  }

  exportToXL(value){
    this.RestApiService.getXlFile(value.route?value.name:'').subscribe(
      data => { this.downloadFile(data); },
      error => { this.ToastService.showToast('fail', 'בעיה בהורדת הקובץ', '') },
    );
  }

  downloadFile(data) {
    var blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    anchor.download = "סיכום טבלת שליטה.csv";
    anchor.href = url;
    anchor.click();
  }

  onSearch(filterText) {
      filterText = filterText.trim(); // Remove whitespace
      filterText = filterText.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceFilter.filter = filterText;
  }
}