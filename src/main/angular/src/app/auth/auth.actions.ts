import {createAction, props} from '@ngrx/store';
import {KeycloakTokenParsed} from 'keycloak-js';

export const login = createAction(
  '[Navbar] User Login'
)

export const logout = createAction(
  '[Navbar] Logout'
)

export const checkUserStatus = createAction(
  '[App Component] Check user status',
  props<{ user: KeycloakTokenParsed | undefined }>()
)


