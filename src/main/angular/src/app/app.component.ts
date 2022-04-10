import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {AppState} from './reducers';
import {Store} from '@ngrx/store';
import {AuthActions} from './auth/auth-action-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.checkUserStatus({user: this.authService.getLoggedUser()}))
  }

}
