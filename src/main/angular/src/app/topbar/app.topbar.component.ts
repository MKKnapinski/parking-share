import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppMainComponent} from '../main/app.main.component';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent  {

  items: MenuItem[] = [];
  username: string;

  constructor(public appMain: AppMainComponent, public authService: AuthService) {
    const loggedUser = authService.getLoggedUser();
    if (!loggedUser) {
      throw new Error('Top bar: user is not logged.')
    }
    this.username = loggedUser['preferred_username'];
  }
}
