import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
import { Users } from '../users';
import { ToastService } from '../../../services/toast.service';


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
  constructor(private router:Router,private RestApiService:RestApiService,private ToastService:ToastService) { }
  public errors:string;
  ranks = ["טוראי","רבט","סמל","סמ''ר","רנ''ג","רס''ב","רס''ם","רס''ר","רס''ל","רמטכ''ל","אלוף","תא''ל","אל''ם","סא''ל","רס''ן","סרן","סגן","סג''ם",]
  ngOnInit(): void {
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
          this.errors=JSON.stringify(data["result"])
          if (this.errors=='"success"')
          {
            this.ToastService.showToast("success","ההרשמה הושלמה","")
            localStorage.setItem("user",this.users.username)
            this.controlTable_page("/pages/control-table/control-table")
          }
          else {
            this.ToastService.showToast("fail",this.errors,"")
          }
        },error => 
          console.log())
      this.users = new Users();  
  }
  onSubmit() {
    this.loadData()
  }
  controlTable_page(pagename:string){
    this.router.navigate([pagename]);
  }


}
