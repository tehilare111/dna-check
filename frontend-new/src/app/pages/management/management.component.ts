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
  dataSource: NbTreeGridDataSource<FSEntry>;
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
  private data: TreeNode<FSEntry>[] = [
    /*{
      data: { 'Firstname': 'שם', "Id":'מזהה','Permissions':'הרשאות'},
      children: [
      ],
    },
    */
    
  ];
  ngOnInit(): void {
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
  LoadUsersForUnit(){
    this.RestApiService.getUsersList(this.unit_name).subscribe(
      (data_from_server) => {
      let new_data: TreeNode<FSEntry>[] =
       data_from_server.map((event) => {
        return {'data': event}
      })
      new_data = new_data.concat(this.data);
      // this.dataSource = this.dataSourceBuilder.create(new_data);
    },
    err=>{
   })
  }
  formClicked(event, row) {
    for(let [value] of Object.entries(this.defaultColumns)){
        this.users.personalnumber=row.data.personalnumber
    }
  }
  onNodePickedUp(event) {
    this.currentNode = event.node;
    this.unit_name=this.currentNode.data.name;
    // this.LoadUsersForUnit()
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
