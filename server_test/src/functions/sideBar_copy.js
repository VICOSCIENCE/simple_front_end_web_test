import React, { Component } from "react";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "./referenceSize";
import { setHtmlText, setHtmlTextLink } from "./htmlText";
import * as d3 from 'd3';
const width = getReferenceSizeWidth();
const height = getReferenceSizeHeight();

const x_node_1 = rp(160, 'x', width, height); // x_node_1
const x_node_2 = rp(250, 'x', width, height); // x_node_2
const x_node_3 = rp(67.36, 'x', width, height); // x_node_3
const y_node_1 = rp(380, 'x', width, height); // y_node_1
const y_node_2 = rp(230, 'x', width, height); // y_node_2
const y_node_3 = rp(206.19, 'x', width, height); //y_node_3

// Index
const w_nodePrimary = rp(192, 'x', width, height);
const w_nodeSecundary = rp(128, 'x', width, height);
const w_nodeIntro = relPos(320, width); // x_node_1
const x_nodeIntro = relPos(213.33, width);
const y_nodeIntro = relPos(266.61, width);

const x_nodeUp = rp(67.36, 'x', width, height); // x_node_1
const y_nodeUp = rp(201.56, 'x', width, height); // x_node_1
const x_nodeMiddle = rp(96, 'x', width, height); // x_node_1
const y_nodeMiddle = rp(417.57, 'x', width, height); // x_node_1
const x_nodeDown = rp(96, 'x', width, height); // x_node_2
const y_nodeDown = rp(568.55, 'x', width, height); // x_node_2

const durationAnim = 350;
const timeOut = 650;

