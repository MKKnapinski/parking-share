import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState, authFeatureKey} from './reducers';

// this is a feature selector
export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);

export const user = createSelector(
  selectAuthState,
  auth => auth.user
)