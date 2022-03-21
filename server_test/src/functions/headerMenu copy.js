import React, { Component } from "react";
import * as d3 from 'd3';
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "./referenceSize";
import { setHtmlText, setHtmlTextLink } from "./htmlText";
const width = getReferenceSizeWidth();
const height = getReferenceSizeHeight();

const stdDeviation_filter_1 = rp(3, 'x', width, height); // x_node_1
const stdDeviation_filter_2 = rp(5, 'x', width, height); // x_node_1
const dx_filter_1 = rp(-5, 'x', width, height); // x_node_1
const dy_filter_1 = rp(3, 'x', width, height); // x_node_1
const dx_filter_2 = rp(6, 'x', width, height); // x_node_1
const dy_filter_2 = rp(6, 'x', width, height); // x_node_1
const floodColor_filter_1 = '#717171';
const floodColor_filter_2 = '#1a1a1a';

export function getLabelLinkGuia(){
    var menuLabel = [
        {
          label: 'Bienvenida',        
          link: '/guia_de_gestion/bienvenida',
          pos: 0
        },
        {
          label: '¿Qué es?',        
          link: '/guia_de_gestion/que_es',
          pos: 0
        },
        {
          label: '¿Para quién?',        
          link: '/guia_de_gestion/para_quien',
          pos: 0
        },
        {
          label: 'Aplicación Estratégica y Táctica',        
          link: '/guia_de_gestion/aplicacion_estrategica_y_tactica',
          pos: 0
        },
        {
          label: '¿Por qué es necesario?',        
          link: '/guia_de_gestion/por_que_es_necesario',
          pos: 0
        },
        {
          label: 'Impactos Positivos',        
          link: '/guia_de_gestion/impactos_positivos',
          pos: 0
        },
        {
          label: 'Vínculo Mandante-Proveedor',        
          link: '/guia_de_gestion/vinculo_mandante_proveedor',
          pos: 0
        },
        {
          label: 'Metodología',        
          link: '/guia_de_gestion/metodologia',
          pos: 0
        },
        {
          label: 'Origen de las buenas prácticas',        
          link: '/guia_de_gestion/origen_de_las_buenas_practicas',
          pos: 0
        },
        {
          label: 'Contenido',       
          link: '/guia_de_gestion/contenido',
          pos: 0
        },
        {
          label: 'Etapas Cadena de Suministro',       
          link: '/etapas',
          pos: 0
        },
        {
          label: 'Buenas Prácticas',        
          link: '/buenas_practicas',
          pos: 0
        },
        {
          label: 'Próximos pasos',       
          link: '/guia_de_gestion',
          pos: 0
        },
        {
          label: 'Agradecimientos',       
          link: '/guia_de_gestion/agradecimientos',
          pos: 0
        },
      ];
    return menuLabel
}

export function behindHorizontalLine(svg, width, height, fill) {
    // header line menu behind circles horizontal
    svg.append('rect')
        .attr('id', 'behindHorizontalLine')
        .attr('fill', fill) //'url(#bgLinGradHorizontal)'
        .attr('x', rp(548.58, 'x', width, height))
        .attr('y', rp(51.5, 'x', width, height))
        .attr('width', rp(1156.63, 'x', width, height))
        .attr('height', rp(10.3, 'x', width, height))
        .attr("rx", rp(8.05, 'x', width, height))
        .attr("ry", rp(8.05, 'x', width, height))
}

export function curvedLine(svg, width, height) {
    const curve = d3.line().curve(d3.curveNatural);
    // const points = [[200, 281], [389, 279], [445, 230], [500, 100], [520, 60], [540, 56]];
    const points = [[rp(202.11, 'x', width, height),
    rp(289.79, 'x', width, height)],
    [rp(393.45, 'x', width, height),
    rp(288.06, 'x', width, height)],
    [rp(449.65, 'x', width, height),
    rp(237.11, 'x', width, height)],
    [rp(505.27, 'x', width, height),
    rp(102.99, 'x', width, height)],
    [rp(526.03, 'x', width, height),
    rp(61.86, 'x', width, height)],
    [rp(547.01, 'x', width, height),
    rp(57.79, 'x', width, height)]]

    svg.append('path')
        .attr('id', 'curvedLine')
        .attr('d', curve(points))
        .attr('stroke', 'url(#bgLinGradCurved)') //bgLinGradA
        .attr('stroke-width', rp(9.65, 'x', width, height))
        .attr('fill', 'none');
}


