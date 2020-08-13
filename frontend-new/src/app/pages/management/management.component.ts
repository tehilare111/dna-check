import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from './users';
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

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  firstname: string;
  lastname: string;
  personalnumber: number;
  permissions: string;
}

@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  unit_name=" ";
  action=''
  jsonPermiss
  addUnitInput = '';
  editUnitInput = '';
  currentNode=undefined;
  evaIcons = [];
  @ViewChild("tree") private tree: TreeComponent;
  uploadLoading = false
  users:Users=new Users();
  customColumn = 'firstname';
  customColumn2 = 'שם';
  defaultColumns = {'personalnumber':'מזהה','permissions':'הרשאות'};
  allColumns = [ this.customColumn, ...Object.keys(this.defaultColumns)];
  permission = ["מנהלן מערכת","מדווח אירועים","צופה אירועים",]
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  constructor(private service:SmartTableData,private RestApiService:RestApiService,private ToastService: ToastService){
    this.evaIcons = Object.keys(icons).filter(icon => icon.indexOf('outline') === -1);
  }
  maxTreeNodeId = '1'
  // bar agever
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
      firstname: {
        title: 'Firstname',
        type: 'string',
      },
      personalnumber: {
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
  data_table = [
    // {'firstname': 'דוד', 'personalnumber': '12345', 'permissions': 'מנהלן מערכת'},
    // {'firstname': 'דוד', 'personalnumber': '12345', 'permissions': 'מנהלן מערכת'},
    // {'firstname': 'דוד', 'personalnumber': '12345', 'permissions': 'מנהלן מערכת'},
  ];
  ngOnInit(): void {
    this.source.load(this.data_table);
    this.loadData();
  }
  loadData(){
    this.uploadLoading = true
    this.RestApiService.getTreeUnits().subscribe(
      (data_from_server: {'maxTreeNodeId': string, 'treeNode': TreeNodeCustom[]}) => {
        this.nodes = data_from_server.treeNode
        this.maxTreeNodeId = data_from_server.maxTreeNodeId
        
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
      data_from_server=> {
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '') 
        this.uploadLoading = true
      },
      err => {
      }
    )
  }
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  updatePermissionUser(personal){
    if (personal!=null || this.users.permissions!=null)
    {
      this.jsonPermiss={"personal_number":personal,"permissions":this.users.permissions,"token":this.users.token}
      this.RestApiService.UpdateUser(this.jsonPermiss,personal)
      .subscribe(
        data=>{
        this.LoadUsersForUnit()}
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
  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }
  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  LoadUsersForUnit() {
    this.RestApiService.getUsersList(this.unit_name).subscribe((data_from_server) => {
      this.data_table=data_from_server
      console.log(this.data_table)
      this.source.load(this.data_table);
    });
  }
  formClicked(event) {
    this.users.personalnumber=event.data.personalnumber
    console.log(event)

  }
  onNodePickedUp(event) {
    this.currentNode = event.node;
    this.unit_name=this.currentNode.data.name;
    this.LoadUsersForUnit()
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
