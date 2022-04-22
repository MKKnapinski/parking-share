package com.semprecode.parkingshare.repository;

import com.semprecode.parkingshare.model.entity.Canvas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CanvasRepository extends JpaRepository<Canvas, Long> {
}
