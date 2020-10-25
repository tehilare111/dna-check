import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

import { NotReadMsgsColComponent } from './components/not-read-msgs-col/not-read-msgs-col.component';

import { User } from '../management/users';
@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit,  AfterViewInit {
  eventsToPickUp = {
    'defaultForms': {
      'name': 'כלל הטפסים',
      'route': undefined,
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'eventStatus': {'title': 'סטאטוס אירוע'}, 'unreadedMessages': {'title': 'הודעות שלא נקראו', 'filter': false, type: 'custom', 'renderComponent': NotReadMsgsColComponent, onComponentInitFunction: (instance) => {instance.updateMsgsInControlTable.subscribe(updatedData => { this.handleUpdatedUser(updatedData) })}}}
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

  source: LocalDataSource = new LocalDataSource();
  formalsUrl: string = '/forms/';
  draftsUrl: string = '/draft-forms/';
  data = [];
  isDraft:boolean = false;
  userIsAllowedToReport:boolean = false;
  userUnreadedMessages = {};
  @ViewChild("dialog") dialog : TemplateRef<any>;
  allowedUsers = ['מדווח אירועים', 'מנהלן מערכת'];
  constructor(private service: SmartTableData,private RestApiService:RestApiService,private ToastService:ToastService,private router:Router, private activatedRoute: ActivatedRoute, private dialogService: NbDialogService) { 
    this.isUserAllowedToReport();
  } 
  
  isUserAllowedToReport(){
    this.userIsAllowedToReport = this.allowedUsers.includes(localStorage.getItem("permissions"))
  }

  ngOnInit() {
    this.source.load(this.data);
    this.loadData('');
    this.userUnreadedMessages = JSON.parse(localStorage.getItem('unreadedMessages'))
  }

  ngAfterViewInit(){
    if(this.activatedRoute.snapshot.params.isLogin) this.openJustLoginDialog();
  }

  openJustLoginDialog(){
    let unreadedMessagesAmount = 0;
    for(let [key, value] of Object.entries(JSON.parse(localStorage.getItem('unreadedMessages')))){
      unreadedMessagesAmount += parseInt(value.toString());
    }
    this.dialogService.open(
      this.dialog,
      {
        context: unreadedMessagesAmount.toString(),
        // closeOnBackdropClick: false,
      });
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
      // Update unread messages amount of the user in the table, parallel to the event's reference
      if(eventType == ''){ this.data.forEach((element) => { element['unreadedMessages'] = `${this.userUnreadedMessages[element['reference']]};${element['reference']}` }); }
      
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

  private handleUpdatedUser(updatedData: any) {
    // TODO is it possible to update only single row with update result instead of full table?
    this.source.update(updatedData.row, {'unreadedMessages': updatedData.value});
  }
}