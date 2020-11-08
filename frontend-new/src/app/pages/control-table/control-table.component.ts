import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

import { NotReadMsgsColComponent } from './components/not-read-msgs-col/not-read-msgs-col.component';
import { User } from '../management/users';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatMenuTrigger, MatTableDataSource} from '@angular/material';
import { AngularMultiSelect} from 'angular2-multiselect-dropdown';

import { ConstantsFieldsComponent } from '../constants-fields/constants-fields.component';
import { throwIfAlreadyLoaded } from '../../@core/module-import-guard';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit,  AfterViewInit {
  displayedColumnsTitle:string[]= [];
  read="נקראו"
  unread="לא נקראו"
  UnreadRead=[{"id":0,"itemName":this.read},{"id":1,"itemName":this.unread}]
  dropdownSettings = {};
  dropdownSettingsMessage = {};
  selectedItems = [];
  DisplayFlagDraft=true;
  dataSource=new MatTableDataSource<any>();
  dataSourceFilter=new MatTableDataSource<any>();
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild('dropdownRef')dropdownRef: AngularMultiSelect;
  draftsTtile=['סימוכין','סוג אירוע','תאריך פתיחת האירוע','שם מדווח','יחידת מדווח','הודעות שלא נקראו/נקרא']
  draftsColumn=['reference','eventType','date','reporterName','reporterUnit','unreadeMessages']
  eventsToPickUp = {
    'a_defaultForms': {
      'name':"אירועים",
      'route': undefined,
      'type':'html',
      'color':"#6bcef7",
      'title':['הודעות שלא נקראו/נקרא','סימוכין','סוג אירוע','תאריך פתיחת האירוע','שם מדווח','יחידת מדווח','תאריך עדכון אחרון'],
      'columns': ['reference','eventType','date','reporterName','reporterUnit','reviewDate','unreadeMessages'],
      'status':'info',
    },
    'b_EquipmentReview': {
      'name': 'ספירות',
      'type':'html',
      'color':'#6bcef7',
      'route': '/pages/events-forms/equipment-review',
      'title': ['הודעות שלא נקראו/נקראו','סימוכין','תאריך','שם מדווח','יחידת מדווח'],
      'columns': ['reference', 'date', 'reporterName', 'reporterUnit','unreadeMessages'],
      'status':'info',
    },
    'c_LostForm': {
      'name': 'אובדנים',
      'status':'info',
      'type':'html',
      'color':'#6bcef7',
      'route': '/pages/events-forms/lost-form',
      'title': ['הודעות שלא נקראו/נקראו','סימוכין','שם מדווח','יחידת מדווח', 'סטאטוס טיפול','סטאטוס אירוע' ,'סוג ציוד/חומר' , 'סימון ציוד/חומר', 'מספר ציוד/חומר', 'תאריך דיווח','תאריך מציאה', 'תאריך בירור','תאריך טיפול'],
      'columns': ['reference','reporterName', 'reporterUnit','eventStatusShorted', 'eventStatus', 'eventType', 'equipmentMakat', 'equipmentMark', 'date','findingDate','investigationDate','handlingDate',"unreadeMessages"],
    },  
}

  pickedUpEvent = this.eventsToPickUp.a_defaultForms;
  public arrayItems=[];
  jsonArrayItems=[]
  routeDrafts=true
  pageindex=0
  pageSize=5
  formalsUrl: string = '/forms/';
  draftsUrl: string = '/draft-forms/';
  data:any[] = [];
  public toppingList: string[] = [];
  isDraft:boolean = false;
  userIsAllowedToReport:boolean = false;
  displayedColumns=[];
  @ViewChild("dialog") dialog : TemplateRef<any>;
  @ViewChild(MatSort) sort: MatSort;
  allowedUsers = ['מדווח אירועים', 'מנהלן מערכת'];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private service: SmartTableData,private RestApiService:RestApiService,private ToastService:ToastService,private router:Router, private activatedRoute: ActivatedRoute, private dialogService: NbDialogService) { 
    this.isUserAllowedToReport();
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\menu_bar.svg'));
      iconRegistry.addSvgIcon(
        'readMessage',
        sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\readMessage.svg'));
  } 
  
  isUserAllowedToReport(){
    this.userIsAllowedToReport = this.allowedUsers.includes(localStorage.getItem("permissions"))
  }

  ngOnInit():void {
    const paginatorIntl = this.paginator._intl;
    paginatorIntl.nextPageLabel = '';
    paginatorIntl.lastPageLabel=''
    paginatorIntl.previousPageLabel = '';
    paginatorIntl.itemsPerPageLabel='';
    this.loadData('');
    this.dropdownSettings = {
      singleSelection: false, 
      selectAllText:'בחר הכל',
      unSelectAllText:'הסר הכל',
      enableSearchFilter: true,
      searchFilter:"חייפוש",
      noDataLabel:"חיפוש",
      classes:"myclass custom-class-example"

    }
    this.dropdownSettingsMessage={
      singleSelection: false, 
      selectAllText:'בחר הכל',
      unSelectAllText:'הסר הכל',
      enableSearchFilter: true,
      searchFilter:"חייפוש",
      classes:"myclass custom-class-example"

    }
    this.displayedColumns=this.pickedUpEvent.columns
    this.displayedColumnsTitle=this.pickedUpEvent.title
    this.dataSource.data=this.data;
    this.dataSourceFilter.paginator = this.paginator;
    this.dataSourceFilter.data=this.data;
    this.createJsonItems(this.pickedUpEvent.columns)
  }

  ngAfterViewInit(){
    this.dataSourceFilter.paginator = this.paginator;
    this.dataSourceFilter.sort = this.sort;
    if(this.activatedRoute.snapshot.params.isLogin) this.openJustLoginDialog();
  }
  removeHiddenToSelcet(){
    document.getElementsByClassName("list-area")[0].setAttribute("height","180px")
    document.getElementsByClassName("c-btn")[0].setAttribute("hidden","true")
    document.getElementsByClassName("dropdown-list animated fadeIn")[0].removeAttribute("hidden")
    document.getElementsByClassName("c-input ng-untouched")[0].setAttribute("placeholder","חיפוש מרובה")
  }
  applyFilter() {
    var arrayEmpty=[];
    var tempData = [];
    this.dataSource.data.forEach(val => tempData.push(Object.assign({}, val)));
    for (let item in this.jsonArrayItems)
    {
      for (let option of this.jsonArrayItems[item].arrayByColumnOption)
      {
        for (let j in tempData)
        {
          if(option===this.read ||option===this.unread){
              var re=''
              re=tempData[j]["unreadeMessages"].split(";")
              if(((re[0]=='undefined' && option===this.read) || (re[0]!='undefined' && option===this.unread))&& !arrayEmpty.includes(tempData[j])){
                arrayEmpty.push(tempData[j])
            } 
          }
          else{
              if (!tempData[j][this.jsonArrayItems[item].title].toString().localeCompare(option))
              {
                arrayEmpty.push(tempData[j])
              }
            }
      }
      }
        if(this.jsonArrayItems[item].arrayByColumnOption.length!=0){
          tempData = arrayEmpty
          arrayEmpty = []
        }
        this.dataSourceFilter.data = tempData
      }
    }

  createArraySeclect(value,index){
      if(!this.jsonArrayItems[index].arrayByColumnOption.includes(value))
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
    var currName=""
    var count=0
      for(let i in this.dataSource.data)
      {
        for (let j of this.arrayItems) {
        currName = this.dataSource.data[i][title]
        var doesExist = false; 
          if (!currName.toString().localeCompare(j.itemName)) {
            doesExist = true;
            break;
          }
        }
        if (!doesExist ){
          this.arrayItems.push({"id":i,"itemName":this.dataSource.data[i][title].toString()})
        }
      }
      this.jsonArrayItems[index].array=Array.from(this.arrayItems);
      this.arrayItems=[]
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
    this.routeDrafts=true //if button pressed is not drafts, then we want the plus button to be active.
    if (value.name != "טיוטות") {this.isDraft = false} //slice messages colunm from table on drafts table.
    this.displayedColumnsTitle=value.title
    this.displayedColumns=value.columns
    this.createJsonItems(this.displayedColumns)
    this.loadData(value.route?value.name:'');
  }

  loadData(eventType: string) {
      this.RestApiService.get(`${(this.isDraft)?this.draftsUrl:this.formalsUrl}${eventType}`).subscribe((data_from_server) => {
      this.data=data_from_server
      this.dataSource.data=this.data
      this.dataSourceFilter.data=this.data
    });
  }
  formClicked(event) {
    let path = ''
    for(let [key, value] of Object.entries(this.eventsToPickUp)){
      if(value['name'] == event.eventType){
        path = value['route']
        this.ToastService.showToast('success', 'הועברת לטופס: '+event.eventType, '')
        this.router.navigate([path, {reference: event.reference, isDraft: this.isDraft}]);
    }
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