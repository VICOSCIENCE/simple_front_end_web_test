import React, { Component } from "react";
import * as d3 from 'd3';
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, getWidthHeight } from "./referenceSize";

//const width = window.innerWidth;
//var height = window.innerHeight;
//// Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
//// En base a una resolución de pantalla de W:1920 H:1080
//const refWidth = getReferenceSizeWidth();
//var refHeight = getReferenceSizeHeight();
//var heightCorrected = Math.round((refHeight * width) / refWidth);
////var heightCorrected = Math.round(width / aspectRatio);
//if (height > width) {
//  heightCorrected = Math.round((refHeight * width) / refWidth);
//}
//height = heightCorrected;

export function getArrowEnd(svg, height) {
  var [_width, _height] = getWidthHeight();
  svg.append("svg:defs").append("svg:marker")
    .attr("id", "triangle")
    .attr("refX", rp(14, 'x', _width, _height))
    .attr("refY", rp(9.5, 'x', _width, _height))
    .attr("markerWidth", rp(38.6, 'x', _width, _height))
    .attr("markerHeight", rp(38.6, 'x', _width, _height))
    .attr("markerUnits", "userSpaceOnUse")
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 " + rp(19.3, 'x', _width, _height) + " " + rp(9.65, 'x', _width, _height) + " 0 " + rp(19.3, 'x', _width, _height) + " " + rp(3.86, 'x', _width, _height) + " " + rp(9.65, 'x', _width, _height) + "")
    //                                        punta                                                   contra punta baja                     contra punta izq
    .style("fill", "#93278F")
}