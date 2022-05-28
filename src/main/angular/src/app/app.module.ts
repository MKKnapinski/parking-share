import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import * as fromApp from './state/reducers';
import {AuthModule} from './auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './auth/keycloak/keycloak.initializer';
import {FormsModule} from '@angular/forms';
import {AppMainComponent} from './main/app.main.component';
import {AppConfigComponent} from './config/app.config.component';
import {AppFooterComponent} from './footer/app.footer.component';
import {AppMenuitemComponent} from './menu/app.menuitem.component';
import {AppTopBarComponent} from './topbar/app.topbar.component';
import {AppMenuComponent} from './menu/app.menu.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ConfigService} from './service/app.config.service';
import {MenuService} from './service/app.menu.service';
import {AuthService} from './auth/auth.service';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import { UserListComponent } from './user-list/user-list.component';
import {APICallInterceptor} from './interceptors/api-call-interceptor.interceptor';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppConfigComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    CapitalizePipe,
    UserListComponent
  ],
  imports: [
    RadioButtonModule,
    InputSwitchModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(fromApp.reducers, {
      metaReducers: fromApp.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictStateSerializability: true,
        strictActionImmutability: true,
        strictActionSerializability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
    AuthModule,
    HttpClientModule,
    KeycloakAngularModule,
    ToastModule,
    BrowserAnimationsModule,
    MessageModule,
    TableModule,
    ButtonModule,
    RatingModule,
    ProgressBarModule,
    SliderModule,
    MultiSelectModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    ConfigService,
    MenuService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: APICallInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
