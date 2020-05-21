import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../../@core/data/users';
import { UserService } from '../../../@core/mock/users.service';
import { ToastService } from '../../../services/toast.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { idValidator } from '../../events-forms/validation-directives/id.directive';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   users:Users=new Users();
  public jesonreg;
  public count=0;
  submitted=false;
  ;
  @ViewChild("PersonalNumber",{'static': true}) PersonalNumber : ElementRef;
  constructor(private router:Router,private RestApiService:RestApiService,private userService: UserData,private userlogin:UserService,private ToastService:ToastService ) { }
  public username;
  public lastname;
  public firstname;
  public password;
  public personalnumber;
  public rank;
  public postionarmy;
  public armyunit;
  public errors:string;
  formGroupEle: ElementRef[] = [
    this.PersonalNumber,
  ]

  ngOnInit(): void {
   
  }
  chackvalid(){
    let formGroup = new FormGroup({
      'PersonalNumber': new FormControl(this.PersonalNumber, [idValidator()]),
    })
  }
    loadData() {
      this.username=(<HTMLInputElement>document.getElementById("username")).value;
      this.lastname=(<HTMLInputElement>document.getElementById("lastname")).value;
      this.firstname=(<HTMLInputElement>document.getElementById("firstname")).value;
      this.password=(<HTMLInputElement>document.getElementById("password")).value;
      this.personalnumber=(<HTMLInputElement>document.getElementById("personalnumber")).value;
      this.rank=(<HTMLInputElement>document.getElementById("rank")).value;
      this.postionarmy=(<HTMLInputElement>document.getElementById("position")).value;
      this.armyunit=(<HTMLInputElement>document.getElementById("armyunit")).value;
      this.jesonreg={"username":this.username , "lastname":this.lastname,"firstname":this.firstname,"password":this.password,"personalnumber":this.personalnumber,"rank":this.rank,"armyposistion":this.postionarmy,"armyunit":this.armyunit}
      this.save() 
      this.chackvalid()
      
    
    }
    
  
  save() {
      this.RestApiService.createCustomerUser(this.jesonreg)
      .subscribe(
        data=>{
          this.errors=JSON.stringify(data["result"])
          console.log(this.errors)
          console.log('success')
          console.log((this.errors=='"success"'))   
          if (this.errors=='"success"')
          {
            this.ToastService.showToast("success","ההרשמה הושלמה","")
          }
          else {
            this.ToastService.showToast("fail",this.errors,"")
          }
        },error => 
          console.log())
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
