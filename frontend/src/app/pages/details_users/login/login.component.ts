import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { JwtService } from '../../../services/jwt.service';
import { Users } from '../../management/users';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  is_login=false
  users:Users=new Users()
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService,private jwt:JwtService){}


  ngOnInit(): void {
    localStorage.clear()
  }
  
  Login(username,password){

    this.jwt.login(username,password).subscribe(
      data => {
        this.ToastService.showToast("success","ההתחברות הושלמה ברוך הבא: "+username,"")
        this.users.username=username
        console.log(this.users.username)
        this.router.navigate(["/pages/control-table"])
        
      },
      error => {
        console.log(error)
          this.ToastService.showToast("fail","אירעה שגיאה בהתחברות","")
      }
    ); 
    /*this.RestApiService.CheckLogin({"username":username,"password":password})
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
      */
  }
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);

  }
}