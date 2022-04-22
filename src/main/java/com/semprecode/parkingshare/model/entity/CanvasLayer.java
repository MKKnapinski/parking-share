package com.semprecode.parkingshare.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "LAYER")
@Getter
@Setter
public class CanvasLayer extends AuditModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "canvas_id", nullable = false)
    @JsonIgnore
    private Canvas canvas;

    private String name;

    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            mappedBy = "layer",
            orphanRemoval = true
    )
    @ToString.Exclude
    private Set<LayerObject> objects = new HashSet<>();

}
