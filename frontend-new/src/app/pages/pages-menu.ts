import { NbMenuItem } from '@nebular/theme';
import { icon } from 'leaflet';

export class MENUS{
public ADMIN_MENU: NbMenuItem[] = [
  {
    title:"התחברות",
    icon:'nb-gear',
    link:'/pages/login',
  },
  {
    title: 'טבלת שליטה',
    icon: 'nb-home',
    link: '/pages/control-table',
    home: true,
  },{
    title: 'ניהול יחידות',
    icon: 'nb-gear',
    link: '/pages/management',
  },
  {
    title: 'שדות קבועים',
    icon: 'nb-gear',
    link: '/pages/constants-fields',
  },
  
];
public DEF_MENU:NbMenuItem[] = [
{
  title: 'טבלת שליטה',
  icon: 'nb-home',
  link: '/pages/control-table',
  home: true,
},
{
  title:'התחברות',
  icon: 'nb-gear',
  link:'login',
},
];
}
