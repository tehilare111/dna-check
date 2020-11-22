import { Component, OnInit, ViewChild, Injectable, ViewEncapsulation} from '@angular/core';
import { User } from './users';
import { TreeComponent} from 'angular-tree-component';;
import { LocalDataSource } from 'ng2-smart-table';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { UserPermissionsComponent } from './components/table-columns/user-permissions/user-permissions.component';
import { UserPermissionsRenderComponent } from './components/table-columns/user-permissions-render/user-permissions-render.component';
import { AuthService } from '../../services/auth.service';

class TreeNodeCustom {
  children: TreeNodeCustom[];
  name: string;
  id: number;
}

/** Flat node with all inforamtion */
class TreeFlatNodeCustom {
  name: string;
  id: number;
  level: number;
  expandable: boolean;
  isEditingMode: boolean;
  isRenameMode: boolean;
}

/**
 * Unit database, it can build a tree structured Json object.
 * Each node in Json object represents a unit.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class UnitDatabase {

  defaultInfor = [{
    'id': 0,
    'name': 'מצו"ב',
    'children': []
  }]
  dataLoaded = new BehaviorSubject<boolean>(false);
  dataChange = new BehaviorSubject<TreeNodeCustom[]>([]);
  get data(): TreeNodeCustom[] { return this.dataChange.value; }
  //uploadLoading = false
  maxTreeNodeId: number = 0;

  constructor(private RestApiService:RestApiService, private ToastService: ToastService) {
    this.loadData();
  }
  
  ngOnDestroy(){
    this.dataChange.next([]);
  }


  private loadData(){
    //this.uploadLoading = true
    this.RestApiService.getTreeUnits(localStorage.getItem("unit")).subscribe(
      (data: {'maxTreeNodeId': number, 'treeNode': TreeNodeCustom[]}) => {
        this.maxTreeNodeId = data.maxTreeNodeId;
        // Notify the change.
        console.log(data);
        this.dataChange.next(data.treeNode);
        this.dataLoaded.next(true);
        //this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast("fail", 'שגיאה בקריאה מהשרת', '')
        //this.uploadLoading = true
        // Notify the change.
        this.dataChange.next(this.defaultInfor);
      }
    );
  }

  saveData(){
    //this.uploadLoading = true
    let dataToServer = {'maxTreeNodeId': this.maxTreeNodeId, 'treeNode': this.dataChange.value};
    this.RestApiService.postTreeUnits(dataToServer, localStorage.getItem("unit")).subscribe(
      data=> {
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '') 
        //this.uploadLoading = true
      },
      err => {
        this.ToastService.showToast('fail', 'בעיה בשמירה לשרת!', '') 
      }
    )
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TreeNodeCustom`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): TreeNodeCustom[] {
    return Object.keys(obj).reduce<TreeNodeCustom[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TreeNodeCustom();
      node.name = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.name = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TreeNodeCustom, name: string) {
    if (parent.children) {
      this.maxTreeNodeId += 1
      parent.children.push({name: name, children: [], id: this.maxTreeNodeId} as TreeNodeCustom);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TreeNodeCustom, name: string) {
    node.name = name;
    this.dataChange.next(this.data);

  }

  private foundItemToRemove(name: string) {
    return function(element: TreeNodeCustom) {
        return element.name.indexOf(name) !== 0;
    }
  } 

  removeItem(parent: TreeNodeCustom, node: TreeNodeCustom){
    parent.children = parent.children.filter(this.foundItemToRemove(node.name));
    this.dataChange.next(this.data);
  }

  public filter(filterText: string, node: TreeNodeCustom){
    let retVal = this.filterTreeRecursion(filterText, node);
    if (retVal !== undefined){
      // Notify the change.
      this.dataChange.next(retVal.children);
    }
    else{
      this.dataChange.next([]);
    }
  }

  //gets a tree root and returns a NEW tree root includes only nodes relevant to the "searchedText"
  //will return a tree that includes the searched nodes, all searched nodes' descendants, and the direct path of the forefathers
  private filterTreeRecursion(searchedText: string, node: TreeNodeCustom): TreeNodeCustom|undefined{
    // if node's name includes the searched string - returns it
    if (node.name.toLowerCase().startsWith(searchedText.toLowerCase())) {
      return node;
    }

    //if not - continue to check for it's children
    if (node.children && node.children.length > 0) {
      let newParentNode = new TreeNodeCustom();
      newParentNode.children = [];
      newParentNode.name = node.name;

      //going through all node's children
      for (let i = 0; i < node.children.length; i++) {
        let resNode = this.filterTreeRecursion(searchedText, node.children[i]);
        if (resNode !== undefined) {
          newParentNode.children.push(resNode); //if there is a result, it's asearched node or a forefather of the searched node - so we add it
        }
      }

      if (newParentNode.children.length > 0) {
        return newParentNode;
      }
    }   
    return undefined;
  }
}

@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  providers: [UnitDatabase]
})
export class ManagementComponent implements OnInit {
  pickedUpUnit = '';
  jsonPermiss
  addUnitInput = '';
  editUnitInput = '';
  currentNode = undefined;
  //uploadLoading = false;  - didnt found any use for this. 
  user: User = new User();
  newUserForm: User = new User();
  permission = ["מנהלן מערכת","מדווח אירועים","בודק אירועים","מנהלן הרשאות"];

  @ViewChild("tree") private tree: TreeComponent;

  options = {
    rtl: true,
    allowDrag: true,
    allowDrop: true
  };
  settings = {
    actions: {columnTitle: "פעולות"},
    noDataMessage: "לא נבחרה יחידה בעלת משתמשים",
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    }, 
    hideSubHeader: false,
    columns: {
      username: {
        title: 'שם משתמש',
        type: 'string',
        filter: false,
        width: '30%',
        editable: false
      },
      personalNumber: {
        title: 'מספר אישי',
        type: 'string',
        filter: false,
        width: '30%',
        editable: false
      },
      permissions: {
        title: 'הרשאה',
        filter: false,
        width: '30%',
        type: 'custom',
        editor: {
          type: 'custom',
          component: UserPermissionsComponent,
        },
        renderComponent: UserPermissionsRenderComponent,
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data_table = [];

  ngOnInit(): void {
    this.source.load(this.data_table);
  }

  saveData(){
    this._database.saveData();
  }

  updatePermissionUser(user, confirm){
    
    this.jsonPermiss={"personal_number":user.personalNumber,"permissions":user.permissions,"token":this.user.token};
    this.RestApiService.UpdateUser(this.jsonPermiss,user.personalNumber)
    .subscribe(
      data=>{
        this.LoadUserForUnit(); 
        confirm.resolve(user);
        this.ToastService.showToast("success","הרשאות המשתמש שונו","")
      },
      error =>{
        this.ToastService.showToast("fail","שגיאה בעת עדכון הרשאות משתמש","");
        confirm.reject();
      }
    )
    
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

  createNewUser(confirm) {
    this.newUserForm.unit = this.pickedUpUnit;
    console.log(this.newUserForm);
    this.RestApiService.CreateUser(this.newUserForm)
    .subscribe(
      data => {
        this.ToastService.showToast("success","ההרשמה הושלמה","")
        confirm.resolve();
        this.newUserForm = new User();        
      },
      error => {
        this.ToastService.showToast("fail","שגיאה בעת בהרשמה","");
        confirm.reject();
      }
    );
  }

  LoadUserForUnit() {
    this.RestApiService.getUsersList(this.pickedUpUnit).subscribe((data) => {
      this.data_table=data.filter(user => user.permissions !== "מאשר אירועים")
      console.log(this.data_table)
      this.source.load(this.data_table);
    });
  }

  tableRowClicked(event) {
    this.user.personalNumber = event.data.personalNumber
  }

  onNodePickedUp(node) {
    this.currentNode = node;
    this.pickedUpUnit = this.currentNode.name;
    this.LoadUserForUnit();
  }

  onNodeDeactivate(){
    this.currentNode = undefined;
    this.addUnitInput = '';
    this.editUnitInput = '';

  }

  onUserDeleted(event){
    console.log("deleted! ");
    this.openDialog(event.confirm, event.data);
  }

  onUserEdited(event){
    console.log("edited! ");
    console.log(event.newData);
    event.confirm.resolve(event.newData); //to confirm edit.
    this.updatePermissionUser(event.newData, event.confirm);
    //event.confirm.reject(); //to reject edit - just ignoring the click
  }
  onUserCreated(event){
    this.newUserForm.permissions = event.newData.permissions;
    this.newUserForm.personalNumber = event.newData.personalNumber;
    this.newUserForm.username = event.newData.username;
    this.createNewUser(event.confirm);
  }

  openDialog(confirm, user):void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "?אתה בטוח שברצונך למחוק את המשתמש" ,
      panelClass: 'custom-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.RestApiService.DeleteUser(user.personalNumber)
        .subscribe(
          data => {
            this.ToastService.showToast("success","המשתמש נמחק","")   
            confirm.resolve();  
          },
          error => { 
            this.ToastService.showToast("fail","שגיאה בעת המחיקה","");
            confirm.reject(); 
          }
        );
      }
      else
        confirm.reject();
    });
  }


  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TreeFlatNodeCustom, TreeNodeCustom>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TreeNodeCustom, TreeFlatNodeCustom>();

  treeControl: FlatTreeControl<TreeFlatNodeCustom>;

  treeFlattener: MatTreeFlattener<TreeNodeCustom, TreeFlatNodeCustom>;

  dataSource: MatTreeFlatDataSource<TreeNodeCustom, TreeFlatNodeCustom>;

  expandedNodes: Array<TreeFlatNodeCustom>;

  authService : AuthService = new AuthService(); // used to custom this page for reporter manager
  isReporterManager:boolean = false;
  reporterManager:string = "מדווח מנהלן";

  constructor(private _database: UnitDatabase, private ToastService: ToastService, private RestApiService:RestApiService, public dialog: MatDialog) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TreeFlatNodeCustom>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
    _database.dataLoaded.subscribe(loaded =>{
      if(loaded){
        this.treeControl.expandAll();
      }
    });
    this.isReporterManager = this.authService.check_permissions(this.reporterManager);
  }
  ngOnDestroy(){
    this._database.dataChange.unsubscribe();
  }

  getLevel = (node: TreeFlatNodeCustom) => node.level;

  isExpandable = (node: TreeFlatNodeCustom) => node.expandable;

  getChildren = (node: TreeNodeCustom): TreeNodeCustom[] => node.children;
  // used at the tree html, to measure which element has no content(new added). 
  hasNoContent = (_: number, _nodeData: TreeFlatNodeCustom) => _nodeData.name === '';


  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TreeNodeCustom, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.name === node.name
        ? existingNode
        : new TreeFlatNodeCustom();
    flatNode.name = node.name;
    flatNode.level = level;
    flatNode.expandable = node.children===undefined || node.children.length == 0 ? false : true;
    flatNode.isEditingMode = false;
    flatNode.isRenameMode = false;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /* Get the parent node of a node */
  getParentNode(node: TreeFlatNodeCustom): TreeFlatNodeCustom | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TreeFlatNodeCustom) {
    const parentNode = this.flatNodeMap.get(node);
    if (parentNode.children.length === 0 || parentNode.children[parentNode.children.length-1].name !== ''){ // Avoiding of adding second new node before the last node got a name.
      this._database.insertItem(parentNode!, '');
      // Expand that new parent node.
      this.treeControl.expand(node);
    }
  }

  /** Save the node to database */
  saveNode(node: TreeFlatNodeCustom, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);
    this.saveData();
  }

  nodeSelected(node: TreeFlatNodeCustom){
    if(!node.isRenameMode){
      node.isEditingMode = !node.isEditingMode;
      (node.isEditingMode) ? this.onNodePickedUp(node) : this.onNodeDeactivate();
    }
  }

  editItem(node: TreeFlatNodeCustom){
    node.isRenameMode = !node.isRenameMode;
  }

  notifyEditItem(node: TreeFlatNodeCustom){
    node.isRenameMode = !node.isRenameMode;
    this._database.updateItem(this.flatNodeMap.get(node), node.name);
    this.saveData();
  }

  deleteItem(node: TreeFlatNodeCustom){
    const nestedNode = this.flatNodeMap.get(node);
    this._database.removeItem(this.flatNodeMap.get(this.getParentNode(node)) ,nestedNode);
    this.saveData();
  }

  getHighLevelNodes(){
    // this.flatNodeMap holds all the data
    // create the return nodeSelecte.
    let highLevelNodes = new TreeNodeCustom();
    highLevelNodes.name = "firstNode";
    highLevelNodes.children = [];

    const iterator = this.flatNodeMap.keys();
    let currValue = iterator.next().value;
    while(currValue != undefined){
        if (currValue.level == 0){
          highLevelNodes.children.push(this.flatNodeMap.get(currValue));    
        }
        currValue = iterator.next().value;
    }
    return highLevelNodes;
  }

  copyCustomNodeMap(inputmap:Map<TreeFlatNodeCustom, TreeNodeCustom>){
    let outputMap = new Map<TreeFlatNodeCustom, TreeNodeCustom>();
    inputmap.forEach((node, flatNode) => {
        outputMap.set(flatNode, node);
    });
    return outputMap;
  }


  filterChanged(filterText: string) {
    /* save it because every rendered node get in this.flatNodeMap, so also the filtered tree 
    represents on the tree when there is no filter. */
    let zeroStateFlatNodeMap:Map<TreeFlatNodeCustom, TreeNodeCustom> = this.copyCustomNodeMap(this.flatNodeMap);
    this._database.filter(filterText, this.getHighLevelNodes());
    this.flatNodeMap = this.copyCustomNodeMap(zeroStateFlatNodeMap);
    if(filterText)
      this.treeControl.expandAll();
    else
      this.treeControl.collapseAll();
  }
}
