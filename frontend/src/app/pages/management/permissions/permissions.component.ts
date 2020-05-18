import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { RestApiService } from '../../../services/rest-api.service';
import { __param } from 'tslib';
import { Users } from '../users';
import { User } from '../../../@core/data/users';
import { ɵDOMTestComponentRenderer } from '@angular/platform-browser-dynamic/testing';
@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  public user_page;
  public permiss;
  public alert;
  public username:string;
  users:Users=new Users();
  
  constructor(private router:Router,private RestApiService:RestApiService) { }
  
  ngOnInit(): void {
    
  }
  Find_User(user:string)
  {
    this.RestApiService.getCustomers_username(user).subscribe((data_from_server: Users) => {
      console.log(data_from_server.username)
      this.user_page=data_from_server.username

      if (this.user_page==null){
        document.getElementById("id_username").style.visibility="hidden";
        document.getElementById("id_permiss").style.visibility="hidden";
        (<HTMLInputElement>document.getElementById("id_button_permiss")).disabled=true;
        this.alert="שם משתמש לא נמצא";
        document.getElementById("stam").style.visibility="visible";
        document.getElementById("alertid").style.visibility="visible";
      }
      else{
        document.getElementById("alertid").style.visibility="hidden"
        document.getElementById("id_username").style.visibility="visible";
        document.getElementById("id_permiss").style.visibility="visible";
        document.getElementById("stam").style.visibility="visible";
        (<HTMLInputElement>document.getElementById("id_button_permiss")).disabled=false;
      }
      this.permiss=data_from_server.permissions;
      this.users=data_from_server;
      if (this.permiss==5){
        this.permiss="read";
        (<HTMLInputElement>document.getElementById("id_button_permiss")).disabled=true;
      }
    });
  }
  onsubmit()
  {
    
    this.username=(<HTMLInputElement>document.getElementById("search")).value;
    this.Find_User(this.username)
    
  }

}
