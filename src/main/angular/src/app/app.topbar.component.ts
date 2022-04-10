import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {MenuItem} from 'primeng/api';
import {AppState} from './reducers';
import {select, Store} from '@ngrx/store';
import {AuthActions} from './auth/auth-action-types';
import {Observable} from 'rxjs';
import {isLoggedIn, user} from './auth/auth.selectors';
import {KeycloakTokenParsed} from 'keycloak-js';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  items: MenuItem[] = [];
  isLoggedIn$: Observable<boolean>;
  user$: Observable<KeycloakTokenParsed | undefined>;

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
