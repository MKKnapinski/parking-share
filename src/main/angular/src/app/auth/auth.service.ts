import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile, KeycloakTokenParsed} from 'keycloak-js';
import {from, Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      return this.keycloakService.getKeycloakInstance()
        .idTokenParsed;
    } catch (e) {
      console.error("exception", e);
      return undefined;
    }
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

