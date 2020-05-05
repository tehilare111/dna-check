import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users:Users=new Users();
  submitted=false;
  constructor(private router:Router,private RestApiService:RestApiService, public activatedRoute: ActivatedRoute) { }
  public username;
  public chackuser;
  public firstname;
  public lastname;
  public pass;
  public personal;
  public rank;
  public armypos;
  public user21;
  ngOnInit(): void {
    this.users.username = this.activatedRoute.snapshot.params.eventType;
    this.users.personalnumber = this.activatedRoute.snapshot.params.eventType;
    }
  
    loadData(reference:string) {
      this.RestApiService.getCustomers2(reference).subscribe((data_from_server: Users) => {
        console.log(data_from_server.firstname)
        console.log(data_from_server.personalnumber)
        this.users = data_from_server
        this.user21=this.users.username
      });
    document.getElementById("stam").style.visibility="visible";
    }
  getuser(user,personnum){
    this.username=user;
    this.personal=personnum;
    this.chackuser=(<HTMLInputElement>document.getElementById("firstname")).value;
    this.loadData(this.chackuser)
    
   if(this.users.username==this.username && this.users.personalnumber==this.personal)
   {
     console.log("error this is user name or personal number is exsits");
   }
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
    this.save();
  }
  Registar_page(pagename:string):void{
    this.router.navigate([pagename,{"username":this.username,"firstname":this.firstname,"lastname":this.lastname
  ,"password":this.pass,"personal":this.personal,"rank":this.rank,"position":this.armypos,}]);
  }
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);
  }

}
