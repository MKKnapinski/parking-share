package com.semprecode.parkingshare.service;

import com.semprecode.parkingshare.model.entity.Canvas;
import com.semprecode.parkingshare.repository.CanvasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CanvasService {
    private final CanvasRepository canvasRepository;

    @Autowired
    public CanvasService(CanvasRepository canvasRepository) {
        this.canvasRepository = canvasRepository;
    }

    public Long saveCanvas(Canvas canvas) {
        canvas.getLayers().forEach(layer -> {
            layer.setCanvas(canvas);
            layer.getObjects().forEach(object -> object.setLayer(layer));
        });
        Canvas savedCanvas = canvasRepository.save(canvas);
        return savedCanvas.getId();
    }

    public Canvas getCanvasEntity(Long canvasId) {
        return canvasRepository.findById(canvasId).get();
    }
}
