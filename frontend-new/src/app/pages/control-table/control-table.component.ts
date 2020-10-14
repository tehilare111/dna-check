import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit {
  eventsToPickUp = {
    'a_defaultForms': {
      'name':"אירועים",
      'route': undefined,
      'type':'html',
      'color':"#5bc0de",
      'columns': {'reference': {'title': 'סימוכין'},'eventType': {'title': 'סוג אירוע'}, 'date': {'title': 'תאריך פתיחת האירוע'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'message': {'title': 'הודעות שנקראו/ לא נקראו'},"lastDate":{"title":"תאריך עדכון אחרון"}},
      'status':'info',
      'class':'colorButton-events'
    },
    'b_EquipmentReview': {
      'name': 'ספירות',
      'type':'html',
      'route': '/pages/events-forms/equipment-review',
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': { 'title': 'יחידת מדווח'}},
      'status':'info',
      'color':"#5bc0de",
      'class':'colorButton-revew'
    },
    'c_LostForm': {
      'name': 'אובדנים',
      'status':'info',
      'type':'html',
      'color':"#5bc0de",
      'route': '/pages/events-forms/lost-form',
      'class':'colorButton-lost-form',
      'columns': {'reference': {'title': 'סימוכין', 'type': 'string'}, 'reporterName': {'title': 'שם מדווח', 'type': 'string'}, 'reporterUnit': {'title': 'יחידת מדווח', 'type': 'string'},'eventStatusShorted': {'title': 'סטאטוס טיפול', 'type': 'string'}, 'eventStatus': {'title': 'סטאטוס אירוע', 'type': 'string'}, 'equipmnetsType': {'title': 'סוג ציוד/חומר', 'type': 'string'}, 'equipmnetsMark': {'title': 'סימון ציוד/חומר', 'type': 'string'}, 'equipmnetsMakat': {'title': 'מספר ציוד/חומר', 'type': 'string'}, 'reportDate': {'title': 'תאריך דיווח', 'type': 'string'},'bargainDate': {'title': 'תאריך מציאה', 'type': 'string'},'clarificationDate': {'title': 'תאריך בירור', 'type': 'string'},'shortDate': {'title': 'תאריך טיפול', 'type': 'string'}},
      
    },
    
    
}
  eventsToPickUp2 = {
    'EquipmentReview': {
      'name': 'ספירות',
      'route': '/pages/events-forms/equipment-review',
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': { 'title': 'יחידת מדווח'}}
    },
    'LostForm': {
      'name': 'אובדנים',
      'route': '/pages/events-forms/lost-form',
      'columns': {'reference': {'title': 'סימוכין', 'type': 'string'}, 'reporterName': {'title': 'שם מדווח', 'type': 'string'}, 'reporterUnit': {'title': 'יחידת מדווח', 'type': 'string'},'eventStatusShorted': {'title': 'סטאטוס טיפול', 'type': 'string'}, 'eventStatus': {'title': 'סטאטוס אירוע', 'type': 'string'}, 'equipmnetsType': {'title': 'סוג ציוד/חומר', 'type': 'string'}, 'equipmnetsMark': {'title': 'סימון ציוד/חומר', 'type': 'string'}, 'equipmnetsMakat': {'title': 'מספר ציוד/חומר', 'type': 'string'}, 'reportDate': {'title': 'תאריך דיווח', 'type': 'string'},'bargainDate': {'title': 'תאריך מציאה', 'type': 'string'},'clarificationDate': {'title': 'תאריך בירור', 'type': 'string'},'shortDate': {'title': 'תאריך טיפול', 'type': 'string'}}
    },
    
    
    
    
  }
  pickedUpEvent = this.eventsToPickUp.a_defaultForms;
  settings = {
    actions: false,
    columns: {
      
      ...this.pickedUpEvent.columns},
      
      attr:{
        
      }
      
  };
  routeDrafts=true
  source: LocalDataSource = new LocalDataSource();
  formalsUrl: string = '/forms/';
  draftsUrl: string = '/draft-forms/';
  data = [];
  flagDesable:boolean=true;
  isDraft:boolean = false;

  constructor(private service: SmartTableData,private RestApiService:RestApiService,private ToastService:ToastService,private router:Router) { 
  } 
  

  ngOnInit() {
    this.source.load(this.data);
    this.loadData('');
  }

  draftsColumns(){
    var value=document.getElementById("טיוטות").title
    this.routeDrafts=false
    this.settings.columns={'reference': {'title': 'סימוכין'},'eventType': {'title': 'סוג אירוע'}, 'date': {'title': 'תאריך פתיחת האירוע'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'message': {'title': 'הודעות שנקראו/ לא נקראו'},"lastDate":{"title":"תאריך עדכון אחרון"}}
    this.settings = Object.assign({}, this.settings);
    this.isDraft=true
    this.loadData("טיוטות")
  }
  // defualtForms(){
  //   var value=document.getElementById("אירועים").title
  //   this.loadTable(value)
  //   this.settings.columns={'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'eventStatus': {'title': 'סטאטוס אירוע'}}
  //   this.settings = Object.assign({}, this.settings);
  // }
  loadTable(value){
    // if (value.name == this.eventsToPickUp.Drafts.name) this.isDraft = true;
    // else this.isDraft = false;
    
    this.routeDrafts=true
    this.loadData(value.route?value.name:'');
    this.settings.columns = value.columns;
    this.settings = Object.assign({}, this.settings);
    
  }
  

  loadData(eventType: string) {
    this.RestApiService.get(`${(this.isDraft)?this.draftsUrl:this.formalsUrl}${eventType}`).subscribe((data_from_server) => {
      this.data=data_from_server
      this.source.load(this.data);
      this.isDraft=false
    });
  }

  formClicked(event) {
    let path = ''
    console.log(event.data.eventType)
    for(let [key, value] of Object.entries(this.eventsToPickUp)){
      if(value['name'] == event.data.eventType){
        console.log("ok")
        path = value['route']
        this.ToastService.showToast('success', 'הועברת לטופס: '+event.data.eventType, '')
      }
      
    }
    console.log(path)
    if (path==''){
      this.ToastService.showToast('fail', 'הדף לא נמצא', '')
    }else{
    this.router.navigate([path, {reference: event.data.reference, isDraft: this.isDraft}]);
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

  onSearch(query: string = '') {
    // Deny table filterring when there is no input
    if(query == ''){ this.source.setFilter([]); return; }

    // Orgenize fields in search structure 
    var tableFieldsForSerach = Object.keys(this.pickedUpEvent.columns).map(el => { return {field: el, search: query}; });
    
    this.source.setFilter(
      // fields we want to include in the search
      tableFieldsForSerach
    , false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}