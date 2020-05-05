import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { __param } from 'tslib';
@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  public users="efrime";
  public first;
  public last="";
  public pass="";
  public personalnumber="";
  public rank="";
  public armypostion="";
  loadingLargeGroup = false;
  loadingMediumGroup = false;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    let name=this.route.snapshot.paramMap.get("username");
    let firstname=this.route.snapshot.paramMap.get("firstname");
    let lastname=this.route.snapshot.paramMap.get("lastname");
    let password=this.route.snapshot.paramMap.get("password");
    let personal=this.route.snapshot.paramMap.get("personal");
    let rank=this.route.snapshot.paramMap.get("rank");
    let armypost=this.route.snapshot.paramMap.get("position") 
    this.users=name;
    this.first=firstname;
    this.last=lastname;
    this.pass=password;
    this.personalnumber=personal;
    this.rank=rank;
    this.armypostion=armypost
  }
  toggleLoadingMediumGroupAnimation() {
    this.loadingMediumGroup = true;

    setTimeout(() => this.loadingMediumGroup = false, 3000);
  }

}
