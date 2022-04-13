import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from '../main/app.main.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {user} from '../../auth/auth.selectors';
import {User} from '../../model/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu',
  template: `
    <div class="layout-menu-container">
      <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
        <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" role="none">
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

  model: any[] = []
  user$?: Observable<User | undefined>;

  constructor(public appMain: AppMainComponent, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.user$ = this.store
      .select(user);

    this.user$
      .subscribe((user: User | undefined) => {
        this.buildMenuForUser(user);
      })
    this.model = [];
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement>event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }

  private buildMenuForUser(user: User | undefined) {
    if (!user) {
      throw new Error('Menu cannot be built for an undefined user');
    }

    // TODO: build menu using user roles
  }
}
