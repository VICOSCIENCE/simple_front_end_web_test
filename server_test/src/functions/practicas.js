import React, { Component } from "react";
import * as d3 from 'd3';
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "./referenceSize";
import { breadcrumb, headerCornerLogo, gradients, shadowFilters, setTriangleAdvance, setLinkRef, setPointerPositionTool } from "./headerMenu";

const width = getReferenceSizeWidth();
const height = getReferenceSizeHeight();

export function getCounterRotation(currentPractica) {
    const startAngle_factor = [
        4,
        2,
        3,
        5,
        5.5,
        2.5
    ];
    return startAngle_factor[currentPractica];
}

export function getXPracticasLabel(currentPractica, width, height) {
    const x_practicasLabel = [
        [rp(1450, 'x', width, height)],
        [rp(1350, 'x', width, height)],
        [rp(1450, 'x', width, height)],
        [rp(1450, 'x', width, height)],
        [rp(1450, 'x', width, height)],
        [rp(1450, 'x', width, height)]
    ];
    return x_practicasLabel[currentPractica];
}

export function getWPracticasLabel(currentPractica, width, height) {
    const w_practicasLabel = [
        [rp(450, 'x', width, height)],
        [rp(550, 'x', width, height)],
        [rp(450, 'x', width, height)],
        [rp(450, 'x', width, height)],
        [rp(450, 'x', width, height)],
        [rp(450, 'x', width, height)]
    ];
    return w_practicasLabel[currentPractica];
}
// Funciones para activar/desactivar el contenido de las etapas
export function togglePaginaPracticas(opacity, array, paginaIndex, y_selectorPag) {

    var div_a = '<div style="font-family:Roboto;color:#111111">';
    var div_b = '';
    var div_c = '';
    var div_d = '</div>';
    //for (let e = 0; e < .length; e++) {
    var t = 'titulo';
    var c = 'contenido';
    var otherPaginaIndex = 'paginaDos';
    var otherOpacity = 1;

    if (paginaIndex == 'paginaDos') {
        otherPaginaIndex = 'paginaUno';
        d3.select('#resonsabilidadesSegmentos')
            .transition()
            .duration(100)
            .attr('opacity', 1);
        for (let i = 0; i < y_selectorPag.length; i++)
            d3.select('#buttonSelectorClick' + i).style("fill", "none");
    } else {
        d3.select('#resonsabilidadesSegmentos')
            .transition()
            .duration(100)
            .attr('opacity', 0);
        for (let i = 0; i < y_selectorPag.length; i++)
            d3.select('#buttonSelectorClick' + i).style("fill", "#fdfdfd");
    }

    if (opacity == 1) {
        otherOpacity = 0;
    }

    div_b += '<h2 style="font-family:Oswald;color:#737373;line-height:150%">' + array[paginaIndex][t] + '</h2>';
    div_b += '<p align="justify" style="font-family:Roboto;color:#737373;line-height:150%">' + array[paginaIndex][c] + '</p>';

    //console.log('div_b ' + div_b);

    // Activa página 
    d3.select('#' + paginaIndex)
        .transition()
        .duration(100)
        .attr('opacity', opacity);

    // Desactiva página 
    d3.select('#' + otherPaginaIndex)
        .attr('opacity', otherOpacity);


    // Actualiza contenido
    d3.select('#practicasContentFO')
        .html(function () {
            return div_a + div_b + div_c + div_d;
        })
        .transition()
        .duration(100)
        .attr('opacity', opacity);



    /**/
}
// DEPRECATED Función que renderiza el contenido de detalle de cada item de cada práctica
export function setContentPracticas(array) {

    var div_a = '<div style="font-family:Roboto;color:#111111">';
    var div_b = '';
    var aux_c = '';
    var div_d = '</div>';

    div_b += '';
    for (let d = 0; d < array.length; d++) {
        div_b += '<h2 style="font-family:Oswald;color:#737373;line-height:150%">' + array['arrayPracticaDetalle'][d] + '</h2>';
        //div_b += '<p align="justify" style="font-family:Roboto;color:#737373;line-height:150%">' + arrayDetallePractica[d] + '</p>';

        div_b += '<ul>';
        for (let i = 0; i < array['arrayPracticaEtapas'][d].length; i++) {
            aux_c = '<span class="' + array['arrayDetallePracticaRoles'][d] + '"></span>';
            div_b += '<li align="justify" style="font-family:Roboto;color:#737373;line-height:150%">' + aux_c + array['arrayPracticaEtapas'][d] + '</br>' + + '</li>';
        }
        div_b += '</ul>';
        div_b += '<ul>';
        for (let i = 0; i < array['arrayPactoGlobal'][d].length; i++) {
            div_b += '<li align="justify" style="font-family:Roboto;color:#737373;line-height:150%">' + aux_c + array['arrayPactoGlobal'][d] + '</br>' + + '</li>';
        }
        div_b += '</ul>';
        div_b += '<ul>';
        for (let i = 0; i < array['arrayODS'][d].length; i++) {
            div_b += '<li align="justify" style="font-family:Roboto;color:#737373;line-height:150%">' + aux_c + array['arrayODS'][d] + '</br>' + + '</li>';
        }
        div_b += '</ul>';
    }

    // Actualiza contenido
    d3.select('#practicasContentFO')
        .html(function () {
            return div_a + div_b + div_d;
        })
        .transition()
        .duration(100);
    /**/
}

export function animaTooltipTitle(duration, x, y, width, id, radio) {

    d3.select('#' + id)
        .transition()
        .duration(duration)
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', radio)
        .attr("width", width);
    return true;
}

export function setButtonMouseStatus(id, duration, opacity, fill) {
    //console.log('id' + id)
    d3.select(id)
        .transition()
        .duration(duration)
        .style("fill", fill)
        .attr('opacity', opacity);
    return true;
}
export function setTextColor(id, duration, color_pagination, fonSize_pagination, indexPagination) {
    d3.select(id)
        .html(function () {
            return '<div style="font-family:Roboto;font-weight:bold;color:' + color_pagination + ';font-size:' + fonSize_pagination + 'px"><p align="justify">' + indexPagination + '</p></div>'
        })
        .transition()
        .duration(duration)
        .attr('opacity', 1);
    //return true;
}
export function toggleMouseStatus(id, duration, opacity, fillH, fillN) {
    for (let i = 0; i < 2; i++)
        d3.select('#pag' + i).style("fill", fillN);
    d3.select(id)
        .transition()
        .duration(duration)
        .style("fill", fillH)
        .attr('opacity', opacity);
    return true;
}
export function toggleTextColor(id, duration, color_paginationH, color_paginationN, fonSize_pagination, indexPagination) {
    var index;
    for (let i = 0; i < 2; i++) {
        index = i + 1;
        d3.select('#pagText' + i).html(function () {
            return '<div style="font-family:Roboto;font-weight:bold;color:' + color_paginationN + ';font-size:' + fonSize_pagination + 'px"><p align="justify">' + index + '</p></div>'
        })

    }
    d3.select(id)
        .html(function () {
            return '<div style="font-family:Roboto;font-weight:bold;color:' + color_paginationH + ';font-size:' + fonSize_pagination + 'px"><p align="justify">' + indexPagination + '</p></div>'
        })
        .transition()
        .duration(duration)
        .attr('opacity', 1);
    //return true;
}
export function setIndexPD(indexPD) {
    return indexPD
}

