import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './reducers';
import {authReducer} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [],
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
