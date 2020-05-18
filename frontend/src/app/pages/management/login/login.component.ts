import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserData, User } from '../../../@core/data/users';
import { UserService } from '../../../@core/mock/users.service';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_login: string;
  password_login: string;
  
  users:Users=new Users();
  lengt=0;

  constructor(private userService: UserData,private userlogin:UserService,private RestApiService:RestApiService) { }

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
          if(this.password_login=data_from_server.password)
          console.log("secssess")
          this.userlogin.users.userlogin.name=this.user_login
          console.log(this.userlogin.users.alan.name)
          localStorage.setItem('name',this.user_login)
          this.userService.getUsersLogin()
          alert('You are loged in.'+ this.user_login)
        }
      }
    });

  }

}