// Crea y hace los Append de los objetos
export function setClickDatellaPractica(parametros) {

    var svgClicklAreaEtapas = ''
    var svgArcoiris = ''
    var arrayEtapas = ''
    var width = ''
    var height = ''

    var svg = ''
    var svgCirculosPactoGlobal = ''
    var svgCirculosOds = ''

    var arrayPracticaDetalle = ''
    var arrayPactoGlobal = ''
    var arrayODS = ''
    var x_clickAreaArcoiris = ''
    var y_clickAreaArcoiris = ''
    var colorRol = ''
    var posicionEnElArco = ''

    ////////
    svgClicklAreaEtapas = parametros['svgClicklAreaEtapas'];
    svgArcoiris = parametros['svgArcoiris'];
    arrayEtapas = parametros['arrayEtapas'];
    width = parametros['width'];
    height = parametros['height'];

    svg = parametros['svg'];
    svgCirculosPactoGlobal = parametros['svgCirculosPactoGlobal'];
    svgCirculosOds = parametros['svgCirculosOds'];

    arrayPracticaDetalle = parametros['arrayPracticaDetalle'];
    arrayPactoGlobal = parametros['arrayPactoGlobal'];
    arrayODS = parametros['arrayODS'];
    x_clickAreaArcoiris = parametros['x_clickAreaArcoiris'];
    y_clickAreaArcoiris = parametros['y_clickAreaArcoiris'];
    colorRol = parametros['colorRol'];
    posicionEnElArco = parametros['posicionEnElArco'];

    const animDuration_arcEtapas = 2500;
    const rotationAngle_etapas = 90 / arrayEtapas.length;
    //.attr("transform", "rotate(" + rotationAngle_etapas * i + ")");

    var segmentId;
    var segmentTexetId = '';

    var segmentPactoGlobalId = '';
    var segmentTextPactoGlobalId = '';

    var segmentOdsId = '';
    var segmentTexetOdsId = '';

    var fonSize_etapas = rp(20, 'x', width, height)
    var divHeight_etapas = 'height:' + rp(80, 'x', width, height) + 'px';

    // Texto etapas
    const x_segmentText = rp(-590, 'x', width, height);
    const y_segmentText = rp(-75, 'x', width, height);

    const numSegmentosEtapas = arrayEtapas.length * 2;
    var arcLenAEtapa;
    var startAngleReference;
    var startAngleEtapa;
    var endAngleEtapa;
    var innerRadiusEtapa;
    var outerRadiusEtapa;

    var arcSegmentEtapa;

    // Determina la cantidad máxima de circulos de Pacto Global en cada combinación de etapa / detalle práctica
    var max_circlePactoGlobal = 0;
    for (let i = 0; i < arrayEtapas.length; i++) {
        for (let j = 0; j < arrayPactoGlobal[i].length; j++) {
            for (let k = 0; k < arrayPactoGlobal[i][j].length; k++) {
                if (arrayPactoGlobal[i][j][k].length >= max_circlePactoGlobal) {
                    max_circlePactoGlobal = arrayPactoGlobal[i][j][k].length;
                }
            }
        }
    }
    // Determina la cantidad máxima de circulos de ODS en cada combinación de etapa / detalle práctica
    var max_circleOds = 0;
    for (let i = 0; i < arrayEtapas.length; i++) {
        for (let j = 0; j < arrayODS[i].length; j++) {
            for (let k = 0; k < arrayODS[i][j].length; k++) {
                if (arrayODS[i][j][k].length >= max_circleOds) {
                    //console.log('arrayODS[' + i + '][' + j + '][' + k + '].length ', arrayODS[i][j][k].length);
                    max_circleOds = arrayODS[i][j][k].length;
                }
            }
        }
    }

    // inicio - Segmentos de etapas
    innerRadiusEtapa = rp(333, 'x', width, height);//;
    outerRadiusEtapa = rp(595, 'x', width, height);
    arcLenAEtapa = (3.14) / (numSegmentosEtapas);
    startAngleReference = -(10 * arcLenAEtapa);
    startAngleEtapa = startAngleReference;
    endAngleEtapa = startAngleEtapa + arcLenAEtapa;
    arcSegmentEtapa = d3.arc()
        .innerRadius(innerRadiusEtapa)
        .outerRadius(outerRadiusEtapa)
        .startAngle(startAngleEtapa)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngleEtapa);        // 2*Pi = 6.28 = top
    // fin - Segmentos de etapas

    // inicio - Segmentos de pacto global
    var delta_arcPactoGlobal = 0;
    var innerRadiusPactoGlobal = rp(595, 'x', width, height);//595;
    if (max_circlePactoGlobal < 5) {
        delta_arcPactoGlobal = (rp(40, 'x', width, height));
    }
    if (max_circlePactoGlobal > 4) {
        delta_arcPactoGlobal = (rp(40, 'x', width, height) * 1.5);
    }
    if (max_circlePactoGlobal > 8) {
        delta_arcPactoGlobal = (rp(30, 'x', width, height) * 3);
    }
    //console.log('max_circlePactoGlobal ' + max_circlePactoGlobal + ' delta_arcPactoGlobal ' + delta_arcPactoGlobal);
    //var outerRadiusPactoGlobal = rp(635, 'x', width, height);//635;
    var outerRadiusPactoGlobal = innerRadiusPactoGlobal + delta_arcPactoGlobal;//rp(635, 'x', width, height);//635;
    //console.log('innerRadiusPactoGlobal ' + innerRadiusPactoGlobal);
    //console.log('delta_arcPactoGlobal ' + delta_arcPactoGlobal);
    var arcSegmentPactoGlobal = d3.arc()
        .innerRadius(innerRadiusPactoGlobal)
        .outerRadius(outerRadiusPactoGlobal)
        .startAngle(startAngleEtapa)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngleEtapa);        // 2*Pi = 6.28 = top
    // fin - Segmentos de pacto global

    var delta_arcOds = 0;
    var innerRadiusOds = outerRadiusPactoGlobal; //rp(635, 'x', width, height);//635;
    if (max_circleOds < 5) {
        delta_arcOds = (rp(40, 'x', width, height));
    }
    if (max_circleOds > 4) {
        delta_arcOds = (rp(40, 'x', width, height) * 1.5);
    }
    if (max_circleOds > 8) {
        delta_arcOds = (rp(40, 'x', width, height) * 2);
    }
    if (max_circleOds > 12) {
        delta_arcOds = (rp(40, 'x', width, height) * 2.6);
    }
    if (max_circleOds > 16) {
        delta_arcOds = (rp(40, 'x', width, height) * 3.5);
    }

    var outerRadiusOds = innerRadiusOds + delta_arcOds;//rp(720, 'x', width, height);//720;
    var arcSegmentOds = d3.arc()
        .innerRadius(innerRadiusOds)
        .outerRadius(outerRadiusOds)
        .startAngle(startAngleEtapa)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngleEtapa);        // 2*Pi = 6.28 = top 
    for (let i = 0; i < arrayEtapas.length; i++) {
        //startAngleEtapa = endAngleEtapa;
        //endAngleEtapa = arcLenAEtapa + endAngleEtapa;
        segmentId = 'segmentoCirculosPactoGlobalId_' + i;
        svgClicklAreaEtapas.append("path")
            .attr("id", segmentId)
            .attr("d", arcSegmentPactoGlobal) //
            .attr("fill", 'transparent')
            .style("stroke", '#959B99')
            .style("stroke-dasharray", ("3, 3"))
            .style("stroke-width", rp(2, 'x', width, height))
            .attr('opacity', 1)
            .attr("transform", "rotate(" + rotationAngle_etapas * i + ")")
        segmentId = 'segmentoCirculosOdsId_' + i;
        svgClicklAreaEtapas.append("path")
            .attr("id", segmentId)
            .attr("d", arcSegmentOds) //
            .attr("fill", 'transparent')
            .style("stroke", '#959B99')
            .style("stroke-dasharray", ("3, 3"))
            .style("stroke-width", rp(2, 'x', width, height))
            .attr('opacity', 1)
            .attr("transform", "rotate(" + rotationAngle_etapas * i + ")")
        segmentId = 'segmentoEtapaId_' + i;
        svgClicklAreaEtapas.append("path")
            .attr("id", segmentId)
            .attr("d", arcSegmentEtapa) //
            .attr("fill", 'transparent')
            .style("stroke", '#959B99')
            .style("stroke-dasharray", ("3, 3"))
            .style("stroke-width", rp(2, 'x', width, height))
            .attr('opacity', 1)
            .attr("transform", "rotate(" + rotationAngle_etapas * i + ")")
        segmentTexetId = 'segmentTexetId_' + i;
        svgClicklAreaEtapas.append('foreignObject')
            .attr("id", segmentTexetId)
            .attr('x', x_segmentText)
            .attr('y', y_segmentText)
            .attr("width", rp(250, 'x', width, height))
            .attr("height", rp(100, 'x', width, height))
            .style("stroke", '#000000')
            .style("stroke-width", rp(1, 'x', width, height))
            .style('cursor', 'context-menu')
            .attr('opacity', 1)
            .html(function (d) {
                return '<div style="-webkit-transform: rotate(5deg);font-family:Roboto;font-weight:normal;color:#000000;font-size:' + fonSize_etapas + 'px;' + divHeight_etapas + '"><p align="right" style="">' + arrayEtapas[i] + '</p></div>'
            })
            .attr("transform", "rotate(" + rotationAngle_etapas * i + ")")
    }


    // inicio - Arcos grises de fondo
    var arcLenBG_2 = 3.14;
    var startAngleBG_2 = -(3.14 / 2);
    var endAngleBG_2 = startAngleBG_2 + arcLenBG_2;
    var innerRadiusBG_1 = 0;
    var outerRadiusBG_1 = outerRadiusOds;//720;
    var outerRadiusBG_2 = outerRadiusPactoGlobal;//635;
    var outerRadiusBG_3 = outerRadiusEtapa;//595;
    var arcSegmentBG_1 = d3.arc()
        .innerRadius(innerRadiusBG_1)
        .outerRadius(outerRadiusBG_1)
        .startAngle(startAngleBG_2)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngleBG_2);        // 2*Pi = 6.28 = top  
    var segmentBGId = 'segment_BG_1';
    svgArcoiris.append("path")
        .attr("id", segmentBGId)
        .attr("d", arcSegmentBG_1)
        .attr("fill", '#E8EAEB')
        .style("stroke", '#000000')
        .style("stroke-width", rp(0, 'x', width, height))
        .attr('opacity', 1);

    var arcSegmentBG_2 = d3.arc()
        .innerRadius(innerRadiusBG_1)
        .outerRadius(outerRadiusBG_2)
        .startAngle(startAngleBG_2)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngleBG_2);
    segmentBGId = 'segment_BG_2';
    svgArcoiris.append("path")
        .attr("id", segmentBGId)
        .attr("d", arcSegmentBG_2)
        .attr("fill", '#E3E5E6')
        .style("stroke", '#000000')
        .style("stroke-width", rp(0, 'x', width, height))
        .attr('opacity', 1);

    var arcSegmentBG_3 = d3.arc()
        .innerRadius(innerRadiusBG_1)
        .outerRadius(outerRadiusBG_3)
        .startAngle(startAngleBG_2)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngleBG_2);
    segmentBGId = 'segment_BG_3';
    svgArcoiris.append("path")
        .attr("id", segmentBGId)
        .attr("d", arcSegmentBG_3)
        .attr("fill", '#D5D8DA')
        .style("stroke", '#000000')
        .style("stroke-width", rp(0, 'x', width, height))
        .attr('opacity', 1);
    // fin - Arcos grises de fondo



}

