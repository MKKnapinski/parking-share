import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile, KeycloakTokenParsed} from 'keycloak-js';

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

  public isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  public login(): Promise<void> {
    return this.keycloakService.login();
  }

  public logout(): void {
    this.keycloakService.logout();
  }

  public loadUserProfile(): Promise<KeycloakProfile> {
    return this.keycloakService.loadUserProfile();
  }

  public redirectToUserProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getUserRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}

