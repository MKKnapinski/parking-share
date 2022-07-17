package com.semprecode.parkingshare.service;

import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Value("${keycloak.realm}")
    private String realm;

    private final Keycloak keycloak;

    public UserService(Keycloak keycloak) {
        this.keycloak = keycloak;
    }

    List<UserRepresentation> findAll(Pageable pageable) {
        return keycloak.realm(realm)
                .users()
                .list(pageable.getPageNumber(), pageable.getPageSize());
    }
}