// Mueve etapas y actualiza PActo Global y Ods, con cada click
export function showClickDatellaPractica(indexDetalle, svgCirculosPactoGlobal, svgCirculosOds, arrayPracticaDetalle, arrayEtapas, arrayPactoGlobal, arrayODS, width, height, colorRol, x_clickAreaArcoiris, y_clickAreaArcoiris, svgClicklAreaEtapas) {
    // Animación
    const animDuration_arcEtapas = 700;
    const rotationAngle_etapas = (90 / arrayEtapas.length);
    const anguloInicialEtapa = ((90 + (rotationAngle_etapas * 1.43)) / arrayPracticaDetalle.length) * indexDetalle;
    const rotationAngle_circulos = (90 / (arrayEtapas.length * 4));

    var arcLenAPactoGlobal;

    var color_rol;

    //console.log('- - -');
    //console.log('arrayEtapas.length ' + arrayEtapas.length);
    //console.log('indexDetalle ' + indexDetalle);
    //console.log('rotationAngle_etapas ' + rotationAngle_etapas);
    //console.log('anguloInicialEtapa ' + anguloInicialEtapa);
    //console.log('- - -');

    //  const rotationAngle_etapas = 90 / arrayEtapas.length;
    //.attr("transform", "rotate(" + rotationAngle_etapas * i + ")");

    var segmentId;
    var segmentTexetId = '';

    var segmentPactoGlobalId = '';
    var segmentTextPactoGlobalId = '';
    var circlePactoGlobalId;//'circlePactoGlobal_' + i + '-' + d + '-' + j;
    var circlePactoGlobalFOId;
    var segmentTextPactoGlobalId = '';
    var circleOdsId;
    var circleOdsFOId;

    var segmentOdsId = '';
    var segmentTexetOdsId = '';

    var index_orden = 0;

    var rotation_segmentEtapa;
    var rotation_segmentEtapa_b;

    // Círculos Pacto Global
    const x_circlePactoGlobal = -595;//-675;
    const y_circlePactoGlobal = -80;
    const r_circlePactoGlobal = rp(11, 'x', width, height);

    // Círculos ODS
    const x_circleOds = -635;//-675;
    const y_circleOds = -80;
    const r_circleOds = rp(11, 'x', width, height);


    const fonSize_circulos = rp(14, 'x', width, height);
    var valueRol_pactoGlobal;
    var value = 0;
    var rol = '';
    var color_rol = 'white';
    var index_orden = 0;

    const numSegmentosEtapas = arrayEtapas.length * 2;
    //const numSegmentosEtapas = arrayEtapas.length * 2;

    var startAnglePactoGlobal;
    var endAnglePactoGlobal;
    var arcSegmentPactoGlobal;

    var delta_arc_circulos = 0;
    switch (indexDetalle) {
        case 0:
            delta_arc_circulos = 10;
            break;
        case 1:
            delta_arc_circulos = 9.99;
            break;
        case 2:
            delta_arc_circulos = 9.98;
            break;
        case 3:
            delta_arc_circulos = 9.97;
            break;
        case 4:
            delta_arc_circulos = 9.96;
            break;
        case 5:
            delta_arc_circulos = 9.95;
            break;
        case 6:
            delta_arc_circulos = 9.94;
            break;
        case 7:
            delta_arc_circulos = 9.93;
            break;
    }

    var arcLenAEtapa = 3.14 / numSegmentosEtapas;
    var startAngleReference = -(delta_arc_circulos * arcLenAEtapa);
    var innerRadiusPactoGlobal;
    var outerRadiusPactoGlobal;

    var valueRol_pactoGlobal;
    var value;
    var rol;
    var arcSegmentOds;
    var arcLenAOds;
    var startAngleOds;
    var endAngleOds;
    var innerRadiusOds;
    var outerRadiusOds;
    var delta_arcPactoGlobal;
    var startAngleEtapa;
    var endAngleEtapa;
    var cantCirclesPG = 0
    //outerRadiusEtapa = 595;
    // Segmentos de etapas, Pacto Global y ODS

    //console.log('arrayPactoGlobal[i][d] ' + arrayPactoGlobal[0][0]);
    for (var i = 0; i < arrayEtapas.length; i++) {
        ///////////

        // inicio - Mueve segmentos de etapas
        rotation_segmentEtapa = anguloInicialEtapa + (rotationAngle_etapas * i);
        rotation_segmentEtapa_b = anguloInicialEtapa + (rotationAngle_circulos * i);

        segmentId = 'segmentoCirculosOdsId_' + i;
        d3.select('#' + segmentId)
            .transition().duration(animDuration_arcEtapas)
            .attr("transform", "rotate(" + (rotation_segmentEtapa) + ")");

        //  inicio - 
        segmentId = 'segmentoCirculosPactoGlobalId_' + i;

        d3.select('#' + segmentId)
            .transition().duration(animDuration_arcEtapas)
            .attr("transform", "rotate(" + (rotation_segmentEtapa) + ")");
        //  fin - 



        segmentId = 'segmentoEtapaId_' + i;
        d3.select('#' + segmentId)
            .transition().duration(animDuration_arcEtapas)
            .attr("transform", "rotate(" + (rotation_segmentEtapa) + ")");

        segmentTexetId = 'segmentTexetId_' + i;
        d3.select('#' + segmentTexetId)
            .transition().duration(animDuration_arcEtapas)
            .attr("transform", "rotate(" + rotation_segmentEtapa + ")");
        // fin - Mueve segmentos de etapas

        segmentId = 'segmentEtapa_' + i;

        //
        // Segmentos Pacto Global
        var x_arrCentroidePactoGlobal = [];
        var y_arrCentroidePactoGlobal = [];
        innerRadiusPactoGlobal = rp(600, 'x', width, height);//600;
        outerRadiusPactoGlobal = rp(630, 'x', width, height);;//630;
        // Por cada etapa recorre detalles de Pacto Global
        //for (let d = 0; d < arrayPactoGlobal[i].length; d++) {
        arcLenAPactoGlobal = 3.14 / (arrayEtapas.length * 8);
        startAnglePactoGlobal = startAngleReference;//-(40 * arcLenAPactoGlobal);
        endAnglePactoGlobal = startAnglePactoGlobal + arcLenAPactoGlobal;

        segmentTextPactoGlobalId = 'segmentTextPactoGlobal_' + i + 'FO';

        // remueve todos los circulos de pacto global
        for (let a = 0; a < arrayPactoGlobal[i].length; a++) {
            for (let b = 0; b < arrayPactoGlobal[i][a].length; b++) {
                //console.log('algo ' + i + ' ' + a + ' ' + b);
                circlePactoGlobalId = 'circlePactoGlobal_' + i + '-' + a + '-' + b;
                d3.select('#' + circlePactoGlobalId).remove();
                circlePactoGlobalFOId = 'circlePactoGlobal_' + i + '-' + a + '-' + b + '_FO';
                d3.select('#' + circlePactoGlobalFOId).remove();
            }

        }
        var numRow_circlesPG = 3
        var index_ordenPG = 0
        //console.log('#################');
        //console.log('arrayPactoGlobal[' + i + '][' + indexDetalle + '].length ' + arrayPactoGlobal[i][indexDetalle].length);
        // Por cada detalle recorre principios de Pacto Global
        for (var j = 0; j < arrayPactoGlobal[i][indexDetalle].length; j++) {
            if (index_ordenPG > numRow_circlesPG) {
                index_ordenPG = 0;
                startAnglePactoGlobal = startAngleReference;
                endAnglePactoGlobal = startAnglePactoGlobal + arcLenAPactoGlobal
                innerRadiusPactoGlobal = innerRadiusPactoGlobal + (2.2 * r_circlePactoGlobal);
                outerRadiusPactoGlobal = outerRadiusPactoGlobal + (2.2 * r_circlePactoGlobal);
            }
            if (true) {
                arcSegmentPactoGlobal = d3.arc()
                    .innerRadius(innerRadiusPactoGlobal)
                    .outerRadius(outerRadiusPactoGlobal)
                    .startAngle(startAnglePactoGlobal)     // It's in radian, so Pi = 3.14 = bottom.
                    .endAngle(endAnglePactoGlobal);        // 2*Pi = 6.28 = top  
                // Segmentos PactoGlobal
                // Renderiza sermentos
                startAnglePactoGlobal = endAnglePactoGlobal;
                endAnglePactoGlobal = arcLenAPactoGlobal + endAnglePactoGlobal;

                //Elimina los elementos no utilizados
                segmentPactoGlobalId = 'segmentPactoGlobal_' + j;
                d3.select('#' + segmentPactoGlobalId).remove();


                // Actualiza valores - marcador guia
                /*svgCirculosPactoGlobal.append("path")
                    .attr("id", segmentPactoGlobalId)
                    .attr("d", arcSegmentPactoGlobal)
                    .attr("fill", '#ff00ff')
                    .style("stroke", '#000000')
                    .style("stroke-width", rp(1, 'x', width, height))
                    .attr('opacity', 0.1)
                    .transition()
                    .duration(animDuration_arcEtapas)*/
                //.attr("transform", "rotate(" + rotation_segmentEtapa + ")");

                var [x, y] = arcSegmentPactoGlobal.centroid(arcSegmentPactoGlobal);
                x_arrCentroidePactoGlobal[j] = x;
                y_arrCentroidePactoGlobal[j] = y;

                //console.log('### i ' + i + '### j ' + j + '### x ' + x + '### y ' + y);
                //console.log('### arrayPactoGlobal[i][indexDetalle][j] ' + arrayPactoGlobal[i][indexDetalle][j]);
                //console.log('### circlePactoGlobal_' + i + '-' + indexDetalle + '-' + j);

                valueRol_pactoGlobal = arrayPactoGlobal[i][indexDetalle][j].split('-');
                value = valueRol_pactoGlobal[0];
                rol = valueRol_pactoGlobal[1];
                if (rol === 'c')
                    color_rol = colorRol[2];
                if (rol === 'm')
                    color_rol = colorRol[0];
                if (rol === 'o')
                    color_rol = colorRol[1];

                // Actualiza valores - crea circulos
                circlePactoGlobalId = 'circlePactoGlobal_' + i + '-' + indexDetalle + '-' + j;
                if (value != '') {
                    svgCirculosPactoGlobal.append("circle")
                        .attr("id", circlePactoGlobalId)
                        //.attr("transform", 'translate(' + x_clickAreaArcoiris + ', ' + y_clickAreaArcoiris + ')')
                        .attr("cx", x_arrCentroidePactoGlobal[j])
                        .attr("cy", y_arrCentroidePactoGlobal[j])
                        .attr("r", r_circlePactoGlobal)
                        .style("stroke", '#000000')
                        .style("stroke-width", rp(1, 'x', width, height))
                        .style("fill", color_rol)
                        .attr('opacity', 1)
                        .attr("transform", "rotate(" + rotation_segmentEtapa + ")")
                        .transition()
                        .duration(animDuration_arcEtapas)
                        .attr('opacity', 0.5)
                        .transition()
                        .duration(animDuration_arcEtapas / 2)
                        .attr('opacity', 1)
                }

                circlePactoGlobalId = 'circlePactoGlobal_' + i + '-' + indexDetalle + '-' + j + '_FO';
                //d3.select('#' + circlePactoGlobalId).remove();
                svgCirculosPactoGlobal.append('foreignObject')
                    .attr("id", circlePactoGlobalId)
                    //.attr("transform", 'translate(' + x_clickAreaArcoiris + ', ' + y_clickAreaArcoiris + ')')
                    .attr("x", x_arrCentroidePactoGlobal[j] - r_circlePactoGlobal)
                    .attr("y", y_arrCentroidePactoGlobal[j] - (r_circlePactoGlobal * 1))
                    .attr("width", r_circlePactoGlobal * 2)
                    .attr("height", r_circlePactoGlobal * 2)
                    .style('cursor', 'context-menu')
                    .attr('opacity', 1)
                    .html(function () {
                        return '<div style="font-family:Roboto;font-weight:normal;color:#000000;font-size:' + fonSize_circulos + 'px"><p align="center" style="margin-top:2px">' + value + '</p></div>'
                    })
                    .attr("transform", "rotate(" + rotation_segmentEtapa + ")")
                    .transition()
                    .duration(animDuration_arcEtapas)
                    .attr('opacity', 0.5)
                    .transition()
                    .duration(animDuration_arcEtapas / 2)
                    .attr('opacity', 1);
                index_ordenPG++
            }
        }
        //}


        //
        // ODS
        // Círculos Ods
        var numRow_circles = 3;
        var delta_segundaColumna = 0;
        var valueRol_ods;
        var x_arrCentroideOds = [];
        var y_arrCentroideOds = [];

        arcLenAOds = 3.14 / (arrayODS[i].length * (numSegmentosEtapas / 2));
        startAngleOds = startAngleReference;
        endAngleOds = startAngleOds + arcLenAOds;
        innerRadiusOds = rp(660, 'x', width, height);//640;
        outerRadiusOds = rp(640, 'x', width, height);//665;        
        if (arrayPactoGlobal[i][indexDetalle].length > cantCirclesPG) {
            cantCirclesPG = arrayPactoGlobal[i][indexDetalle].length
        }
        if (cantCirclesPG > 4) {
            innerRadiusOds = rp(700, 'x', width, height);//640;
        }
        if (cantCirclesPG > 8) {
            innerRadiusOds = rp(760, 'x', width, height);//640;
        }


        // remueve todos los circulos de ods
        for (let a = 0; a < arrayODS[i].length; a++) {
            for (let b = 0; b < arrayODS[i][a].length; b++) {
                //console.log('algo ' + i + ' ' + a + ' ' + b);
                circleOdsId = 'circleOds_' + i + '-' + a + '-' + b;
                d3.select('#' + circleOdsId).remove();
                circleOdsFOId = 'circleOds_' + i + '-' + a + '-' + b + '_FO';
                d3.select('#' + circleOdsFOId).remove();
            }

        }

        index_orden = 0;
        //console.log('#################');
        //console.log('arrayODS[' + i + '][' + indexDetalle + '].length ' + arrayODS[i][indexDetalle].length);
        for (let j = 0; j < arrayODS[i][indexDetalle].length; j++) {
            if (index_orden > numRow_circles) {
                index_orden = 0;
                startAngleOds = startAngleReference;
                endAngleOds = startAngleOds + arcLenAOds;
                innerRadiusOds = innerRadiusOds + (2.2 * r_circleOds);
                outerRadiusOds = outerRadiusOds + (2.2 * r_circleOds);
            }
            if (true) {
                // Segmentos Ods
                arcSegmentOds = d3.arc()
                    .innerRadius(innerRadiusOds)
                    .outerRadius(outerRadiusOds)
                    .startAngle(startAngleOds)     // It's in radian, so Pi = 3.14 = bottom.
                    .endAngle(endAngleOds);        // 2*Pi = 6.28 = top  
                // Renderiza sermentos
                segmentOdsId = 'segment_ods' + j;
                d3.select('#' + segmentOdsId).remove();
                startAngleOds = endAngleOds;
                endAngleOds = arcLenAOds + endAngleOds;
                var [x, y] = arcSegmentOds.centroid(arcSegmentOds);
                x_arrCentroideOds[j] = x;
                y_arrCentroideOds[j] = y;
                ///                   valueRol_ods = arrayODS[i][d][j].split('-');
                valueRol_ods = arrayODS[i][indexDetalle][j].split('-');
                value = valueRol_ods[0];
                rol = valueRol_ods[1];
                if (rol === 'c')
                    color_rol = colorRol[2];
                if (rol === 'm')
                    color_rol = colorRol[0];
                if (rol === 'o')
                    color_rol = colorRol[1];
                // Renderiza circulos
                circlePactoGlobalId = 'circleOds_' + i + '-' + indexDetalle + '-' + j;
                d3.select('#' + circlePactoGlobalId).remove();
                svgCirculosOds.append("circle")
                    .attr("id", circlePactoGlobalId)
                    //.attr("transform", 'translate(' + x_arrCentroideOds[j]-(r_circleOds*30) + ', ' + + y_arrCentroideOds[j]-(r_circleOds*30) + ')')
                    .attr("cx", x_arrCentroideOds[j])
                    .attr("cy", y_arrCentroideOds[j])
                    .attr("r", r_circleOds)
                    .style("stroke", '#000000')
                    .style("stroke-width", rp(1, 'x', width, height))
                    .style("fill", color_rol)
                    .attr("transform", "rotate(" + rotation_segmentEtapa + ")")
                    .transition()
                    .duration(animDuration_arcEtapas)
                    .attr('opacity', 0.5)
                    .transition()
                    .duration(animDuration_arcEtapas / 2)
                    .attr('opacity', 1);
                circlePactoGlobalId = 'circleOds_' + i + '-' + indexDetalle + '-' + j + '_FO';
                d3.select('#' + circlePactoGlobalId).remove();
                svgCirculosOds.append('foreignObject')
                    .attr("id", circlePactoGlobalId)
                    //.attr("transform", 'translate(' + x_clickAreaArcoiris + ', ' + y_clickAreaArcoiris + ')')
                    .attr("x", x_arrCentroideOds[j] - r_circleOds)
                    .attr("y", y_arrCentroideOds[j] - r_circleOds)
                    .attr("width", r_circleOds * 2)
                    .attr("height", r_circleOds * 2)
                    .style('cursor', 'context-menu')
                    .html(function () {
                        return '<div style="font-family:Roboto;font-weight:normal;color:#000000;font-size:' + fonSize_circulos + 'px"><p align="center" style="margin-top:2px">' + value + '</p></div>'
                    })
                    .attr("transform", "rotate(" + rotation_segmentEtapa + ")")
                    .transition()
                    .duration(animDuration_arcEtapas)
                    .attr('opacity', 0.5)
                    .transition()
                    .duration(animDuration_arcEtapas / 2)
                    .attr('opacity', 1);
                index_orden++;
            }

        } // end arrayODS[i][indexDetalle].length
    }
}
export function disableClickDatellaPractica(arrIdentificadoresCirculos, arrIdentificadoresCirculosFO, arrayEtapas, arrayPactoGlobal, arrayODS) {
    var index_i = 0;
    var index_d = 0;
    var index_j = 0;

    //var limite = arrayEtapas.length*
    // Segmentos de etapas, Pacto Global y ODS
    for (let i = 0; i < arrayEtapas.length; i++) {
        //
        // Segmentos Pacto Global
        // Por cada etapa recorre detalles de Pacto Global
        //for (let d = 0; d < arrayPactoGlobal[i].length; d++) {
        //    //segmentTextPactoGlobalId = 'segmentTextPactoGlobal_' + i + 'FO';
        //    // Por cada detalle recorre principios de Pacto Global
        //    for (let j = 0; j < arrayPactoGlobal[i][d].length; j++) {
        //        d3.select('#' + 'circlePactoGlobal_' + i + '-' + d + '-' + j).remove();
        //        d3.select('#' + 'circlePactoGlobal_' + i + '-' + d + '-' + j + '_FO').remove();
        //    }
        //}

        //
        // ODS
        // Círculos Ods
        // Por cada etapa recorre detalles de Ods
        //for (let d = 0; d < arrayODS[index_i].length; d++) {
        //    //segmentTexetOdsId = 'segmentTextOds_' + d + 'FO';
        //    // por cada detalle Recorre cada ODS
        //    console.log(index_i + ' ' + index_d + ' ' + index_j);
        //    //for (let j = 0; j < arrayODS[i][d].length; j++) {
        //    //    // Renderiza circulos
        //    //    //d3.select('#' + 'circleOds_' + i + '-' + d + '-' + j).remove();
        //    //    //d3.select('#circleOds_' + i + '-' + d + '-' + j + '_FO').remove();
        //    //    //arrIdentificadoresCirculos[index] = '#' + 'circleOds_' + i + '-' + d + '-' + j;
        //    //    //arrIdentificadoresCirculosFO[index] = '#' + 'circleOds_' + i + '-' + d + '-' + j + '_FO';
        //    //    index_j++;
        //    //}
        //    index_d++;
        //}// end 'for (let d = 0; d < arrayODS[i].length; d++)'
        index_i++;
    }
}

