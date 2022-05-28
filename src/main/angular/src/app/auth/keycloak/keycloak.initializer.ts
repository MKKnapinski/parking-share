import {KeycloakOptions, KeycloakService} from 'keycloak-angular';
import keycloakConfig from './keycloak.config';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
  const options: KeycloakOptions = {
    config: keycloakConfig,
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    },
    bearerExcludedUrls: []
  }

  return () => keycloak.init(options);
}
