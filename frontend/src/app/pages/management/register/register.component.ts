import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users:Users=new Users();
  public count=0;
  submitted=false;
  constructor(private router:Router,private RestApiService:RestApiService,private userService: UserData) { }
  public usernamechack;
  public personalchack;
  public username;
  public perosnal;
  public user21;
  public user_login;
  public password_login;
  ngOnInit(): void {

    }
  
    loadData(username:string,perosnal:string) {
      this.RestApiService.getCustomers_username(username).subscribe((data_from_server: Users) => {
        console.log("username: ",data_from_server.username)
        console.log("personalnumber: ",data_from_server.personalnumber)
        this.usernamechack=data_from_server.username
        if (this.usernamechack==this.username)
        {
          console.log("yes")
          this.count=this.count+1;
          console.log("count: ",this.count)
          this.RestApiService.getCustomers_personal(perosnal).subscribe((data_from_server: Users) => {
            console.log("username:",data_from_server.username)
            console.log("personal number:",data_from_server.personalnumber)
            this.personalchack=data_from_server.personalnumber
            if (this.personalchack==this.perosnal)
            {
              console.log("bar")
              this.count=this.count+1;
            }
            console.log("count: ",this.count)
            if (this.count==2){
              console.log("no no no!!")
              console.log("the username or perosnal number is exsits")
              this.user21="the username or perosnal number is exsits"
              this.count=0;
              document.getElementById("stam").style.visibility="visible";
              document.getElementById("stam").style.color="red"; 
            }
            console.log("count: ",this.count)
            if(this.count==1){
            document.getElementById("stam").style.visibility="visible";
            document.getElementById("stam").style.color="red"; 
            console.log("no no !!")
            console.log("the username or perosnal number is exsits")
            this.user21="the username or perosnal number is exsits"
            this.count=0
            }
            else{
            console.log("sesccess")
            document.getElementById("stam").style.visibility="hidden";
            document.getElementById("stam").style.color="red"; 
            }
          });
 
        }
        else{
          if (this.usernamechack==null)
          {
            console.log("no")
            this.RestApiService.getCustomers_personal(perosnal).subscribe((data_from_server: Users) => {
              console.log("username:",data_from_server.username)
              console.log("personal number:",data_from_server.personalnumber)
              this.personalchack=data_from_server.personalnumber
              if (this.personalchack==this.perosnal)
              {
                console.log("bar")
                this.count=this.count+1;
              }
              console.log("count: ",this.count)
              if (this.count==2){
                console.log("no no no!!")
                console.log("the username or perosnal number is exsits")
                this.user21="the username or perosnal number is exsits"
                document.getElementById("stam").style.visibility="visible";
                document.getElementById("stam").style.color="red"; 
              }
              if(this.count==1){
              document.getElementById("stam").style.visibility="visible";
              document.getElementById("stam").style.color="red"; 
              console.log("no no !!")
              console.log("the username or perosnal number is exsits")
              this.user21="the username or perosnal number is exsits"
              this.count=0
              }
              else{
              console.log("sesccess")
              document.getElementById("stam").style.visibility="hidden";
              document.getElementById("stam").style.color="red"; 
              }
            if (this.personalchack==null){
              console.log("sesccess")
              document.getElementById("stam").style.visibility="hidden";
              document.getElementById("stam").style.color="red"; 
            }
            });
          }
        }
      });
      
      
    
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
          if(this.password_login=data_from_server.username)
          console.log("secssess")
          this.userService.getUsersLogin()
        }
      }
    });

  }
  save() {
     return this.RestApiService.createCustomerUser(this.users)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
      this.users = new Users();
    
  }

  onSubmit() {
    //console.log(this.lostForm);
    this.username=(<HTMLInputElement>document.getElementById("username")).value;
    this.perosnal=(<HTMLInputElement>document.getElementById("personalnumber")).value;
    this.loadData(this.username,this.perosnal)
  }
  //Registar_page(pagename:string):void{
    //this.router.navigate([pagename,{"username":this.username,"firstname":this.firstname,"lastname":this.lastname
  //,"password":this.pass,"personal":this.personal,"rank":this.rank,"position":this.armypos,}]);
  //}
  pade_router_register(){
    document.getElementById("register_id").style.visibility="visible";
    document.getElementById("login_id").style.visibility="hidden"
  }
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);
  }

}
