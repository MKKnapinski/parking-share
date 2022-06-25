package com.semprecode.parkingshare.controller;

import com.semprecode.parkingshare.model.Response;
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
public class UserController {

    @GetMapping
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> users() {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{id}")
    @RolesAllowed({API_ADMIN})
    public ResponseEntity<Response> user(@PathVariable("id") int id) {
        return ResponseEntity.ok(null);
    }
}
