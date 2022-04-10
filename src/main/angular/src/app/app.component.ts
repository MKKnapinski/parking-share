import {Component} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {AuthService} from './auth/auth.service';
import {AppState} from './reducers';
import {Store} from '@ngrx/store';
import {AuthActions} from './auth/auth-action-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  menuMode = 'static';

  constructor(private primengConfig: PrimeNGConfig,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
    this.store.dispatch(AuthActions.checkUserStatus({user: this.authService.getLoggedUser()}))

  }
}
