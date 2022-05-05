import { Component } from '@angular/core';
import {AppState} from './state/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(store: Store<AppState>) {
  }
}
