package com.semprecode.parkingshare.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public enum ShapeType {
    RECTANGLE("RECTANGLE"),
    CIRCLE("CIRCLE"),
    LINE("LINE"),
    POLYGON("POLYGON"),
    IMAGE("IMAGE"),
    TEXT("TEXT"),
    LABEL("LABEL");

    private final String shapeType;
}