export function getPositionMenuSelected(numberPage){

    return rp(564.71, 'x', width, height) + (numberPage * (rp(100, 'x', width, height)));

}
export function menuCircles(svg, width, height, selectedPosition, opacity, noSelected) {

    var tooltipPosition = [
        {
            x: rp(520, 'x', width, height),
            w: rp(130, 'x', width, height),
        },
        {
            x: rp(625, 'x', width, height),
            w: rp(140, 'x', width, height),
        },
        {
            x: rp(705, 'x', width, height),
            w: rp(170, 'x', width, height),
        },
        {
            x: rp(700, 'x', width, height),
            w: rp(90, 'x', width, height),
        },
        {
            x: rp(855, 'x', width, height),
            w: rp(80, 'x', width, height),
        },
        {
            x: rp(980, 'x', width, height),
            w: rp(190, 'x', width, height),
        },
        {
            x: rp(1040, 'x', width, height),
            w: rp(300, 'x', width, height),
        },
        {
            x: rp(1210, 'x', width, height),
            w: rp(330, 'x', width, height),
        },
        {
            x: rp(1205, 'x', width, height),
            w: rp(500, 'x', width, height),
        },
        {
            x: rp(1420, 'x', width, height),
            w: rp(150, 'x', width, height),
        },
        {
            x: rp(1430, 'x', width, height),
            w: rp(150, 'x', width, height),
        },
        {
            x: rp(1540, 'x', width, height),
            w: rp(150, 'x', width, height),
        },
    ]

    var menuLabel = getLabelLinkGuia()
    if(noSelected == undefined){
        noSelected = 0
    }

    if(noSelected == 0){
        svg.append("circle")
            .attr("id", 'circleGradientShadow')
            .attr("cx", selectedPosition)
            .attr("cy", rp(56.75, 'x', width, height))
            .attr("r", rp(32, 'x', width, height))
            .style("fill", "#b3b3b3")
            .attr("filter", "url(#selectedcircleshadow)")
            .style("opacity", opacity);
    }
    

    for (var i = 0; i < 12; i++) {

        svg.append('rect')
            .attr('id', 'tooltip' + i)
            .attr('style', 'position: absolute; opacity: 0;')
            .attr('fill', '#b3b3b3')
            .attr('stroke', '#b3b3b3')
            .attr("x", tooltipPosition[i].x)
            .attr("y", rp(95, 'y', width, height))
            .attr("rx", rp(10.67, 'x', width, height))
            .attr("ry", rp(10.67, 'x', width, height))
            .transition()
            .delay(200)
            .attr('width', rp(menuLabel[i].label.length, 'x', width, height) *  rp(10, 'x', width, height))
            .attr('height', rp(24, 'x', width, height))

        setHtmlText(svg,
            0,
            'menuLabel' + i,
            tooltipPosition[i].x,
            rp(99, 'y', width, height),
            rp(menuLabel[i].label.length, 'x', width, height) *  rp(10, 'x', width, height),
            (rp(16, 'x', width, height)),
            menuLabel[i].label,
            (rp(12.8, 'x', width, height)),
            'Roboto',
            'center',
            0,
            'white',
            '')

        svg.append("circle")
            .attr("transform", "translate(" +
                rp(564.71, 'x', width, height) +
                ", " +
                rp(56.77, 'x', width, height) +
                ")")
            .attr("id", 'circle' + i)
            .attr("cx", i * (rp(100, 'x', width, height)))
            .attr("cy", 0)
            .attr("r", rp(17.55, 'x', width, height))
            .style("cursor", "pointer")
            .style("fill", "#b3b3b3")
            .style("stroke", "#4d4d4d")
            .attr("filter", "url(#circleshadow)")
            .style("stroke-width", rp(1.61, 'x', width, height))
            .on("click", function () {
                d3.select('#rectWhiteFade')
                    .attr("height", height)
                    .transition()
                    .duration(50)
                    .attr('opacity', 1);
                    window.location.href = menuLabel[i].link
            })
            .on('mouseover', function () {
                svg.select('#tooltip' + i).style('opacity', 1)
                svg.select('#menuLabel' + i).style('opacity', 1)
            })
            .on('mouseout', function () {
                svg.select('#tooltip' + i).style('opacity', 0)
                svg.select('#menuLabel' + i).style('opacity', 0)
            })
    }
    if(noSelected == 0){
        svg.append("circle")
            .attr("cx", selectedPosition)
            .attr("cy", rp(56.75, 'x', width, height))
            .attr("r", rp(32, 'x', width, height))
            .attr("id", 'circleGradient')
            .style("stroke", 'url(#bgLinGradB)')
            .style("stroke-width", rp(9.65, 'x', width, height))
            .style("fill", "#b3b3b3")
            .style("opacity", opacity);
    }
    
}
export function breadCrumbGuia(svg, positionPage) {

    var menuLabel = getLabelLinkGuia()

    setHtmlTextLink(svg, 1, 'breadcrumb1',
        rp(64, 'x', width, height),
        rp(148.47, 'x', width, height),
        (rp(35, 'x', width, height)),
        (rp(14.77, 'x', width, height)),
        'Inicio',
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, '#000000', '', '/')

    setHtmlTextLink(svg,
        1,
        'breadCrumb2',
        rp(99, 'x', width, height),
        rp(148.47, 'x', width, height),
        (rp(122, 'x', width, height)),
        (rp(14.77, 'x', width, height)),
        '\u00A0>\u00A0 Guía de Gestión',
        (rp(12.8, 'x', width, height)),
        'Roboto',
        'left',
        0,
        '#000000',
        '',
        '/guia_de_gestion')

    setHtmlText(svg,
        1,
        'breadCrumb3',
        rp(208, 'x', width, height),
        rp(148.47, 'x', width, height),
        (rp(200, 'x', width, height)),
        (rp(14.77, 'x', width, height)),
        '\u00A0>\u00A0' + menuLabel[positionPage].label,
        (rp(12.8, 'x', width, height)),
        'Roboto',
        'left',
        0,
        '#666666',
        '')


}