export function getMenuIndexLines(svg, width) {
    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
        .attr('id', 'mainGradient');

    mainGradient.append('stop')
        .attr('class', 'stop-left')
        .attr('offset', '0');

    mainGradient.append('stop')
        .attr('class', 'stop-right')
        .attr('offset', '1');

    svg.append('rect')
        .attr('id', 'sideBarLines')
        .classed('filled', true)
        .attr('x', rp(700, 'x', width, height))//width / 12.3)
        .attr('y', rp(480, 'x', width, height))//height / 3.12)
        .attr('width', rp(695, 'x', width, height))//width / 190)
        .attr('height', rp(20, 'x', width, height));//height / 2.67);


    return true;
}
export function getMenuIndex(svg, width, height, styles_grow) {

    const w_nodePrimary = rp(500, 'x', width, height);
    const w_nodeSecundary = rp(350, 'x', width, height);
    const x_nodeUp = rp(250, 'x', width, height); // x_node_1
    const y_nodeUp = rp(230, 'x', width, height); // x_node_1
    const x_nodeMiddle = rp(840, 'x', width, height); // x_node_1
    const y_nodeMiddle = rp(300, 'x', width, height); // x_node_1
    const x_nodeDown = rp(1280, 'x', width, height); // x_node_2
    const y_nodeDown = rp(300, 'x', width, height); // x_node_2

    const w_nodePrimary_guia = relPos(192, width);
    const w_nodeSecundary_guia = relPos(128, width);
    const x_nodeUp_guia = relPos(67.3, width);
    const y_nodeUp_guia = relPos(201.5, width);
    const x_nodeMiddle_guia = relPos(96, width);
    const y_nodeMiddle_guia = relPos(417.5, width);
    const x_nodeDown_guia = relPos(96, width);
    const y_nodeDown_guia = relPos(568.5, width);

    var background = svg.append("g")
        .attr("transform", "scale(" + 1.9 + ")")
        .attr('id', 'background');

    var x_bg_2 = relPos(140, width);
    var y_bg_2 = relPos(125, width);
    var w_bg_2 = relPos(500, width);

    var x_bg_1 = relPos(490, width);
    var y_bg_1 = relPos(160, width);
    var w_bg_1 = relPos(500, width);
    background.append("image")
        .attr("xlink:href", window.location.origin + "/svg/lineas_portada-03.svg")
        .attr("x", x_bg_2)
        .attr("y", y_bg_2)
        .attr("width", w_bg_2)

    background.append("image")
        .attr("xlink:href", window.location.origin + "/svg/lineas_portada-04.svg")
        .attr("x", x_bg_1)
        .attr("y", y_bg_1)
        .attr("transform", "scale(" + 0.88 + ")")
        .attr("width", w_bg_1)

    var svgIconGroup1 = svg.append('g')
        .attr('id', 'svgIconGroup1Id')
        .style("cursor", "pointer").attr("class", styles_grow);
    var svgIconGroup2 = svg.append('g')
        .attr('id', 'svgIconGroup2Id')
        .style("cursor", "pointer").attr("class", styles_grow);
    var svgIconGroup3 = svg.append('g')
        .attr('id', 'svgIconGroup3Id')
        .style("cursor", "pointer").attr("class", styles_grow);

    // first image
    svgIconGroup1.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", x_nodeUp)
        .attr("y", y_nodeUp)
        .attr("width", w_nodePrimary)
        //.style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#background')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);
            d3.select('#textArco1').transition().duration(durationAnim).attr('opacity', 0);
            d3.select('#textArco2').transition().duration(durationAnim).attr('opacity', 0);
            d3.select('#textArco3').transition().duration(durationAnim).attr('opacity', 0);

            for (let i = 0; i < 10; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeIntro, 'x', width, height))
                .attr("y", rp(y_nodeIntro, 'x', width, height))
                .attr("width", rp(w_nodeIntro, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr('opacity', 0);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    var delta_arco = w_nodePrimary * 0.48;
    var m_start_x = x_nodeUp + (w_nodePrimary * 0.11);
    var m_start_y = y_nodeUp + delta_arco;
    var a_radius_x = relPos(100, width)
    var a_radius_y = relPos(100, width)
    var x_axis_rotation = 0;
    var large_arc_flag = 0;
    var sweep_flag = 0;
    var end_x = x_nodeUp + (w_nodePrimary * 0.89);
    var end_y = y_nodeUp + delta_arco;
    var font_size = relPos(25, width) + "px";

    var svg_path = 'M ' + m_start_x + ',' + m_start_y + ' A ' + a_radius_x + ',' + a_radius_y + ' ' + x_axis_rotation + ' ' + large_arc_flag + ',' + sweep_flag + ' ' + end_x + ',' + end_y;

    var textPath_text = 'INTRODUCCIÓN';
    svgIconGroup1.append("path")
        .attr("id", "arco1")
        .attr("d", svg_path)
        .style("fill", "none")
        //.attr("transform", "translate("+w_nodeSecundary+","+w_nodeSecundary+") rotate(-40)")
        .style("stroke", "none");

    svgIconGroup1.append("text")
        .attr("id", "textArco1")
        .style("font-size", font_size)
        .append("textPath")
        .attr("xlink:href", "#arco1")
        .style("text-anchor", "middle")
        .attr("startOffset", "50%")
        .style('fill', '#3F3F3E')
        .text(textPath_text);


    // second image
    svgIconGroup2.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", x_nodeMiddle)
        .attr("y", y_nodeMiddle)
        .attr("width", w_nodeSecundary)
        //.style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', x_nodeMiddle)
                .attr('cy', y_nodeMiddle);

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', x_nodeMiddle)
                .attr('cy', y_nodeMiddle);

            d3.select('#background')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);
            d3.select('#textArco1').transition().duration(durationAnim).attr('opacity', 0);
            d3.select('#textArco2').transition().duration(durationAnim).attr('opacity', 0);
            d3.select('#textArco3').transition().duration(durationAnim).attr('opacity', 0);

            for (let i = 0; i < 10; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", x_nodeUp_guia)
                .attr("y", y_nodeUp_guia)
                .attr("width", w_nodePrimary_guia)

            // Second image
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", x_nodeMiddle_guia)
                .attr("y", y_nodeMiddle_guia)
                .attr("width", w_nodeSecundary_guia);

            // Third image etapas
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", x_nodeDown_guia)
                .attr("y", y_nodeDown_guia)
                .attr("width", w_nodeSecundary_guia);

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    delta_arco = w_nodeSecundary * 0.48;
    m_start_x = x_nodeMiddle + (w_nodeSecundary * 0.11);
    m_start_y = y_nodeMiddle + delta_arco;
    end_x = x_nodeMiddle + (w_nodeSecundary * 0.89);
    end_y = y_nodeMiddle + delta_arco;
    font_size = relPos(20, width) + "px";

    svg_path = 'M ' + m_start_x + ',' + m_start_y + ' A ' + a_radius_x + ',' + a_radius_y + ' ' + x_axis_rotation + ' ' + large_arc_flag + ',' + sweep_flag + ' ' + end_x + ',' + end_y;

    textPath_text = 'ETAPAS CADENA';
    svgIconGroup2.append("path")
        .attr("id", "Arco2")
        .attr("d", svg_path)
        .style("fill", "none")
        .style("stroke", "none");

    svgIconGroup2.append("text")
        .attr("id", "textArco2")
        .style("font-size", font_size)
        .append("textPath")
        .attr("xlink:href", "#Arco2")
        .style("text-anchor", "middle")
        .attr("startOffset", "50%")
        .style('fill', '#3F3F3E')
        .text(textPath_text);

    // third image
    svgIconGroup3.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", x_nodeDown)
        .attr("y", y_nodeDown)
        .attr("width", w_nodeSecundary)

        //.style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#background')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);
            d3.select('#textArco1').transition().duration(durationAnim).attr('opacity', 0);
            d3.select('#textArco2').transition().duration(durationAnim).attr('opacity', 0);
            d3.select('#textArco3').transition().duration(durationAnim).attr('opacity', 0);

            for (let i = 0; i < 10; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", x_nodeUp_guia)
                .attr("y", y_nodeUp_guia)
                .attr("width", w_nodePrimary_guia)

            // Second image
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", x_nodeMiddle_guia)
                .attr("y", y_nodeMiddle_guia)
                .attr("width", w_nodeSecundary_guia);

            // Third image etapas
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", x_nodeDown_guia)
                .attr("y", y_nodeDown_guia)
                .attr("width", w_nodeSecundary_guia);

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });

    delta_arco = w_nodeSecundary * 0.48;
    m_start_x = x_nodeDown + (w_nodeSecundary * 0.11);
    m_start_y = y_nodeDown + delta_arco;
    end_x = x_nodeDown + (w_nodeSecundary * 0.89);
    end_y = y_nodeDown + delta_arco;
    font_size = relPos(20, width) + "px";

    svg_path = 'M ' + m_start_x + ',' + m_start_y + ' A ' + a_radius_x + ',' + a_radius_y + ' ' + x_axis_rotation + ' ' + large_arc_flag + ',' + sweep_flag + ' ' + end_x + ',' + end_y;

    textPath_text = 'BUENAS PRÁCTICAS';
    svgIconGroup3.append("path")
        .attr("id", "Arco3")
        .attr("d", svg_path)
        .style("fill", "none")
        .style("stroke", "none");

    svgIconGroup3.append("text")
        .attr("id", "textArco3")
        .style("font-size", font_size)
        .append("textPath")
        .attr("xlink:href", "#Arco3")
        .style("text-anchor", "middle")
        .attr("startOffset", "50%")
        .style('fill', '#3F3F3E')
        .text(textPath_text);
}
export function getSideBarGuia(svg, width, height, styles_grow) {
    var cantCircles = 12
    // first image
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            for (let i = 0; i < cantCircles; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeIntro, 'x', width, height))
                .attr("y", rp(y_nodeIntro, 'x', width, height))
                .attr("width", rp(w_nodeIntro, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr('opacity', 0);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    // second image
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_nodeDown, 'x', width, height))
        .attr("y", rp(y_nodeDown, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            for (let i = 0; i < cantCircles; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    // third image
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_nodeMiddle, 'x', width, height))
        .attr("y", rp(y_nodeMiddle, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))

        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            for (let i = 0; i < cantCircles; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}

export function getSideBarEtapas(svg, width, height, styles_grow) {

    // first image
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_nodeMiddle, 'x', width, height))
        .attr("y", rp(y_nodeMiddle, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeIntro, 'x', width, height))
                .attr("y", rp(y_nodeIntro, 'x', width, height))
                .attr("width", rp(w_nodeIntro, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr('opacity', 0);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    // second image
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    // third image
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_nodeDown, 'x', width, height))
        .attr("y", rp(y_nodeDown, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}

export function getSideBarPracticas(svg, width, height, styles_grow) {

    // first image
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_nodeMiddle, 'x', width, height))
        .attr("y", rp(y_nodeMiddle, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeIntro, 'x', width, height))
                .attr("y", rp(y_nodeIntro, 'x', width, height))
                .attr("width", rp(w_nodeIntro, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                //s.attr("x", rp(x_nodeDown, 'x', width, height))
                //.attr("y", rp(y_nodeDown, 'x', width, height))
                .attr('opacity', 0);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    // second image
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_nodeDown, 'x', width, height))
        .attr("y", rp(y_nodeDown, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {

            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    // third image
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}

export function getSideBarLines(svg, width) {
    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
        .attr('id', 'mainGradient');

    mainGradient.append('stop')
        .attr('class', 'stop-left')
        .attr('offset', '0');

    mainGradient.append('stop')
        .attr('class', 'stop-right')
        .attr('offset', '1');

    /*svg.append('rect')
        .classed('filled', true)
        //.style("fill", "url(#sideBardGradient)")
        .attr('x', width / 12.3)
        .attr('y', height / 3.12)
        .attr('width', width / 190)
        .attr('height', height / 2.67);
    /**/
    svg.append('rect')
        .attr('id', 'sideBarLines')
        .classed('filled', true)
        //.style("fill", "url(#sideBardGradient)")
        .attr('x', rp(156, 'x', width, height))//width / 12.3)
        .attr('y', rp(309, 'x', width, height))//height / 3.12)
        .attr('width', rp(10, 'x', width, height))//width / 190)
        .attr('height', rp(316, 'x', width, height));//height / 2.67);


    return true;
}
export function getSideBarPracticasDetalle(svg, width, height, styles_grow) {

    // second image Etapas
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_node_2, 'x', width, height))
        .attr("y", rp(y_node_2, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {

            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    // first image Guia
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_node_1, 'x', width, height))
        .attr("y", rp(y_node_1, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeIntro, 'x', width, height))
                .attr("y", rp(y_nodeIntro, 'x', width, height))
                .attr("width", rp(w_nodeIntro, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 0);

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr('opacity', 0);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });


    // third image Buenas practicas
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_node_3, 'x', width, height))
        .attr("y", rp(y_node_3, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            // First image
            d3.select('#linkGuia')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeMiddle, 'x', width, height))
                .attr("y", rp(y_nodeMiddle, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height))

            // Second image
            d3.select('#linkPracticas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeUp, 'x', width, height))
                .attr("y", rp(y_nodeUp, 'x', width, height))
                .attr("width", rp(w_nodePrimary, 'x', width, height))

            // Third image etapas
            d3.select('#linkEtapas')
                .transition()
                .duration(durationAnim)
                .attr("x", rp(x_nodeDown, 'x', width, height))
                .attr("y", rp(y_nodeDown, 'x', width, height))
                .attr("width", rp(w_nodeSecundary, 'x', width, height));

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}
export function animaSidebarPracticas(svg, width, height) {
    d3.select('#rectWhiteFade')
        .attr("height", height)
        .transition()
        .duration(durationAnim)
        .attr('opacity', 1);

    /*d3.select('#linkEtapas')
        .transition()
        .duration(durationAnim)
        .attr("x", rp(x_node_2, 'x', width, height))
        .attr("y", rp(y_node_2, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height));
    d3.select('#linkGuia')
        .transition()
        .duration(durationAnim)
        .attr("x", rp(x_node_1, 'x', width, height))
        .attr("y", rp(y_node_1, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height));
    d3.select('#linkPracticas')
        .transition()
        .duration(durationAnim)
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height));*/

    return true;
}
export function animaSidebarEtapas(svg) {

    return true;
}
export function getTimeOut() {
    return timeOut;
}
export function getDurationAnim() {
    return durationAnim;
}/**/

