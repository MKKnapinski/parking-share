import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import {AuthActions} from '../auth-action-types';
import {KeycloakTokenParsed} from 'keycloak-js';

export const authFeatureKey = 'auth';

export interface AuthState {
  user?: KeycloakTokenParsed
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const reducers: ActionReducerMap<AuthState> = {};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.checkUserStatus, (state, action) => {
    return {
      user: action.user
    }
  })
)
