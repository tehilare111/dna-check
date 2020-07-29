import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { Users } from '../../management/users';
import { HeaderComponent } from '../../../@theme/components';
import { Subject } from 'rxjs';
import { UserData } from '../../../@core/data/users';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  is_login=false
  users:Users=new Users()
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService,private userService: UserData){}


  ngOnInit(): void {
  }
  
  Login(username,password){

    this.RestApiService.CheckLogin({username,password}).subscribe(
      data => {
        console.log(data["permissions"])
        this.ToastService.showToast("success","ההתחברות הושלמה ברוך הבא: "+username,"")
        localStorage.setItem("permissions",data["permissions"])
        this.users.username=username
        localStorage.setItem("username",username)
        this.router.navigate(["/pages/control-table"])
      },
      error => {
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