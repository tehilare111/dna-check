import { NbMenuItem } from '@nebular/theme';
import { icon } from 'leaflet';

export class MENUS{
public ADMIN_MENU: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    
  },{
    title:"התחברות",
    icon:'nb-gear',
    link:'/pages/login',
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
  {
    title: 'טבלת שליטה',
    icon: 'nb-home',
    link: '/pages/control-table',
  },
];
public DEF_MENU:NbMenuItem[] = [
  {
    title: 'טבלת שליטה',
    icon: 'layout-outline',
    link: '/pages/control-table',
},
{
  title:'התחברות',
  icon: 'people-outline',
  link:'login',
  home:true,
},
];
}
