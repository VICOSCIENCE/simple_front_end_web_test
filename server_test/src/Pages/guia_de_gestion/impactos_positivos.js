import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
import * as d3 from 'd3';
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import {
  behindHorizontalLine,
  curvedLine,
  menuCircles,
  breadCrumbGuia,
  headerCornerLogo,
  gradients,
  shadowFilters,
  shadowFiltersReverse,
  setTriangle,
  setGloboRect,
  setGloboRectImage,
  setGloboRectButtonImage,
  setGloboRectButtonImageContenidoBase,
  setLinkRef,
  setPointerPositionTool, getPositionMenuSelected
} from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText, setHtmlTextLink, setFlipImgText } from "../../functions/htmlText";
import { OpenGraph, MetaData } from "../../functions/metaTags";
import { setclickInstruction } from "../../functions/tutorial";

class Metodologia extends Component {
  constructor(props) {
    super(props);
  }

  //circle shadow 
  circleShadow(svg) {
    var g1 = svg.append('g');
    var defs = svg.append("defs");

    var filter = defs.append("filter")
      .attr("id", "circleshadow")

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "blur");
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("result", "offsetBlur");
    filter.append("feFlood")
      .attr("in", "offsetBlur")
      .attr("flood-color", "black")
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
  }
  //selected circle shadow 
  selectedcircleshadow(svg) {
    var g1 = svg.append('g');
    var defs = svg.append("defs");

    var filter = defs.append("filter")
      .attr("id", "selectedcircleshadow")

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 5)
      .attr("result", "blur");
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("result", "offsetBlur");
    filter.append("feFlood")
      .attr("in", "offsetBlur")
      .attr("flood-color", "black")
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
  }
  // shadow stuff:
  shadow(svg, x, y, w, h, rx, ry) {
    var g1 = svg.append('g');
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
      .attr("x", x)
      .attr("y", y)
      .attr('width', w)
      .attr('height', h)
      .style('fill', "white")
      .attr("filter", "url(#dropshadow)")
      .attr("rx", rx)
      .attr("ry", ry)
  }

  //gradient rect
  gradientRect(svg, x, y, w, h, rx, ry, stroke, filter, id) {
    if (window.innerHeight > window.innerWidth) {
      var width = window.innerWidth
      var height = (getReferenceSizeHeight() / getReferenceSizeWidth()) * window.innerWidth
    } else {
      var width = window.innerWidth
      var height = window.innerHeight
    }
    var svgDefs = svg.append('defs');

    svg.append('rect')
      .attr('id', id)
      .attr('x', x)
      .attr('y', y)
      .attr("transform", "rotate(0)")
      .attr('width', w)
      .attr('height', h)
      .attr('stroke', stroke) //bgLinGradA
      .attr('stroke-width', height / 250)
      .attr("filter", filter)
      .attr("fill", "white")
      .attr("rx", rx)
      .attr("ry", ry)
    /*.on('mouseover', function (d, i) {
      // hace transparente la etapa bajo el cursos
      d3.select(this)
        .transition()
        .duration(100)
        .attr('x', x + (w / 2))
        .attr('width', 0)
    })
    .on('mouseout', function (d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr('x', x)
        .attr('width', w)

    })*/
  }
  //small rect gradient
  gradientRectSmall(svg, x, y, w, h) {
    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
      .attr('id', 'mainGradient');

    mainGradient.append('stop')
      .attr('class', 'sen-stop-left')
      .attr('offset', '0')

    mainGradient.append('stop')
      .attr('class', 'sen-stop-right')
      .attr('offset', '1');

    svg.append('rect')
      .classed('outlined', true)
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("rx", 5)
      .attr("ry", 5)

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .attr("rx", 5)
      .attr("ry", 5)
  }

  //main
  main = (element) => {
    // Obtiene el tamaño de la pantalla en uso
    const width = window.innerWidth;
    var height = window.innerHeight;
    // Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
    // En base a una resolución de pantalla de W:1920 H:1080
    const refWidth = getReferenceSizeWidth();
    const refHeight = getReferenceSizeHeight();
    var heightCorrected = Math.round((refHeight * width) / refWidth);
    //const heightCorrected = Math.round(width/aspectRatio);
    if (height > width) {
      heightCorrected = Math.round((refHeight * width) / refWidth);
    }
    height = heightCorrected;
    const radio = 80;

    const svg = d3.select(element)
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + width + " " + height)
      //class to make it responsive
      .classed("svg-content-responsive", true)


    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg);



    





    /******************************
      1 Isael Alliance - Begin
    *******************************/
    const svgPaginaIsaelAlliance = svg.append("g")
      .attr('id', 'svgPaginaIsaelAlliance')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('opacity', 0);

    //setGloboRect(svg, width, height, globoX, globoY, globoWidth, globoMargin , globoHeight, textMargin, text, id)

    /******************************
      1 Isael Alliance - End
    *******************************/


    /******************************
      2 Smith - Begin
    *******************************/
    const svgPaginaSmith = svg.append("g")
      .attr('id', 'svgPaginaSmith')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('opacity', 0);

    /******************************
      2 Smith - End
    *******************************/


    /******************************
      3 Sharedvaluechain - Begin
    *******************************/
    const svgPaginaSharedvaluechain = svg.append("g")
      .attr('id', 'svgPaginaSharedvaluechain')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('opacity', 0);

    /******************************
      3 Sharedvaluechain - End
    *******************************/

    /******************************
      4 enviromentalleader - Begin
    *******************************/
    const svgPaginaenviromentalleader = svg.append("g")
      .attr('id', 'svgPaginaenviromentalleader')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('opacity', 0);

    /******************************
      4 enviromentalleader - End
    *******************************/

    /******************************
      5 EY - Begin
    *******************************/
    const svgPaginaEY = svg.append("g")
      .attr('id', 'svgPaginaEY')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('opacity', 0);

    /******************************
     5 EY - End
    *******************************/

    /******************************
      0 Contenido Base - Begin
    *******************************/
    const svgContenidoBase = svg.append("g")
      .attr('id', 'svgContenidoBase')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('opacity', 1);

    //setGloboRect(svg, width, height, globoX, globoY, globoWidth, globoMargin , globoHeight, textMargin, text, id)

    /******************************
      0 Contenido Base - End
    *******************************/

    /***********************************
      Botones para el contenido - Begin
    ***********************************/
    const svgBotonesContenido = svg.append("g")
      .attr('id', 'svgBotonesContenido')
      //.attr("transform", "scale(" + relPos(0, width) + "), translate(" + relPos(0, width) + "," + relPos(0, width) + ")") // Scale, X , Y
      .attr('currentSubMenu', 'icono1')
      .attr('opacity', 0);

    const arrIdsContenido = ['svgPaginaIsaelAlliance', 'svgPaginaSmith', 'svgPaginaSharedvaluechain', 'svgPaginaenviromentalleader', 'svgPaginaEY'];
    const arrId = ['icono1', 'icono2', 'icono3', 'icono4', 'icono5'];
    const arrIdIconoGrande = ['iconoGrande1', 'iconoGrande2', 'iconoGrande3', 'iconoGrande4', 'iconoGrande5'];

    const imagePath = [];
    imagePath[0] = '/img/logo_iseal_alliance.png';
    imagePath[1] = '/img/logo_smith.png';
    imagePath[2] = '/img/logo_shared_value_change.png';
    imagePath[3] = '/img/logo_environmental_leader.png';
    imagePath[4] = '/img/logo_ey.png';

    var currentSubMenu;

    var menuGloboX = [];
    var menuGloboY = [];

    var iconoGrandeGloboX = [];
    var iconoGrandeGloboY = [];

    const globoX_ref = relPos(290, width);
    const globoY_ref = relPos(330, width);

    var globoX = relPos(290, width);
    var globoY = relPos(330, width);
    var globoY_deltaAcumulado_contenidoBase = globoY;
    var globoWidth = relPos(95, width);
    var globoHeight = relPos(95, width);
    var strokeWidth = relPos(3, width);
    var imageWidth = globoWidth * 0.85;
    var imageMargin = 0.05;

    menuGloboX[0] = globoX;
    menuGloboX[1] = globoX;
    menuGloboX[2] = globoX;
    menuGloboX[3] = globoX;
    menuGloboX[4] = globoX;

    //var imagePath = '/img/logo_iseal_alliance.png';
    setGloboRectButtonImage(svgBotonesContenido, width, height, globoX, globoY_deltaAcumulado_contenidoBase, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[0], arrId[0], arrId, arrIdsContenido[0], arrIdsContenido);
    menuGloboY[0] = globoY_deltaAcumulado_contenidoBase;

    //imagePath = '/img/logo_smith.png';
    globoY_deltaAcumulado_contenidoBase = globoY_deltaAcumulado_contenidoBase + globoHeight + relPos(15, width);
    setGloboRectButtonImage(svgBotonesContenido, width, height, globoX, globoY_deltaAcumulado_contenidoBase, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[1], arrId[1], arrId, arrIdsContenido[1], arrIdsContenido);
    menuGloboY[1] = globoY_deltaAcumulado_contenidoBase;

    //imagePath = '/img/logo_shared_value_change.png';
    globoY_deltaAcumulado_contenidoBase = globoY_deltaAcumulado_contenidoBase + globoHeight + relPos(15, width);
    setGloboRectButtonImage(svgBotonesContenido, width, height, globoX, globoY_deltaAcumulado_contenidoBase, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[2], arrId[2], arrId, arrIdsContenido[2], arrIdsContenido);
    menuGloboY[2] = globoY_deltaAcumulado_contenidoBase;

    //imagePath = '/img/logo_environmental_leader.png';
    globoY_deltaAcumulado_contenidoBase = globoY_deltaAcumulado_contenidoBase + globoHeight + relPos(15, width);
    setGloboRectButtonImage(svgBotonesContenido, width, height, globoX, globoY_deltaAcumulado_contenidoBase, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[3], arrId[3], arrId, arrIdsContenido[3], arrIdsContenido);
    menuGloboY[3] = globoY_deltaAcumulado_contenidoBase;

    //imagePath = '/img/logo_ey.png';
    globoY_deltaAcumulado_contenidoBase = globoY_deltaAcumulado_contenidoBase + globoHeight + relPos(15, width);
    setGloboRectButtonImage(svgBotonesContenido, width, height, globoX, globoY_deltaAcumulado_contenidoBase, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[4], arrId[4], arrId, arrIdsContenido[4], arrIdsContenido);
    menuGloboY[4] = globoY_deltaAcumulado_contenidoBase;



    /***********************************
      Botones para el contenido - End
    ***********************************/

    var arrow_x = relPos(51.96, width);
    var globoRect_x = relPos(67.07, width);
    var globoRect_x_text = globoRect_x;
    var globoRect_y = globoY;
    var globoRect_width = relPos(220, width);
    var globoRect_height = relPos(250, width);
    var globoRect_rx_ry = relPos(8.78, width);
    var globoRect_x_delta = relPos(245, width);

    var text = "";

    /******************************
      tippedContainer - Start
    *******************************/
    //container under container1
    // Sub Menú
    this.shadow(svg,
      (rp(960, 'x', width, height)),
      (rp(214.45, 'x', width, height)),
      (rp(834.79, 'x', width, height)),
      (rp(107.23, 'x', width, height)),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    text = [
      'PARA GENERAR VALOR, OPTIMIZAR PROCESOS Y MAXIMIZAR LAS',
      'VENTAJAS COMPETITIVAS DEL NEGOCIO'
    ];
    for (var i = 0; i < text.length; i++)
      setHtmlText(svg, 1, 'text' + i,
        (rp(979.6, 'x', width, height)),
        ((rp(256, 'x', width, height)) +
          (i * rp(27.43, 'x', width, height))),
        (rp(960, 'x', width, height)),
        (rp(80, 'x', width, height)),
        text[i],
        (rp(21.34, 'x', width, height)),
        'Roboto', 'left', 0, '#90278D', 'bold');
    //gradientcontainer1
    /*
    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
      .attr('id', 'mainGradient');

    mainGradient.append('stop')
      .attr('class', 'stop-left')
      .attr('offset', '0');

    mainGradient.append('stop')
      .attr('class', 'stop-right')
      .attr('offset', '1')
    */
    // tooltip triangle
    const x_triangle = getPositionMenuSelected(5, width, height)
    const y_triangle = rp(140, 'x', width, height)
    const vertexA = (-rp(40, 'x', width, height)) //valor negativo indica punta arriba
    const vertexBX = (-rp(25, 'x', width, height))
    const vertexBY = (0)
    const vertexCX = (rp(25, 'x', width, height))
    const vertexCY = (0)

    var valueSetTriangle = []
    valueSetTriangle['svg'] = svg;
    valueSetTriangle['x'] = x_triangle;
    valueSetTriangle['y'] = y_triangle;
    valueSetTriangle['vertexA'] = vertexA;
    valueSetTriangle['vertexBX'] = vertexBX;
    valueSetTriangle['vertexBY'] = vertexBY;
    valueSetTriangle['vertexCX'] = vertexCX;
    valueSetTriangle['vertexCY'] = vertexCY;
    valueSetTriangle['fill'] = '#2d8a86';
    valueSetTriangle['filter'] = '';
    setTriangle(valueSetTriangle);

    // Menú página
    // tool tip 1
    svg.append('rect')
      .attr('fill', 'url(#bgLinGradB)')
      .attr('x', rp(834.79, 'x', width, height))
      .attr('y', rp(137.86, 'x', width, height))
      .attr("rx", globoRect_rx_ry)
      .attr("ry", globoRect_rx_ry)
      .transition()
      .delay(200)
      .attr('width', rp(960, 'x', width, height))
      .attr('height', rp(107.23, 'x', width, height));

    text = ['¿POR QUÉ GESTIONAR CADENAS DE SUMINISTRO SOSTENIBLES?'];
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svg, 1, 'textGradientBold' + i,
        (rp(834.79, 'x', width, height)),
        rp(168, 'x', width, height),
        (rp(960, 'x', width, height)),
        rp(36, 'x', width, height),
        text[i],
        rp(26, 'x', width, height),
        'Oswald', 'center', 0, 'white', 'bold', rp(4, 'x', width, height));



    /******************************
      tippedContainer - End
    *******************************/

    /******************************
     Section 3 - headerMenu - Start
     *******************************/
    // Para fade in y fade out
    svg.append('rect')
      .attr('id', 'rectWhiteFade')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr('opacity', 1)
      .attr("fill", 'white');
    // Ejecuta fade In
    d3.select('#rectWhiteFade')
      .transition()
      .duration(getDurationAnim())
      .attr('opacity', 0)
      .duration(10)
      .attr("height", 1);
    behindHorizontalLine(svg, width, height, 'url(#bgLinGradHorizontal)');

    curvedLine(svg, width, height);

    theCircleShadow(svg, height);
    selectedcircleshadow(svg, height);
    menuCircles(svg, width, height, x_triangle, 1);
    /******************************
    Section 3 - headerMenu - Finish
    *******************************/

    /******************************
    Sidebar - Start
    *******************************/
    getSideBarLines(svg, width);
    getSideBarGuiaFome(svg, width, height, styles.grow);
    /******************************
     Sidebar - End
     *******************************/

    /******************************
      Brand corner - begin
    *******************************/
    headerCornerLogo(svg, width, height);
    /******************************
      Brand corner - end
    *******************************/

    /******************************
    Section 3 - breadcrumb - Start
    *******************************/
    breadCrumbGuia(svg, 5, width, height);
    /******************************
    Section 3 - breadcrumb - End
    *******************************/


    /******************************
      Contenido Base - Begin
    *******************************/
    //const mainFirst_x = globoX_ref + (globoWidthRef * 1.5); //337.5
    const mainContenidoBase_x = globoX + (globoWidth * 1.5); //337.5
    const mainContenidoBase_y = globoY; // 770

    var globoX_delta_contenidoBase = relPos(300, width);
    var globoX_deltaAcumulado_contenidoBase = mainContenidoBase_x;
    globoX = mainContenidoBase_x;
    globoY = relPos(635, width);

    const globoWidthRef = relPos(275, width);
    globoWidth = globoWidthRef;
    globoHeight = relPos(264, width);

    globoRect_x = mainContenidoBase_x;
    globoRect_y = mainContenidoBase_y + relPos(150, width);

    var adjuste_globo_y = relPos(80, width);
    var deta_arrow_globo_y = relPos(75, width);

    globoY = globoRect_y;

    /******************************
     mainLines - Begin
    *******************************/
    //main vertical Line
    arrow_x = relPos(1170, width);
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", mainContenidoBase_x - relPos(0, width))
      .attr("y2", mainContenidoBase_y + relPos(150, width));
    //.attr("marker-end", "url(#triangle)");



    //down 1
    arrow_x = globoRect_x + (globoWidth / 2);
    console.log('Contenido Base arrow_x ' + arrow_x);
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgContenidoBase, height)

    //down 2 
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgContenidoBase, height)

    //down 3
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");

    //down 4
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgContenidoBase, height)
    //down 5
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgContenidoBase, height)

    //big horizontal Line
    svgContenidoBase.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", globoRect_x + (globoWidth / 2))
      .attr("y1", globoY)
      .attr("x2", arrow_x)
      .attr("y2", globoY);


    /******************************
    mainLines - Finish
    *******************************/

    //container2
    globoX = relPos(620, width);
    globoY = relPos(380, width);
    globoWidth = relPos(1097, width);
    this.shadow(svgContenidoBase,
      globoX,
      globoY,
      globoWidth,
      rp(60.32, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgContenidoBase,
      globoX,
      globoY,
      globoWidth,
      rp(60.32, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    text = ['Prestigiosas organizaciones avalan la importancia de gestionar la cadena de suministro de manera sostenible'];
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgContenidoBase, 1, 'text' + i,
        (globoX + ((globoWidth / 2) * 0.2)),
        (globoY + relPos(18, width) +
          (i * rp(41.12, 'x', width, height))),
        (rp(960, 'x', width, height)),
        (rp(80, 'x', width, height)),
        text[i],
        (rp(17.46, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');

    /******************************
    tippedContainer - Finish
    *******************************/



    globoWidth = globoWidthRef;
    var strokeWidth = relPos(3, width);
    var imageWidth = globoWidth * 0.85;
    var imageMargin = 0.05;

    var contenidoGloboX = [];

    var contenidoGloboY = [];
    contenidoGloboY[0] = globoY;
    contenidoGloboY[1] = globoY;
    contenidoGloboY[2] = globoY;
    contenidoGloboY[3] = globoY;
    contenidoGloboY[4] = globoY;

    globoY = globoRect_y + adjuste_globo_y;

    iconoGrandeGloboX[0] = globoX_deltaAcumulado_contenidoBase;
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    iconoGrandeGloboX[1] = globoX_deltaAcumulado_contenidoBase;
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    iconoGrandeGloboX[2] = globoX_deltaAcumulado_contenidoBase;
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    iconoGrandeGloboX[3] = globoX_deltaAcumulado_contenidoBase;
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    iconoGrandeGloboX[4] = globoX_deltaAcumulado_contenidoBase;

    //var imagePath = '/img/logo_iseal_alliance.png';
    setGloboRectButtonImage(svgContenidoBase, width, height, globoX_deltaAcumulado_contenidoBase, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[0], arrIdIconoGrande[0], arrIdIconoGrande, arrIdsContenido[0], arrIdsContenido);
    contenidoGloboX[0] = globoX_deltaAcumulado_contenidoBase;

    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;
    //imagePath = '/img/logo_smith.png';
    setGloboRectButtonImage(svgContenidoBase, width, height, globoX_deltaAcumulado_contenidoBase, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[1], arrIdIconoGrande[1], arrIdIconoGrande, arrIdsContenido[1], arrIdsContenido);
    contenidoGloboX[1] = globoX_deltaAcumulado_contenidoBase;


    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;
    //imagePath = '/img/logo_shared_value_change.png';
    setGloboRectButtonImage(svgContenidoBase, width, height, globoX_deltaAcumulado_contenidoBase, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[2], arrIdIconoGrande[2], arrIdIconoGrande, arrIdsContenido[2], arrIdsContenido);
    contenidoGloboX[2] = globoX_deltaAcumulado_contenidoBase;

    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;
    //imagePath = '/img/logo_environmental_leader.png';
    setGloboRectButtonImage(svgContenidoBase, width, height, globoX_deltaAcumulado_contenidoBase, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[3], arrIdIconoGrande[3], arrIdIconoGrande, arrIdsContenido[3], arrIdsContenido);
    contenidoGloboX[3] = globoX_deltaAcumulado_contenidoBase;

    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;
    //imagePath = '/img/logo_ey.png';
    setGloboRectButtonImage(svgContenidoBase, width, height, globoX_deltaAcumulado_contenidoBase, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath[4], arrIdIconoGrande[4], arrIdIconoGrande, arrIdsContenido[4], arrIdsContenido);
    contenidoGloboX[4] = globoX_deltaAcumulado_contenidoBase;

    // Renderiza
    globoX_deltaAcumulado_contenidoBase = mainContenidoBase_x;

    setGloboRectButtonImageContenidoBase(svgContenidoBase, width, height, iconoGrandeGloboX, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath, arrIdIconoGrande[i], arrIdIconoGrande, arrIdsContenido[i], arrIdsContenido, 'svgBotonesContenido', arrId);
    //setGloboRectButtonImageContenidoBase(svgContenidoBase, width, height, globoX_deltaAcumulado_contenidoBase, globoY, globoWidth, globoHeight, arrIdIconoGrande[i], arrIdIconoGrande, arrId[i], arrId, arrIdsContenido[i], arrIdsContenido, 'svgBotonesContenido', menuGloboX, menuGloboY, contenidoGloboX, contenidoGloboY);



    /******************************
      Contenido Base - End
    *******************************/




    /******************************
      First Part - Begin
    *******************************/
    const mainFirst_x = mainContenidoBase_x;//globoX_ref + (globoWidthRef * 1.5); //337.5
    const mainFirst_y = mainContenidoBase_y;//globoY_ref; //

    var globoX_delta_contenidoBase = relPos(300, width);
    var globoX_deltaAcumulado_contenidoBase = mainFirst_x;
    globoX = mainFirst_x;
    globoY = relPos(635, width);

    globoWidth = globoWidthRef;
    globoHeight = relPos(264, width);

    globoRect_x = mainFirst_x;
    globoRect_y = mainFirst_y + relPos(150, width);

    var adjuste_globo_y = relPos(35, width);
    var deta_arrow_globo_y = relPos(30, width);

    globoY = globoRect_y + relPos(115, width);

    /******************************
     mainLines - Begin
    *******************************/

    //main vertical Line
    arrow_x = relPos(1170, width);
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", mainContenidoBase_x - relPos(80, width))
      .attr("y2", mainContenidoBase_y + relPos(270, width));
    //.attr("marker-end", "url(#triangle)");

    //down 1
    arrow_x = globoRect_x + (globoWidth / 2);
    console.log('First Part arrow_x ' + arrow_x);
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaIsaelAlliance, height)

    //down 2 
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaIsaelAlliance, height)

    //down 3
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");

    //down 4
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaIsaelAlliance, height)
    //down 5
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaIsaelAlliance, height)

    //big horizontal Line
    svgPaginaIsaelAlliance.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", globoRect_x + (globoWidth / 2))
      .attr("y1", globoY)
      .attr("x2", arrow_x)
      .attr("y2", globoY);


    /******************************
    mainLines - Finish
    *******************************/

    /******************************
    linkRef - Start
    *******************************/
    var globoX_link = relPos(70, width);
    var globoY_link = relPos(750, width);
    var globoWidth_link = relPos(200, width);
    var globoHeight_link = relPos(100, width);
    var strokeWidth_link = relPos(2, width);
    var globoMargin = relPos(0.1, width);
    var textMargin_link = relPos(0.1, width);
    var link_link = 'https://www.newhope.com/business-resources/business-benefits-using-sustainability-standards-infographic';
    var id_link = 'link_1';
    text = [
      '<b>Iseal Alliance</b><br><br>Link'
    ];
    setLinkRef(svgPaginaIsaelAlliance, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
    /******************************
    linkRef - Finish
    *******************************/


    //container2
    var globoRect_x_container2 = relPos(570, width);
    var globoRect_width_container2 = relPos(1200, width);

    this.shadow(svgPaginaIsaelAlliance,
      globoRect_x_container2,
      rp(344.65, 'x', width, height),
      globoRect_width_container2,
      rp(60.32, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaIsaelAlliance,
      globoRect_x_container2,
      rp(344.65, 'x', width, height),
      globoRect_width_container2,
      rp(60.32, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    text = ['LAS EMPRESAS EXPERIMENTAN UNA VARIEDAD DE BENEFICIOS AL UTILIZAR ESTÁNDARES DE SOSTENIBILIDAD']
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaIsaelAlliance, 1, 'text' + i,
        (globoRect_x_container2 * 1.25),
        ((rp(362.27, 'x', width, height)) +
          (i * rp(41.12, 'x', width, height))),
        (globoRect_width_container2 * 0.97),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(17.46, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');

    //container3
    var globoRect_x_container3 = globoRect_x_container2;
    var globoRect_width_container2 = globoRect_width_container2;
    var globoRect_height_container3 = relPos(140, width);
    this.shadow(svgPaginaIsaelAlliance,
      globoRect_x_container3,
      rp(419.57, 'x', width, height),
      globoRect_width_container2,
      globoRect_height_container3,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaIsaelAlliance,
      globoRect_x_container3,
      rp(419.57, 'x', width, height),
      globoRect_width_container2,
      globoRect_height_container3,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    text = [
      'Una investigación independiente , realizada por Iseal Alianse, concluyó que los estándares de sostenibilidad mejoran el acceso al mercado, la rentabilidad y la producción para las empresas que aplican estos estándares, así como también su reputación. Paralelamente reducen el riesgo para los fabricantes y minoristas. <br/> Se analizaron 40 empresas con el objetivo de identificar qué beneficios obtienen a partir del uso de estándares de sostenibilidad y cuáles son los factores de influencia en este contexto para cuatro sectores industriales: agricultura, pesca, minería y silvicultura. El porcentaje destacado a continuación, se refiere a la proporción de empresas que informan un beneficio asociado a cada ítem.'
    ]
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaIsaelAlliance, 1, 'text' + i,
        (globoRect_x_container3 * 1.03),
        ((rp(441.38, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (globoRect_width_container2 * 0.97),
        (globoRect_height_container3),
        text[i],
        (rp(16, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '');
    //
    //container4
    //

    var flip_y = globoY + adjuste_globo_y;
    var flip_width = rp(260, 'x', width, height);
    var flip_height = rp(250, 'x', width, height);
    var flip_r = globoRect_rx_ry;
    var globoMargin = 0.05;
    var textMargin = 0.05;

    globoX_deltaAcumulado_contenidoBase = globoX;
    text = [
      '<b>BENEFICIOS OBTENIDOS A CORTO PLAZO</b><br>' +
      '<br>' +
      '45% Aumento en el precio de' +
      '<br>' +
      '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0producto/servicio' +
      '<br>' +
      '<br>' +
      '55% Mejor administración de riesgos' +
      '<br>' +
      '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0de la cadena de suministro' +
      '<br>' +
      '<br>' +
      '30% Mejor acceso a finanzas' +
      '<br>' +
      '<br>' +
      '78% Mejores operaciones' +
      '<br>' +
      '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0comerciales' +
      '<br>' +
      '<br>' +
      '85% Mejor acceso al mercado'
    ]
    setGloboRect(svgPaginaIsaelAlliance, width, height, globoX_deltaAcumulado_contenidoBase, flip_y, flip_width, globoMargin, flip_height, textMargin, text, '1_1')
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    //container5
    //flip_x = rp(581.82, 'x', width, height)

    text = [
      '<b>BENEFICIOS OBTENIDOS EN EL LARGO PLAZO</b><br><br>53% Mayor rentabilidad <br><br> 60% Mejoras en la reputación<br><br>30% Reducción de costos'
    ]

    setGloboRect(svgPaginaIsaelAlliance, width, height, globoX_deltaAcumulado_contenidoBase, flip_y, flip_width, globoMargin, flip_height, textMargin, text, '1_1')
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    //container6
    text = [
      '<b>FACTORES DE INFLUENCIA</b>' +
      '<br><br>' +
      'Tamaño de la empresa' +
      '<br><br>' +
      'Gestión de la cadena de suministro' +
      '<br><br>' +
      'Desempeño organizacional' +
      '<br><br>' +
      'Diversidad de la cartera de productos' +
      '<br><br>' +
      'Cuota de mercado'
    ]

    //flip_x = rp(893.03, 'x', width, height)

    setGloboRect(svgPaginaIsaelAlliance, width, height, globoX_deltaAcumulado_contenidoBase, flip_y, flip_width, globoMargin, flip_height, textMargin, text, '1_2');
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    //container7
    text = [
      '<b>CARACTERÍSTICAS DEL SECTOR</b>' +
      '<br><br>' +
      'Dinámica de mercado' +
      '<br><br>' +
      'Exposición pública' +
      '<br><br>' +
      'Entorno de políticas públicas' +
      '<br><br>' +
      'Fase de desarrollo del sector' +
      '<br><br>' +
      'Gobernanza y estructura de la cadena de' +
      'suministro'
    ]

    //flip_x = rp(1205.28, 'x', width, height)
    setGloboRect(svgPaginaIsaelAlliance, width, height, globoX_deltaAcumulado_contenidoBase, flip_y, flip_width, globoMargin, flip_height, textMargin, text, '1_3');
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    //container8

    text = [
      '<b>CARACTERÍSTICAS DEL SISTEMA: ESTÁNDARES</b>' +
      '<br><br>' +
      'Modelo de gobernanza.' +
      '<br>' +
      'Compromiso del sector público.' +
      '<br>' +
      'Cadena de custodia y sistema de trazabilidad.' +
      '<br>' +
      'Comunicación y marketing.' +
      '<br>' +
      'Declaraciones y etiquetado.' +
      '<br>' +
      'Soporte de implementación.' +
      '<br>' +
      'Diálogo entre múltiples partes interesadas: seguimiento y evaluación.' +
      '<br>' +
      'Modelo de aseguramiento.'
    ]

    //flip_x = rp(1518.39, 'x', width, height)
    setGloboRect(svgPaginaIsaelAlliance, width, height, globoX_deltaAcumulado_contenidoBase, flip_y, flip_width, globoMargin, flip_height, textMargin, text, '1_4');
    globoX_deltaAcumulado_contenidoBase = globoX_deltaAcumulado_contenidoBase + globoX_delta_contenidoBase;

    /******************************
      tippedContainer - Finish
    *******************************/

    /******************************
      First Part - End
    *******************************/

    /******************************
      Second Part - Begin
    *******************************/
    const mainSecond_x = mainFirst_x;
    const mainSecond_y = mainFirst_y;

    globoRect_x_delta = relPos(245, width);


    globoX_delta_contenidoBase = globoRect_x_delta;
    globoX_deltaAcumulado_contenidoBase = mainSecond_x;
    globoX = mainFirst_x;
    globoY = relPos(100, width);

    globoWidth = globoWidthRef;
    globoHeight = relPos(264, width);

    globoRect_x = mainFirst_x;
    globoRect_y = mainFirst_y + relPos(300, width);

    var adjuste_globo_y = relPos(35, width);
    var deta_arrow_globo_y = relPos(30, width);

    globoY = globoRect_y - relPos(35, width);

    /******************************
     mainLines - Begin
    *******************************/
    //main vertical Line
    arrow_x = relPos(1400, width);
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", mainContenidoBase_x - relPos(80, width))
      .attr("y2", mainContenidoBase_y + relPos(265, width));
    //.attr("marker-end", "url(#triangle)");

    //down 1
    arrow_x = globoRect_x + (globoWidth / 2);
    console.log('econd Part arrow_x ' + arrow_x);
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaSmith, height)

    //down 2 
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaSmith, height)

    //down 3
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");

    //down 4
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaSmith, height)
    //down 5
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaSmith, height)
    //down 6
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaSmith, height)

    //big horizontal Line
    svgPaginaSmith.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", globoRect_x + (globoWidth / 2))
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY);


    /******************************
    mainLines - Finish
    *******************************/

    /******************************
    linkRef - Start
    *******************************/
    var globoX_link = relPos(70, width);
    var globoY_link = relPos(750, width);
    var globoWidth_link = relPos(200, width);
    var globoHeight_link = relPos(100, width);
    var strokeWidth_link = relPos(2, width);
    var globoMargin = relPos(0.1, width);
    var textMargin_link = relPos(0.1, width);
    var link_link = 'https://www.sourcetoday.com/supply-chain/article/21867505/6-ways-supply-chain-sustainability-drives-value';
    var id_link = 'link_2';
    text = [
      '<b>SMITH</b><br><br>Link'
    ];
    setLinkRef(svgPaginaSmith, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
    /******************************
    linkRef - Finish
    *******************************/


    //gradientcontainer1
    var svgDefs = svg.append('defs');



    //container2

    this.shadow(svgPaginaSmith,
      rp(1163.64, 'x', width, height),
      rp(344.65, 'x', width, height),
      rp(480, 'x', width, height),
      rp(60.32, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaSmith,
      rp(1163.64, 'x', width, height),
      rp(344.65, 'x', width, height),
      rp(480, 'x', width, height),
      rp(60.32, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')

    text = [
      'SEIS MANERAS EN QUE LA SOSTENIBILIDAD DE',
      'LA CADENA DE SUMINISTRO GENERA VALOR'
    ]
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        (rp(1136.1, 'x', width, height)),
        ((rp(355.56, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(548.58, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(16, 'x', width, height)),
        'Roboto', 'center', 0, 'black', 'bold')

    //container3
    //shadow (svg, x, y, w, h,rx,ry)
    this.shadow(svgPaginaSmith,
      rp(1129.42, 'x', width, height),
      rp(419.57, 'x', width, height),
      rp(548.58, 'x', width, height),
      rp(137.86, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaSmith,
      rp(1129.42, 'x', width, height),
      rp(419.57, 'x', width, height),
      rp(548.58, 'x', width, height),
      rp(137.86, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')

    text = [
      'Los compradores de todas las industrias están poniendo a la',
      'sostenibilidad de la cadena de suministro en la parte superior de',
      'sus prioridades. No sólo para posicionarse como empresas',
      'conscientes y responsables, sino que también para reducir costos,',
      'mejorar las ineficiencias y volverse más resilientes.'
    ]
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        (rp(1163.64, 'x', width, height)),
        ((rp(436.37, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(548.58, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(16, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '')

    //mainSecond_x + relPos(51.96, width)
    //container4
    //        x 337.5      y 770

    this.shadow(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    this.gradientRect(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    globoRect_x_text = globoRect_x + relPos(18, width);
    text = [
      '1. MITIGAR EL RIESGO DE LA',
      'CADENA DE SUMINISTRO',
      'Para 2030 las pérdidas de',
      'productividad vinculadas a las',
      'interrupciones y lesiones en el',
      'lugar de trabajo relacionadas',
      'con el aumento de la',
      'temperatura, podrían superar',
      'los $2 billones.',
    ]
    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(650.85, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(662.07, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '');

    //container5
    //        x 337.5      y 770
    globoRect_x = globoRect_x + globoRect_x_delta;
    this.shadow(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    this.gradientRect(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    globoRect_x_text = globoRect_x + relPos(18, width);
    text = [
      '2. AHORRE DINERO',
      'MEDIANTE UNA MEJORA EN',
      'LA EFICIENCIA DE LOS',
      'RECURSOS',
      'Durante el 2019 se',
      'identificaron 99 empresas que',
      'ahorraron U$19 mil millones al',
      'reducir las emisiones de',
      'gases de efecto invernadero',
      '(GEI) en 633 millones de',
      'toneladas de CO2 equivalente. ',
    ];
    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(650.85, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(662.07, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '');

    //container6
    //        x 337.5      y 770
    globoRect_x = globoRect_x + globoRect_x_delta;
    this.shadow(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    this.gradientRect(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    globoRect_x_text = globoRect_x + relPos(18, width);
    text = [
      '3. ELIMINAR LAS',
      'INEFICIENCIAS DE LA',
      'CADENA DE SUMINISTRO',
      '• Crear soluciones rentables',
      '• Construir valor de marca',
      '• Desarrollar ventajas',
      '\u00A0\u00A0competitivas',
      '• Gestionar riesgos'
    ]
    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(650.85, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(662.07, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '');

    //container7
    //        x 337.5      y 770
    globoRect_x = globoRect_x + globoRect_x_delta;
    this.shadow(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    this.gradientRect(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    globoRect_x_text = globoRect_x + relPos(18, width);
    text = [
      '4. IMPULSAR MÁS',
      'INNOVACIÓN',
      'La gestión de la cadena de',
      'suministro es una fuente',
      'importante de innovación.'
    ]
    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(650.85, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(662.07, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '');

    //container8
    //        x 337.5      y 770
    globoRect_x = globoRect_x + globoRect_x_delta;
    this.shadow(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    this.gradientRect(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    globoRect_x_text = globoRect_x + relPos(18, width);
    text = [
      '5. OBTENER UN MEJOR',
      'ACCESO AL',
      'FINANCIAMIENTO',
      'El 90% de los estudios',
      'demuestran que la',
      'sustentabilidad reduce el',
      'costo de capital.'
    ]
    for (var i = 0; i < 3; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(650.85, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');
    for (var i = 3; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(662.07, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '');

    //container9
    //        x 337.5      y 770

    globoRect_x = globoRect_x + globoRect_x_delta;
    this.shadow(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    this.gradientRect(svgPaginaSmith,
      globoRect_x,
      globoRect_y,
      globoRect_width,
      globoRect_height,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    globoRect_x_text = globoRect_x + relPos(18, width);
    text = [
      '6. MANTENER LA',
      'COMPETITIVIDAD DEL',
      'MERCADO',
      'Las empresas implementan',
      'iniciativas de sostenibilidad',
      'para cumplir con los',
      'requisitos de los clientes y',
      'obtener una ventaja',
      'competitiva.'
    ]
    for (var i = 0; i < 3; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(650.85, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold')
    for (var i = 3; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSmith, 1, 'text' + i,
        globoRect_x_text,
        ((rp(662.07, 'x', width, height)) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(12.8, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '')

    /******************************
    tippedContainer - Finish
    *******************************/


    /******************************
      Second Part - End
    *******************************/


    /******************************
      Third Part - Begin
    *******************************/
    const mainThird_x = mainSecond_x
    const mainThird_y = mainSecond_y

    globoRect_x_delta = relPos(245, width);


    globoX_delta_contenidoBase = globoRect_x_delta;
    globoX_deltaAcumulado_contenidoBase = mainSecond_x;
    globoX = mainFirst_x;

    globoWidth = globoWidthRef;
    globoHeight = relPos(264, width);

    globoRect_x = mainFirst_x;
    globoRect_y = mainFirst_y - relPos(20, width);

    var adjuste_globo_y = relPos(100, width);
    var deta_arrow_globo_y = relPos(30, width);

    globoY = globoRect_y + relPos(35, width);

    /******************************
      mainLines - Begin
    *******************************/

    //down 1
    arrow_x = relPos(1400, width);

    //down 5 big
    svgPaginaSharedvaluechain.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoRect_y)//.attr("y1", rp(175.46, 'x', width, height))
      .attr("y2", globoRect_y + adjuste_globo_y)//.attr("y2", rp(350.91, 'x', width, height))
      .attr("marker-end", "url(#triangle)");

    /******************************
      mainLines - Finish
    *******************************/

    /******************************
      linkRef - Start
      *******************************/
    var globoX_link = relPos(70, width);
    var globoY_link = relPos(750, width);
    var globoWidth_link = relPos(200, width);
    var globoHeight_link = relPos(100, width);
    var strokeWidth_link = relPos(2, width);
    var globoMargin = relPos(0.1, width);
    var textMargin_link = relPos(0.1, width);
    var link_link = 'https://www.sharedvaluechain.com/sustainable-cost-reduction/';
    var id_link = 'link_3';
    text = [
      '<b>Sharedvaluechain.com</b><br><br>Link'
    ];
    setLinkRef(svgPaginaSharedvaluechain, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
    /******************************
    linkRef - Finish
    *******************************/

    /******************************
    tippedContainerThird - Start
    *******************************/

    //gradientcontainer1
    var svgDefs = svg.append('defs');

    //container2
    var globoRect_y_container2 = relPos(45, width);
    var globoRect_width_container2 = relPos(640, width);
    var globoRect_y_text1Container2 = globoY + relPos(70, width);
    var globoRectText_x_container2 = relPos(965, width);
    var globoRectText_y_text1Container2 = globoRect_y_text1Container2 + relPos(10, width);
    var globoRect_y_text2Container2 = globoRect_y_text1Container2 + relPos(58, width);
    var globoRectText_y_text2Container2 = globoRect_y_text2Container2 + relPos(18, width);
    var globoRectText_width_container2 = relPos(830, width);

    // Cuadro
    this.shadow(svgPaginaSharedvaluechain,
      rp(1163.64, 'x', width, height),
      globoY,//rp(225.89, 'x', width, height),
      rp(480, 'x', width, height),
      globoRect_y_container2,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaSharedvaluechain,
      rp(1163.64, 'x', width, height),
      globoY,//rp(225.89, 'x', width, height),
      rp(480, 'x', width, height),
      globoRect_y_container2,
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    text = ['SER SOSTENIBLE OPTIMIZA RENDIMIENTOS FINANCIEROS'];
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSharedvaluechain, 1, 'text' + i,
        (rp(1084.75, 'x', width, height)),
        (globoY + relPos(13, width)),
        (rp(640, 'x', width, height)),
        (rp(90, 'x', width, height)),
        text[i],
        (rp(14.77, 'x', width, height)),
        'Roboto', 'center', 0, 'black', 'bold');

    // Cadro
    svgPaginaSharedvaluechain.append('rect')
      .attr('x', globoRectText_x_container2)
      .attr('y', globoRect_y_text1Container2)//rp(357.41, 'x', width, height))
      .attr('width', globoRectText_width_container2)
      .attr('height', rp(53.62, 'x', width, height))
      .attr("fill", "url(#bgLinGradD)");

    text = ["Sostenibilidad y reducción de costos"];
    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaSharedvaluechain, 1, 'text' + i,
        (rp(1084.75, 'x', width, height)),
        ((globoRectText_y_text1Container2) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(25.6, 'x', width, height)),
        'Oswald', 'right', 0, 'white', '');

    // Cuadro
    svgPaginaSharedvaluechain.append('rect')
      .attr('x', globoRectText_x_container2)
      .attr('y', globoRect_y_text2Container2)//rp(414.17, 'x', width, height))
      .attr('width', globoRectText_width_container2)
      .attr('height', rp(26.81, 'x', width, height))
      .attr("fill", "gray");

    svgPaginaSharedvaluechain.append("text")
      .attr("x", rp(1560.98, 'x', width, height))
      .attr("y", globoRectText_y_text2Container2)//rp(433.71, 'x', width, height))
      .text("Fases del ciclo de vida")
      .style("font-weight", "bold")
      .style("font-size", rp(16, 'x', width, height))
      .style("font-family", "Roboto")
      .attr("fill", "white");

    svgPaginaSharedvaluechain.append("image")
      .attr('id', 'IdSvgPaginaSharedvaluechain')
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-39.png")
      .attr("x", relPos(400, width))
      .attr("y", globoY + relPos(145, width))//rp(210, 'x', width, height))
      .attr("width", relPos(1450, width));

    /******************************
    tippedContainer - Finish
    *******************************/

    /******************************
      Third Part - End
    *******************************/


    /******************************
      Fourth Part - Begin
    *******************************/
    const mainFourth_x = mainFirst_x;
    const mainFourth_y = mainFirst_y;

    //arrow_x =  mainSecond_x + relPos(51.96, width);
    //globoRect_x = mainSecond_x - relPos(67.07, width);
    //globoRect_x_text = globoRect_x;
    //globoRect_y = arrow_x + relPos(100, width);
    //globoRect_width = relPos(220, width);
    //globoRect_height = relPos(250, width);
    //globoRect_rx_ry = relPos(8.78, width);
    globoRect_x_delta = relPos(275, width);


    globoX_delta_contenidoBase = globoRect_x_delta;
    globoX_deltaAcumulado_contenidoBase = mainSecond_x;
    globoX = mainFourth_x;
    globoY = relPos(100, width);

    globoWidth = relPos(264, width);
    globoHeight = relPos(264, width);

    globoRect_x = mainFourth_x;
    globoRect_y = mainFourth_y + relPos(80, width);

    var adjuste_globo_y = relPos(35, width);
    var deta_arrow_globo_y = relPos(30, width);

    globoY = globoRect_y - relPos(35, width);

    /******************************
     mainLines - Begin
    *******************************/
    //main vertical Line
    arrow_x = relPos(1400, width);
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", mainFourth_y - relPos(50, width))
      .attr("y2", mainFourth_y + relPos(45, width));
    //.attr("marker-end", "url(#triangle)");

    //down 1
    arrow_x = globoRect_x + (globoWidth / 2);
    console.log('econd Part arrow_x ' + arrow_x);
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaenviromentalleader, height)

    //down 2 
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaenviromentalleader, height)

    //down 3
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");

    //down 4
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaenviromentalleader, height)
    //down 5
    arrow_x = arrow_x + globoX_delta_contenidoBase;
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", arrow_x)
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY + deta_arrow_globo_y)
      .attr("marker-end", "url(#triangle)");
    getArrowEnd(svgPaginaenviromentalleader, height)

    //big horizontal Line
    svgPaginaenviromentalleader.append('line')
      .style("stroke", "#82368C")
      .style("stroke-width", rp(6.04, 'x', width, height))
      .attr("x1", globoRect_x + (globoWidth / 2))
      .attr("x2", arrow_x)
      .attr("y1", globoY)
      .attr("y2", globoY);




    /******************************
    mainLines - Finish
    *******************************/

    /******************************
      linkRef - Start
    *******************************/
    var globoX_link = relPos(70, width);
    var globoY_link = relPos(750, width);
    var globoWidth_link = relPos(200, width);
    var globoHeight_link = relPos(100, width);
    var strokeWidth_link = relPos(2, width);
    var globoMargin = relPos(0.1, width);
    var textMargin_link = relPos(0.1, width);
    var link_link = 'https://www.environmentalleader.com/2017/02/5-benefits-sustainable-supply-chains/';
    var id_link = 'link_4';
    text = [
      '<b>Enviromentalleader.com</b><br><br>Link'
    ];
    setLinkRef(svgPaginaenviromentalleader, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
    /******************************
      linkRef - Finish
    *******************************/
    //gradientcontainer1
    var svgDefs = svg.append('defs');

    //container4
    var globoRect_x_container4 = globoRect_x;
    var globoRect_y_container4 = globoY + deta_arrow_globo_y + relPos(5, width);
    var globoRect_width_container4 = relPos(1200, width);
    this.shadow(svgPaginaenviromentalleader,
      globoRect_x_container4,
      globoRect_y_container4,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaenviromentalleader,
      globoRect_x_container4,
      globoRect_y_container4,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')

    text = [
      'PROTECCIÓN CONTRA DAÑOS',
      'DE REPUTACIÓN',
      'Las partes interesadas, incluidos',
      'los inversores y los clientes, están ',
      'presionando cada vez más a las',
      'empresas para que extiendan sus',
      'políticas de sostenibilidad a sus',
      'cadenas de suministro. Esto se',
      'evidencia en un número récord de',
      'resoluciones de accionistas',
      'relacionadas con la sostenibilidad',
      'de la cadena de suministro en los',
      'últimos años, así como la presión',
      'de los medios sociales sobre las',
      'empresas para garantizar que se',
      'vean comprometidas con',
      'prácticas comerciales sostenibles',
      'y responsables. '

    ];

    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container4 + (globoWidth * 0.05)),
        ((globoRect_y_container4 * 1.05) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(14.77, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container4 + (globoWidth * 0.05)),
        ((globoRect_y_container4 * 1.08) +
          (i * rp(19.2, 'x', width, height))),
        (rp(208.7, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '');

    //container5
    var globoRect_x_container5 = globoRect_x_container4 + globoRect_x_delta;
    var globoRect_y_container5 = globoRect_y_container4;
    this.shadow(svgPaginaenviromentalleader,
      globoRect_x_container5,
      globoRect_y_container5,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaenviromentalleader,
      globoRect_x_container5,
      globoRect_y_container5,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')

    text = [
      'REDUCCIÓN DEL IMPACTO',
      'AMBIENTAL Y LOS COSTOS',
      'Aquí Walmart es un buen ejemplo.',
      'Cuando el gigante minorista',
      'anunció su objetivo de reducir las',
      'emisiones corporativas de gases',
      'de efecto invernadero en 20',
      'millones de toneladas por año',
      'para 2020, se evidencio que su',
      'cadena de suministro',
      'representaba alrededor del 95% de',
      'la huella de carbono general de',
      'Walmart. Un informe de CDP',
      'publicado demostro que Walmart',
      'y otras iniciativas importantes de',
      'reducción de emisiones de la',
      'cadena de suministro ahorraron a',
      'los proveedores un total de 12.400',
      'millones de dólares en 2016.'
    ]
    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container5 + (globoWidth * 0.05)),
        ((globoRect_y_container5 * 1.05) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(14.77, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold')
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container5 + (globoWidth * 0.05)),
        ((globoRect_y_container5 * 1.08) +
          (i * rp(19.2, 'x', width, height))),
        (rp(213.34, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '')

    //container6
    var globoRect_x_container6 = globoRect_x_container5 + globoRect_x_delta;
    var globoRect_y_container6 = globoRect_y_container5;
    this.shadow(svgPaginaenviromentalleader,
      globoRect_x_container6,
      globoRect_y_container6,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaenviromentalleader,
      globoRect_x_container6,
      globoRect_y_container6,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)');

    text = [
      'MEJORAR LA CONTINUIDAD DEL',
      'SUMINISTRO',
      'La industria automotriz aprendió',
      'esta lección cuando las',
      'inundaciones en Tailandia',
      'detuvieron a la industria de',
      'suministro de piezas de',
      'automóviles, reflejándose en',
      'fábricas inactivas en todo el',
      'mundo", "como resultado, y',
      'después de trabajar con',
      'proveedores clave, la cadena de',
      'suministro de la industria',
      'automotriz está ahora mucho más',
      'diversificada, lo que también ha',
      'resultado en beneficios para sus',
      'proveedores".'
    ]
    for (var i = 0; i < 2; i++)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container6 + (globoWidth * 0.05)),
        ((globoRect_y_container6 * 1.05) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(14.77, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold');

    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container6 + (globoWidth * 0.05)),
        ((globoRect_y_container6 * 1.08) +
          (i * rp(19.2, 'x', width, height))),
        (rp(213.34, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '')

    //container7
    var globoRect_x_container7 = globoRect_x_container6 + globoRect_x_delta;
    var globoRect_y_container7 = globoRect_y_container6;
    this.shadow(svgPaginaenviromentalleader,
      globoRect_x_container7,
      globoRect_y_container7,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaenviromentalleader,
      globoRect_x_container7,
      globoRect_y_container7,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')

    text = [
      'PRODUCTOS Y SERVICIOS',
      'INNOVADORES',
      'Los proveedores que entienden la',
      'visión de una empresa y los planes',
      'a largo plazo están mejor',
      'preparados para sugerir cambios',
      'que a nivel de productos y',
      'procesos pueden mejorar las',
      'operaciones y contribuir a que las',
      'empresas puedan lograr sus',
      'objetivos de innovación.'
    ]
    for (var i = 0; i < 2; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container7 + (globoWidth * 0.05)),
        ((globoRect_y_container7 * 1.05) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(14.77, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold')
    for (var i = 2; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container7 + (globoWidth * 0.05)),
        ((globoRect_y_container7 * 1.08) +
          (i * rp(19.2, 'x', width, height))),
        (rp(213.34, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '')

    //container8
    var globoRect_x_container8 = globoRect_x_container7 + globoRect_x_delta;
    var globoRect_y_container8 = globoRect_y_container7;
    this.shadow(svgPaginaenviromentalleader,
      globoRect_x_container8,
      globoRect_y_container8,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')
    //gradientRect(svg, x, y, w, h,rx,ry)
    this.gradientRect(svgPaginaenviromentalleader,
      globoRect_x_container8,
      globoRect_y_container8,
      globoWidth,
      rp(428.89, 'x', width, height),
      globoRect_rx_ry,
      globoRect_rx_ry,
      'url(#bgLinGradB)')

    text = [
      'CREACIÓN DE ASOCIACIONES O',
      'ESTÁNDARES DE LA INDUSTRIA',
      'GLOBAL',
      'Diversas empresas en el mundo',
      'construyen acuerdos con su',
      'competencia para el logro de',
      'producción sustentable que',
      'contribuya a mitigar el impacto',
      'ambiental y social de su sector.'
    ]
    for (var i = 0; i < 3; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container8 + (globoWidth * 0.05)),
        ((globoRect_y_container8 * 1.05) +
          (i * rp(19.2, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(14.77, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold')
    for (var i = 3; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svgPaginaenviromentalleader, 1, 'text' + i,
        (globoRect_x_container8 + (globoWidth * 0.05)),
        ((globoRect_y_container8 * 1.05) +
          (i * rp(19.2, 'x', width, height))),
        (rp(213.34, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(13.72, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '')


    /******************************
    tippedContainer - Finish
    *******************************/
    /******************************
      Fourth Part - End
    *******************************/

    /******************************
      Fifth Part - Begin
    *******************************/
    var globoX = relPos(590, width);
    var globoY = relPos(330, width);
    var globoWidth = relPos(960, width);
    var globoHeight = relPos(540, width);
    var strokeWidth = relPos(1, width);
    var imageWidth = globoWidth * 0.85;
    var imageMargin = 0.05;
    var imagePath_ey = '/img/ey_image.png';
    var id = 'ey_image';
    setGloboRectImage(svgPaginaEY, width, height, globoX, globoY, globoWidth, globoHeight, strokeWidth, imageWidth, imageMargin, imagePath_ey, id);

    /******************************
    linkRef - Start
  *******************************/
    var globoX_link = relPos(70, width);
    var globoY_link = relPos(750, width);
    var globoWidth_link = relPos(200, width);
    var globoHeight_link = relPos(100, width);
    var strokeWidth_link = relPos(2, width);
    var globoMargin = relPos(0.1, width);
    var textMargin_link = relPos(0.1, width);
    var link_link = 'https://www.virtualpro.co/noticias/-como-lograr-una-cadena-de-suministros-sostenible-';
    var id_link = 'link_5';
    text = [
      '<b>EY</b><br><br>Link'
    ];
    setLinkRef(svgPaginaEY, width, height, globoX_link, globoY_link, globoWidth_link, globoHeight_link, globoRect_rx_ry, globoMargin, strokeWidth_link, text, textMargin_link, link_link, id_link)
    /******************************
      linkRef - Finish
    *******************************/

    /******************************
      Fifth Part - End
    *******************************/

    /******************************
      Tutorial - begin
    *******************************/
    setclickInstruction(svg, relPos(600,width), relPos(550,width), relPos(600,width), relPos(600,width), 200, 200);
    /******************************s
      Tutorial - end
    *******************************/

    //footer
    getFooter(svg, width, height)

    // Dev Tool
    //setPointerPositionTool(svg, width, height)
  }

  render() {
    //const {guia, menuBreadcrumbs} = this.state;

    return (
      <div className={styles.container}>
        <div ref={this.main}></div>
      </div>
    )
  }
}
export default Metodologia