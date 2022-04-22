package com.semprecode.parkingshare.model.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "CANVAS")
@Getter
@Setter
public class Canvas extends AuditModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            mappedBy = "canvas",
            orphanRemoval = true
    )
    @ToString.Exclude
    private Set<CanvasLayer> layers = new HashSet<>();
}
