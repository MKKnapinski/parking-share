import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile, KeycloakTokenParsed} from 'keycloak-js';
import {from, Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable()
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  public getLoggedUser(): User | undefined {
      let user: User | undefined = undefined;

      const tokenParsed: KeycloakTokenParsed | undefined = this.keycloakService
        .getKeycloakInstance()
        .idTokenParsed;

      if (tokenParsed) {
        user = new User();
        user.name = tokenParsed['name'];
        user.preferredUsername = tokenParsed['preferred_username'];
        user.email = tokenParsed['email'];
        user.roles = this.getUserRoles();
      }

      return user;
  }

  public isLoggedIn(): Observable<boolean> {
    return from(this.keycloakService.isLoggedIn());
  }

  public login(): void {
    this.keycloakService.login();
  }

  public logout(): void {
    this.keycloakService.logout();
  }

  public loadUserProfile(): Observable<KeycloakProfile> {
    return from(this.keycloakService.loadUserProfile());
  }

  public redirectToUserProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getUserRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}

