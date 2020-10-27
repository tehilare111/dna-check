import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {merge, Observable, of as observableOf} from 'rxjs';
import { SmartTableData } from '../../@core/data/smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatMenuTrigger, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import { INgxSelectOption } from 'ngx-select-ex';





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
  dataSource=new MatTableDataSource<any>();
  dataSourceFilter=new MatTableDataSource<any>()
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator

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
      'class':'colorButton-events'
    },
    'b_EquipmentReview': {
      'name': 'ספירות',
      'type':'html',
      'route': '/pages/events-forms/equipment-review',
      'title': ['סימוכין','תאריך','שם מדווח','יחידת מדווח'],
      'columns': ['reference', 'date', 'reporterName', 'reporterUnit'],
      'status':'info',
      'class':'colorButton-revew'
    },
    'c_LostForm': {
      'name': 'אובדנים',
      'status':'info',
      'type':'html',
      'route': '/pages/events-forms/lost-form',
      'class':'colorButton-lost-form',
      'title': ['סימוכין','שם מדווח','יחידת מדווח', 'סטאטוס טיפול','סטאטוס אירוע' ,'סוג ציוד/חומר' , 'סימון ציוד/חומר', 'מספר ציוד/חומר', 'תאריך דיווח','תאריך מציאה', 'תאריך בירור','תאריך טיפול'],
      'columns': ['reference','reporterName', 'reporterUnit','eventStatusShorted', 'eventStatus', 'equipmnetsType', 'equipmnetsMark', 'equipmnetsMakat', 'reportDate','bargainDate','clarificationDate','shortDate'],
    },  
}
toppings = new FormControl();
public toppingList: string[] = [];
public arrayItems=[];
jsonArrayItems=[]
  pickedUpEvent = this.eventsToPickUp.a_defaultForms;
  settings = {
    actions: false,
    columns: {
      
      ...this.pickedUpEvent.columns},
      attr:{
      }
  };
  routeDrafts=true
  formalsUrl: string = '/forms/';
  draftsUrl: string = '/draft-forms/';
  data = [];
  flagDesable:boolean=false;
  isDraft:boolean = false;
  displayedColumns=[]
  ngxValue: any = [];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: SmartTableData,private RestApiService:RestApiService,private ToastService:ToastService,private router:Router) { 
  }
  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   
  }
  ngOnInit() :void{
    this.toppings = new FormControl();
    this.displayedColumns=this.pickedUpEvent.columns
    this.displayedColumnsTitle=this.pickedUpEvent.title
    this.dataSource.data=this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSourceFilter.data=this.data;
    this.loadData('');
    this.createJsonItems(this.pickedUpEvent.columns)
  }
 
  applyFilter(value,index) {
  var arrayEmpty=[]
  var tempData = [];
  this.dataSource.data.forEach(val => tempData.push(Object.assign({}, val)));
  this.jsonArrayItems[index].arrayByColumnOption=value
  for (let item of this.jsonArrayItems )
  {
    for (let option of item.arrayByColumnOption)
    {
      for (let j of tempData)
      {
        if (!j[item.title].toString().localeCompare(option.value.toString()))
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
  
  getArrayItems(title,index){
    console.log(title)
    for(let i of this.dataSource.data)
    {
      this.arrayItems.push(i[title])
    }
    var Items=new Set(this.arrayItems)
    this.jsonArrayItems[index].array=Array.from(Items)
    this.arrayItems=[]
    
  }
  sortData($event){
    const sortId=$event.active;
    const sortDirection=$event.direction
    if('asc'===sortDirection){
     
      this.dataSource.data=this.data.slice().sort((a,b)=>(a[sortId]>b[sortId]?1:0));
    }else{
      this.dataSource.data=this.data.slice().sort((a,b)=>(a[sortId]<b[sortId]?1:0));
    }
    
   }
  draftsColumns(){
   
    var value=document.getElementById("טיוטות").title
    this.routeDrafts=false
    this.settings = Object.assign({}, this.settings);
    this.isDraft=true
    this.displayedColumns=this.draftsColumn
    this.displayedColumnsTitle=this.draftsTtile
    this.loadData("טיוטות")
  }
  createJsonItems(titleColumn)
  {
    var array=[]
    for(let title in titleColumn){
      array.push({"title":titleColumn[title],"array":this.toppingList,"flagDisplay":false,"value":" ","arrayByColumnOption":[]})
      
    }
    this.jsonArrayItems=array    
  }
  loadTable(value){
    this.routeDrafts=true
    this.loadData(value.route?value.name:'');
    this.displayedColumnsTitle=value.title
    this.displayedColumns=value.columns
    this.settings = Object.assign({}, this.settings);
    this.createJsonItems(this.displayedColumnsTitle)
    
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
    console.log(event)
    for(let [key, value] of Object.entries(this.eventsToPickUp)){
      if(value['name'] == event.eventType){
        console.log(value['route'])
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

  openFilter(col:string){
    document.getElementById(col+'-filter').removeAttribute('hidden')
  }
  closeFilter(col:string){
    document.getElementById(col+'-filter').setAttribute('hidden','true')
  }

  onSearch(col:string,filterText:string) {
    if(filterText.trim()!=''){
      this.dataSource.data=this.data.slice().filter((element)=>JSON.stringify(element[col]).indexOf(filterText)>-1);
    }
    
    // Deny table filterring when there is no input
    // if(query == ''){ this.source.setFilter([]); return; }

    // // Orgenize fields in search structure 
    // var tableFieldsForSerach = Object.keys(this.pickedUpEvent.columns).map(el => { return {field: el, search: query}; });
    
    // this.source.setFilter(
    //   // fields we want to include in the search
    //   tableFieldsForSerach
    // , false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}