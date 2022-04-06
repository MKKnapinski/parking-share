package com.semprecode.parkingshare.config;

import org.keycloak.adapters.KeycloakConfigResolver;
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KeycloakConfiguration {
    @Bean
    public KeycloakConfigResolver KeycloakConfigResolver() {
        // Use application properties instead of keycloak.json
        return new KeycloakSpringBootConfigResolver();
    }
}
