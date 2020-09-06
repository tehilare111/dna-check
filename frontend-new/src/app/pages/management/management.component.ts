import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './users';
import { TreeComponent} from 'angular-tree-component';
import { icons } from 'eva-icons';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { TreeModule } from 'angular-tree-component';
import {NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';

class TreeNodeCustom{
  id: number;
  name: string;
  children: any[];
}


@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  pickedUpUnit = '';
  action = ''
  jsonPermiss
  addUnitInput = '';
  editUnitInput = '';
  currentNode = undefined;
  uploadLoading = false
  user :User = new User();
  newUserForm: User = new User();
  permission = ["מנהלן מערכת","מדווח אירועים","צופה אירועים",]

  @ViewChild("tree") private tree: TreeComponent;

  maxTreeNodeId = '1'
  nodes = [{
      'id': 0,
      'name': 'מצו"ב',
      'children': []
  }]
  options = {
    rtl: true,
    allowDrag: true,
    allowDrop: true
  };
  settings = {
    actions: false,
    columns: {
      firstName: {
        title: 'Firstname',
        type: 'string',
      },
      personalNumber: {
        title: 'PersonalNumber',
        type: 'string',
      },
      permissions: {
        title: 'Permissions',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data_table = [];

  
  constructor(private service:SmartTableData,private RestApiService:RestApiService,private ToastService: ToastService){ }

  ngOnInit(): void {
    this.source.load(this.data_table);
    this.loadData();
  }
  
  loadData(){
    this.uploadLoading = true
    this.RestApiService.getTreeUnits().subscribe(
      (data: {'maxTreeNodeId': string, 'treeNode': TreeNodeCustom[]}) => {
        this.nodes = data.treeNode
        this.maxTreeNodeId = data.maxTreeNodeId
        
        this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast("fail", 'שגיאה בקריאה מהשרת', '')
        this.uploadLoading = true
      }
      );
  }
  
  saveData(){
    this.uploadLoading = true
    let dataToServer = {'maxTreeNodeId': this.maxTreeNodeId, 'treeNode': this.nodes};
    this.RestApiService.postTreeUnits(dataToServer).subscribe(
      data=> {
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '') 
        this.uploadLoading = true
      },
      err => {
        this.ToastService.showToast('fail', 'בעיה בשמירה לשרת!', '') 
      }
    )
  }

  updatePermissionUser(personal){
    if (personal != null || this.user.permissions!=null)
    {
      this.jsonPermiss={"personal_number":personal,"permissions":this.user.permissions,"token":this.user.token}
      this.RestApiService.UpdateUser(this.jsonPermiss,personal)
      .subscribe(
        data=>{ this.LoadUserForUnit(); }
      )
    }
  }

  onSearch(query: string = '') {
    // Deny table filterring when there is no input
    if(query == ''){ this.source.setFilter([]); return; }

    // Orgenize fields in search structure 
    var tableFieldsForSerach = Object.keys(this.settings.columns).map(el => { return {field: el, search: query}; });
    
    this.source.setFilter(
      // fields we want to include in the search
      tableFieldsForSerach
    , false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  createNewUser() {
    this.newUserForm.unit = this.pickedUpUnit
    this.newUserForm.rank = "סמל"
    
    this.RestApiService.CreateUser(this.newUserForm)
    .subscribe(
      data => {
          this.ToastService.showToast("success","ההרשמה הושלמה","")
          this.newUserForm = new User();        
          },
      error => { this.ToastService.showToast("fail","שגיאה בעת בהרשמה","") }
    );
  }

  LoadUserForUnit() {
    this.RestApiService.getUsersList(this.pickedUpUnit).subscribe((data) => {
      this.data_table=data
      console.log(this.data_table)
      this.source.load(this.data_table);
    });
  }

  tableRowClicked(event) {
    this.user.personalNumber = event.data.personalNumber
  }

  onNodePickedUp(event) {
    this.currentNode = event.node;
    this.pickedUpUnit=this.currentNode.data.name;
    this.LoadUserForUnit()
  }

  onNodeDeactivate(event){
    this.currentNode = undefined;
    this.action = '';
    this.addUnitInput = '';
    this.editUnitInput = '';
  }

  deleteUnit(){
    let currentNodeParent = this.currentNode.parent;
    currentNodeParent.data.children = currentNodeParent.data.children
    .map((el) =>
      {
        return el.id==this.currentNode.data.id?undefined:el;
      }).filter(el => { return el != null } )
    this.tree.treeModel.update();
    this.onNodeDeactivate(undefined);
  }

  addUnit(){
    // change id
    if (!this.currentNode.data['children']) { this.currentNode.data['children'] = []; }
    this.maxTreeNodeId += 1;
    this.currentNode.data['children'].push({'id':this.maxTreeNodeId, 'name':this.addUnitInput, 'children':[]});
    this.tree.treeModel.update();
    this.onNodeDeactivate(undefined);
  }

  editUnit(){
    this.currentNode.data.name = this.editUnitInput;
    this.tree.treeModel.update();
    this.onNodeDeactivate(undefined);
  }
}
