package com.semprecode.parkingshare.controller;

import com.semprecode.parkingshare.model.Response;
import com.semprecode.parkingshare.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Optional;

import static com.semprecode.parkingshare.model.UserRole.API_ADMIN;
import static com.semprecode.parkingshare.model.UserRole.API_USER;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(params = {"page", "size"})
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> usersPaginated(
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size) {

        return ResponseEntity.ok(null);
    }

    @GetMapping("/{id}")
    @RolesAllowed({API_ADMIN})
    public ResponseEntity<Response> user(@PathVariable("id") int id) {
        return ResponseEntity.ok(null);
    }
}