export function setTitleContentDetalle(id, text, duration, tipo, fonSize_tipo) {
    let titulo_a = 'Objetivos de Desarrollo Sostenible';
    let titulo_b = 'Los Diez Principios del Pacto Mundial de las Naciones Unidas';
    let block;
    if (tipo == 'ods')
        block = '<P style="font-family:Oswald;color:#909090;font-size:' + fonSize_tipo + 'px">' + titulo_a + '</P>';
    else
        block = '<P style="font-family:Oswald;color:#909090;font-size:' + fonSize_tipo + 'px">' + titulo_b + '</P>';

    d3.select(id)
        .html(function () {
            return block + '<p style="font-family:Oswald;color:#737373">' + text + '</p>';
        })
        .attr('opacity', 0.5)
        .transition()
        .duration(duration)
        .attr('opacity', 1);
}
export function setBodyContentDetalle(id, text, duration) {
    d3.select(id)
        .html(function () {
            return '<p style="font-family:Roboto;color:#333333">' + text + '</p>';
        })
        .attr('opacity', 0.5)
        .transition()
        .duration(duration)
        .attr('opacity', 1);
}

export function setActivaNodo(arrayNodos, id) {
    const coord_x = 0;
    const coord_y = 1;
    const estado_nodo = 2;
    const relacion_pacto_global_nodo = 3;
    const relacion_ODS_nodo = 4;
    const color_relacion = 5;
    if (arrayNodos[id][estado_nodo] == 1)
        arrayNodos[id][estado_nodo] = 0;
    else
        arrayNodos[id][estado_nodo] = 1;

    return arrayNodos;
}

