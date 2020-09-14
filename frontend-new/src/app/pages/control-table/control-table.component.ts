import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit {
  eventsToPickUp = {
    'defaultForms': {
      'name': 'כלל הטפסים',
      'route': undefined,
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'eventStatus': {'title': 'סטאטוס אירוע'}} 
    },
    'CorruptionForm': {
      'name': 'השמדת ציוד',
      'route': '/pages/events-forms/corruption-form',
      'columns': {'reference': {'title': 'סימוכין'}, 'reporterUnit': {'title': 'יחידת מדווח'}}
    },
    'LostForm': {
      'name': 'אובדן ציוד',
      'route': '/pages/events-forms/lost-form',
      'columns': {'reference': {'title': 'סימוכין', 'type': 'string'}, 'reporterName': {'title': 'שם מדווח', 'type': 'string'}, 'reporterUnit': {'title': 'יחידת מדווח', 'type': 'string'}}
  },
    'EquipmentReview': {
      'name': 'ביקורת ציוד',
      'route': '/pages/events-forms/equipment-review',
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': { 'title': 'יחידת מדווח'}}
    },
    'Drafts': {
      'name': 'טיוטות',
      'route': undefined,
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'eventStatus': {'title': 'סטאטוס אירוע'}} 
    },
  }
  pickedUpEvent = this.eventsToPickUp.defaultForms;
  settings = {
    actions: false,
    columns: {...this.pickedUpEvent.columns}
  }

  auth:AuthService=new AuthService()
  source: LocalDataSource = new LocalDataSource();
  formalsUrl: string = '/forms/';
  draftsUrl: string = '/draft-forms/';
  data = [];
  isDraft:boolean = false;

  


  array_permission=[]
  constructor(private service: SmartTableData,private RestApiService:RestApiService,private ToastService:ToastService,private router:Router) { 
  } 
  

  ngOnInit() {
    this.source.load(this.data);
    this.loadData('');
  }
  checkPermissions(){
    this.array_permission=['מדווח אירועים','מנהלן מערכת']
    return this.auth.checkPermissions(this.array_permission)
  }
  loadTable(value){
    if (value.name == this.eventsToPickUp.Drafts.name) this.isDraft = true;
    else this.isDraft = false;
    
    this.loadData(value.route?value.name:'');

    this.settings.columns = value.columns;
    this.settings = Object.assign({}, this.settings);
  }

  loadData(eventType: string) {

    this.RestApiService.get(`${(this.isDraft)?this.draftsUrl:this.formalsUrl}${eventType}`).subscribe((data_from_server) => {
      this.data=data_from_server

    console.log(eventType)

    // this.RestApiService.getFormsList(eventType).subscribe((data_from_server) => {
    //   console.log(data_from_server.length)
    //   if(data_from_server.length>0)
    //   {
    //       this.data=data_from_server

    //       this.source.load(this.data);
    //   }
    //   else{
    //   this.data=[]

      this.source.load(this.data);
    });
  }

  formClicked(event) {
    let path = ''
    for(let [key, value] of Object.entries(this.eventsToPickUp)){
      if(value['name'] == event.data.eventType){
        path = value['route']
      }
    }
    this.router.navigate([path, {reference: event.data.reference, isDraft: this.isDraft}]);
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