package com.semprecode.parkingshare.controller;

import com.semprecode.parkingshare.model.Response;
import com.semprecode.parkingshare.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.util.List;

import static com.semprecode.parkingshare.model.UserRole.API_ADMIN;
import static com.semprecode.parkingshare.model.UserRole.API_USER;
import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/user")
public class UserResource {
    private final List<User> someUsers = List.of(
            new User(1, "Ken"),
            new User(2, "Yannick"),
            new User(3, "Pieter"));

    @GetMapping
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> users() {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(of("users", someUsers))
                        .message("Users retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @GetMapping("/{id}")
    @RolesAllowed({API_ADMIN})
    public ResponseEntity<Response> user(@PathVariable("id") int id) {
        User foundUser = someUsers.stream()
                .filter(user -> id == user.getId())
                .findFirst()
                .orElse(null);

        if (foundUser != null) {
            return ResponseEntity.ok(
                    Response.builder()
                            .timeStamp(now())
                            .data(of("user", foundUser))
                            .message("User retrieved")
                            .status(OK)
                            .statusCode(OK.value())
                            .build()
            );
        } else {
            return ResponseEntity.ok(
                    Response.builder()
                            .timeStamp(now())
                            .message("User not found")
                            .status(NOT_FOUND)
                            .statusCode(NOT_FOUND.value())
                            .build()
            );
        }

    }
}
