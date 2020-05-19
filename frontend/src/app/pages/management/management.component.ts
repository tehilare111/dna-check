import { Component, OnInit, ViewChild } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { TreeComponent, TreeNode } from 'angular-tree-component';


/*const actionMapping:IActionMapping = {
  mouse: {
    activate: (tree, node, $event) => // Open a modal with node content,
    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI,
  }
}*/

@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
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

  constructor(iconsLibrary: NbIconLibraries) { iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' }); }

  ngOnInit(): void {
  }

  onNodePickedUp(event) {
    this.currentNode = event.node;
  }

  onNodeDeactivate(event){
    this.currentNode = undefined;
    this.action = '';
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
    this.currentNode.data['children'].push({'id':10, 'name':this.addUnitInput, 'children':[]});
    this.tree.treeModel.update();
    this.onNodeDeactivate(undefined);
  }

  editUnit(){
    this.currentNode.data.name = this.editUnitInput;
    this.tree.treeModel.update();
    this.onNodeDeactivate(undefined);
  }

  getNewId(){
    return this.nodes
  }
}