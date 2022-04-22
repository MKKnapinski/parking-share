package com.semprecode.parkingshare.controller;

import com.semprecode.parkingshare.model.Response;
import com.semprecode.parkingshare.model.entity.Canvas;
import com.semprecode.parkingshare.service.CanvasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;

import static com.semprecode.parkingshare.model.UserRole.API_ADMIN;
import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("api/canvas")
public class CanvasResource {
    private final CanvasService canvasService;

    @Autowired
    public CanvasResource(CanvasService canvasService) {
        this.canvasService = canvasService;
    }

    @PostMapping
    @RolesAllowed({API_ADMIN})
    public ResponseEntity<Response> saveCanvas(@Valid @RequestBody Canvas canvas) {
        Long canvasId = canvasService.saveCanvas(canvas);
        return ResponseEntity.ok(Response
                .builder()
                .timeStamp(now())
                .data(of("id", canvasId))
                .status(CREATED)
                .statusCode(CREATED.value())
                .build());
    }

    @GetMapping("/{id}")
    @RolesAllowed({API_ADMIN})
    public ResponseEntity<Response> getCanvas(@PathVariable("id") Long canvasId) {
        Canvas canvas = canvasService.getCanvasEntity(canvasId);
        return ResponseEntity.ok(Response
                .builder()
                .timeStamp(now())
                .data(of("canvas", canvas))
                .status(OK)
                .statusCode(OK.value())
                .build());
    }
}