export function setDesactivaNodos(arrayNodos) {
    const coord_x = 0;
    const coord_y = 1;
    const estado_nodo = 2;
    const relacion_pacto_global_nodo = 3;
    const relacion_ODS_nodo = 4;
    const color_relacion = 5;
    for (let i = 0; i < arrayNodos.length; i++) {
        arrayNodos[i][estado_nodo] = 0;
    }

    return arrayNodos;
}

export function getRelationshipLinePG(svg, width, arrayNodosPracticas, arrayNodosPactoGlobal, strokeWidth, x_clickAreaArcoiris, y_clickAreaArcoiris) {
    //console.log('getRelationshipLinePG');
    //console.log(arrayNodosPactoGlobal);
    var coord_x = 0;
    var coord_y = 1;
    var estado_nodo = 2;
    var relacion_pacto_global_nodo = 3;
    var relacion_ODS_nodo = 4;
    var color_relacion = 5;

    // Recorrer ambos arreglos
    // recorre las practicas
    var x1, y1, x2, y2;
    for (let P = 0; P < arrayNodosPracticas.length; P++) {

        // recorre las etapas dentro de practicas
        for (let E = 0; E < arrayNodosPracticas[P].length; E++) {

            // recorre pacto global
            for (let N = 0; N < arrayNodosPactoGlobal.length; N++) {

                // comprobar si embos nodos están activados estado_nodo
                if (arrayNodosPracticas[P][E][estado_nodo] == 1) {
                    // comprobar si embos nodos están activados estado_nodo
                    if (arrayNodosPactoGlobal[N][estado_nodo] == 1) {
                        // comprobar si el valor de la relación pacto global de los nodos es distinto de '0'
                        if (arrayNodosPracticas[P][E][relacion_pacto_global_nodo] != '0') {
                            // extraer los valores de relación
                            var arrRelaciones = arrayNodosPracticas[P][E][relacion_pacto_global_nodo].split('-');
                            //console.log('arrayNodosPracticas[P][E][relacion_pacto_global_nodo] ' + arrayNodosPracticas[P][E][relacion_pacto_global_nodo] + ' ' + arrRelaciones.length)
                            // recorre las relaciones
                            for (let i = 0; i < arrRelaciones.length; i++) {
                                if (arrRelaciones[i] == (N + 1)) {
                                    //console.log('arrRelaciones[i]' + arrRelaciones[i] + ' ' + (N + 1))
                                    //var delta_translate_x = 1052;
                                    //var delta_translate_y = 750;
                                    // dibujar una línea color mandante, provedor o compartida
                                    //x1 = relPos(1052, width);
                                    x1 = x_clickAreaArcoiris + arrayNodosPracticas[P][E][coord_x];
                                    y1 = y_clickAreaArcoiris + arrayNodosPracticas[P][E][coord_y];
                                    x2 = arrayNodosPactoGlobal[N][coord_x];
                                    y2 = arrayNodosPactoGlobal[N][coord_y];
                                    //console.log('x1 ' + x1 + ', y1 ' + y1 + ', x2 ' + x2 + ', y2 ' + y2 )
                                    var relacionesPactoGlobal = svg.append('g')
                                        .attr("id", 'relaciones_pacto_global_' + N)
                                    relacionesPactoGlobal.append('line')
                                        .attr("id", 'linea_' + P + '_' + E + '_' + N + '_' + i)
                                        .style("stroke", arrayNodosPracticas[P][E][color_relacion])
                                        .style("stroke-width", strokeWidth)
                                        .attr("x1", x1)
                                        .attr("y1", y1)
                                        .attr("x2", x2)
                                        .attr("y2", y2);
                                }

                            }
                        }
                    } else {
                        d3.select('#relaciones_pacto_global_' + N).remove()
                    }
                }
            }

        }

    }/** */




}

