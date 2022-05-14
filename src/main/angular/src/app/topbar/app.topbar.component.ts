import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppMainComponent} from '../main/app.main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  items: MenuItem[] = [];

  constructor(public appMain: AppMainComponent) {
  }
}
