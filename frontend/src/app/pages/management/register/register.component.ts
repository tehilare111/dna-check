import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../../@core/data/users';
import { UserService } from '../../../@core/mock/users.service';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users:Users=new Users();
  registerJeson ='{ "employees" : ['+'{ "username":"" , "lastName":"","firstname":"","password":"","personalnumber":"","rank":"","postionarmy":"","armyunit":""}]}';
  public jesonreg;
  public count=0;
  submitted=false;
  ;
  constructor(private router:Router,private RestApiService:RestApiService,private userService: UserData,private userlogin:UserService ) { }
  public username;
  public lastname;
  public firstname;
  public password;
  public personalnumber;
  public rank;
  public postionarmy;
  public armyunit;
  
  ngOnInit(): void {

    }
  
    loadData() {
      this.username=(<HTMLInputElement>document.getElementById("username")).value;
      this.lastname=(<HTMLInputElement>document.getElementById("lastname")).value;
      this.firstname=(<HTMLInputElement>document.getElementById("firstname")).value;
      this.password=(<HTMLInputElement>document.getElementById("password")).value;
      this.personalnumber=(<HTMLInputElement>document.getElementById("personalnumber")).value;
      this.rank=(<HTMLInputElement>document.getElementById("rank")).value;
      this.postionarmy=(<HTMLInputElement>document.getElementById("postionarmy")).value;
      this.armyunit=(<HTMLInputElement>document.getElementById("armyunit")).value;
      this.jesonreg={"username":this.username , "lastName":this.lastname,"firstname":this.firstname,"password":this.password,"personalnumber":this.personalnumber,"rank":this.rank,"postionarmy":this.postionarmy,"armyunit":this.armyunit}
      this.save() 
      
    
    }
    
  
  save() {
     return this.RestApiService.createCustomerUser(JSON.parse(this.jesonreg))
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
    
    this.loadData()
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
