package com.semprecode.parkingshare.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.semprecode.parkingshare.model.ShapeType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity(name = "OBJECT")
public class LayerObject implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ShapeType shapeType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "layer_id", nullable = false)
    @JsonIgnore
    private CanvasLayer layer;

    private String name;
}
