import React, { Component } from "react";
import styles from '../../styles/Home.module.css';
import FooterGuia from "../components/FooterGuia";
import { breadcrumb, headerCornerLogo, gradients, shadowFilters, shadowFiltersReverse, setLinkRef, setPointerPositionTooltip } from "../../functions/headerMenu";
import * as etapa from "../../functions/etapas";
import * as practica from "../../functions/practicas";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../../functions/referenceSize";
import * as d3 from 'd3';
import { getSideBarEtapasFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { setHtmlText, updateHtmlText } from "../../functions/htmlText";
import { OpenGraph, MetaData } from "../../functions/metaTags";

class Etapas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // shadow stuff:
  shadow(svg, x, y, w, h, rx, ry, id) {
    //var g1 = svg.append('g');
    var defs = svg.append("defs");

    var filter = defs.append("filter")
      .attr("id", "dropshadow")

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 8)
      .attr("result", "blur");
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("result", "offsetBlur");
    filter.append("feFlood")
      .attr("in", "offsetBlur")
      .attr("flood-color", "#9a9a9a")
      .attr("flood-opacity", "1")
      .attr("result", "offsetColor");
    filter.append("feComposite")
      .attr("in", "offsetColor")
      .attr("in2", "offsetBlur")
      .attr("operator", "in")
      .attr("result", "offsetBlur");

    var feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode")
      .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    svg.append('rect')
      .attr("id", id)
      .attr("x", x)
      .attr("y", y)
      .attr('width', w)
      .attr('height', h)
      .style('fill', "white")
      .attr("filter", "url(#dropshadow)")
      .attr("rx", rx)								// radius
      .attr("ry", ry)
  }


  main = (element) => {
    // Obtiene el tamaño de la pantalla en uso
    const width = window.innerWidth;
    var height = window.innerHeight;
    // Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
    // En base a una resolución de pantalla de W:1920 H:1080
    const refWidth = getReferenceSizeWidth();
    const refHeight = getReferenceSizeHeight();
    const specialHeight = 2400;
    var heightCorrected = Math.round((refHeight * width) / refWidth);
    //const heightCorrected = Math.round(width / aspectRatio);
    if (height > width) {
      heightCorrected = Math.round((refHeight * width) / refWidth);
    }
    height = heightCorrected;

    const svg = d3.select(element)
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + width + " " + height)
      //.attr("viewBox", "0 0 " + width + " " + specialHeight)
      //class to make it responsive
      .classed("svg-content-responsive", true);

    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg);

    /****************************************
     Contenido de Practicas - begin
    ****************************************/
    const practicasColor = [
      '#C134FC',
      '#886AFC',
      '#9980FA',
      '#F9764A',
      '#F89574',
      '#43F98D'
    ];
    const practicasLabel = [
      ['Cumplimiento Legalidad vigente'],
      ['Compromisos y cumplimientos extra legalidad'],
      ['Petición o adscripción internacional'],
      ['Mecanismos de aseguramiento /eficiencia gestión operacional'],
      ['Metodología de trabajo con el proveedor/ gestión operacional ASG'],
      ['Metodos de trabajo colaborativo/ integrado'],
    ];

    const paginaUno = [];
    paginaUno['titulo'] = 'ETAPAS EN LA CADENA SE SUMINISTRO';
    paginaUno['contenido'] = '<b>DEFINICIÓN</b><br>' +
      'Este modelo nos permite analizar cada una de las etapas de la cadena de suministro, ' +
      'identificando los riesgos, oportunidades e indicadores de gestión para mandantes, proveedores y la relación que se establece entre ambos.';

    var arcSegmentEtapasColor = [
      'rgb(96,52,255)',
      'rgb(121,90,255)',
      'rgb(153,128,250)',
      'rgb(250,89,28)',
      'rgb(245,121,70)',
      'rgb(247,148,114)',
      'rgb(0,237,107)',
      'rgb(0,255,139)',
      'rgb(87,255,178)',
      'rgb(154,255,207)'
    ];

    var arcSegmentEtapasColorLista = [
      'rgb(96,52,255)',
      'rgb(121,90,255)',
      'rgb(153,128,250)',
      'rgb(250,89,28)',
      'rgb(245,121,70)',
      'rgb(247,148,114)',
      'rgb(0,237,107)',
      'rgb(0,255,139)',
      'rgb(87,255,178)',
      'rgb(154,255,207)',
    ];
    var arcSegmentEtapasLabel = [
      ['NECESIDAD'],
      ['SOLICITUD DEL PEDIDO'],
      ['FUENTES DE APROVISIONAMIENTO'],
      ['CREACIÓN Y SEGUIMIENTO DE ORDEN DE COMPRA/CONTRATO'],
      ['EJECUCIÓN DEL SERVICIO DE ADMINISTRACIÓN DEL CONTRATO'],
      ['RECEPCIÓN DE MERCANCÍAS Y RECEPCIÓN DEL SERVICIO'],
      ['RECEPCIÓN DE FACTURAS'],
      ['VERIFICACIÓN DE FACTURAS'],
      ['PROCESO DE PAGO'],
      ['EVALUACIÓN Y CIERRE'],
    ];
    const arcSegmentEtapasLabelSize = [
      rp(16 + 10, 'x', width, height),
      rp(17.6 + 15, 'x', width, height),
      rp(19.2 + 20, 'x', width, height),
      rp(20.8 + 25, 'x', width, height),
      rp(22.4 + 30, 'x', width, height),
      rp(25.6 + 35, 'x', width, height),
      rp(27.2 + 40, 'x', width, height),
      rp(28.8 + 45, 'x', width, height),
      rp(30.4 + 50, 'x', width, height),
      rp(32 + 55, 'x', width, height),
    ];


    /****************************************
     Contenido de etapas - end
    ****************************************/

    // Estados
    var selectedRol = 0;
    var selectedEtapa = 0;

    /*****************************************
     Posicionamiento y tamaño relativo - Begin
    *****************************************/

    const main_x_buttonPosition = 5;
    const main_y_buttonPosition = 110;
    const main_x_buttonContentPosition = main_x_buttonPosition + relPos(30, width);

    const main_buttonheightRef = 75;
    const main_buttonVerticalSpace = 65;
    const main_contentVertical_delta = 0;
    const main_ContentVerticalSpace = 75;

    const durationAnim = getDurationAnim();
    const timeOut = getTimeOut();


    const translatex_e = rp(990, 'x', width, height);
    const translatey_e = rp(0, 'y', width, height);
    const scale_segments = rp(1.35, 'x', width, height);

    const radio = rp(40, 'x', width, height);
    const radio_small = rp(20, 'x', width, height);
    const radio_big = rp(40, 'x', width, height);

    const paginasPracticas = [];
    paginasPracticas['paginaUno'] = paginaUno;
    var paginaSeleccionada = 'paginaUno';

    // Posición y tamaño de fondo del "contenido" de la matriz de etapas
    let x_bg_matriz = rp(350, 'x', width, height); //width / 6
    let y_bg_matriz = rp(90, 'x', width, height); //165
    let width_bg_matriz = rp(750, 'x', width, height); //width / 6
    let height_bg_matriz = rp(845, 'x', width, height);
    const contenido_delta = rp(60, 'x', width, height);

    const margen_h = rp(60, 'x', width, height);
    const margen_v = rp(90, 'x', width, height);

    // Posición y tamaño de del "contenido" de la matriz de etapas
    let x_content = x_bg_matriz + margen_h; //350
    let y_content = y_bg_matriz + margen_v; //200

    // posición del logo marca de agua
    const margen_h_bg = rp(80, 'x', width, height);
    const x_logo_bg = x_bg_matriz + margen_h_bg;
    const y_logo_bg = y_bg_matriz + margen_v;
    const w_logo_bg = width_bg_matriz - (2 * margen_h_bg);

    // Posición de la lista de la página 1
    const delta_y_circleP1 = rp(main_ContentVerticalSpace, 'x', width, height);


    const w_buttonRef = (width_bg_matriz - (3 * margen_h)) / 1.7;
    //const w_buttonRef = (width_bg_matriz - (1.5 * margen_h)) / 1.3;
    const h_textP1 = rp(main_ContentVerticalSpace, 'x', width, height);
    const space_circleP1 = rp(10, 'x', width, height);
    var x_circleP1 = 0;
    const x_circleP1_a = x_content + rp(main_x_buttonPosition, 'x', width, height);
    const x_circleP1_b = x_circleP1_a + space_circleP1 + w_buttonRef;
    const y_circleP1_ref = y_content + rp(310, 'x', width, height);
    const r_circleP1 = rp(15, 'x', width, height);
    const y_circleP1 = [
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (0 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (1 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (2 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (3 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (4 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (0 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (1 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (2 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (3 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(8, 'x', width, height) + (4 * delta_y_circleP1)
    ];
    const space_textP1 = space_circleP1;
    //console.log("x_circleP1 + rp(35, 'x', width, height)" + (x_circleP1 + rp(35, 'x', width, height)));
    let x_textP1 = 0;
    const x_textP1_a = x_circleP1_a + rp(35, 'x', width, height);
    const w_textP1 = w_buttonRef - rp(80, 'x', width, height);
    const x_textP1_b = x_textP1_a + w_buttonRef + space_textP1;
    const y_textP1 = [
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (0 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (1 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (2 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (3 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (4 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (0 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (1 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (2 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (3 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta - rp(20, 'x', width, height) + (4 * delta_y_circleP1)
    ];
    const space_circleNumberP1 = space_circleP1;
    let x_circleNumberP1;
    const x_circleNumberP1_a = x_circleP1_a - rp(4, 'x', width, height);
    const x_circleNumberP1_b = x_circleNumberP1_a + space_circleNumberP1 + w_buttonRef;
    const y_circleNumberP1 = [
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (0 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (1 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (2 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (3 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (4 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (0 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (1 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (2 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (3 * delta_y_circleP1),
      y_circleP1_ref - main_contentVertical_delta + rp(13, 'x', width, height) + (4 * delta_y_circleP1)
    ];

    const fonSize_circleNumberP1 = rp(13, 'x', width, height);
    const etapasLink = [];
    etapasLink[0] = 'etapas/etapas#1';
    etapasLink[1] = 'etapas/etapas#2';
    etapasLink[2] = 'etapas/etapas#3';
    etapasLink[3] = 'etapas/etapas#4';
    etapasLink[4] = 'etapas/etapas#5';
    etapasLink[5] = 'etapas/etapas#6';
    etapasLink[6] = 'etapas/etapas#7';
    etapasLink[7] = 'etapas/etapas#8';
    etapasLink[8] = 'etapas/etapas#9';
    etapasLink[9] = 'etapas/etapas#10';

    const fonSize_textP1 = rp(16, 'x', width, height);

    // Posición del carracol
    const y_circleMenu = y_bg_matriz + contenido_delta + rp(30, 'y', width, height); //height_bg_matriz + rp(90, 'y', width, height);
    const outerRadius2 = x_bg_matriz - rp(360, 'x', width, height);
    const w_textoSegmentos = rp(200, 'x', width, height);
    const h_textoSegmentos = rp(100, 'x', width, height);
    //const x_textoSegmento = rp(1515, 'x', width, height);
    //const y_textoSegmento = rp(390, 'x', width, height);
    const x_textoSegmento = rp(1395, 'x', width, height);
    const y_textoSegmento = rp(210, 'x', width, height);
    const scale_textoSegmento = rp(2.8, 'x', width, height);

    // estapasContentFO
    const contentFontSize = rp(18, 'x', width, height);
    const content_w = width_bg_matriz - (2 * margen_h);
    const content_h = height_bg_matriz - (2 * margen_v);

    // Selector página
    const w_selectorPag = w_buttonRef;
    const h_selectorPag = rp(main_buttonVerticalSpace, 'x', width, height);
    const space_selectorPag = rp(10, 'x', width, height);
    const x_selectorPag_a = x_bg_matriz + rp(main_x_buttonContentPosition, 'x', width, height);
    const x_selectorPag_b = x_selectorPag_a + w_selectorPag + space_selectorPag;

    const y_selectorPag = [
      y_circleP1_ref - rp(25, 'x', width, height) + (0 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (1 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (2 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (3 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (4 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (0 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (1 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (2 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (3 * rp(main_buttonheightRef, 'x', width, height)),
      y_circleP1_ref - rp(25, 'x', width, height) + (4 * rp(main_buttonheightRef, 'x', width, height))
    ]

    const r_selectorPag = rp(10, 'x', width, height);
    const stroke_selectorPag = 'url(#bgLinGradB)';
    const border_selectorPag = rp(1, 'x', width, height);

    // Posición y tamaño de título de página "tool tip"
    const x_pageTitleBg = rp(548.5, 'x', width, height);
    const y_pageTitleBg = rp(10, 'x', width, height);
    const w_pageTitleBg = rp(760, 'x', width, height);
    const h_pageTitleBg = rp(100, 'x', width, height);
    const margenPageTitle_h = rp(60, 'x', width, height);
    const margenPageTitle_v = rp(60, 'x', width, height);
    const x_pageTitle = x_pageTitleBg + margenPageTitle_h;
    const y_pageTitle = y_pageTitleBg + rp(5, 'x', width, height);
    const w_pageTitle = w_pageTitleBg - (2 * margenPageTitle_h);
    const h_pageTitle = h_pageTitleBg;
    const letterSpacing_pageTitle = rp(4, 'x', width, height);
    const fontSize_pageTitle = rp(26, 'x', width, height);
    const fontFamily_pageTitle = 'Oswald';
    const style_pageTitle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_pageTitle + 'px;letter-spacing:' + letterSpacing_pageTitle + 'px;color:#FFFFFF';


    /*******************************************
      Recorre y renderiza etapas "caracol" - Begin
    ********************************************/

    // Caracol

    // Posición de los segmentos para ubicar los números de las etapas
    const translate_x_segmentNumers = rp(1503, 'x', width, height);
    const translate_y_segmentNumers = rp(390.5, 'x', width, height);
    const scale_segmentNumers = 1;//rp(1, 'x', width, height);

    const svgSegmentos = svg.append("g")
      .attr('id', 'segmentos')
      .attr('opacity', 1);
    const svgTextoSegmentos = svg.append("g")
      .attr('id', 'textoSegmentos')
      .attr('opacity', 1);
    const svgTooltipSegmentos = svg.append("g")
      .attr('id', 'svgTooltipSegmentos')
      .attr('opacity', 1);
    const svgClickSegmentos = svg.append("g")
      .attr('id', 'svgClickSegmentos')
      .attr('opacity', 1);
    var circle_pos_y = y_circleMenu;
    var movingCircleRegreso = 0;

    // variables Tooltip Caracol
    var width_textTooltipTitulo = relPos(320, width);
    var height_textTooltipTitulo = relPos(70, width);
    var marginRight_textTooltipTitulo = relPos(15, width);
    var marginTop_textTooltipTitulo = relPos(15, width);
    var fontSize = relPos(18, width);
    var font = 'Roboto';
    var align = 'center';
    var margin = 'auto';//relPos(15, width);
    var padding = relPos(0, width);
    var color = '#ffffff';
    var bold = 'bold';
    var letterSpacing = '1';
    var lineHeight = '1';
    const delta_outerRadius_segmentNumers = [
      rp(20, 'x', width, height),
      rp(25, 'x', width, height),
      rp(30, 'x', width, height),
      rp(32, 'x', width, height),
      rp(35, 'x', width, height),
      rp(42, 'x', width, height),
      rp(46, 'x', width, height),
      rp(50, 'x', width, height),
      rp(58, 'x', width, height),
    ]

    // Segmentos para ubicar los números de las etapas
    var arcLenA = 6.28 / 14.65;
    var startAngle = -arcLenA;
    var endAngle = startAngle + arcLenA;
    var innerRadius = rp(82, 'x', width, height);
    var outerRadius = rp(215, 'x', width, height);

    // Posicionamiento del label de etapa sobre cada segmento
    var foreignObject_size_segmentNumers = rp(90, 'x', width, height);

    for (var e = 0; e < 10; e++) {
      var id = e + 1;
      var arcSegment = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(startAngle)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngle);        // 2*Pi = 6.28 = top                     
      var [x_segmentNumers, y_segmentNumers] = arcSegment.centroid(arcSegment);/**/
      //console.log('x_segmentNumers, y_segmentNumers  ' + x_segmentNumers, y_segmentNumers);
      svgSegmentos.append("path")
        .attr("id", 'segment' + id)
        .attr("transform", "translate(" + translate_x_segmentNumers + "," + translate_y_segmentNumers + ") scale(" + scale_segmentNumers + ")")
        .attr("d", arcSegment)
        .attr('stroke', 'white')
        .style("stroke-width", rp(1, 'x', width, height))
        .attr('opacity', '1')
        .attr('fill', arcSegmentEtapasColor[e])
        .attr('filter', 'url(#shadowFiltersReverse)');

      startAngle = endAngle;
      endAngle = arcLenA + endAngle;
      outerRadius = outerRadius + delta_outerRadius_segmentNumers[e];

      svgTextoSegmentos.append('foreignObject')
        .attr("id", 'segmentNumers' + id)
        .attr('x', translate_x_segmentNumers + x_segmentNumers - (foreignObject_size_segmentNumers / 2))
        .attr('y', translate_y_segmentNumers + y_segmentNumers - (foreignObject_size_segmentNumers / 2))
        .attr("width", foreignObject_size_segmentNumers)
        .attr("height", foreignObject_size_segmentNumers)
        .attr('opacity', 1)
        .html(function (d) {
          var trozo_a = 'font-family:Roboto;font-weight:normal;color:white;font-size:' + arcSegmentEtapasLabelSize[e] + 'px; ';
          var trozo_b = 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0;" ';
          var trozo_estilos = trozo_a + ' ' + trozo_b;
          return '<div style="' + trozo_estilos + '">' + id + '</div>'
        });
      //.attr("transform", "rotate(" + rotationAngle_detalle * i + ")");

      //área clickeable
      svgClickSegmentos.append("path")
        .attr("id", 'segmentClick' + id)
        //.attr("transform", "translate(" + translatex_e + "," + translatey_e + ") scale(" + scale_segments + ")")
        .attr('indexElement', e)
        .attr("transform", "translate(" + translate_x_segmentNumers + "," + translate_y_segmentNumers + ") scale(" + scale_segmentNumers + ")")
        .attr("d", arcSegment)
        .attr('fill', 'transparent')
        .attr('opacity', 0.5)
        .style("cursor", "pointer")
        .on('mouseover', function () {
          var index = d3.select(this).attr('indexElement');
          var idElement = parseInt(index) + 1;
          console.log('index:' + index + '   e:' + e, + '        id:' + idElement);
          // hace transparente la etapa bajo el cursos
          d3.select('#segment' + index)
            .transition()
            .duration(100)
            .attr('stroke', '#d3d3d3')
            .attr('opacity', 0.7);
          // Resalta
          practica.setButtonMouseStatus('#buttonSelector' + index, 100, 0.7, 'url(#bgLinGradB)');

          // tooltip
          var centroide_x = d3.select('#segmentNumers' + idElement).attr('x') - (width_textTooltipTitulo / 2);
          var centroide_y = d3.select('#segmentNumers' + idElement).attr('y');
          d3.select('#fondoTooltipTitulo')
            .attr('x', centroide_x)
            .attr('y', centroide_y)
            .transition()
            .duration(100)
            .attr('opacity', 1)
            .transition()
            .delay(5000)
            .duration(0)
            .attr('opacity', 0);

          //console.log('centroide_x ' + centroide_x + ' centroide_y ' + centroide_y);
          //console.log('arcSegmentEtapasLabel[e] ' + arcSegmentEtapasLabel[e]);
          updateHtmlText(
            1, 'textTooltipTitulo', centroide_x, centroide_y, width_textTooltipTitulo, height_textTooltipTitulo,
            arcSegmentEtapasLabel[index],
            fontSize, font, align, margin, color, bold, letterSpacing, lineHeight, 100, padding
          );
          d3.select('#textTooltipTitulo')
            .transition()
            .delay(5000)
            .duration(0)
            .attr('opacity', 0);

        })
        .on('mouseout', function () {
          var index = d3.select(this).attr('indexElement');
          var idElement = parseInt(index) + 1;
          d3.select('#segment' + idElement)
            .transition()
            .duration(100)
            .attr('stroke', 'white')
            .attr('opacity', 1);
          // Deja normal
          practica.setButtonMouseStatus('#buttonSelector' + index, 50, 1, '#fdfdfd')

          //Apaga tooltip
          updateHtmlText(0, 'textTooltipTitulo');
          d3.select('#fondoTooltipTitulo').attr('opacity', 0);

        })
        .on('click', function () {
          var index = d3.select(this).attr('indexElement');
          d3.select('#rectWhiteFade')
            .attr("height", height)
            .transition()
            .duration(durationAnim)
            .attr('opacity', 1);
          setTimeout(function () {
            window.location.href = '/' + etapasLink[index];
          }, timeOut)
        });

    }

    // // Tooltip Caracol
    // Fondo tooltip
    svgTooltipSegmentos.append('rect')
      .attr('id', 'fondoTooltipTitulo')
      .attr('x', 1250)
      .attr('y', 400)
      .attr('width', width_textTooltipTitulo)
      .attr('height', height_textTooltipTitulo)
      .attr('stroke', 'none')
      //.attr("fill", "#333333")
      .style("fill", "url(#bgLinGradB)")
      .attr("rx", radio_small)
      .attr("ry", radio_small)
      .attr('opacity', 0)
      .style("stroke-width", 5);

    // label tooltip
    setHtmlText(svgTooltipSegmentos, 0,
      'textTooltipTitulo',
      1250,
      400,
      width_textTooltipTitulo,
      height_textTooltipTitulo,
      "Free Ukraine",
      fontSize, font, align, margin, color, bold, letterSpacing, lineHeight)




    /*****************************************
    Recorre y renderiza etapas "caracol" - End
    ******************************************/

    /*******************************************************
     Renderiza Base para contenidos - Begin
    ******************************************************/
    // recuadro de contenido
    this.shadow(svg, x_bg_matriz, y_bg_matriz + contenido_delta, width_bg_matriz, height_bg_matriz, radio_big, radio_big, 'contentRectShadow');

    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/bg_creditos_a.png")
      .attr("x", x_logo_bg)
      .attr("y", y_logo_bg)
      .attr("width", w_logo_bg);

    // Renderiza textos del contenido de practicas
    svg.append("g")
      .attr('id', 'practicasContent')
      .attr('opacity', 1)
      .append("foreignObject")
      .attr('id', 'practicasContentFO')
      .attr('x', x_content)
      .attr('y', y_content)
      //.attr('rx', radio_big)
      //.attr('ry', radio_big)
      .attr("width", content_w)
      .attr("height", content_h)
      .attr("font-size", contentFontSize);

    /*******************************************************
     Renderiza Base para contenidos - End
    ******************************************************/





    /*******************************************************
     Renderiza contenidos página uno - Begin
    ******************************************************/
    const svgPaginaUno = svg.append("g")
      .attr('id', 'paginaUno')
      .attr('opacity', 1);



    // renderiza los fondos de botón de listaa
    var x_selectorPag;
    var deltaCircle = 0;
    var deltaDecenas = 0;
    var delta_horizontal = 0;
    for (let i = 0; i < arcSegmentEtapasLabel.length; i++) {
      x_selectorPag = x_selectorPag_a;
      x_circleP1 = x_circleP1_a
      x_circleNumberP1 = x_circleNumberP1_a
      x_textP1 = x_textP1_a;
      if (i < 5) {
        x_selectorPag = x_selectorPag_a;
        x_circleP1 = x_circleP1_a
        x_circleNumberP1 = x_circleNumberP1_a
        x_textP1 = x_textP1_a;
      }
      else {
        x_selectorPag = x_selectorPag_b;
        x_circleP1 = x_circleP1_b
        x_circleNumberP1 = x_circleNumberP1_b
        x_textP1 = x_textP1_b;
      }/**/
      if (i == 9) {
        deltaDecenas = -5;
      } else
        deltaDecenas = 0;

      if (i == 2 || i == 3 || i == 4 || i == 5) {
        delta_horizontal = relPos(8, width);
      } else {
        delta_horizontal = 0;
      }
      svgPaginaUno.append('rect')
        .attr("id", "buttonSelector" + i)
        .attr('x', x_selectorPag)
        .attr('y', y_selectorPag[i])
        .attr('rx', r_selectorPag)
        .attr('ry', r_selectorPag)
        .style("fill", "#fdfdfd")
        .style("stroke", stroke_selectorPag)
        .style("stroke-width", border_selectorPag)
        .attr("filter", "url(#shadowFilter)")
        .attr('width', w_selectorPag) //width / 4.5
        .attr('height', h_selectorPag) //height / 20
        .attr('opacity', 1);
      //}/**/

      // Render lista

      //for (let i = 0; i < arcSegmentEtapasLabel.length; i++) {

      svgPaginaUno.append("circle")
        .attr("id", 'circleP1' + i)
        .attr("cx", x_circleP1)
        .attr("cy", y_circleP1[i])
        .attr("r", r_circleP1)
        .style("stroke", "white")
        .attr('opacity', 1)
        .style("fill", arcSegmentEtapasColorLista[i]);

      svgPaginaUno.append("text")
        .attr('id', 'circleNumberP1')
        .attr('x', x_circleNumberP1 + deltaDecenas)
        .attr('y', y_circleNumberP1[i])
        .attr("font-size", fonSize_circleNumberP1)
        .attr("font-weight", "bold")
        .text(i + 1)
        .style('fill', 'white');

      svgPaginaUno.append("foreignObject")
        .attr('id', 'circleTextP1')
        .attr('x', x_textP1)
        .attr('y', y_textP1[i] - delta_horizontal)
        .attr("width", w_textP1)
        .attr("height", h_textP1)
        .html(function (d) {
          return '<div style="font-family:Roboto;font-weight:bold;color:#111111;font-size:' + fonSize_textP1 + 'px"><p align="left">' + arcSegmentEtapasLabel[i] + '</p></div>'
        });

      // Renderiza superficie clickeable
      var id = i + 1
      svgPaginaUno.append('rect')
        .attr("id", "buttonSelectorClick" + i)
        .attr('x', x_selectorPag)
        .attr('y', y_selectorPag[i])
        .attr('rx', r_selectorPag)
        .attr('ry', r_selectorPag)
        .style("cursor", "pointer")
        .style("fill", "#fdfdfd")
        .attr('width', w_selectorPag) //width / 4.5
        .attr('height', h_selectorPag) //height / 20
        .attr('opacity', 0)
        .on('mouseover', function () {
          // hace transparente la etapa bajo el cursos
          d3.select('#segment' + id)
            .transition()
            .duration(100)
            .attr('stroke', '#d3d3d3')
            .attr('opacity', 0.7);
          // Resalta
          practica.setButtonMouseStatus('#buttonSelector' + i, 100, 0.7, 'url(#bgLinGradB)');
        })
        .on('mouseout', function () {

          d3.select('#segment' + id)
            .transition()
            .duration(100)
            .attr('stroke', 'white')
            .attr('opacity', 1);
          // Deja normal
          practica.setButtonMouseStatus('#buttonSelector' + i, 50, 1, '#fdfdfd');
        })
        .style("cursor", "pointer")
        .on('click', function () {
          d3.select('#rectWhiteFade')
            .attr("height", height)
            .transition()
            .duration(durationAnim)
            .attr('opacity', 1);
          setTimeout(function () {
            window.location.href = '/' + etapasLink[i];
          }, timeOut)

        });

      deltaCircle = deltaCircle + delta_y_circleP1;
    }


    /******************************************************
     Renderiza contenidos página uno - End
    ******************************************************/






    // Activa página Uno
    practica.togglePaginaPracticas(1, paginasPracticas, paginaSeleccionada, arcSegmentEtapasLabel);


    /******************************
     Section 3 - breadcrumb - Start
     *******************************/
    breadcrumb(svg, width, height, 'Inicio', 'Etapas cadena aprovisionamiento', '/guia_de_gestion.html', '');
    /******************************
    Section 3 - breadcrumb - End
    *******************************/

    // Título
    //tooltip rectangle
    svg.append('rect')
      //.classed('filled', true)
      .attr('x', x_pageTitleBg)
      .attr('y', y_pageTitleBg)
      .attr('rx', radio_small)
      .attr('ry', radio_small)
      .style("fill", "url(#bgLinGradB)")
      .transition()
      .delay(200)
      .attr('width', w_pageTitleBg)
      .attr('height', h_pageTitleBg);

    svg.append("foreignObject")
      .attr('id', 'pageTitleFO')
      .attr('x', x_pageTitle)
      .attr('y', y_pageTitle)
      .attr("width", w_pageTitle + rp(50, 'x', width, height))
      .attr("height", h_pageTitle)
      .html(function (d) {
        return '<div style="' + style_pageTitle + '"><p align="justify">ETAPAS EN LA CADENA DE APROVISIONAMIENTO</p></div>'
      })



    /******************************
     Sidebar - Start
     *******************************/
    getSideBarLines(svg, width);
    // Para fade in y fade out
    svg.append('rect')
      .attr('id', 'rectWhiteFade')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr('opacity', 1)
      .attr("fill", 'white');
    getSideBarEtapasFome(svg, width, heightCorrected, styles.grow);

    /******************************
    Sidebar - End
    *******************************/

    /******************************
      Botón cómo usar - Begin
    *******************************/
    etapa.getcomoUsar(svg, width, height)
    /******************************
      Botón cómo usar - End
    *******************************/

    console.log('getDurationAnim()' + getDurationAnim());
    // Ejecuta fade In
    d3.select('#rectWhiteFade')
      .transition()
      .duration(durationAnim)
      .attr('opacity', 0)
      .duration(10)
      .attr("height", 1);

    /******************************
     Brand corner - begin
    *******************************/
    headerCornerLogo(svg, width, heightCorrected);
    /******************************
     Brand corner - end
    *******************************/

  }

  render() {


    return (
      <div className={styles.container}>
        <div className={styles.container}>
          <div ref={this.main}></div>
          <FooterGuia />
        </div>
      </div>
    )
  }

}

export default Etapas;