export function breadcrumb(svg, width, height, string_one, string_two, link_string_two, string_three) {

    const breadcrumbPos = width / 30;
    setHtmlTextLink(svg, 1, 'breadcrumb1',
        breadcrumbPos,
        rp(148.47, 'x', width, height),
        (rp(1.92, 'x', width, height)) * (string_one.length * 3.5),
        (rp(14.77, 'x', width, height)),
        string_one,
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, '#000000', '', '/')

    let breadcrumb1Width = (rp(1.92, 'x', width, height)) * (string_one.length * 3.5);

    if (string_two.length > 0) {

        var stringW = (rp(1.92, 'x', width, height)) * ((string_two.length + 3) * 3.5)

        if (string_two.length > 35) {

            stringW = (rp(1.92, 'x', width, height)) * (35 * 3.5)
        }

        if (string_three.length > 0) {
            setHtmlTextLink(svg,
                1,
                'breadcrumb2',
                breadcrumbPos + breadcrumb1Width,
                rp(148.47, 'x', width, height),
                stringW,
                (rp(14.77, 'x', width, height)),
                '\u00A0>\u00A0' + string_two,
                (rp(12.8, 'x', width, height)),
                'Roboto',
                'left',
                0,
                '#000000',
                '',
                '/' + link_string_two)
        }
        else {
            setHtmlText(svg,
                1,
                'breadcrumb2',
                breadcrumbPos + breadcrumb1Width,
                rp(148.47, 'x', width, height),
                stringW,
                (rp(14.77, 'x', width, height)),
                '\u00A0>\u00A0' + string_two,
                (rp(12.8, 'x', width, height)),
                'Roboto',
                'left',
                0,
                '#666666',
                '')
        }


    }

    const breadcrumb2Width = (rp(7.12, 'x', width, height)) * string_two.length;

    if (string_three.length > 0) {

        setHtmlText(svg,
            1,
            'breadcrumb3',
            breadcrumbPos + breadcrumb1Width + breadcrumb2Width,
            rp(148.47, 'x', width, height),
            (rp(1.92, 'x', width, height)) * ((string_three.length + 3) * 3.5),
            (rp(14.77, 'x', width, height)),
            '\u00A0>\u00A0' + string_three,
            (rp(12.8, 'x', width, height)),
            'Roboto',
            'left',
            0,
            '#666666',
            '')

    }
}

export function headerCornerLogo(svg, width, height) {
    svg.append("image")
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-08.png")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", rp(496.13, 'x', width, height))

    svg.append("image")
        .attr('id', 'headerLogo')
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-05.png")
        .attr("x", rp(30.34, 'x', width, height))
        .attr("y", rp(30.93, 'x', width, height))
        .attr("width", rp(353.6, 'x', width, height))
        .style("cursor", "pointer")
        .on("click", function () {
            window.location.href = '/'
        })
}

