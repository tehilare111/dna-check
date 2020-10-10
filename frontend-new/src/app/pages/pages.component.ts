import { Component } from '@angular/core';

import { MENUS } from './pages-menu';
import { AuthService } from '../services/auth.service';
import { auth2StrategyOptions } from '@nebular/auth';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]=get_permissions()></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  authService : AuthService = new AuthService()
  MENUS : MENUS = new MENUS();
  adminPermissions = ["מנהלן מערכת"];
  managerReporterPermissions = ["מנהלן הרשאות"];
  
  get_permissions(){
    return (this.authService.check_permissions(this.adminPermissions)) ? this.MENUS.ADMIN_MENU : 
        (this.authService.check_permissions(this.managerReporterPermissions)) ? this.MENUS.MANAGER_REPORTER_MENU : 
        this.MENUS.DEF_MENU;
  }
}
