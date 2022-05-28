import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from '../main/app.main.component';

@Component({
  selector: 'app-menu',
  template: `
    <div class="layout-menu-container">
      <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
        <li class="layout-menuitem-category" *ngFor="let item of model; let i = index;" role="none">
          <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
          <ul role="menu">
            <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
          </ul>
        </li>
      </ul>
    </div>
  `
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public appMain: AppMainComponent) {
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Menu',
        items: [
          {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
          {label: 'Users', icon: 'pi pi-fw pi-user', routerLink: ['/users']},
        ]
      }
    ];
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement>event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
