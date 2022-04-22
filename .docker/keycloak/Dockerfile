FROM quay.io/keycloak/keycloak:17.0.1 as builder

ENV KC_METRICS_ENABLED=true
ENV KC_FEATURES=token-exchange
ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:17.0.1
COPY --from=builder /opt/keycloak/lib/quarkus/ /opt/keycloak/lib/quarkus/
WORKDIR /opt/keycloak
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=change_me
ENV KC_DB_URL=jdbc:postgresql://parking-share-db:5432/keycloak
ENV KC_DB_USERNAME=keycloak
ENV KC_DB_PASSWORD=keycloak
ENV KC_HOSTNAME=localhost
ENV KC_HOSTNAME_STRICT_HTTPS='false'
ENV KC_HTTP_ENABLED='true'
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start"]
