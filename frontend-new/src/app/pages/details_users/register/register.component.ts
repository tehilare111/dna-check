import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { ToastService } from '../../../services/toast.service';
import { HttpHeaderResponse, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Users } from '../../management/users';

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


@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users:Users=new Users();
  public jesonreg;
  public count=0;
  submitted=false;
  public errors:string;
  ranks = []
  rank_array=[]
  units_array=['מצו"ב']
  maxTreeNodeId = '1'
  nodes = [
    {
      'id': 0,
      'name': 'מצו"ב',
      'children': []
    }
  ];
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService) { }
  
  ngOnInit(): void {
    this.get_constatns_filds_rank()
    this.get_tree_node()
  }
  get_constatns_filds_rank() {
    this.rank_array=["rank"]
    this.RestApiService.Get_constans_fiald(this.rank_array).subscribe((data_from_server) => {
      console.log("data_from_server:",data_from_server.data)
      this.ranks = data_from_server.data.rank
    });
  }
  get_tree_node(){
  var i
  var j
  this.RestApiService.getTreeUnits().subscribe(
    (data_from_server: {'maxTreeNodeId': string, 'treeNode': TreeNodeCustom[]}) => {
      for(i=0;i<=data_from_server.treeNode.length-1;i+=1){
        this.units_array.push(data_from_server.treeNode[i].name)
        for(j=0;j<=data_from_server.treeNode[i].children.length-1;j+=1){
          console.log(data_from_server.treeNode[i].children[j].name)
          this.units_array.push(data_from_server.treeNode[i].children[j].name)
          
        } 
      }
        
      this.maxTreeNodeId = data_from_server.maxTreeNodeId
    },
    err => {
    }
    );
}
  loadData() {
    this.jesonreg={"username":this.users.username , "lastname":this.users.lastname,"firstname":this.users.Firstname,"password":this.users.password,"personalnumber":this.users.personalnumber,"rank":this.users.rank,"armyposistion":this.users.position,"armyunit":this.users.armyunit}
    if(this.jesonreg)
    this.save() 
  }

  save() {
      this.RestApiService.CreateUser(this.jesonreg)
      .subscribe(
        data=>{
            localStorage.setItem("username",this.users.username)
            this.ToastService.showToast("success","ההרשמה הושלמה","")
            localStorage.setItem("user",this.users.username)
            this.router.navigate(["/pages/control-table"])
            },
        error =>{ this.ToastService.showToast("fail","שגיאה בעת בהרשמה","")
        }
      );
      this.users = new Users();  
  }

  onSubmit() {
    this.loadData()
  }
}
