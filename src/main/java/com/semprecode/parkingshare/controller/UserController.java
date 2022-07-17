package com.semprecode.parkingshare.controller;

import com.semprecode.parkingshare.model.Response;
import com.semprecode.parkingshare.service.UserService;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;

import static com.semprecode.parkingshare.model.UserRole.API_ADMIN;
import static com.semprecode.parkingshare.model.UserRole.API_USER;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> usersPaginated(@PageableDefault Pageable pageable) {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{id}")
    @RolesAllowed({API_ADMIN})
    public ResponseEntity<Response> user(@PathVariable("id") int id) {
        return ResponseEntity.ok(null);
    }
}
