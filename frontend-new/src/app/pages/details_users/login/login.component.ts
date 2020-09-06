import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { User } from '../../management/users';
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
  user: User=new User()
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService,private userService: UserData){}


  ngOnInit(): void {
  }
  
  Login(username,password){

    this.RestApiService.CheckLogin({username,password}).subscribe(
      data => {
        console.log(data)
        localStorage.setItem("access_token", data["access_token"])
        localStorage.setItem("permissions", data["permissions"])
        localStorage.setItem("unit", data["unit"])
        localStorage.setItem("firstName", data["firstName"])
        localStorage.setItem("username", username)

        this.ToastService.showToast("success","ההתחברות הושלמה ברוך הבא: "+username,"")
        this.router.navigate(["/pages/control-table"])
      },
      error => {
        this.ToastService.showToast("fail","אירעה שגיאה בהתחברות","")
      }
    ); 
  }
}