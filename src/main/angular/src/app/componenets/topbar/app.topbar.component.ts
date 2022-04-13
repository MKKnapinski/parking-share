import {Component} from '@angular/core';
import {AppMainComponent} from '../main/app.main.component';
import {MenuItem} from 'primeng/api';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {AuthActions} from '../../auth/auth-action-types';
import {Observable} from 'rxjs';
import {isLoggedIn, user} from '../../auth/auth.selectors';
import {KeycloakService} from 'keycloak-angular';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  items: MenuItem[] = [];
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User | undefined>;

  constructor(public appMain: AppMainComponent, private store: Store<AppState>, private keycloakService: KeycloakService) {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );
    this.user$ = this.store
      .pipe(
        select(user)
      );
  }

  loginButtonClickHandler(): void {
    this.store.dispatch(
      AuthActions.login()
    )
  }

  logoutButtonClickHandler(): void {
    this.store.dispatch(
      AuthActions.logout()
    )
  }

  profileButtonClickHandler(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }
}
