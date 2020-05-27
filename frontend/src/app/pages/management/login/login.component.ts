import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService){}
  public Error_data="";
  public jsonUser;
  ngOnInit(): void {
  }
  Login(username,password){
    this.jsonUser={"username":username,"password":password}
    this.RestApiService.CheckLogin(this.jsonUser)
      .subscribe(
        data=>{
      this.Error_data=JSON.stringify(data["result"])
      if(this.Error_data=='"success"'){
        this.ToastService.showToast("success","ההתחברות הושלמה ברוך הבא: "+username,"")
        localStorage.setItem("user",username)
      this.controlTable_page("/pages/control-table/control-table")
      }
      else{
        this.ToastService.showToast("fail",this.Error_data," ")
      }
    }); 
  }
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);
  }

}