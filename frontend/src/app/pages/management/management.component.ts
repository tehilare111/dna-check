import { Component, OnInit, ViewChild } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { TreeComponent, TreeNode } from 'angular-tree-component';

import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';

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

@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],

})
export class ManagementComponent implements OnInit {
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

  constructor(iconsLibrary: NbIconLibraries,private RestApiService: RestApiService,private ToastService: ToastService) { iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' }); }

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
        this.ToastService.showToast('fail', 'שגיאה בקריאה מהשרת', '')
        this.uploadLoading = false
      }
      );
  }

  saveData(){
    this.uploadLoading = true
    let dataToServer = {'maxTreeNodeId': this.maxTreeNodeId, 'treeNode': this.nodes};
    this.RestApiService.postTreeUnits(dataToServer).subscribe(
      (data_from_server: {'maxTreeNodeId': string, 'treeNode': TreeNodeCustom[]}) => {
        if(data_from_server) { this.ToastService.showToast('success', 'נשמר בהצלחה!', '') }
        this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast('fail', 'לא נשמר בהצלחה!', '')
        this.uploadLoading = false
      }
    )
  }

  onNodePickedUp(event) {
    this.currentNode = event.node;
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