export function getRelationshipLinePracticaPG(svg, width, arrayNodosPracticasPactoGlobal, arrayNodosPactoGlobal, strokeWidth, x_clickAreaArcoiris, y_clickAreaArcoiris, id, rol, color, colorRol) {
    var coord_x = 0;
    var coord_y = 1;
    var estado_nodo = 2;
    var relacion_pacto_global_nodo = 3;
    var color_relacion = 4;

    console.log('getRelationshipLinePracticaPG ' + arrayNodosPracticasPactoGlobal[id][estado_nodo])

    var r_nodoPractica = relPos(15, width);
    var color_nodoPractica = '#3F3F3E';
    var strokeWidth_nodoPractica = relPos(3, width);
    var _colorRol = colorRol
    switch (rol) {
        case 'm':
            _colorRol = colorRol[0];
            break;
        case 'c':
            _colorRol = colorRol[1];
            break;
        case 'o':
            _colorRol = colorRol[2];
    }

    var x1, y1, x2, y2;
    var lineGroudId = 'relaciones_pactoGlobal_' + id + '_' + rol;
    console.log('lineGroudId ' + lineGroudId)
    var relacionesPactoGlobal = svg.append('g').attr("id", lineGroudId)
    for (let N = 0; N < arrayNodosPactoGlobal.length; N++) {
        // comprobar si embos nodos están activados estado_nodo
        if (arrayNodosPracticasPactoGlobal[id][estado_nodo] == 1) {
            // comprobar si el valor de la relación pacto global de los nodos es distinto de '0'
            if (arrayNodosPracticasPactoGlobal[id][relacion_pacto_global_nodo] != '') {
                // extraer los valores de relación
                var arrRelaciones = arrayNodosPracticasPactoGlobal[id][relacion_pacto_global_nodo].split('-');
                // recorre las relaciones
                for (let i = 0; i < arrRelaciones.length; i++) {
                    //numero, color mandante, color compartido, color otro
                    var arrNodo = arrRelaciones[i].split(',');
                    if (arrNodo[0] == (N + 1)) {
                        for (let j = 0; j < arrNodo.length; j++) {
                            var arrRol = arrNodo[1].split('');
                            var circleId = '#circle_' + rol + id;
                            if (rol == arrRol[j]) {
                                d3.select(circleId).attr('opacity', 1);
                                // dibujar una línea color mandante, provedor o compartida
                                x1 = x_clickAreaArcoiris + arrayNodosPracticasPactoGlobal[id][coord_x];
                                y1 = y_clickAreaArcoiris + arrayNodosPracticasPactoGlobal[id][coord_y];
                                x2 = arrayNodosPactoGlobal[N][coord_x];
                                y2 = arrayNodosPactoGlobal[N][coord_y];

                                relacionesPactoGlobal.append('line')
                                    .attr("id", 'linea_' + id + '_' + N + '_' + i + '_' + rol)
                                    .style("stroke", color)
                                    .style("stroke-width", strokeWidth)
                                    .attr("x1", x1)
                                    .attr("y1", y1)
                                    .attr("x2", x2)
                                    .attr("y2", y2);

                                relacionesPactoGlobal.append("circle")
                                    .attr("id", 'circle_' + rol + i)
                                    .attr("cx", x1)
                                    .attr("cy", y1)
                                    .attr("r", r_nodoPractica)
                                    .style("stroke", color_nodoPractica)
                                    .style("stroke-width", strokeWidth_nodoPractica)
                                    .attr('opacity', 1)
                                    .style("fill", _colorRol);
                            }
                        }
                    }
                }
            }
        } else {
            console.log('lineGroudId ' + lineGroudId);
            d3.select('#' + lineGroudId).remove();
        }
    }
}

