import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { Users } from '../users';
import { ToastService } from '../../../services/toast.service';
import { HttpHeaderResponse, HttpRequest, HttpResponseBase } from '@angular/common/http';


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
  public errors:string;
  ranks = []
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService) { }
  
  ngOnInit(): void {
    this.get_constatns_filds_rank()
  }
  get_constatns_filds_rank() {
    this.RestApiService.getConstatnsFields().subscribe((data_from_server) => {
      this.ranks = data_from_server.rank
    });
  }
  loadData() {
    this.jesonreg={"username":this.users.username , "lastname":this.users.lastname,"firstname":this.users.Firstname,"password":this.users.password,"personalnumber":this.users.personalnumber,"rank":this.users.rank,"armyposistion":this.users.position,"armyunit":this.users.armyunit}
    if(this.jesonreg)
    this.save() 
  }

  save() {
      this.RestApiService.CreateUser(this.jesonreg)
      .subscribe(
        data=>{
            this.ToastService.showToast("success","ההרשמה הושלמה","")
            localStorage.setItem("user",this.users.username)
            this.router.navigate(["/pages/control-table/control-table"])
            },
        error =>{ this.ToastService.showToast("fail","שגיאה בעת בהרשמה","")
        }
      );
      this.users = new Users();  
  }

  onSubmit() {
    this.loadData()
  }
}
