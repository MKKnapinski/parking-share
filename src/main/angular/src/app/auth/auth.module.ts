import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SessionCounterComponent} from './session-counter/session-counter.component';
import {TimePipe} from './session-counter/time.pipe';


@NgModule({
  declarations: [
    LoginComponent,
    SessionCounterComponent,
    TimePipe
  ],
  exports: [
    LoginComponent,
    SessionCounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
}
