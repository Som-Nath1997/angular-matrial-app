import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Imenu } from '../../sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  panelOpenState = false;
  [x: string]: any;
  Sidenav_opened = true;
  // menuList: Observable<Imenu[]>;

  constructor() {}

  navItems: Imenu[] = [
    {
      text: 'Dashboard',
      icon: 'dashboard',
      routerLink: '/home/dashboard',
    },
    {
      text: 'my Documents',
      icon: 'assignment',
       routerLink: '/home/mydocuments',
    },
    {
      text: 'Asset gallary',
      icon: 'filter_b_and_w',
      routerLink: '/home/assetsgallary',
    },

    {
      text: 'Message Box',
      icon: 'message',
     routerLink: '/message',
    },
    {
      text: 'Create New',
      icon: 'add_box',
       routerLink: '/home/createnew',
    },
    {
      text: 'Activity',
      icon: 'assessment',
      routerLink: '/home/activity',
    },
    // {
    //   text: 'Setup',
    //   icon: 'settings_applications',
    //   // routerLink: '/home/setup',
    // },
  ];

  ngOnInit(): void {}
  openSideNav() {
    this.sm.openSideNav();
  }
  //  public toggle(): void {
  //     this.sidenav.toggle();
  //    }
  //    public open() {
  //     return this.sidenav.open();
  // }

  // public close() {
  //     return this.sidenav.close();
}
