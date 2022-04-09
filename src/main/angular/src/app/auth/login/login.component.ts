import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService,
              private store: Store<AppState>) {
  }

  login(): void {
    this.authService.login();
  }

}