export function gradients(svg) {
    const bgLinGradA = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradA")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradA.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradA.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradA.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradB = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradB")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradB.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradB.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradB.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradC = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradC")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradC.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:0.6')
        .attr('offset', '0%');
    bgLinGradC.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:0.6')
        .attr('offset', '50%');
    bgLinGradC.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:0.6')
        .attr('offset', '100%');

    const bgLinGradD = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradD")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradD.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradD.append('stop')
        .attr('style', 'stop-color:#4295B6;stop-opacity:1')
        .attr('offset', '40%');
    bgLinGradD.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradE = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradE")
        .attr("x1", "0%")
        .attr("y1", "80%")
        .attr("x2", "50%")
        .attr("y2", "0%");
    bgLinGradE.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradE.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradE.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradF = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradF")
        .attr("x1", "0%")
        .attr("y1", "80%")
        .attr("x2", "50%")
        .attr("y2", "0%");
    bgLinGradF.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:0.4')
        .attr('offset', '0%');
    bgLinGradF.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:0.4')
        .attr('offset', '50%');
    bgLinGradF.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:0.4')
        .attr('offset', '100%');

    const bgLinGradG = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradG")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "40%")
        .attr("y2", "80%");
    bgLinGradG.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradG.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradG.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradCurved = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradCurved")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradCurved.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradCurved.append('stop')
        .attr('style', 'stop-color:#2D95AB;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradCurved.append('stop')
        .attr('style', 'stop-color:#3B85AC;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradHorizontal = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradHorizontal")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradHorizontal.append('stop')
        .attr('style', 'stop-color:#3B85AC;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradHorizontal.append('stop')
        .attr('style', 'stop-color:#9B83B4;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradHorizontal.append('stop')
        .attr('style', 'stop-color:#B782B6;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradMandante = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradMandante")
        .attr("x1", "10%")
        .attr("y1", "0%")
        .attr("x2", "10%")
        .attr("y2", "90%");
    bgLinGradMandante.append('stop')
        .attr('style', 'stop-color:#9E6F9E;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradMandante.append('stop')
        .attr('style', 'stop-color:#FFFFFF;stop-opacity:1')
        .attr('offset', '20%');
    bgLinGradMandante.append('stop')
        .attr('style', 'stop-color:#FFFFFF;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradCompartido = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradCompartido")
        .attr("x1", "10%")
        .attr("y1", "0%")
        .attr("x2", "10%")
        .attr("y2", "90%");
    bgLinGradCompartido.append('stop')
        .attr('style', 'stop-color:#B3BABD;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradCompartido.append('stop')
        .attr('style', 'stop-color:#FFFFFF;stop-opacity:1')
        .attr('offset', '20%');
    bgLinGradCompartido.append('stop')
        .attr('style', 'stop-color:#FFFFFF;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradProveedor = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradProveedor")
        .attr("x1", "10%")
        .attr("y1", "0%")
        .attr("x2", "10%")
        .attr("y2", "90%");
    bgLinGradProveedor.append('stop')
        .attr('style', 'stop-color:#D9E021;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradProveedor.append('stop')
        .attr('style', 'stop-color:#FFFFFF;stop-opacity:1')
        .attr('offset', '20%');
    bgLinGradProveedor.append('stop')
        .attr('style', 'stop-color:#FFFFFF;stop-opacity:1')
        .attr('offset', '100%');

    const bgLinGradTodos = svg.append("defs").append("linearGradient")
        .attr("id", "bgLinGradTodos")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
    bgLinGradTodos.append('stop')
        .attr('style', 'stop-color:#22B573;stop-opacity:1')
        .attr('offset', '0%');
    bgLinGradTodos.append('stop')
        .attr('style', 'stop-color:#3B569D;stop-opacity:1')
        .attr('offset', '50%');
    bgLinGradTodos.append('stop')
        .attr('style', 'stop-color:#92288F;stop-opacity:1')
        .attr('offset', '100%');

    const sideBarGradient = svg.append("defs").append('linearGradient')
        .attr('id', 'sideBarGradient')
        .attr("x1", "100%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "0%");/**/
    sideBarGradient.append('stop')
        .attr('style', 'stop-color:#2FAC66;stop-opacity:1')
        .attr('offset', '30%');
    sideBarGradient.append('stop')
        .attr('style', 'stop-color:#82368C;stop-opacity:1')
        .attr('offset', '70%');

    const bgTriengleEtapasGradient = svg.append("defs").append("linearGradient")
        .attr("id", "bgTriengleEtapasGradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");
    bgTriengleEtapasGradient.append('stop')
        .attr('style', 'stop-color:#55b57c;stop-opacity:1')
        .attr('offset', '0%');
    bgTriengleEtapasGradient.append('stop')
        .attr('style', 'stop-color:#F89574;stop-opacity:1')
        .attr('offset', '30%');
    bgTriengleEtapasGradient.append('stop')
        .attr('style', 'stop-color:#F9764A;stop-opacity:1')
        .attr('offset', '45%');
    bgTriengleEtapasGradient.append('stop')
        .attr('style', 'stop-color:#9980FA;stop-opacity:1')
        .attr('offset', '60%');
    bgTriengleEtapasGradient.append('stop')
        .attr('style', 'stop-color:#886AFC;stop-opacity:1')
        .attr('offset', '80%');
    bgTriengleEtapasGradient.append('stop')
        .attr('style', 'stop-color:#C134FC;stop-opacity:1')
        .attr('offset', '100%');


}

export function shadowFilters(svg) {
    //var g1 = svg.append('g');
    var defs = svg.append("defs");

    const shadowFilter = defs.append("filter")
        .attr("id", "shadowFilter")

    shadowFilter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", stdDeviation_filter_1)
        .attr("result", "blur");
    shadowFilter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", dx_filter_1)
        .attr("dy", dy_filter_1)
        .attr("result", "offsetBlur");
    shadowFilter.append("feFlood")
        .attr("in", "offsetBlur")
        .attr("flood-color", floodColor_filter_1)
        .attr("flood-opacity", "1")
        .attr("result", "offsetColor");
    shadowFilter.append("feComposite")
        .attr("in", "offsetColor")
        .attr("in2", "offsetBlur")
        .attr("operator", "in")
        .attr("result", "offsetBlur");/**/

    var feMergeShadowFilter = shadowFilter.append("feMerge");

    feMergeShadowFilter.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMergeShadowFilter.append("feMergeNode")
        .attr("in", "SourceGraphic");

}

export function shadowFiltersReverse(svg) {
    //var g1 = svg.append('g');
    var defs = svg.append("defs");

    const shadowFiltersReverse = defs.append("filter")
        .attr("id", "shadowFiltersReverse")

    shadowFiltersReverse.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", stdDeviation_filter_2)
        .attr("result", "blur");
    shadowFiltersReverse.append("feOffset")
        .attr("in", "blur")
        .attr("dx", dx_filter_2)
        .attr("dy", dy_filter_2)
        .attr("result", "offsetBlur");
    shadowFiltersReverse.append("feFlood")
        .attr("in", "offsetBlur")
        .attr("flood-color", floodColor_filter_2)
        .attr("flood-opacity", "1")
        .attr("result", "offsetColor");
    shadowFiltersReverse.append("feComposite")
        .attr("in", "offsetColor")
        .attr("in2", "offsetBlur")
        .attr("operator", "in")
        .attr("result", "offsetBlur");/**/

    var feMergeShadowFilterReverse = shadowFiltersReverse.append("feMerge");

    feMergeShadowFilterReverse.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMergeShadowFilterReverse.append("feMergeNode")
        .attr("in", "SourceGraphic");

}

export function setTriangle(valueSetTriangle) {

    var svg = valueSetTriangle['svg']
    var x = valueSetTriangle['x']
    var y = valueSetTriangle['y']
    var vertexA = valueSetTriangle['vertexA']
    var vertexBX = valueSetTriangle['vertexBX']
    var vertexBY = valueSetTriangle['vertexBY']
    var vertexCX = valueSetTriangle['vertexCX']
    var vertexCY = valueSetTriangle['vertexCY']
    var fill = valueSetTriangle['fill']
    var filter = valueSetTriangle['filter']
    var id = valueSetTriangle['id']
    var opacity = valueSetTriangle['opacity']

    if (id == 'undefined') {
        id = 'idSetTriangle'
    }

    if (opacity == 'undefined') {
        opacity = 1
    }

    var triangles = svg.append("g")
        .attr("transform", "translate(" + x + "," + y + ")")
    triangles.append("path")
        .attr("d", "M 0 " + vertexA + " L " + vertexBX + " " + vertexBY + "L " + vertexCX + " " + vertexCY + " Z")
        .style("fill", fill)
    if (filter != '') {
        triangles.attr("filter", filter)
    }

}

export function setTriangleAdvance(valueSetTriangle) {

    var svg = valueSetTriangle['svg']
    var x = valueSetTriangle['x']
    var y = valueSetTriangle['y']
    var vertexAX = valueSetTriangle['vertexAX']
    var vertexAY = valueSetTriangle['vertexAY']
    var vertexBX = valueSetTriangle['vertexBX']
    var vertexBY = valueSetTriangle['vertexBY']
    var vertexCX = valueSetTriangle['vertexCX']
    var vertexCY = valueSetTriangle['vertexCY']
    var fill = valueSetTriangle['fill']
    var filter = valueSetTriangle['filter']

    var triangles = svg.append("g")
        .attr("transform", "translate(" + x + "," + y + ")")
    triangles.append("path")
        .attr("d", "M " + vertexAX + " " + vertexAY + " L " + vertexBX + " " + vertexBY + "L " + vertexCX + " " + vertexCY + " Z")
        .style("fill", fill)
    if (filter != '') {
        triangles.attr("filter", filter)
    }

}
// 2022-03-04
// dibuja un rect con un texto dentro
export function setGloboRect(svg, width, height, globoX, globoY, globoWidth, globoMargin, globoHeight, textMargin, text, id) {

    var textOpacity = 1;
    var fontSize = rp(12.8, 'x', width, height);
    var font = 'Roboto';
    var align = 'left';
    var color = 'black';
    var bold = '';
    var letterSpacing = '';
    var lineHeight = '';

    svg.append('rect')
        .attr('id', id)
        .attr("x", globoX)
        .attr("y", globoY)
        .attr('width', globoWidth)
        .attr('height', globoHeight)
        .attr("rx", rp(8.78, 'x', width, height))
        .attr("ry", rp(8.78, 'x', width, height))
        //.attr('style', 'position: absolute; opacity: 0;')
        .attr('fill', 'white')
        .attr('stroke', 'url(#bgLinGradC)')
        .attr("filter", 'url(#shadowFilter)');
    //.transition()
    //.delay(200)
    //console.log(text);
    setHtmlText(
        svg,
        textOpacity,
        id + '_foreanObject',
        globoX + (globoWidth * globoMargin),
        globoY + (globoHeight * globoMargin),
        globoWidth,
        globoHeight,
        text,
        fontSize,
        font,
        align,
        textMargin,
        color,
        bold,
        letterSpacing,
        lineHeight
    )

}
// 2022-03-04
// dibuja un rect con una imágen dentro
export function setGloboRectImage(svg, width, height, globoX, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath, id) {

    svg.append('rect')
        .attr('id', id)
        .attr("x", globoX)
        .attr("y", globoY)
        .attr('width', globoWidth)
        .attr('height', globoHeight)
        .attr("rx", rp(8.78, 'x', width, height))
        .attr("ry", rp(8.78, 'x', width, height))
        //.attr('style', 'position: absolute; opacity: 0;')
        .attr('fill', 'white')
        .attr('stroke', 'url(#bgLinGradC)')
        .style("stroke-width", strokeWidth)
        .attr("filter", 'url(#shadowFilter)');
    //.transition()
    //.delay(200)
    svg.append("image")
        .attr('id', id + '_image')
        .attr("xlink:href", window.location.origin + imagePath)
        .attr("x", globoX + (globoWidth * imageMargin))
        .attr("y", globoY + (globoHeight * imageMargin))
        .attr("width", imageWidth);

}
// 2022-03-04
// dibuja un rect con un botón con una imágen dentro
export function setGloboRectButtonImage(svg, width, height, globoX, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath, id, arrId, clickId, arrMenuId) {

    svg.append('rect')
        .attr('id', id)
        .attr("x", globoX)
        .attr("y", globoY)
        .attr('width', globoWidth)
        .attr('height', globoHeight)
        .attr("rx", rp(8.78, 'x', width, height))
        .attr("ry", rp(8.78, 'x', width, height))
        //.attr('style', 'position: absolute; opacity: 0;')
        .attr('fill', 'white')
        .attr('stroke', 'url(#bgLinGradA)')
        .style("stroke-width", strokeWidth)
        .attr("filter", 'url(#shadowFilter)');
    //.transition()
    //.delay(200)
    svg.append("image")
        .attr('id', id + '_image')
        .attr("xlink:href", window.location.origin + imagePath)
        .attr("x", globoX + (globoWidth * imageMargin))
        .attr("y", globoY + (globoHeight * imageMargin))
        .attr("width", imageWidth);

    svg.append('rect')
        .attr('id', id + '_clickArea')
        .attr("x", globoX)
        .attr("y", globoY)
        .attr('width', globoWidth)
        .attr('height', globoHeight)
        .attr("rx", rp(8.78, 'x', width, height))
        .attr("ry", rp(8.78, 'x', width, height))
        .attr('fill', 'blue')
        .attr('opacity', 0)
        .style("cursor", "pointer")
        .attr("mouseoverBlock", false)
        .on('mouseover', function (d, i) {
            // rebaja el color de todos los íconos
            for (let i = 0; i < arrId.length; i++) {
                d3.select("#" + arrId[i])
                    .transition()
                    .duration(100)
                    .attr('opacity', 0.5)
                    .attr('stroke', 'url(#bgLinGradC)');
                d3.select("#" + arrId[i] + '_image')
                    .transition()
                    .duration(100)
                    .attr('opacity', 0.5);
            }
            // resalta el color del ícono
            d3.select("#" + id)
                .transition()
                .duration(100)
                .attr('stroke', 'url(#bgLinGradA)')
                .attr('opacity', 1);
            d3.select("#" + id + '_image')
                .transition()
                .duration(100)
                .attr('opacity', 1);
        })
        .on('mouseout', function (d, i) {
            var currentSubMenu = d3.select('#svgBotonesContenido').attr('currentSubMenu');
            // Restaura el color de todos los íconos
            //if (!d3.select(this).attr('mouseoverBlock')) {
            for (let i = 0; i < arrMenuId.length; i++) {
                d3.select("#" + arrId[i])
                    .transition()
                    .duration(100)
                    .attr('stroke', 'url(#bgLinGradC)')
                    .attr('opacity', 0.5);
                d3.select("#" + arrId[i] + '_image')
                    .transition()
                    .duration(100)
                    .attr('opacity', 0.5);
            }
            console.log('currentSubMenu ' + currentSubMenu)
            d3.select("#" + currentSubMenu)
                .transition()
                .duration(100)
                .attr('stroke', 'url(#bgLinGradA)')
                .attr('opacity', 1);
            d3.select("#" + currentSubMenu + '_image')
                .transition()
                .duration(100)
                .attr('opacity', 1);

            //} else {
            //    d3.select(this).style("mouseoverBlock", false);
            //}
        })
        .on('click', function () {
            d3.select('#svgBotonesContenido').attr('currentSubMenu', id);
            //d3.select(this).style("mouseoverBlock", true);
            // Desactiva todos los contenidos
            for (let i = 0; i < arrMenuId.length; i++) {
                d3.select('#' + arrMenuId[i])
                    .transition()
                    .duration(10)
                    .attr('opacity', 0);
                // rebaja el color de todos los ícoos
                d3.select("#" + arrId[i])
                    .transition()
                    .duration(100)
                    .attr('opacity', 0.5);
                d3.select("#" + arrId[i] + '_image')
                    .transition()
                    .duration(100)
                    .attr('opacity', 0.5);
            }
            // Activa el contenido apropiado
            d3.select('#' + clickId)
                .transition()
                .duration(200)
                .attr('opacity', 1);
            // resalta el color del ícono
            d3.select("#" + id)
                .transition()
                .duration(100)
                .attr('stroke', 'url(#bgLinGradA)')
                .attr('opacity', 1);
            d3.select("#" + id + '_image')
                .transition()
                .duration(100)
                .attr('opacity', 1);
        });

}
// 2022-03-07
// Elimina el elemento clickAreaContenidoBase, una vez utilizado
export function setGloboRectButtonImageContenidoBase(svg, width, height, globoX, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath, idIconoGrande, arrIdIconoGrande, clickId, arrMenuId, idSvgBotones, arrId) {
    for (let j = 0; j < arrIdIconoGrande.length; j++) {
        svg.append('rect')
            .attr('id', arrIdIconoGrande[j])
            .attr("x", globoX[j])
            .attr("y", globoY)
            .attr('width', globoWidth)
            .attr('height', globoHeight)
            .attr("rx", rp(8.78, 'x', width, height))
            .attr("ry", rp(8.78, 'x', width, height))
            //.attr('style', 'position: absolute; opacity: 0;')
            .attr('fill', 'white')
            .attr('stroke', 'url(#bgLinGradC)')
            .style("stroke-width", strokeWidth)
            .attr("filter", 'url(#shadowFilter)');

        svg.append("image")
            .attr('id', arrIdIconoGrande[j] + '_image')
            .attr("xlink:href", window.location.origin + imagePath[j])
            .attr("x", globoX[j] + (globoWidth * imageMargin))
            .attr("y", globoY + (globoHeight * imageMargin))
            .attr("width", imageWidth);


        svg.append('rect')
            .attr('id', arrIdIconoGrande[j] + '_clickAreaGrande')
            .attr("x", globoX[j])
            .attr("y", globoY)
            .attr('width', globoWidth)
            .attr('height', globoHeight)
            .attr("rx", rp(8.78, 'x', width, height))
            .attr("ry", rp(8.78, 'x', width, height))
            .attr('fill', 'blue')
            .attr('opacity', 0)
            .style("cursor", "pointer")
            .on('mouseover', function (d, i) {
                // rebaja el color de todos los íconos
                for (let i = 0; i < arrIdIconoGrande.length; i++) {
                    d3.select("#" + arrIdIconoGrande[i])
                        .transition()
                        .duration(100)
                        .attr('opacity', 0.5);
                    d3.select("#" + arrIdIconoGrande[i] + '_image')
                        .transition()
                        .duration(100)
                        .attr('opacity', 0.5);
                }
                // resalta el color del ícono
                d3.select("#" + arrIdIconoGrande[j])
                    .transition()
                    .duration(100)
                    .attr('opacity', 1);
                d3.select("#" + arrIdIconoGrande[j] + '_image')
                    .transition()
                    .duration(100)
                    .attr('opacity', 1);
            })
            .on('mouseout', function (d, i) {

                // Restaura el color de todos los íconos
                for (let i = 0; i < arrIdIconoGrande.length; i++) {
                    d3.select("#" + arrIdIconoGrande[i])
                        .transition()
                        .duration(100)
                        .attr('opacity', 1);
                    d3.select("#" + arrIdIconoGrande[i] + '_image')
                        .transition()
                        .duration(100)
                        .attr('opacity', 1);
                }
            })
            .on('click', function () {

                for (let i = 0; i < arrIdIconoGrande.length; i++) {
                    d3.select("#" + arrIdIconoGrande[i] + '_clickAreaGrande').remove();
                }
                console.log("#" + arrIdIconoGrande[j]);
                d3.select("#" + idSvgBotones).attr('opacity', 1);
                d3.select("#" + 'svgContenidoBase').attr('opacity', 0);
                // Desactiva todos los contenidos
                for (let i = 0; i < arrMenuId.length; i++) {
                    d3.select('#' + arrMenuId[i])
                        .transition()
                        .duration(10)
                        .attr('opacity', 0);
                    // rebaja el color de todos los íconos
                    d3.select("#" + arrId[i])
                        .transition()
                        .duration(100)
                        .attr('opacity', 0.5);
                    d3.select("#" + arrId[i] + '_image')
                        .transition()
                        .duration(100)
                        .attr('opacity', 0.5);
                }
                // Activa el contenido apropiado
                d3.select('#' + arrMenuId[j])
                    .transition()
                    .duration(200)
                    .attr('opacity', 1);
                // resalta el color del ícono
                d3.select("#icono" + (j + 1))
                    .transition()
                    .duration(100)
                    .attr('opacity', 1);
                d3.select("#icono" + (j + 1) + '_image')
                    .transition()
                    .duration(100)
                    .attr('opacity', 1);
                d3.select('#svgBotonesContenido').attr('currentSubMenu', 'icono' + (j + 1));
            });
    }
}
// 2022-03-08
// Agrega el enlace de referencia de los estudios
export function setLinkRef(svg, width, height, globoX, globoY, globoWidth, globoHeight, globoRect_rx_ry, globoMargin, strokeWidth, text, textMargin, link, id) {
    var textOpacity = 1;
    var fontSize = rp(16, 'x', width, height);
    var font = 'Roboto';
    var align = 'left';
    var color = 'black';
    var bold = '';
    var letterSpacing = '';
    var lineHeight = '';
    var lineLenght = relPos(200, width);
    var delataX = relPos(15, width);
    var delataY = relPos(50, width);

    svg.append('rect')
        .attr('id', id)
        .attr("x", globoX)
        .attr("y", globoY)
        .attr('width', globoWidth)
        .attr('height', globoHeight)
        .attr("rx", globoRect_rx_ry)
        .attr("ry", globoRect_rx_ry)
        //.attr('style', 'position: absolute; opacity: 0;')
        .attr("fill", "#efefef")
        .attr('stroke', 'url(#bgLinGradA)')
        .style("stroke-width", strokeWidth); // rp(3.22, 'x', width, height)
    //.attr("filter", 'url(#shadowFilter)');
    //.transition()
    //.delay(200)

    var x_foreanObject = globoX + relPos(15, width);
    var y_foreanObject = globoY - relPos(8, width) + (globoHeight * globoMargin);

    setHtmlTextLink(
        svg,
        textOpacity,
        id + '_foreanObject',
        x_foreanObject,
        y_foreanObject,
        globoWidth,
        globoHeight,
        text,
        fontSize,
        font,
        align,
        textMargin,
        color,
        bold,
        link
    );

    svg.append("line")
        .style("stroke", "#90278D")
        .style("stroke-width", rp(3.22, 'x', width, height))
        .style("stroke-linecap", "butt")
        .attr("x1", globoX + delataX)
        .attr("x2", globoX + lineLenght)
        .attr("y1", globoY + delataY)
        .attr("y2", globoY + delataY);

    //linkrefText 
    svg.append("circle")
        .attr("cx", globoX + delataX)
        .attr("cy", globoY + delataY)
        .attr("r", rp(5.37, 'x', width, height))
        .style("fill", "#82368C");

}

export function setPointerPositionTool(svg, width, height) {
    var width_mouseAreaPositionLabel = relPos(200, width);
    var height_width_mouseAreaPositionLabel = relPos(50, width);
    var fontSize_positionLabel = relPos(16, width);
    svg.append('rect')
        .attr('id', 'mouseAreaPositionStartButton')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width_mouseAreaPositionLabel)
        .attr('height', height_width_mouseAreaPositionLabel)
        .attr('stroke', 'none')
        .attr("fill", "#333333")
        .attr('opacity', 0.5)
        .style("stroke-width", 5)
        .on('click', function () {
            d3.select('#mouseAreaPositionLabel')
                .attr('width', width_mouseAreaPositionLabel)
                .attr('height', height_width_mouseAreaPositionLabel);
            d3.select('#mousePositionLabel')
                .attr('width', width_mouseAreaPositionLabel)
                .attr('height', height_width_mouseAreaPositionLabel);
            d3.select('#mouseArea')
                .attr('width', width)
                .attr('height', height);
        });
    svg.append('rect')
        .attr('id', 'mouseArea')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 0)
        .attr('height', 0)
        .attr('stroke', 'none')
        .attr("fill", "pink")
        .attr('opacity', 0.1)
        .style("stroke-width", 5)
        .on('mousemove', function (event) {
            let coords = d3.pointer(event);
            //console.log( coords[0], coords[1] ) // log the mouse x,y position
            d3.select('#mouseAreaPositionLabel')
                .attr('x', coords[0])
                .attr('y', coords[1])
            d3.select('#mousePositionLabel')
                .attr('x', coords[0] + relPos(20, width))
                .attr('y', coords[1])
                .html(function (d) {
                    return '<p style="color:#FFFFFF"> X (' + coords[0].toFixed(2) + '), Y (' + coords[1].toFixed(2) + ')</p>'
                })
        });
    svg.append('rect')
        .attr('id', 'mouseAreaPositionLabel')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 0)
        .attr('height', 0)
        .attr('stroke', 'none')
        .attr("fill", "#333333")
        .attr('opacity', 0.5)
        .style("stroke-width", 5)
        .on('click', function () {
            d3.select('#mouseAreaPositionLabel')
                .attr('width', 0)
                .attr('height', 0)
            d3.select('#mousePositionLabel')
                .attr('width', 0)
                .attr('height', 0)
            d3.select('#mouseArea')
                .attr('width', 0)
                .attr('height', 0);
        });
    svg.append("foreignObject")
        .attr('opacity', 1)
        .attr("id", 'mousePositionLabel')
        .attr('x', 0)
        .attr('y', 0)
        .attr("width", 0)
        .attr("height", 0)
        .html(function (d) {
            return '<p style="color:#FFFFFF"> X (0), Y (0)</p>'
        })
        .attr("font-size", fontSize_positionLabel)
        .style("font-family", "Roboto");
}

/*export function setTooltipPointerPosition(event, width, mouseOverAreaId, id) {
    var width_mouseAreaPositionLabel = relPos(200, width);
    var height_width_mouseAreaPositionLabel = relPos(50, width);
    var fontSize_positionLabel = relPos(16, width);

            let coords = d3.pointer(event);
            //console.log( coords[0], coords[1] ) // log the mouse x,y position
            d3.select('#'+id)
                .attr('x', coords[0])
                .attr('y', coords[1])

    svg.append('rect')
        .attr('id', 'mouseAreaPositionLabel')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 0)
        .attr('height', 0)
        .attr('stroke', 'none')
        .attr("fill", "#333333")
        .attr('opacity', 0.5)
        .style("stroke-width", 5);
        
    svg.append("foreignObject")
        .attr('opacity', 1)
        .attr("id", id)
        .attr('x', 0)
        .attr('y', 0)
        .attr("width", 0)
        .attr("height", 0)
        .html(function (d) {
            return '<p style="color:#FFFFFF"> X (0), Y (0)</p>'
        })
        .attr("font-size", fontSize_positionLabel)
        .style("font-family", "Roboto");
}*/