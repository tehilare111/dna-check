import { Component, AfterViewInit } from '@angular/core';
import {DefaultEditor} from 'ng2-smart-table';

@Component({
  selector: 'ngx-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss']
})
export class UserPermissionsComponent extends DefaultEditor implements AfterViewInit {

  permission = ["מנהלן מערכת","מדווח אירועים","בודק אירועים","מנהלן הרשאות"]; //  The list that the user can choose from.
  permissions:string; // Bind the user select in html

  constructor(){super();}

  ngAfterViewInit(){
    if(this.cell.newValue !== ""){
      this.permissions = this.cell.newValue;
    }
  }

  onItemSelected(event){
    this.cell.newValue = event;
  }

}
