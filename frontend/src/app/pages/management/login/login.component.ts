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

  constructor(private userService: UserData,private router:Router,private userlogin:UserService,private RestApiService:RestApiService) { }

  ngOnInit(): void {
  
  }
    Login(){
    this.user_login=(<HTMLInputElement>document.getElementById("user_login")).value
    this.password_login=(<HTMLInputElement>document.getElementById("password_login")).value
    this.RestApiService.getCustomers_username(this.user_login).subscribe((data_from_server: Users) => {
      console.log("username: ",data_from_server.username)
      console.log("personalnumber: ",data_from_server.personalnumber)
      if(this.user_login!=null)
      {
        if(this.user_login==data_from_server.username){
          if(this.password_login==data_from_server.password)
          console.log("secssess")
          this.userlogin.users.userlogin.name=this.user_login
          this.users.username=this.user_login
          console.log(this.userlogin.users)
          localStorage.setItem('username',this.user_login)
          alert('You are loged in.'+ this.user_login)
          this.controlTable_page("/pages/control-table/control-table")
        }
      }
    });
    
  }
  refresh(): void {
    window.location.reload();
}
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);
  }

}