export function getRelationshipLinePracticaODS(svg, width, arrayNodosPracticasODS, arrayNodosODS, strokeWidth, x_clickAreaArcoiris, y_clickAreaArcoiris, id, rol, color, colorRol) {
    var coord_x = 0;
    var coord_y = 1;
    var estado_nodo = 2;
    var relacion_pacto_global_nodo = 3;
    var color_relacion = 4;

    var r_nodoPractica = relPos(15, width);
    var color_nodoPractica = '#3F3F3E';
    var strokeWidth_nodoPractica = relPos(3, width);
    var _colorRol = colorRol
    switch (rol) {
        case 'm':
            _colorRol = colorRol[0];
            break;
        case 'c':
            _colorRol = colorRol[1];
            break;
        case 'o':
            _colorRol = colorRol[2];
    }

    var x1, y1, x2, y2;
    var lineGroudId = 'relaciones_ODS_' + id + '_' + rol;
    var relacionesPactoGlobal = svg.append('g').attr("id", lineGroudId)
    for (let N = 0; N < arrayNodosODS.length; N++) {
        // comprobar si embos nodos están activados estado_nodo
        if (arrayNodosPracticasODS[id][estado_nodo] == 1) {
            // comprobar si el valor de la relación pacto global de los nodos es distinto de '0'
            if (arrayNodosPracticasODS[id][relacion_pacto_global_nodo] != '') {
                // extraer los valores de relación
                var arrRelaciones = arrayNodosPracticasODS[id][relacion_pacto_global_nodo].split('-');
                // recorre las relaciones
                for (let i = 0; i < arrRelaciones.length; i++) {
                    //numero, color mandante, color compartido, color otro
                    var arrNodo = arrRelaciones[i].split(',');
                    if (arrNodo[0] == (N + 1)) {
                        var arrRol = arrNodo[1].split('');
                        var circleId = '#circle_' + rol + id;
                        for (let j = 0; j < arrRol.length; j++) {
                            if (rol == arrRol[j]) {
                                d3.select(circleId).attr('opacity', 1);
                                // dibujar una línea color mandante, provedor o compartida
                                x1 = x_clickAreaArcoiris + arrayNodosPracticasODS[id][coord_x];
                                y1 = y_clickAreaArcoiris + arrayNodosPracticasODS[id][coord_y];
                                x2 = arrayNodosODS[N][coord_x];
                                y2 = arrayNodosODS[N][coord_y];

                                relacionesPactoGlobal.append('line')
                                    .attr("id", 'linea_' + id + '_' + N + '_' + i + '_' + rol)
                                    .style("stroke", color)
                                    .style("stroke-width", strokeWidth)
                                    .attr("x1", x1)
                                    .attr("y1", y1)
                                    .attr("x2", x2)
                                    .attr("y2", y2);

                                relacionesPactoGlobal.append("circle")
                                    .attr("id", 'circle_' + rol + i)
                                    .attr("cx", x1)
                                    .attr("cy", y1)
                                    .attr("r", r_nodoPractica)
                                    .style("stroke", color_nodoPractica)
                                    .style("stroke-width", strokeWidth_nodoPractica)
                                    .attr('opacity', 1)
                                    .style("fill", _colorRol);
                            }
                        }
                    }
                }
            }
        } else {
            d3.select('#' + lineGroudId).remove();
        }
    }
}

export function getRelationshipLinePGPractica(svg, width, arrayNodosPracticasPactoGlobal, arrayNodosPactoGlobal, strokeWidth, x_clickAreaArcoiris, y_clickAreaArcoiris, id, colorPactoGlobal, rol, colorRol, color_nodoPractica) {
    var coord_x = 0;
    var coord_y = 1;
    var estado_nodo = 2;
    var relacion_pacto_global_nodo = 3;
    console.log('getRelationshipLinePGPractica ' + arrayNodosPactoGlobal[id][estado_nodo]);

    var r_nodoPractica = relPos(15, width);
    var color_nodoPractica = '#3F3F3E';
    var strokeWidth_nodoPractica = relPos(3, width);
    var _colorRol = colorRol
    switch (rol) {
        case 'm':
            _colorRol = colorRol[0];
            break;
        case 'c':
            _colorRol = colorRol[1];
            break;
        case 'o':
            _colorRol = colorRol[2];
            break;
    }

    // recorre las practicas

    var x1, y1, x2, y2;
    var lineGroudId = 'relaciones_pacto_global_practica_' + id + rol;
    var relacionesPactoGlobal = svg.append('g').attr("id", lineGroudId)
    for (let N = 0; N < arrayNodosPracticasPactoGlobal.length; N++) {

        var circleId = '#circle_' + rol + N;

        // comprobar si embos nodos están activados estado_nodo
        if (arrayNodosPactoGlobal[id][estado_nodo] == 1) {
            //console.log('arrayNodosPactoGlobalv[id][estado_nodo] ' + arrayNodosPactoGlobal[id][estado_nodo]);
            // comprobar si el valor de la relación pacto global de los nodos es distinto de '0'
            if (arrayNodosPactoGlobal[id][relacion_pacto_global_nodo] != '') {
                // extraer los valores de relación
                var arrRelaciones = arrayNodosPactoGlobal[id][relacion_pacto_global_nodo].split('-');

                //console.log('arrayNodosPracticas[P][E][relacion_pacto_global_nodo] ' + arrayNodosPracticas[P][E][relacion_pacto_global_nodo] + ' ' + arrRelaciones.length)
                // recorre las relaciones
                for (let i = 0; i < arrRelaciones.length; i++) {
                    if (arrRelaciones[i] == (N + 1)) {
                        //d3.select(circleId).attr('opacity', 1);


                        // dibujar una línea color mandante, provedor o compartida
                        x1 = arrayNodosPactoGlobal[id][coord_x];
                        y1 = arrayNodosPactoGlobal[id][coord_y];
                        x2 = x_clickAreaArcoiris + arrayNodosPracticasPactoGlobal[N][coord_x];
                        y2 = y_clickAreaArcoiris + arrayNodosPracticasPactoGlobal[N][coord_y];

                        //console.log('x1 ' + x1 + ', y1 ' + y1 + ', x2 ' + x2 + ', y2 ' + y2 )
                        relacionesPactoGlobal.append('line')
                            .attr("id", 'linea_' + id + '_' + N + '_' + i)
                            .style("stroke", colorPactoGlobal[id])
                            .style("stroke-width", strokeWidth)
                            .attr("x1", x1)
                            .attr("y1", y1)
                            .attr("x2", x2)
                            .attr("y2", y2);


                        relacionesPactoGlobal.append("circle")
                            .attr("id", 'circle_' + rol + i)
                            .attr("cx", x2)
                            .attr("cy", y2)
                            .attr("r", r_nodoPractica)
                            .style("stroke", color_nodoPractica)
                            .style("stroke-width", strokeWidth_nodoPractica)
                            .attr('opacity', 1)
                            .style("fill", _colorRol);

                    }
                }
            }
        } else {
            console.log('remove ' + lineGroudId);
            d3.select('#' + lineGroudId).remove();
            //d3.select(circleId).attr('opacity', 0);
        }
    }
}

