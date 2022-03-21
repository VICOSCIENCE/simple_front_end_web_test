import React, { Component } from "react";
import * as d3 from 'd3';

//2021-12-28
export function getReferenceSizeWidth() {
    const width = 1920

    return width
}
//2021-12-28
export function getReferenceSizeHeight() {
    const height = 965

    return height
}

// 2021-12-29
// rp "Relative Position" Returns the relative value base on the reference size by axis
export function rp(absolut, axis, width, height) {
    var relative;
    const width_ref = 1920;
    const height_ref = 965;
    if (axis == 'x') {
        relative = width / (width_ref / absolut);
    } else if(axis == 'y') {
        relative = height / (height_ref / absolut);
    } else {
        console.log('export function rp(absolut, NULL, width, height) ' + axis);
        return 0;
    }
    //console.log('export function rp(' + absolut + ', ' + axis + ', '+width+', '+height+') ' + relative);
    return relative;
}

// 2022-03-04
// relPos "Relative Position" Returns the relative value base on the reference size by width
export function relPos(absolut, width) {
    var relative;
    const width_ref = 1920;
    relative = width / (width_ref / absolut);
    return relative;
}

// 2022-03-21
export function getWidthHeight(){
    const width = window.innerWidth;
    var height = window.innerHeight;
    // Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
    // En base a una resolución de pantalla de W:1920 H:1080
    const refWidth = getReferenceSizeWidth();
    var refHeight = getReferenceSizeHeight();
    var heightCorrected = Math.round((refHeight * width) / refWidth);
    //var heightCorrected = Math.round(width / aspectRatio);
    if (height > width) {
      heightCorrected = Math.round((refHeight * width) / refWidth);
    }
    height = heightCorrected;
    return [width,height];
}