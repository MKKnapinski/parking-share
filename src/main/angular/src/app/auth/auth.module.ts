import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './reducers';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers, {metaReducers: fromAuth.metaReducers}),
    ReactiveFormsModule
  ],
  exports: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
      ]
    }
  }
}
