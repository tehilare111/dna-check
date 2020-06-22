import { Component, OnInit, ViewChild } from '@angular/core';
import { NbIconLibraries, NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { TreeComponent} from 'angular-tree-component';

import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { type } from 'os';
import { Users } from './users';
import { Router } from '@angular/router';

/*const actionMapping:IActionMapping = {
  mouse: {
    activate: (tree, node, $event) => // Open a modal with node content,
    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI,
  }
}*/

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
  styleUrls: ['./management.component.scss'],

})
export class ManagementComponent implements OnInit {
  unit_name=" ";
  jsonPermiss;
  users:Users=new Users();
  customColumn = 'firstname';
  customColumn2 = 'שם';
  defaultColumns = {'personalnumber':'מזהה','permissions':'הרשאות'};
  allColumns = [ this.customColumn, ...Object.keys(this.defaultColumns)];
  permission = ["מנהלן מערכת","מדווח אירועים","צופה אירועים",]
  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  
  
  maxTreeNodeId = '1'
  nodes = [
    {
      'id': 0,
      'name': 'מצו"ב',
      'children': []
    }
  ];
  options = {
    rtl: true,
    allowDrag: true,
    allowDrop: true
  };
  action=''
  currentNode=undefined;
  addUnitInput = '';
  editUnitInput = '';
  @ViewChild("tree") private tree: TreeComponent;
  uploadLoading = false
  constructor(private router:Router , iconsLibrary: NbIconLibraries,private RestApiService: RestApiService,private ToastService: ToastService,private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) { iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });this.dataSource = this.dataSourceBuilder.create(this.data); }


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

  loadData(){
    this.uploadLoading = true
    this.RestApiService.getTreeUnits().subscribe(
      (data_from_server: {'maxTreeNodeId': string, 'treeNode': TreeNodeCustom[]}) => {
        this.nodes = data_from_server.treeNode
        this.maxTreeNodeId = data_from_server.maxTreeNodeId
        this.uploadLoading = true
      },
      err => {
        this.ToastService.showToast('fail', 'שגיאה בקריאה מהשרת נא להתחבר מחדש', '')

        this.uploadLoading = false
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
        this.ToastService.showToast('fail', ' נא להתחבר מחדש לא נשמר בהצלחה!', '')
      }
    )
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

  onNodePickedUp(event) {
    this.currentNode = event.node;
    this.unit_name=this.currentNode.data.name;
    this.LoadUsersForUnit()
  }

  LoadUsersForUnit(){
    this.RestApiService.getUsersList(this.unit_name).subscribe(
      (data_from_server) => {
      let new_data: TreeNode<FSEntry>[] =
       data_from_server.map((event) => {
        return {'data': event}
      })
      new_data = new_data.concat(this.data);
      this.dataSource = this.dataSourceBuilder.create(new_data);
    },
    err=>{
   })
  }
  formClicked(event, row) {
    for(let [value] of Object.entries(this.defaultColumns)){
        this.users.personalnumber=row.data.personalnumber
    }
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