export function getSideBarGuiaFome(svg, width, height, styles_grow) {
    // first image
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            for (let i = 0; i < 10; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    // second image
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_nodeMiddle, 'x', width, height))
        .attr("y", rp(y_nodeMiddle, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            for (let i = 0; i < 10; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    // third image
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_nodeDown, 'x', width, height))
        .attr("y", rp(y_nodeDown, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1)

            d3.select('#behindHorizontalLine')
                .transition()
                .duration(durationAnim)
                .attr("width", 0)

            d3.select('#sideBarLines')
                .transition()
                .duration(durationAnim)
                .attr("height", 0)

            d3.select('#curvedLine')
                .transition()
                .duration(durationAnim)
                .attr('stroke', '#ffffff');

            d3.select('#circleGradient')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            d3.select('#circleGradientShadow')
                .transition()
                .duration(durationAnim)
                .attr("radio", 0)
                .attr('opacity', 0.5)
                .attr('cx', rp(565, 'x', width, height))

            for (let i = 0; i < 10; i++) {
                d3.select('#circle' + i)
                    .transition()
                    .duration(durationAnim)
                    .attr("radio", 0)
                    .attr('opacity', 0)
                    .attr('cx', rp(565, 'x', width, height))
            }

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}

export function getSideBarEtapasFome(svg, width, height, styles_grow) {

    // first image
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    // second image
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_nodeMiddle, 'x', width, height))
        .attr("y", rp(y_nodeMiddle, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            setTimeout(function () {
                window.location.href = "/etapas";
            }, timeOut)
        });

    // third image
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_nodeDown, 'x', width, height))
        .attr("y", rp(y_nodeDown, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}

export function getSideBarPracticasFome(svg, width, height, styles_grow) {

    // first image
    svg.append("image")
        .attr('id', 'linkGuia')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
        .attr("x", rp(x_nodeUp, 'x', width, height))
        .attr("y", rp(y_nodeUp, 'x', width, height))
        .attr("width", rp(w_nodePrimary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            setTimeout(function () {
                window.location.href = "/guia_de_gestion/intro.html";
            }, timeOut)
        });

    // second image
    svg.append("image")
        .attr('id', 'linkEtapas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
        .attr("x", rp(x_nodeMiddle, 'x', width, height))
        .attr("y", rp(y_nodeMiddle, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .style("cursor", "pointer").attr("class", styles_grow)
        .on("click", function () {

            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            setTimeout(function () {
                window.location.href = "/etapas/intro.html";
            }, timeOut)
        });

    // third image
    svg.append("image")
        .attr('id', 'linkPracticas')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
        .attr("x", rp(x_nodeDown, 'x', width, height))
        .attr("y", rp(y_nodeDown, 'x', width, height))
        .attr("width", rp(w_nodeSecundary, 'x', width, height))
        .on("click", function () {
            d3.select('#rectWhiteFade')
                .attr("height", height)
                //.attr("fill", 'URL(#bgRadGrad)')
                .transition()
                .duration(durationAnim)
                .attr('opacity', 1);

            setTimeout(function () {
                window.location.href = "/buenas_practicas/intro.html";
            }, timeOut)
        });
}s