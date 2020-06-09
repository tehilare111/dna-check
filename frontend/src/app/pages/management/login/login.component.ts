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

  ngOnInit(): void {
  }
  
  Login(username,password){


    this.RestApiService.CheckLogin({"username":username,"password":password})
      .subscribe(
        data => {
          this.ToastService.showToast("success","ההתחברות הושלמה ברוך הבא: "+username,"")
          localStorage.setItem("user",username)
          this.router.navigate(["/pages/control-table"])
        },
        error => {
            this.ToastService.showToast("fail","אירעה שגיאה בהתחברות","")
        }
      ); 

  }
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);

  }
}