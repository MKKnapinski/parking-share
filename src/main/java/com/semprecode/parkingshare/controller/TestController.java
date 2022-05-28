package com.semprecode.parkingshare.controller;

import com.semprecode.parkingshare.model.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;

import static com.semprecode.parkingshare.model.UserRole.API_ADMIN;
import static com.semprecode.parkingshare.model.UserRole.API_USER;
import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/success")
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> success() {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(of("success", "ok"))
                        .message("Success")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @GetMapping("/error")
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> error() {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .message("Test error occurred")
                        .status(BAD_REQUEST)
                        .statusCode(BAD_REQUEST.value())
                        .build()
        );
    }

    @GetMapping("/exception")
    @RolesAllowed({API_ADMIN, API_USER})
    public ResponseEntity<Response> exception() {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(of("success", failingMethod().length()))
                        .message("Success")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    private String failingMethod() {
        return null;
    }

}
