import React, { Component } from "react";
import styles from '../../styles/Home.module.css';
import FooterGuia from "../components/FooterGuia";
import { breadcrumb, headerCornerLogo, gradients, shadowFilters, setTriangleAdvance, setLinkRef, setPointerPositionTool } from "../../functions/headerMenu";
import * as practica from "../../functions/practicas";
import * as practicasData from "../../functions/practicasData";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../../functions/referenceSize";
import * as d3 from 'd3';
import { getSideBarPracticasFome, animaSidebarPracticas, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { setHtmlText, setHtmlTextLink, setHtmlTextInclinado } from "../../functions/htmlText";
import { OpenGraph, MetaData } from "../../functions/metaTags";

class BuenasPracticas extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = {
  //  }
  //}

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

    /****************************************
     Contenido de Practicas - begin
    ****************************************/
    const practicasColorEspiral = [
      '#C134FC',
      '#886AFC',
      '#9980FA',
      '#F9764A',
      '#F89574',
      '#55b57c'
    ];
    const practicasColor = [
      '#55b57c',
      '#F89574',
      '#F9764A',
      '#9980FA',
      '#886AFC',
      '#C134FC',
    ];/**/
    const practicasLabel = [
      ['Metodos de trabajo colaborativo/ integrado'],
      ['Metodología de trabajo con el proveedor/ gestión operacional ASG'],
      ['Mecanismos de aseguramiento /eficiencia gestión operacional'],
      ['Petición o adscripción internacional'],
      ['Compromisos y cumplimientos extra legalidad'],
      ['Cumplimiento Legalidad vigente'],
    ];

    const practica_1 = [0, 1, 2, 3, 4, 5, 6, 7];
    const practica_2 = [0, 1, 2, 3];
    const practica_3 = [0, 1, 2, 3, 4, 5];
    const practica_4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const practica_5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const practica_6 = [0, 1, 2, 3, 4];
    const practicasAreaClick = [
      practica_6,
      practica_5,
      practica_4,
      practica_3,
      practica_2,
      practica_1
    ];

    var textoPractica_1 = [];
    textoPractica_1[0] = 'Leyes sociales';
    textoPractica_1[1] = 'Salud y seguridad ocupacional';
    textoPractica_1[2] = 'Trabajo infantil';
    textoPractica_1[3] = 'Trabajo esclavo';
    textoPractica_1[4] = 'Normativa ambiental';
    textoPractica_1[5] = 'Normativas de transparencia e integridad';
    textoPractica_1[6] = 'Viabilidad y transparencia financiera';
    textoPractica_1[7] = 'Normativas libertad de asociación';
    var textoPractica_2 = [];
    textoPractica_2[0] = 'Declaración y monitoreo salario justo';
    textoPractica_2[1] = 'Monitoreo de cumplimiento de leyes sociales';
    textoPractica_2[2] = 'Monitoreo prevención trebajo infantil';
    textoPractica_2[3] = 'Monitoreo de prevención trabajo esclavo';
    var textoPractica_3 = [];
    textoPractica_3[0] = 'Adscripción a disposiciones o acuerdos internacionales en derechos trabajadores.';
    textoPractica_3[1] = 'Adscripción a disposiciones o acuerdos internacionales trabajo digno, salario justo y asociación.';
    textoPractica_3[2] = 'Adscripción a disposiciones o acuerdos internacionales contra el trabajo infantil';
    textoPractica_3[3] = 'Adscripción a disposiciones o acuerdos internacionales prevención trabajo esclavo';
    textoPractica_3[4] = 'Adscripción a acuerdos internacionales sobre respeto a DD.HH.';
    textoPractica_3[5] = 'Adscripción a acuerdos internacionales relacionados con el impacto ambiental y social (enfocados en la biodiversidad) relacionados con la  actividad productiva desarrollada por las compañías';
    var textoPractica_4 = [];
    textoPractica_4[0] = 'Código de ética y resolución de conflictos';
    textoPractica_4[1] = 'Sistema de monitoreo y control de riesgos en proveedores: trabajo conjunto ';
    textoPractica_4[2] = 'Mecanismo de segmentación del proveedor: tamaño, importancia operacional, antigüedad, riesgos asociados u otros.';
    textoPractica_4[3] = 'Sistema de monitoreo de facturas y pagos (pronto pago)';
    textoPractica_4[4] = 'Auditorias proveedor: críticos y nuevos en función de los riesgos';
    textoPractica_4[5] = 'Traspaso de know how respecto de los objetivos buscados en función de una eficiencia operacional en el largo plazo';
    textoPractica_4[6] = 'Incorporación de proveedores locales y pymes';
    textoPractica_4[7] = 'Mecanismos de reclamación efectivo y disponibilidad de mediación';
    textoPractica_4[8] = 'Encuentro con proveedores: identificar desempeños y aprendizajes, dentro de una dinámica de relacionamiento';
    textoPractica_4[9] = 'Capacitación del proveedor en los procesos administrativos del mandante';
    var textoPractica_5 = [];
    textoPractica_5[0] = 'Identificación de impacto social, ambiental y de gobernanza de la compañía: plan de gestión.';
    textoPractica_5[1] = 'Identificación de impacto social.';
    textoPractica_5[2] = 'Identificación de impacto ambiental.';
    textoPractica_5[3] = 'Identificación de impacto gobernaza de la compañía.';
    textoPractica_5[4] = 'Evaluación del proveedor por impactos: ASG.';
    textoPractica_5[5] = 'Auditorias externas e internas in situ con personal capacitacitado en variables ASG';
    textoPractica_5[6] = 'Capacitación a proveedores en variables ASG e inducción a impactos y metas de la compañía: proveedor como socio estratégico en la gestión de impacto.';
    textoPractica_5[7] = 'Incorporación de trazabilidad y compliance en proveedores críticos según impacto ASG.';
    textoPractica_5[8] = 'Promover una cultura de integridad ASG para el trato con comunidades y proveedores, aplicado a procesos de negociación.';
    textoPractica_5[9] = 'Estímulo a la innovación: proveedor como fuente de innovación.';
    textoPractica_5[10] = 'Identificación de buenas prácticas y aprendizajes a aplicar en la cadena de suministro: mandante y proveedor.';
    var textoPractica_6 = [];
    textoPractica_6[0] = 'Programas de promoción y optimización del proveedor operacional en criterios ASG.';
    textoPractica_6[1] = 'Establecimiento de metas comunes al inicio de la relación con el proveedor.';
    textoPractica_6[2] = 'Reconocimiento a la gestión del proveedor.';
    textoPractica_6[3] = 'Alianzas mandantes, proveedor, institucionalidad y comunidad (público privada) para el desarrollo  de todas las partes.';
    textoPractica_6[4] = 'Transparencia aplicada a la cadena de sumistro y a compartir aprendizajes productivos a nivel de distintos actores: sociales, empresariales y gubernamentales .';
    var textosPracticas = [
      textoPractica_6,
      textoPractica_5,
      textoPractica_4,
      textoPractica_3,
      textoPractica_2,
      textoPractica_1
    ];

    const paginaUno = [];
    paginaUno['titulo'] = 'MATRIZ DE BUENAS PRÁCTICAS PARA LA GESTIÓN DE CADENA DE SUMINISTRO SOSTENIBLE';
    paginaUno['contenido'] = 'Esta Matriz nos permite observar todos los niveles donde podemos revisra nuestras acciones e interacciones para analizar en qué estado estamos, qué podemos mejorar y hacia donde vamos, con una mirada conjunta entre mandantes y proveedores.';

    const paginaDos = [];
    paginaDos['titulo'] = 'COMPETENCIAS Y BUENAS PRÁCTICAS';
    paginaDos['contenido'] = 'Para cada item en cada nivel es importante tener en cuenta qué acciones, responsabilidades y normativas le atañen a cada actor, y cuáles son compartidas, para poder generar interacciones coordinadas hacia metas comunes de mejora.<br><br><br><br><br><br>La evaluación se realiza en base a dos criterios: Los 10 Principios de Pacto Global y Los 17 Objetivos de la ODS.';
    paginaDos['contenido_b'] = '';


    /****************************************
     Contenido de etapas - end
    ****************************************/

    // Estados
    var selectedRol = 0;
    var selectedEtapa = 0;

    /*****************************************
     Posicionamiento y tamaño relativo - Begin
    *****************************************/

    const radio = rp(40, 'x', width, height);
    const radio_small = rp(20, 'x', width, height);

    const paginasPracticas = [];
    paginasPracticas['paginaUno'] = paginaUno;
    paginasPracticas['paginaDos'] = paginaDos;
    var paginaSeleccionada = 'paginaUno';

    // Posición y tamaño de fondo del "contenido" de la matriz de etapas
    let x_bg_matriz = rp(350, 'x', width, height); //width / 6
    let y_bg_matriz = rp(90, 'x', width, height); //165
    let width_bg_matriz = rp(750, 'x', width, height); //width / 6
    let height_bg_matriz = rp(845, 'x', width, height);
    const contenido_delta = rp(60, 'x', width, height);

    const margen_h = rp(120, 'x', width, height);
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
    const delta_y_circleP1 = rp(60, 'x', width, height);
    const x_circleP1 = x_content + rp(65, 'x', width, height);
    const y_circleP1 = y_content + rp(360, 'x', width, height);
    const r_circleP1 = rp(20, 'x', width, height);
    const x_textP1 = x_circleP1 + rp(35, 'x', width, height);
    const y_textP1 = y_circleP1 - rp(25, 'x', width, height);//y_circleP1 + rp(5, 'x', width, height);
    const w_textP1 = width_bg_matriz - (3 * margen_h);
    const h_textP1 = rp(60, 'x', width, height);
    const x_circleNumberP1 = x_circleP1 - rp(4, 'x', width, height);
    const y_circleNumberP1 = y_circleP1 + rp(4, 'x', width, height);
    const fonSize_circleNumberP1 = rp(13, 'x', width, height);
    const practicasLink = practicasData.getPracticasLink();
    //const practicasLink = [];
    //practicasLink[5] = 'buenas_practicas/1_cumplimiento_legalidad.html';
    //practicasLink[4] = 'buenas_practicas/2_compromisos_y_cumplimientos.html';
    //practicasLink[3] = 'buenas_practicas/3_peticion_o_adscripcion_internacional.html';
    //practicasLink[2] = 'buenas_practicas/4_mecanismos_de_aseguramiento.html';
    //practicasLink[1] = 'buenas_practicas/5_metodologia_de_trabajo.html';
    //practicasLink[0] = 'buenas_practicas/6_metodos_de_trabajo_colaboratico.html';

    const fonSize_textP1 = rp(16, 'x', width, height);

    // Posición de la lista de la página 2
    const delta_y_circleP2 = rp(40, 'x', width, height);
    const x_circleP2 = x_content + rp(20, 'x', width, height);
    const y_circleP2 = y_content + relPos(225, width);
    const r_circleP2 = rp(15, 'x', width, height);
    const x_textP2 = x_circleP1 + rp(35, 'x', width, height);
    const y_textP2 = y_circleP2 - rp(25, 'x', width, height);//y_circleP1 + rp(5, 'x', width, height);
    const w_textP2 = width_bg_matriz - (3 * margen_h);
    const h_textP2 = rp(60, 'x', width, height);
    const x_circleNumberP2 = x_circleP2 - rp(4, 'x', width, height);
    const y_circleNumberP2 = y_circleP2 + rp(4, 'x', width, height);
    const fonSize_circleNumberP2 = rp(13, 'x', width, height);
    const fonSize_textP2 = fonSize_textP1;

    var imgId_p2 = 'contenido_roles';
    var imagePath_p2 = '/img/contenido_roles.png';
    var imageX_p2 = relPos(440, width);
    var imageY_p2 = relPos(590, width);
    var imagewidth_p2 = relPos(580, width);


    // estapasContentFO
    const contentFontSize = rp(18, 'x', width, height);
    const content_w = width_bg_matriz - (2 * margen_h);
    const content_h = height_bg_matriz - (2 * margen_v);

    // Posición y tamaño de del "espiral" de la matriz de buenas prácticas
    const x_rosca = x_bg_matriz + rp(700, 'x', width, height);
    const y_rosca = y_bg_matriz + rp(40, 'x', width, height);
    const w_rosca = rp(1100, 'x', width, height); //200
    const h_rosca = rp(850, 'x', width, height); //200
    const scale_rosca = 0.95;


    // Selector página
    const w_selectorPag = width_bg_matriz - (2.2 * margen_h);
    const h_selectorPag = rp(55, 'x', width, height);;
    const x_selectorPag = x_circleP1 - relPos(30, width);//x_bg_matriz + (width_bg_matriz / 2) - (w_selectorPag / 2.2);
    //const y_selectorPag = y_content + rp(700, 'x', width, height);
    const y_selectorPagRef = y_content + rp(270, 'x', width, height);
    const y_selectorPag = [
      y_selectorPagRef + rp(60, 'x', width, height),
      y_selectorPagRef + (2 * rp(60, 'x', width, height)),
      y_selectorPagRef + (3 * rp(60, 'x', width, height)),
      y_selectorPagRef + (4 * rp(60, 'x', width, height)),
      y_selectorPagRef + (5 * rp(60, 'x', width, height)),
      y_selectorPagRef + (6 * rp(60, 'x', width, height))
    ]
    const r_selectorPag = rp(10, 'x', width, height);
    const stroke_selectorPag = 'url(#bgLinGradB)';
    const border_selectorPag = rp(1, 'x', width, height);


    // Posición y tamaño de textos de titulos de etapas
    var paso = rp(65, 'x', width, height);

    // Posición y tamaño selección de rol
    let textRol = ['Competencias mandante', 'Competencias compartidas', 'Competencias proveedor'];
    let colorRol = ['#9E6F9E', '#D9E021', '#B3BABD']; // mandante, compartido, proveedor,

    // Posición y tamaño de título de página "tool tip"
    const x_pageTitleBg = rp(548.5, 'x', width, height);
    const y_pageTitleBg = rp(10, 'x', width, height);
    const w_pageTitleBg = rp(550, 'x', width, height);
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

    // Posición y tamaño de la paginación
    const fonSize_pagination = rp(20, 'x', width, height);
    const space_ButtonPag = rp(15, 'x', width, height);
    const ancho_paginacion = (2 * h_selectorPag) + space_ButtonPag;
    const x_ButtonPag = x_bg_matriz + (width_bg_matriz / 2) - (ancho_paginacion / 2);
    const x_ButtonPag_2 = x_ButtonPag - relPos(30, width);
    const y_ButtonPag = y_selectorPagRef + (7 * rp(60, 'x', width, height));
    const w_ButtonPag = relPos(150, width);
    const w_ButtonPag_2 = relPos(180, width);
    const h_ButtonPag = h_selectorPag;
    const r_ButtonPag = (delta_y_circleP1 / 2);// * rp(0.95, 'x', width, height);
    const x_textPag = x_ButtonPag + rp(30, 'x', width, height);
    const x_textPag_2 = x_textPag - relPos(30, width);
    const y_textPag = y_ButtonPag - rp(5, 'x', width, height);
    const w_textPag = w_ButtonPag * 0.8;
    const h_textPag = h_ButtonPag;
    const fill_buttonPagH = 'url(#bgLinGradF)';
    const fill_buttonPagN = '#fdfdfd';
    var currentPagination = 0;
    var color_pagination = '#111111';
    const color_paginationH = '#ffffff';
    const color_paginationN = color_pagination;
    var x_button;

    /*********************************************
      Renderiza elementos del "espiral" - Begin
    *********************************************/

    const svgSegmentos = svg.append('g')
      .attr('id', 'segmentosEspiral')
      .attr("transform", "scale(" + scale_rosca + ")")
      .attr('opacity', 1);

    // Renderiza líneas discontinuas
    svgSegmentos.append("image")
      .attr('id', 'lineasDiscontinuas')
      .attr('xlink:href', window.location.origin + '/svg/practicas_lineas.svg')
      .attr('x', x_rosca)
      .attr('y', y_rosca)
      .attr('width', w_rosca)
      .attr('height', h_rosca)
      .attr('opacity', 1);

    // Renderiza segmentos
    var segmentIndex = 33;
    svgSegmentos.append("image")
      .attr('id', 'segmentos' + segmentIndex)
      .attr('xlink:href', window.location.origin + '/svg/practicas_segmentos_' + segmentIndex + '.svg')
      .attr('x', x_rosca)
      .attr('y', y_rosca)
      .attr('width', w_rosca)
      .attr('height', h_rosca)
    //for (let l = 0; l < 44; l++) {
    //  segmentIndex = l + 1;
    //  svgSegmentos.append("image")
    //    .attr('id', 'segmentos' + segmentIndex)
    //    .attr('xlink:href', window.location.origin + '/svg/practicas_segmentos_' + segmentIndex + '.svg')
    //    .attr('x', x_rosca)
    //    .attr('y', y_rosca)
    //    .attr('width', w_rosca)
    //    .attr('height', h_rosca)
    //    .style("cursor", "pointer")
    //    .on('mouseover', function (d, i) {
    //      // hace transparente la etapa bajo el cursos
    //      d3.select("#s" + segmentIndex)
    //        .transition()
    //        .duration(100)
    //        .attr('opacity', 0.7);
    //    })
    //    .on('mouseout', function (d, i) {
    //      d3.select("#s" + segmentIndex)
    //        .transition()
    //        .duration(100)
    //        .attr('opacity', 1);
    //    })
    //    .on('click', function () {
    //      d3.select(this)
    //        .transition()
    //        .duration(100)
    //        .attr('opacity', 0.5);
    //    });
    //}
    // Renderiza círculos de responsabilidades (rosca)
    svgSegmentos.append("image")
      .attr('id', 'resonsabilidadesSegmentos')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('xlink:href', window.location.origin + '/svg/practicas_responsabilidades.svg')
      .attr('x', x_rosca)
      .attr('y', y_rosca)
      .attr('width', w_rosca)
      .attr('height', h_rosca)
      .attr('opacity', 0);

    // Renderiza textos rosca
    svgSegmentos.append("image")
      .attr('id', 'contenidoSegmentos')
      .attr('xlink:href', window.location.origin + '/svg/practicas_contenido.svg')
      .attr('x', x_rosca)
      .attr('y', y_rosca)
      .attr('width', w_rosca)
      .attr('height', h_rosca);


    // Renderiza rosca 
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
    const svgSegmentosRosca = svg.append("g")
      .attr('id', 'segmentos')
      .attr('opacity', 1);

    const svgTextoSegmentos = svg.append("g")
      .attr('id', 'textoSegmentos')
      .attr('opacity', 1);
    //var circle_pos_y = y_circleMenu;
    var movingCircleRegreso = 0;

    /*********************************************
     Renderiza elementos del "espiral" - End
    *********************************************/

    /*******************************************************
     Renderiza Base para contenidos - Begin
    ******************************************************/
    // recuadro de contenido
    this.shadow(svg, x_bg_matriz, y_bg_matriz + contenido_delta, width_bg_matriz, height_bg_matriz, radio, radio, 'contentRectShadow');

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
      .attr("width", content_w)
      .attr("height", content_h)
      .attr("font-size", contentFontSize);

    /*******************************************************
     Renderiza Base para contenidos - End
    ******************************************************/

    const x_bg_matriz_roles = relPos(1145, width);
    const y_bg_matriz_roles = y_bg_matriz + contenido_delta;
    const width_bg_matriz_roles = relPos(290, width);
    const height_bg_matriz_roles = relPos(180, width);

    // Posición y tamaño texto agrandado

    let margen_horizontal_text = relPos(20, width);
    let margen_vertical_text = relPos(20, width);
    let x_text = x_bg_matriz_roles + margen_horizontal_text;
    let y_text = y_bg_matriz_roles + margen_vertical_text;
    let width_text = width_bg_matriz_roles - (margen_horizontal_text * 2);
    let height_text = height_bg_matriz_roles - (margen_vertical_text * 2);
    let sel_selected_width = rp(150, 'x', width, height);
    var fonSize_textoAgrandado = relPos(18, width);
    let style_text = 'font-family:Roboto;color:#111111;font-size:' + fonSize_textoAgrandado + 'px';
    let r_text_nivel = relPos(15, width);
    let r_text_roles = relPos(10, width);
    let delta_x_text_roles = relPos(40, width);

    // recuadro de contenido
    this.shadow(svg, x_bg_matriz_roles, y_bg_matriz_roles, width_bg_matriz_roles, height_bg_matriz_roles, radio_small, radio_small, 'contentRectShadowRoles');
    d3.select('#contentRectShadowRoles').attr('opacity', 0);

    svg.append("foreignObject")
      .attr('id', 'textoAgrandado')
      .attr('x', x_text)
      .attr('y', y_text + relPos(5, width))
      .attr("width", width_text)
      .attr("height", height_text)
      .attr('opacity', 0)
      .html(function (d) {
        return '<div style="' + style_text + '"><p align="left"> . </p></div>'
      });
    svg.append("circle")
      .attr("id", 'circleNivel')
      .attr("cx", x_text)
      .attr("cy", y_text)
      .attr("r", r_text_nivel)
      .attr('opacity', 0)
      .style("fill", 'black');
    svg.append("circle")
      .attr("id", 'circleRol1')
      .attr("cx", x_text)
      .attr("cy", y_text)
      .attr("r", r_text_roles)
      .attr('opacity', 0)
      .style("fill", 'black');
    svg.append("circle")
      .attr("id", 'circleRol2')
      .attr("cx", x_text)
      .attr("cy", y_text)
      .attr("r", r_text_roles)
      .attr('opacity', 0)
      .style("fill", 'black');
    svg.append("circle")
      .attr("id", 'circleRol3')
      .attr("cx", x_text)
      .attr("cy", y_text)
      .attr("r", r_text_roles)
      .attr('opacity', 0)
      .style("fill", 'black');




    /******************************************************
     Renderiza contenidos página dos - Begin
    ******************************************************/
    const svgPaginaDos = svg.append("g")
      .attr('id', 'paginaDos')
      .attr('opacity', 0);

    // Render lista
    var deltaCircle = 0;
    var deltaCircleDoubleLine = 3;
    for (let i = 0; i < textRol.length; i++) {

      svgPaginaDos.append("circle")
        .attr("id", 'circleP1' + i)
        .attr("cx", x_circleP2)
        .attr("cy", y_circleP2 + deltaCircle)
        .attr("r", r_circleP2)
        .style("stroke", "white")
        .attr('opacity', 1)
        .style("fill", colorRol[i]);

      svgPaginaDos.append("text")
        .attr('id', 'circleNumberP2')
        .attr('x', x_circleNumberP2)
        .attr('y', y_circleNumberP2 + deltaCircle)
        .attr("font-size", fonSize_circleNumberP2)
        .attr("font-weight", "bold")
        //.text(i + 1)
        .style('fill', 'white');

      svgPaginaDos.append("foreignObject")
        .attr('id', 'circleTextP1')
        .attr('x', x_textP2)
        .attr('y', y_textP2 + deltaCircle)
        .attr("width", w_textP2)
        .attr("height", h_textP2)
        .html(function (d) {
          return '<div style="font-family:Roboto;font-weight:bold;color:#111111;font-size:' + fonSize_textP2 + 'px"><p align="justify">' + textRol[i] + '</p></div>'
        })

      deltaCircle = deltaCircle + delta_y_circleP2;
    }

    // Renderiza imágen de pacto global y ODS
    svgPaginaDos.append("image")
      .attr('id', imgId_p2 + '_image')
      .attr("xlink:href", window.location.origin + imagePath_p2)
      .attr("x", imageX_p2)
      .attr("y", imageY_p2)
      .attr("width", imagewidth_p2);

    // Renderiza textos de imágen de pacto global y ODS
    var x_textP2ImagenContenido = relPos(440, width);
    var y_textP2ImagenContenido = relPos(565, width);
    var fontSize_textP2ImagenContenido = relPos(16, width);
    var font_textP2ImagenContenido = 'Roboto';
    var lineHeight_textP2ImagenContenido = 0;
    var align_textP2ImagenContenido = 0;
    var margin_textP2ImagenContenido = relPos(18, width);
    var color_textP2ImagenContenido = '#000000';
    var letterSpacing_textP2ImagenContenido = 'Roboto';
    var id_texto_pg = 'id_texto_pg_1';
    svgPaginaDos.append("foreignObject")
      .attr("id", id_texto_pg)
      .attr('opacity', 1)
      .attr('x', x_textP2ImagenContenido)
      .attr('y', y_textP2ImagenContenido)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="line-height: ' + lineHeight_textP2ImagenContenido + ';"><p align="' + align_textP2ImagenContenido + '" style="margin: ' + margin_textP2ImagenContenido + '; color: ' + color_textP2ImagenContenido + '; letter-spacing:' + letterSpacing_textP2ImagenContenido + 'px"><b>10 Principios Pacto Global</b></p></div>'
      })
      .attr("font-size", fontSize_textP2ImagenContenido)
      .style("font-family", font_textP2ImagenContenido);

    id_texto_pg = 'id_texto_pg_2';
    svgPaginaDos.append("foreignObject")
      .attr("id", id_texto_pg)
      .attr('opacity', 1)
      .attr('x', x_textP2ImagenContenido + relPos(10, width))
      .attr('y', y_textP2ImagenContenido + relPos(70, width))
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="line-height: ' + lineHeight_textP2ImagenContenido + ';"><p align="' + align_textP2ImagenContenido + '" style="margin: ' + margin_textP2ImagenContenido + '; color: ' + color_textP2ImagenContenido + '; letter-spacing:' + letterSpacing_textP2ImagenContenido + 'px">DDHH</p></div>'
      })
      .attr("font-size", fontSize_textP2ImagenContenido)
      .style("font-family", font_textP2ImagenContenido);

    id_texto_pg = 'id_texto_pg_3';
    svgPaginaDos.append("foreignObject")
      .attr("id", id_texto_pg)
      .attr('opacity', 1)
      .attr('x', x_textP2ImagenContenido + relPos(10, width))
      .attr('y', y_textP2ImagenContenido + relPos(142, width))
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="line-height: ' + lineHeight_textP2ImagenContenido + ';"><p align="' + align_textP2ImagenContenido + '" style="margin: ' + margin_textP2ImagenContenido + '; color: ' + color_textP2ImagenContenido + '; letter-spacing:' + letterSpacing_textP2ImagenContenido + 'px">Normas Laborales</p></div>'
      })
      .attr("font-size", fontSize_textP2ImagenContenido)
      .style("font-family", font_textP2ImagenContenido);

    id_texto_pg = 'id_texto_pg_3';
    svgPaginaDos.append("foreignObject")
      .attr("id", id_texto_pg)
      .attr('opacity', 1)
      .attr('x', x_textP2ImagenContenido + relPos(10, width))
      .attr('y', y_textP2ImagenContenido + relPos(218, width))
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="line-height: ' + lineHeight_textP2ImagenContenido + ';"><p align="' + align_textP2ImagenContenido + '" style="margin: ' + margin_textP2ImagenContenido + '; color: ' + color_textP2ImagenContenido + '; letter-spacing:' + letterSpacing_textP2ImagenContenido + 'px">Medio Ambiente</p></div>'
      })
      .attr("font-size", fontSize_textP2ImagenContenido)
      .style("font-family", font_textP2ImagenContenido);

    id_texto_pg = 'id_texto_pg_4';
    svgPaginaDos.append("foreignObject")
      .attr("id", id_texto_pg)
      .attr('opacity', 1)
      .attr('x', x_textP2ImagenContenido + relPos(10, width))
      .attr('y', y_textP2ImagenContenido + relPos(295, width))
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="line-height: ' + lineHeight_textP2ImagenContenido + ';"><p align="' + align_textP2ImagenContenido + '" style="margin: ' + margin_textP2ImagenContenido + '; color: ' + color_textP2ImagenContenido + '; letter-spacing:' + letterSpacing_textP2ImagenContenido + 'px">Anticorrupción</p></div>'
      })
      .attr("font-size", fontSize_textP2ImagenContenido)
      .style("font-family", font_textP2ImagenContenido);

    id_texto_pg = 'id_texto_pg_5';
    svgPaginaDos.append("foreignObject")
      .attr("id", id_texto_pg)
      .attr('opacity', 1)
      .attr('x', x_textP2ImagenContenido + relPos(295, width))
      .attr('y', y_textP2ImagenContenido)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="line-height: ' + lineHeight_textP2ImagenContenido + ';"><p align="' + align_textP2ImagenContenido + '" style="margin: ' + margin_textP2ImagenContenido + '; color: ' + color_textP2ImagenContenido + '; letter-spacing:' + letterSpacing_textP2ImagenContenido + 'px"><b>17 Objetivos ODS</b></p></div>'
      })
      .attr("font-size", fontSize_textP2ImagenContenido)
      .style("font-family", font_textP2ImagenContenido);


    /*
            svgPaginaDos.append("rect")
            .attr("x", imageX)
            .attr("y", imageY)
            .attr("width", imagewidth)
            .attr("height", imagewidth)
            .attr("r", r_circleP2)
            .style("stroke", "black")
            .attr('opacity', 0.5)
            .style("fill", 'blue');/**/


    /******************************************************
     Renderiza contenidos página dos - End
    ******************************************************/



    /*******************************************
     Renderiza selector de página - Begin
    ********************************************/
    // Activa página Uno
    practica.togglePaginaPracticas(1, paginasPracticas, paginaSeleccionada, y_selectorPag);
    // Paginación
    const svgPagination = svg.append("g")
      .attr('id', 'pagination')
      .attr('opacity', 1);

    // Recuadro contenedor principal

    // Paginación botones
    svgPagination.append('rect')
      .attr("id", "pag")
      .attr('x', x_ButtonPag)
      .attr('y', y_ButtonPag)
      .attr('rx', r_selectorPag)
      .attr('ry', r_selectorPag)
      .style("fill", "#fdfdfd")
      .style("stroke", stroke_selectorPag)
      .style("stroke-width", border_selectorPag)
      .attr("filter", "url(#shadowFilter)")
      //.style("cursor", "pointer")
      .attr('width', w_ButtonPag) //width / 4.5
      .attr('height', h_ButtonPag);

    //var indexPagination = i + 1;

    // paginación textos
    svgPagination.append("foreignObject")
      .attr('id', 'pagText')
      .attr('x', x_textPag)
      .attr('y', y_textPag)
      .attr("width", w_textPag)
      .attr("height", h_textPag)
      //.style("cursor", "pointer")
      .html(function (d) {
        return '<div style="font-family:Roboto;font-weight:bold;color:' + color_pagination + ';font-size:' + fonSize_pagination + 'px"><p align="justify">Ver roles</p></div>'
      });

    svgPagination.append('rect')
      .attr("id", "pagClick")
      .attr('x', x_ButtonPag)
      .attr('y', y_ButtonPag)
      .attr('rx', r_selectorPag)
      .attr('ry', r_selectorPag)
      .style("fill", "#ffffff")
      .attr('opacity', 0)
      .style("cursor", "pointer")
      .attr('width', w_ButtonPag) //width / 4.5
      .attr('height', h_ButtonPag) //height / 20
      .on('mouseover', function () {
        // Resalta
        practica.setButtonMouseStatus('#pag', 100, 0.7, fill_buttonPagH);
        //practica.setTextColor('#pagText', 100, color_paginationH, fonSize_pagination, currentPagination);
      })
      .on('mouseout', function () {
        // Deja normal

        practica.setButtonMouseStatus('#pag', 50, 1, fill_buttonPagN);
        //practica.setTextColor('#pagText', 50, color_paginationN, fonSize_pagination, currentPagination);
      }).on('click', function () {

        if (paginaSeleccionada == 'paginaDos') {
          currentPagination = 0;
          paginaSeleccionada = 'paginaUno';
          d3.select('#pagText').html(function (d) {
            return '<div style="font-family:Roboto;font-weight:bold;color:' + color_pagination + ';font-size:' + fonSize_pagination + 'px"><p align="justify">Ver roles</p></div>'
          });
          d3.select('#pag')
            .attr('x', x_ButtonPag)
            .attr('width', w_ButtonPag);
          d3.select('#pagText').attr('x', x_textPag);
        }
        else {
          currentPagination = 1;
          paginaSeleccionada = 'paginaDos';
          d3.select('#pagText').html(function (d) {
            return '<div style="font-family:Roboto;font-weight:bold;color:' + color_pagination + ';font-size:' + fonSize_pagination + 'px"><p align="justify">Ver practicas</p></div>'
          });
          d3.select('#pag')
            .attr('x', x_ButtonPag_2)
            .attr('width', w_ButtonPag_2);
          d3.select('#pagText').attr('x', x_textPag_2);
        }
        practica.togglePaginaPracticas(1, paginasPracticas, paginaSeleccionada, y_selectorPag);
        practica.toggleMouseStatus('#pag' + currentPagination, 0, 0.7, fill_buttonPagH, fill_buttonPagN);
        //practica.toggleTextColor('#pagText' + currentPagination, 100, color_paginationH, color_paginationN, fonSize_pagination, currentPagination);
      });

    /*var deltaPagination = 0;
    for (let i = 0; i < 2; i++) {

      // Paginación botones
      svgPagination.append('rect')
        .attr("id", "pag" + i)
        .attr('x', x_ButtonPag + deltaPagination)
        .attr('y', y_ButtonPag)
        .attr('rx', r_selectorPag)
        .attr('ry', r_selectorPag)
        .style("fill", "#fdfdfd")
        .style("stroke", stroke_selectorPag)
        .style("stroke-width", border_selectorPag)
        .attr("filter", "url(#shadowFilter)")
        //.style("cursor", "pointer")
        .attr('width', w_ButtonPag) //width / 4.5
        .attr('height', h_ButtonPag);

      var indexPagination = i + 1;
      if (i == currentPagination)
        color_pagination = color_paginationH;
      else
        color_pagination = color_paginationN;
      // paginación textos
      svgPagination.append("foreignObject")
        .attr('id', 'pagText' + i)
        .attr('x', x_textPag + deltaPagination)
        .attr('y', y_textPag)
        .attr("width", w_textPag)
        .attr("height", h_textPag)
        //.style("cursor", "pointer")
        .html(function (d) {
          return '<div style="font-family:Roboto;font-weight:bold;color:' + color_pagination + ';font-size:' + fonSize_pagination + 'px"><p align="justify">' + indexPagination + '</p></div>'
        });

      svgPagination.append('rect')
        .attr("id", "pagClick" + i)
        .attr('x', x_ButtonPag + deltaPagination)
        .attr('y', y_ButtonPag)
        .attr('rx', r_selectorPag)
        .attr('ry', r_selectorPag)
        .style("fill", "#ffffff")
        .attr('opacity', 0)
        .style("cursor", "pointer")
        .attr('width', w_ButtonPag) //width / 4.5
        .attr('height', h_ButtonPag) //height / 20
        .on('mouseover', function () {
          // Resalta
          if (i != currentPagination) {
            practica.setButtonMouseStatus('#pag' + i, 100, 0.7, fill_buttonPagH);
            practica.setTextColor('#pagText' + i, 100, color_paginationH, fonSize_pagination, indexPagination);
          }
        })
        .on('mouseout', function () {
          // Deja normal
          if (i != currentPagination) {
            practica.setButtonMouseStatus('#pag' + i, 50, 1, fill_buttonPagN);
            practica.setTextColor('#pagText' + i, 50, color_paginationN, fonSize_pagination, indexPagination);
          }
        }).on('click', function () {
          if (i != currentPagination) {
            if (paginaSeleccionada == 'paginaDos') {
              currentPagination = 0;
              paginaSeleccionada = 'paginaUno';
            }
            else {
              currentPagination = 1;
              paginaSeleccionada = 'paginaDos';
            }
            practica.togglePaginaPracticas(1, paginasPracticas, paginaSeleccionada, y_selectorPag);
            practica.toggleMouseStatus('#pag' + currentPagination, 0, 0.7, fill_buttonPagH, fill_buttonPagN);
            practica.toggleTextColor('#pagText' + currentPagination, 100, color_paginationH, color_paginationN, fonSize_pagination, indexPagination);
          }
        });

      deltaPagination = space_ButtonPag + w_ButtonPag;
    }/**/
    practica.setButtonMouseStatus('#pag' + currentPagination, 0, 0.7, fill_buttonPagH);

    /*****************************************
     Renderiza selector de página - End
    ******************************************/

    /*******************************************************
     Renderiza contenidos página uno - Begin
    ******************************************************/
    const svgPaginaUno = svg.append("g")
      .attr('id', 'paginaUno')
      .attr('opacity', 1);

    // renderiza los fondos de botón de listaa
    for (let i = 0; i < y_selectorPag.length; i++) {

      svgPaginaUno.append('rect')
        .attr("id", "buttonSelector" + (6 - (i + 1)))
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
    }/**/

    // Render lista
    var deltaCircle = 0;
    for (let i = 0; i < practicasLabel.length; i++) {

      svgPaginaUno.append("circle")
        .attr("id", 'circleP1' + i)
        .attr("cx", x_circleP1)
        .attr("cy", y_circleP1 + deltaCircle)
        .attr("r", r_circleP1)
        .style("stroke", "white")
        .attr('opacity', 1)
        .style("fill", practicasColor[i])
        ;

      svgPaginaUno.append("text")
        .attr('id', 'circleNumberP1')
        .attr('x', x_circleNumberP1)
        .attr('y', y_circleNumberP1 + deltaCircle)
        .attr("font-size", fonSize_circleNumberP1)
        .attr("font-weight", "bold")
        //.text(i + 1)
        .text(practicasLabel.length - i)
        .style('fill', 'white')
        ;
      if (i == 1 || i == 2)
        deltaCircleDoubleLine = rp(10, 'x', width, height);//10;
      else
        deltaCircleDoubleLine = 0;
      svgPaginaUno.append("foreignObject")
        .attr('id', 'circleTextP1' + i)
        .attr('x', x_textP1)
        .attr('y', y_textP1 + deltaCircle - deltaCircleDoubleLine)
        .attr("width", w_textP1)
        .attr("height", h_textP1)
        .html(function (d) {
          return '<div style="font-family:Roboto;font-weight:bold;color:#111111;font-size:' + fonSize_textP1 + 'px"><p align="justify">' + practicasLabel[i] + '</p></div>'
        });

      deltaCircle = deltaCircle + delta_y_circleP1;
    }

    // Renderiza superficie clickeable
    for (let i = 0; i < y_selectorPag.length; i++) {
      svgPaginaUno.append('rect')
        .attr("id", "buttonSelectorClick" + i)
        //.attr("id", "buttonSelectorClick" + (6 - (i + 1)))
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
          // Resalta
          practica.setButtonMouseStatus('#buttonSelector' + (6 - (i + 1)), 100, 0.7, 'url(#bgLinGradB)');
          d3.select('#circleEspiral' + (6 - (i + 1)))
            .transition()
            .duration(100)
            .attr('r', r_circleP2 * 1.5);
        })
        .on('mouseout', function () {
          // Deja normal
          practica.setButtonMouseStatus('#buttonSelector' + (6 - (i + 1)), 50, 1, '#fdfdfd');
          d3.select('#circleEspiral' + (6 - (i + 1)))
            .transition()
            .duration(100)
            .attr('r', r_circleP2);
        })
        .on('click', function () {
          animaSidebarPracticas(svg, width, height);
          var x_animCircle = relPos(1920, width);
          var y_animCircle = relPos(180, width);
          var width_animCircle = relPos(120, width);
          var id_animCircle = 'circleP1' + i;
          var radio_animCircle = relPos(120, width);
          //practica.animaTooltipTitle(getDurationAnim(), x_animCircle, y_animCircle, width_animCircle, id_animCircle, radio_animCircle);
          setTimeout(function () {
            window.location.href = '/' + practicasLink[i];
          }, getTimeOut() * 3)
        });
    }/**/

    // renderiza el trianbulo explicativo 
    //triangle
    const x_triangle = rp(485, 'x', width, height);
    const y_triangle = y_circleP1 + rp(330, 'x', width, height)
    const vertexAX = (0) //
    const vertexAY = (-rp(355, 'x', width, height)) //valor negativo indica punta arriba
    const vertexBX = (-rp(70, 'x', width, height))
    const vertexBY = (0)
    const vertexCX = (rp(0, 'x', width, height))
    const vertexCY = (0)
    const color_triangle = 'rgb(96,52,255)';

    var valueSetTriangle = [];
    valueSetTriangle['svg'] = svgPaginaUno;
    valueSetTriangle['x'] = x_triangle;
    valueSetTriangle['y'] = y_triangle;
    valueSetTriangle['vertexAX'] = vertexAX;
    valueSetTriangle['vertexAY'] = vertexAY;
    valueSetTriangle['vertexBX'] = vertexBX;
    valueSetTriangle['vertexBY'] = vertexBY;
    valueSetTriangle['vertexCX'] = vertexCX;
    valueSetTriangle['vertexCY'] = vertexCY;
    valueSetTriangle['fill'] = 'url(#bgTriengleEtapasGradient)';
    valueSetTriangle['filter'] = '';
    setTriangleAdvance(valueSetTriangle);

    svgPaginaUno.append("text")
      .attr('id', 'baseLabel')
      .attr('x', x_triangle - rp(70, 'x', width, height))
      .attr('y', y_triangle + rp(15, 'x', width, height))
      .attr("font-size", fonSize_circleNumberP1)
      .attr("font-weight", "bold")
      .text("NIVEL BASE")
      .style('fill', color_triangle);/**/

    /******************************************************
     Renderiza contenidos página uno - End
    ******************************************************/
    const x_circleEspiral = rp(1490, 'x', width, height);
    const y_circleEspiral = [
      rp(163, 'x', width, height),
      rp(218, 'x', width, height),
      rp(275, 'x', width, height),
      rp(335, 'x', width, height),
      rp(390, 'x', width, height),
      rp(460, 'x', width, height)
    ];

    for (let i = 0; i < practicasColorEspiral.length; i++) {
      svg.append("circle")
        .attr("id", 'circleEspiral' + i)
        .attr("cx", x_circleEspiral)
        .attr("cy", y_circleEspiral[i])
        .attr("r", r_circleP2)
        .style("stroke", "white")
        .attr('opacity', 1)
        .style("fill", practicasColorEspiral[i]);
      setHtmlText(
        svg, 1, 'textGradientBold' + i,
        x_circleEspiral - rp(5, 'x', width, height),
        y_circleEspiral[i] - rp(9, 'x', width, height),
        (width / 30),
        rp(36, 'x', width, height),
        i + 1,
        rp(15, 'x', width, height), 'roboto', 'justify', 0, 'white', '', '')
    }

    /******************************************************
     Área clickeable del espiral - begin
    ******************************************************/
    var space_segment = rp(8, 'x', width, height);;
    const outerRadius = [];
    outerRadius[0] = rp(110, 'x', width, height);
    outerRadius[1] = outerRadius[0] + rp(60, 'x', width, height);
    outerRadius[2] = outerRadius[1] + rp(60, 'x', width, height);
    outerRadius[3] = outerRadius[2] + rp(60, 'x', width, height);
    outerRadius[4] = outerRadius[3] + rp(60, 'x', width, height);
    outerRadius[5] = outerRadius[4] + rp(55, 'x', width, height);
    outerRadius[6] = outerRadius[5] + rp(55, 'x', width, height);

    const innerRadius = [];
    innerRadius[0] = rp(39, 'x', width, height);
    innerRadius[1] = space_segment + outerRadius[0];
    innerRadius[2] = space_segment + outerRadius[1];
    innerRadius[3] = space_segment + outerRadius[2];
    innerRadius[4] = space_segment + outerRadius[3];
    innerRadius[5] = space_segment + outerRadius[4];
    innerRadius[6] = space_segment + outerRadius[5];

    const arcPad = [];
    arcPad[0] = 0.01;
    arcPad[1] = 0.01;
    arcPad[2] = 0.01;
    arcPad[3] = 0.01;
    arcPad[4] = 0.01;
    arcPad[5] = 0.01;
    arcPad[6] = 0.01;

    const arcLen = [];
    arcLen[0] = 0.523;
    arcLen[1] = 0.523;
    arcLen[2] = 0.523;
    arcLen[3] = 0.523;
    arcLen[4] = 0.523;
    arcLen[5] = 0.523;
    arcLen[6] = 0.523;

    // Posición y tamaño superficie clickeable de etapas "caracol"
    const x_clickAreaEspiral = rp(1519, 'x', width, height);
    const y_clickAreaEspiral = rp(526, 'x', width, height);
    const svgClicklAreaEspiral = svg.append("g")
      .attr('id', 'clickAreaEspiral')
      .attr('opacity', 1)
      .attr("transform", "translate(" + x_clickAreaEspiral + "," + y_clickAreaEspiral + ") scale(" + scale_rosca + ")");

    var segmentId = '';
    for (let p = 0; p < practicasAreaClick.length; p++) {
      var startAngle = 0;
      var endAngle = 0.52;
      for (let s = 0; s < practicasAreaClick[p].length; s++) {
        var indexR = [
          5, 4, 3, 2, 1, 0
        ]
        var indexRR = [
          0, 1, 2, 3, 4, 5
        ]
        var arcSegment = d3.arc()
          .innerRadius(innerRadius[p])
          .outerRadius(outerRadius[p])
          .startAngle(startAngle)     // It's in radian, so Pi = 3.14 = bottom.
          .endAngle(endAngle);        // 2*Pi = 6.28 = top        
        segmentId = 'segment_' + p + '_' + s;
        svgClicklAreaEspiral.append("path")
          .attr("id", segmentId)
          .attr("d", arcSegment)
          .attr('opacity', 0.3)
          .attr("fill", practicasColor[p])
          .attr("indexPractica", p) // Por qué?, porque el índice p, no tiene el alcance para ser utilizado dentro de la función de mouseover, mouseout y click anidado dentro de 2 for
          .style("cursor", "pointer")
          .on('mouseover', function () {

            // Resalta
            var index = d3.select(this).attr("indexPractica");
            var rolColor1 = colorRol[0];
            var rolColor2 = colorRol[1];
            var rolColor3 = 'transparent';
            if (p != 5) {
              rolColor1 = colorRol[2];
              rolColor2 = colorRol[2];
              rolColor3 = colorRol[2];
            }
            practica.setButtonMouseStatus('#buttonSelector' + indexR[index], 100, 0.7, 'url(#bgLinGradB)');
            d3.select('#circleEspiral' + indexR[index])
              .transition()
              .duration(100)
              .attr('r', r_circleP2 * 1.5);

            d3.select('#textoAgrandado')
              .html(function (d) {
                return '<div style="' + style_text + '"><p align="left"> ' + textosPracticas[p][s] + ' </p></div>';
              })
              .transition()
              .duration(100)
              .attr('opacity', 1);

            d3.select('#contentRectShadowRoles')
              .transition()
              .duration(100)
              .attr('opacity', 1);

            d3.select('#circleNivel')
              .style("fill", practicasColor[p])
              .transition()
              .duration(200)
              .attr("cx", x_text)
              .attr("cy", y_text)
              .attr('opacity', 1);
            if (currentPagination == 1) {

              d3.select('#circleRol1')
                .style("fill", rolColor1)
                .transition()
                .duration(200)
                .attr("cx", x_text + delta_x_text_roles)
                .attr('y', y_text + relPos(5, width))
                .attr('opacity', 1);
              if (rolColor3 == 0) {
                rolColor3 = colorRol[2]
              }
              d3.select('#circleRol2')
                .style("fill", rolColor2)
                .transition()
                .duration(200)
                .attr("cx", x_text + (delta_x_text_roles * 2))
                .attr('y', y_text + relPos(5, width))
                .attr('opacity', 1);
              d3.select('#circleRol3')
                .style("fill", rolColor3)
                .transition()
                .duration(200)
                .attr("cx", x_text + (delta_x_text_roles * 3))
                .attr('y', y_text + relPos(5, width))
                .attr('opacity', 1);
            }
          })
          .on('mouseout', function (i) {
            /*d3.select(this)
              .attr('opacity', 0.3)
              .attr("transform", "scale(" + scale_rosca + ")");/**/
            // Deja normal
            var index = d3.select(this).attr("indexPractica");
            practica.setButtonMouseStatus('#buttonSelector' + indexR[index], 50, 1, '#fdfdfd');
            d3.select('#circleEspiral' + indexR[index])
              .transition()
              .duration(100)
              .attr('r', r_circleP2);
            d3.select('#textoAgrandado').attr('opacity', 0);
            d3.select('#contentRectShadowRoles').attr('opacity', 0);

            d3.select('#circleNivel')
              .style("fill", practicasColor[p])
              .style("fill", 'transparent')
              .transition()
              .duration(100)
              .attr("cx", x_text)
              .attr("cy", y_text)
              .attr('opacity', 0);
            d3.select('#circleRol1')
              .style("fill", 'transparent')
              .transition()
              .duration(100)
              .attr("cx", x_text)
              .attr("cy", y_text)
              .attr('opacity', 0);
            d3.select('#circleRol2')
              .style("fill", 'transparent')
              .transition()
              .duration(100)
              .attr("cx", x_text)
              .attr("cy", y_text)
              .attr('opacity', 0);
            d3.select('#circleRol3')
              .style("fill", 'transparent')
              .transition()
              .duration(100)
              .attr("cx", x_text)
              .attr("cy", y_text)
              .attr('opacity', 0);
          })
          .on('click', function () {
            animaSidebarPracticas(svg);
            //practica.animaTooltipTitle(getDurationAnim(), rp(1450, 'x', width, height), rp(10, 'x', width, height), rp(1490, 'x', width, height), rp(5, 'x', width, height), rp(450, 'x', width, height));
            var idx = d3.select(this).attr("indexPractica");
            setTimeout(function () {
              window.location.href = '/' + practicasLink[idx];
            }, getTimeOut())
          });
        startAngle = endAngle + arcPad[p];
        endAngle = arcLen[p] + endAngle;
        //endAngle = startAngle + arcLen[p];
      }
      //innerRadius = innerRadius + h_segment[p] + space_segment;
      //outerRadius = outerRadius + h_segment[p];
    }

    /******************************************************
     Área clickeable del espiral - end
    ******************************************************/

    /******************************
    Section 3 - breadcrumb - Start
    //*******************************/
    breadcrumb(svg, width, height, 'Inicio', 'Matríz de buenas prácticas', '/guia_de_gestion', '');
    /******************************
    Section 3 - breadcrumb - End
    *******************************/



    /******************************
     Sidebar - Start
    *******************************/
    getSideBarLines(svg, width);
    svg.append('rect')
      .attr('id', 'rectWhiteFade')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr('opacity', 1)
      .attr("fill", 'white');

    getSideBarPracticasFome(svg, width, heightCorrected, styles.grow);
    /******************************
     Sidebar - End
    *******************************/

    /******************************
      Botón cómo usar - Begin
    *******************************/
    //var globoX_link = relPos(70, width);
    //var globoY_link = relPos(750, width);
    //var globoWidth_link = relPos(200, width);
    //var globoHeight_link = relPos(100, width);
    //var strokeWidth_link = relPos(2, width);
    //var globoRect_rx_ry = relPos(8.78, width);
    //var globoMargin = relPos(0.1, width);
    //var textMargin_link = relPos(0.1, width);
    //var link_link = '/guia_de_gestion/como_usar_la_guia_practicas.html';
    //var id_link = 'link_1';
    //var text = [
    //  '<b>Cómo usar</b><br><br>Prácticas'
    //];
    //setLinkRef(svg, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
    practica.getcomoUsar(svg, width, height);
    /******************************
      Botón cómo usar - End
    *******************************/

    /******************************
     Brand corner - begin
    *******************************/
    headerCornerLogo(svg, width, heightCorrected);
    /******************************
     Brand corner - end
    *******************************/

    d3.select('#rectWhiteFade')
      .transition()
      .duration(getDurationAnim())
      .attr('opacity', 0)
      .duration(10)
      .attr("height", 1);

    /**********************************
     Título tooltip rectangle - begin
    **********************************/
    svg.append('rect')
      .attr('id', 'pageTitle')
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
      .attr("width", w_pageTitle)
      .attr("height", h_pageTitle)
      .html(function (d) {
        return '<div style="' + style_pageTitle + '"><p align="justify">MATRÍZ DE BUENAS PRÁCTICAS</p></div>'
      })

    /**********************************
     Título tooltip rectangle - end
    **********************************/

    // Dev Tool
    //setPointerPositionTool(svg, width, height)
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

export default BuenasPracticas;