export function getRelationshipLineODSPractica(svg, width, arrayNodosPracticasODS, arrayNodosODS, strokeWidth, x_clickAreaArcoiris, y_clickAreaArcoiris, id, colorODS, rol, colorRol, color_nodoPractica) {
    var coord_x = 0;
    var coord_y = 1;
    var estado_nodo = 2;
    var relacion_pacto_global_nodo = 3;
    var color_relacion = 4;
    console.log('getRelationshipLineODSPractica ' + arrayNodosODS[id][estado_nodo]);

    var r_nodoPractica = relPos(15, width);
    var color_nodoPractica = '#3F3F3E';
    var strokeWidth_nodoPractica = relPos(3, width);
    var _colorRol = colorRol
    switch (rol) {
        case 'm':
            _colorRol = colorRol[0];
            break;
        case 'c':
            _colorRol = colorRol[1];
            break;
        case 'o':
            _colorRol = colorRol[2];
            break;
    }
    //console.log(lineGroudId);
    var x1, y1, x2, y2;
    var lineGroudId = 'relaciones_ODS_practica_' + id + rol;
    var relacionesODS = svg.append('g').attr("id", lineGroudId)
    for (let N = 0; N < arrayNodosPracticasODS.length; N++) {
        var circleId = '#circle_' + rol + N;
        // comprobar si embos nodos están activados estado_nodo
        if (arrayNodosODS[id][estado_nodo] == 1) {
            // comprobar si el valor de la relación pacto global de los nodos es distinto de '0'
            if (arrayNodosODS[id][relacion_pacto_global_nodo] != '') {
                // extraer los valores de relación
                var arrRelaciones = arrayNodosODS[id][relacion_pacto_global_nodo].split('-');
                // recorre las relaciones
                for (let i = 0; i < arrRelaciones.length; i++) {
                    if (arrRelaciones[i] == (N + 1)) {
                        //d3.select(circleId).attr('opacity', 1);
                        // dibujar una línea color mandante, provedor o compartida
                        x1 = arrayNodosODS[id][coord_x];
                        y1 = arrayNodosODS[id][coord_y];
                        x2 = x_clickAreaArcoiris + arrayNodosPracticasODS[N][coord_x];
                        y2 = y_clickAreaArcoiris + arrayNodosPracticasODS[N][coord_y];
                        //console.log('x1 ' + x1 + ', y1 ' + y1 + ', x2 ' + x2 + ', y2 ' + y2 )
                        //console.log('color ' + colorODS[id]);

                        relacionesODS.append('line')
                            .attr("id", 'linea_' + id + '_' + N + '_' + i)
                            .style("stroke", colorODS[id])
                            .style("stroke-width", strokeWidth)
                            .attr("x1", x1)
                            .attr("y1", y1)
                            .attr("x2", x2)
                            .attr("y2", y2);

                        relacionesODS.append("circle")
                            .attr("id", 'circle_' + rol + i)
                            .attr("cx", x2)
                            .attr("cy", y2)
                            .attr("r", r_nodoPractica)
                            .style("stroke", color_nodoPractica)
                            .style("stroke-width", strokeWidth_nodoPractica)
                            .attr('opacity', 1)
                            .style("fill", _colorRol);
                    }

                }
            }
        } else {
            //console.log('remove ' + lineGroudId);
            d3.select('#' + lineGroudId).remove();
            //d3.select(circleId).attr('opacity', 0);
        }
    }
}

export function setClearRelationshipsPG(arrayNodosPactoGlobal) {
    //console.log('setClearRelationshipsPG arrayNodosPactoGlobal.length: ' + arrayNodosPactoGlobal.length);
    for (let i = 0; i < arrayNodosPactoGlobal.length; i++) {
        d3.select('#relaciones_pacto_global_practica_' + i + 'm').remove();
        d3.select('#relaciones_pacto_global_practica_' + i + 'c').remove();
        d3.select('#relaciones_pacto_global_practica_' + i + 'o').remove();
    }
}
export function setClearRelationshipsODS(arrayNodosODS) {
    //console.log('setClearRelationshipsODS arrayNodosODS.length: ' + arrayNodosODS.length);
    for (let i = 0; i < arrayNodosODS.length; i++) {
        //console.log('relaciones_ODS_practica_' + i);
        d3.select('#relaciones_ODS_practica_' + i + 'm').remove();
        d3.select('#relaciones_ODS_practica_' + i + 'c').remove();
        d3.select('#relaciones_ODS_practica_' + i + 'o').remove();
    }
}
export function setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal) {
    //console.log('setClearRelationshipsODS arrayNodosODS.length: ' + arrayNodosODS.length);
    for (let i = 0; i < arrayNodosPracticasPactoGlobal.length; i++) {
        d3.select('#relaciones_pacto_global_' + i + '_m').remove();
        d3.select('#relaciones_pacto_global_' + i + '_c').remove();
        d3.select('#relaciones_pacto_global_' + i + '_o').remove();
        var circleId_m = '#circle_m' + i;
        var circleId_c = '#circle_c' + i;
        var circleId_o = '#circle_o' + i;
        //console.log(circleId_m + ' ' + circleId_c + ' ' + circleId_o);
        d3.select(circleId_m).attr('opacity', 0);
        d3.select(circleId_c).attr('opacity', 0);
        d3.select(circleId_o).attr('opacity', 0);
        //d3.select('#relaciones_pacto_global_practica_' + i).remove();
    }
}
export function setClearHighlightPG(arrayNodosPactoGlobal) {
    //console.log('setClearRelationshipsPG arrayNodosPactoGlobal.length: ' + arrayNodosPactoGlobal.length);
    d3.select('#svgLineasRelaciones').selectAll("*").remove();
    for (let i = 0; i < arrayNodosPactoGlobal.length; i++) {
        //d3.select('#svgNodosPactoGlobalId_area' + i)
        d3.select('#svgNodosPactoGlobalId_' + i).style("stroke", 'none');
    }
}
export function setClearHighlightODS(arrayNodosODS) {
    //console.log('setClearRelationshipsODS arrayNodosODS.length: ' + arrayNodosODS.length);
    d3.select('#svgLineasRelaciones').selectAll("*").remove();
    for (let i = 0; i < arrayNodosODS.length; i++) {
        d3.select('#svgNodosODSId_' + i).style("stroke", 'none');
    }
}

export function getcomoUsar(svg, width, height) {
    var globoX_link = relPos(70, width);
    var globoY_link = relPos(750, width);
    var globoWidth_link = relPos(200, width);
    var globoHeight_link = relPos(100, width);
    var strokeWidth_link = relPos(2, width);
    var globoRect_rx_ry = relPos(8.78, width);
    var globoMargin = relPos(0.1, width);
    var textMargin_link = relPos(0.1, width);
    var link_link = '/guia_de_gestion/como_usar_la_guia_practicas';
    var id_link = 'link_1';
    var text = [
        '<b>Cómo usar</b><br><br>Prácticas'
    ];
    setLinkRef(svg, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
}