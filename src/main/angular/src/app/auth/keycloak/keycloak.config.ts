import {KeycloakConfig} from 'keycloak-js';
import {environment} from '../../../environments/environment';

const keycloakConfig: KeycloakConfig = {
  url: environment.keycloakUrl,
  realm: environment.keycloakRealm,
  clientId: environment.keycloakClientId
}

export default keycloakConfig;
