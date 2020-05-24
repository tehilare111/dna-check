import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserData, User } from '../../../@core/data/users';
import { UserService } from '../../../@core/mock/users.service';
import { RestApiService } from '../../../services/rest-api.service';
import { HeaderComponent } from '../../../@theme/components';
import { Router } from '@angular/router';
import { release } from 'os';
import { ControlTableComponent } from '../../control-table/control-table/control-table.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAlertModule } from '@nebular/theme';
import { ToastService } from '../../../services/toast.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_login: string;
  password_login: string;
  private destroy$: Subject<void> = new Subject<void>();
  header_login:HeaderComponent;
  users:Users=new Users();
  lengt=0;
  alertservice:NbAlertModule
  form:FormGroup;

  constructor(private userService: UserData,private router:Router,private userlogin:UserService,private RestApiService:RestApiService,private ToastService:ToastService){}

  ngOnInit(): void {
  
  }
    Login(){
    this.user_login=(<HTMLInputElement>document.getElementById("user_login")).value
    this.password_login=(<HTMLInputElement>document.getElementById("password_login")).value
    this.RestApiService.getCustomers_username(this.user_login).subscribe((data_from_server: Users) => {
        if(this.user_login==data_from_server.username){
          if(this.password_login==data_from_server.password)
          {
            this.users.username=this.user_login
            localStorage.setItem('username',this.user_login)
            this.ToastService.showToast("success","התחברות הושלמה שלום: "+this.user_login,"")
            localStorage.setItem("user",this.user_login)
            this.controlTable_page("/pages/control-table/control-table")

          }
          else{
            this.ToastService.showToast("fail","שם משתמש או סיסמא לא נכונים","")
          }
        }
        else{
            this.ToastService.showToast("fail","שם משתמש או סיסמא לא נכונים","")
          }
    });
    
  }
checknullinput()
{
  this.user_login=(<HTMLInputElement>document.getElementById("user_login")).value
  this.password_login=(<HTMLInputElement>document.getElementById("password_login")).value

}
  
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);
  }

}