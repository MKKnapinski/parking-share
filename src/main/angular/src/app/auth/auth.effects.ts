import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {AuthActions} from './auth-action-types';
import {tap} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {
    const login$ = this.actions$
      .pipe(
        ofType(AuthActions.login),
        tap(action => {
          this.authService.login();
        })
      );
    login$.subscribe()

    const logout$ = this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(action => {
          this.authService.logout();
        })
      );
    logout$.subscribe()
  }
}
