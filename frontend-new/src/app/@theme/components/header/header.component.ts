import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  id:any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
      this.id =setInterval(() => {
        this.userService.getUsers()
        .subscribe((users: any) => this.user = users.login_user); 
        }, 500);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  setNotReadMsgNumber(){
    let unreadedMessagesAmount = 0;
    if (localStorage.getItem('unreadedMessages') === null) {
      return unreadedMessagesAmount
    }    

    for(let [key, value] of Object.entries(JSON.parse(localStorage.getItem('unreadedMessages')))){
      unreadedMessagesAmount += parseInt(value.toString());
    }
    return unreadedMessagesAmount;
  }
}