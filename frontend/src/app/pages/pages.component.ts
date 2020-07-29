import { Component, OnInit } from '@angular/core';

import {pagesmenu } from './pages-menu';

import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]=get_permissin()></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  public main:any;
  auth:AuthService=new AuthService()
  menu:pagesmenu=new pagesmenu();
  public array_permissions=['מנהלן מערכת']
  get_permissin(){
    if(this.auth.check_pernissions(this.array_permissions))
    {
      return this.menu.MENU_ITEMS
    }
    else{
      return this.menu.MENU_ITEMS_2
    }
    
  }
  
}

