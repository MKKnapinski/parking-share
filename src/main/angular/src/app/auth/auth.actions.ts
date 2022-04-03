import {createAction, props} from '@ngrx/store';
import {LOGIN_PAGE} from './login/login.component';
import {TOP_MENU} from '../top-menu/top-menu.component';
import {User} from '../model/user.model';

export const login = createAction(
  `${LOGIN_PAGE} User Login`,
  props<{user: User}>
)

export const logout = createAction(
  `${TOP_MENU} Logout`
)
