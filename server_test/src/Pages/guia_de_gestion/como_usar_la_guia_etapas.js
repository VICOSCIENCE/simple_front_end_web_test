import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
//import { guiaApi } from "../api/guia-api"
import * as d3 from 'd3';
import FooterGuia from "../components/FooterGuia";
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadcrumb, headerCornerLogo, gradients, setTriangle, shadowFilters, shadowFiltersReverse, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText, setHtmlTextLink, setHtmlTextBorde, setMenuInteriorV, setArrowDownWS, setArrowDown, setArrowUp, setArrowLeft, setArrowRight, setRectRow, setRectCol, selectButtonV, gradientRect } from "../../functions/htmlText";
import { OpenGraph, MetaData } from "../../functions/metaTags";

class Metodologia extends Component {
  constructor(props) {
    super(props);
    //this.state = {
    //  guia: null,
    //  menuBreadcrumbs: null
    //}
    //this.getMenuBreadcrumbs();
    //this.getGuias();
  }
  ////getMenuBreadCrumbs
  //getMenuBreadcrumbs() {
  //  guiaApi.getMenuBreadcrumbs().then(res => {
  //    this.setState({
  //      menuBreadcrumbs: res
  //    })
  //  })
  //}
  ////getGuias
  //getGuias() {
  //  guiaApi.getGuias().then(res => {
  //    this.setState({
  //      guia: res
  //    })
  //  })
  //}
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
  gradientRect(svg, x, y, w, h, rx, ry) {
    if (window.innerHeight > window.innerWidth) {
      var width = window.innerWidth
      var height = (941 / 1920) * window.innerWidth
    } else {
      var width = window.innerWidth
      var height = window.innerHeight
    }
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
      //.classed('outlined', true)
      .attr('stroke', 'url(#bgLinGradB)') //bgLinGradA
      .attr('stroke-width', height / 250)
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("rx", rx)
      .attr("ry", ry)

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .attr("rx", rx)
      .attr("ry", ry)
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
    //const heightCorrected = Math.round(width / aspectRatio);
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
      .append("g");
    getFooter(svg, width, height)
    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg);
    getArrowEnd(svg, heightCorrected)

    /******************************
    Containers - Start
    *******************************/
    //gradientContainer
    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
      .attr('id', 'mainGradient');

    mainGradient.append('stop')
      .attr('class', 'stop-left')
      .attr('offset', '0');

    mainGradient.append('stop')
      .attr('class', 'stop-right')
      .attr('offset', '1');

    gradientRect(
      svg,
      rp(933, 'x', width, height),
      rp(190, 'x', width, height),
      rp(860, 'x', width, height),
      rp(107.23, 'x', width, height),
      rp(8.78, 'x', width, height),
      rp(8.78, 'x', width, height),
      'white',
      '',
      'url(#shadowFilter)'
    )


    var text2 = [
      '¿CÓMO USAR ESTA GUÍA?'
    ]
    for (var i = 0; i < text2.length; i++)

      setHtmlText(svg, 1, 'textGradientBold' + i,
        rp(934.79, 'x', width, height),
        rp(255, 'x', width, height),
        rp(860, 'x', width, height),
        rp(36, 'x', width, height),
        text2[i],
        rp(20, 'x', width, height),
        'Oswald', 'center', 0, '#93278F', 'bold', rp(4, 'x', width, height))

    svg.append('rect')
      .attr('fill', 'url(#bgLinGradB)')
      .attr('x', rp(834.79, 'x', width, height))
      .attr('y', rp(137.86, 'x', width, height))
      .attr("rx", rp(8.78, 'x', width, height))
      .attr("ry", rp(8.78, 'x', width, height))
      .transition()
      .delay(200)
      .attr('width', rp(960, 'x', width, height))
      .attr('height', rp(107.23, 'x', width, height));

    var text = [
      'ETAPAS EN LA CADENA DE APROVISIONAMIENTO'
    ]
    for (var i = 0; i < text.length; i++)

      setHtmlText(svg, 1, 'textGradientBold' + i,
        (width / 2.3),
        ((width / 11) + (i * width / 46.7)),
        (width / 2),
        rp(36, 'x', width, height),
        text[i],
        rp(26, 'x', width, height),
        'Oswald', 'center', 0, 'white', 'bold', rp(4, 'x', width, height))

    //tooltip triangle    
    const x_triangle = getPositionMenuSelected(10, width, height)
    const y_triangle = rp(140, 'x', width, height)
    const vertexA = (-rp(40, 'x', width, height)) //valor negativo indica punta arriba
    const vertexBX = (-rp(25, 'x', width, height))
    const vertexBY = (0)
    const vertexCX = (rp(25, 'x', width, height))
    const vertexCY = (0)

    var valueSetTriangle = []
    valueSetTriangle['svg'] = svg
    valueSetTriangle['x'] = x_triangle
    valueSetTriangle['y'] = y_triangle
    valueSetTriangle['vertexA'] = vertexA
    valueSetTriangle['vertexBX'] = vertexBX
    valueSetTriangle['vertexBY'] = vertexBY
    valueSetTriangle['vertexCX'] = vertexCX
    valueSetTriangle['vertexCY'] = vertexCY
    valueSetTriangle['fill'] = '#644096'
    valueSetTriangle['filter'] = ''
    setTriangle(valueSetTriangle)


    svg.append('rect')
      .attr('id', 'rectWhiteFade')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr('opacity', 1)
      .attr("fill", 'white');
    d3.select('#rectWhiteFade')
      .transition()
      .duration(getDurationAnim())
      .attr('opacity', 0)
      .duration(10)
      .attr("height", 1);
    /******************************
    Section 3 - headerMenu - Start
    *******************************/
    behindHorizontalLine(svg, width, height, 'url(#bgLinGradHorizontal)');

    curvedLine(svg, width, height);

    theCircleShadow(svg, height);
    selectedcircleshadow(svg, height);
    menuCircles(svg, width, height, x_triangle, 1, 1);
    /******************************
    Section 3 - headerMenu - Finish
    *******************************/
    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
      .attr("x", x_triangle - rp(45, 'x', width, height))
      .attr("y", rp(10, 'x', width, height))
      .attr("width", rp(90, 'x', width, height))
      .style("cursor", "pointer")
      .on('click', function () {
        window.location.href = '/etapas'
      });

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
    breadcrumb(svg, width, height, 'Inicio', 'Guía de Gestión', 'guia_de_gestion', '¿Cómo usar la guía?');
    /******************************
    Section 3 - breadcrumb - End
    *******************************/

    var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 10;
    valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
    valuesSetRectRow['x'] = rp(450, 'x', width, height);
    valuesSetRectRow['y'] = rp(370, 'x', width, height);
    valuesSetRectRow['w'] = rp(296, 'x', width, height);
    valuesSetRectRow['h'] = rp(45, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc'] = 0;
    valuesSetRectRow['paddingLREnc'] = 0.1;
    valuesSetRectRow['paddingTBDesc'] = 0;
    valuesSetRectRow['paddingLRDesc'] = 0;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'center';
    valuesSetRectRow['fontEnc'] = 'Roboto';
    valuesSetRectRow['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectRow['marginEnc'] = '';
    valuesSetRectRow['colorEnc'] = 'black';
    valuesSetRectRow['boldEnc'] = 'bold';
    valuesSetRectRow['letterSpacingEnc'] = '';
    valuesSetRectRow['lineHeightEnc'] = '';
    valuesSetRectRow['textAlignDesc'] = 'center';
    valuesSetRectRow['fontDesc'] = 'Roboto';
    valuesSetRectRow['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectRow['marginDesc'] = '';
    valuesSetRectRow['colorDesc'] = 'black';
    valuesSetRectRow['boldDesc'] = '';
    valuesSetRectRow['letterSpacingDesc'] = '';
    valuesSetRectRow['lineHeightDesc'] = '';

    var textSetRectRow = [
      {
        enc: 'NECESIDAD',
        desc: '',
      },
      {
        enc: 'SOLICITUD DEL PEDIDO',
        desc: '',
      },
      {
        enc: 'FUENTES DE APROVISIONAMIENTO',
        desc: '',
      },
      {
        enc: 'CREACIÓN Y SEGUIMIENTO DE ORDEN DE COMPRA/CONTRATO',
        desc: '',
      },
      {
        enc: 'EJECUCIÓN DEL SERVICIO Y ADMINISTRACIÓN DE CONTRATO',
        desc: '',
      },
      {
        enc: 'RECEPCIÓN DE MERCANCÍAS - SERVICIOS',
        desc: '',
      },
      {
        enc: 'RECEPCIÓN DE FACTURAS',
        desc: '',
      },
      {
        enc: 'VERIFICACIÓN DE FACTURAS',
        desc: '',
      },
      {
        enc: 'PROCESO DE PAGO',
        desc: '',
      },
      {
        enc: 'EVALUACIÓN Y CIERRE',
        desc: '',
      },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)

    var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 4;
    valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
    valuesSetRectRow['x'] = rp(800, 'x', width, height);
    valuesSetRectRow['y'] = rp(470, 'x', width, height);
    valuesSetRectRow['w'] = rp(296, 'x', width, height);
    valuesSetRectRow['h'] = rp(45, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc'] = 0.15;
    valuesSetRectRow['paddingLREnc'] = 0.1;
    valuesSetRectRow['paddingTBDesc'] = 0;
    valuesSetRectRow['paddingLRDesc'] = 0;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'center';
    valuesSetRectRow['fontEnc'] = 'Roboto';
    valuesSetRectRow['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectRow['marginEnc'] = '';
    valuesSetRectRow['colorEnc'] = 'black';
    valuesSetRectRow['boldEnc'] = 'bold';
    valuesSetRectRow['letterSpacingEnc'] = '';
    valuesSetRectRow['lineHeightEnc'] = '';
    valuesSetRectRow['textAlignDesc'] = 'center';
    valuesSetRectRow['fontDesc'] = 'Roboto';
    valuesSetRectRow['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectRow['marginDesc'] = '';
    valuesSetRectRow['colorDesc'] = 'black';
    valuesSetRectRow['boldDesc'] = '';
    valuesSetRectRow['letterSpacingDesc'] = '';
    valuesSetRectRow['lineHeightDesc'] = '';

    var textSetRectRow = [
      {
        enc: 'MANDANTE',
        desc: '',
      },
      {
        enc: 'PROVEEDOR',
        desc: '',
      },
      {
        enc: 'COMPARTIDO',
        desc: '',
      },
      {
        enc: 'TODOS',
        desc: '',
      },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)

    text = [
      '¿QUÉ PERMITE ESTA EXPLORACIÓN?',
      '<ul style="padding-left: 15%"><li> Situarse en el contexto de la cadena de suministro sostenible.</li><br/>' +
      '<li> Posicionarse en la cadena de suministro sostenible.</li><br/>' +
      '<li> Enriquecer el conocimiento de la relación mandante y proveedor, para optimizar la gestión operacional.</li><br/>' +
      '<li> Identificar oportunidades para fortalecer la gestión de la cadena suministro propia</li></ul>'
    ]
    var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 1;
    valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
    valuesSetRectRow['x'] = rp(1150, 'x', width, height);
    valuesSetRectRow['y'] = rp(420, 'x', width, height);
    valuesSetRectRow['w'] = rp(296, 'x', width, height);
    valuesSetRectRow['h'] = rp(300, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc'] = 0.15;
    valuesSetRectRow['paddingLREnc'] = 0.1;
    valuesSetRectRow['paddingTBDesc'] = 0.1;
    valuesSetRectRow['paddingLRDesc'] = 0.1;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'center';
    valuesSetRectRow['fontEnc'] = 'Roboto';
    valuesSetRectRow['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectRow['marginEnc'] = '';
    valuesSetRectRow['colorEnc'] = 'black';
    valuesSetRectRow['boldEnc'] = 'bold';
    valuesSetRectRow['letterSpacingEnc'] = '';
    valuesSetRectRow['lineHeightEnc'] = '';
    valuesSetRectRow['textAlignDesc'] = 'center';
    valuesSetRectRow['fontDesc'] = 'Roboto';
    valuesSetRectRow['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectRow['marginDesc'] = '';
    valuesSetRectRow['colorDesc'] = 'black';
    valuesSetRectRow['boldDesc'] = '';
    valuesSetRectRow['letterSpacingDesc'] = '';
    valuesSetRectRow['lineHeightDesc'] = '';

    var textSetRectRow = [
      {
        enc: '',
        desc: '<ul style="padding-left: 15%">' +
          '<li> Descripción.</li><br/>' +
          '<li> Rol.</li><br/>' +
          '<li> Oportunidades.</li><br/>' +
          '<li> Riesgo.</li><br/>' +
          '<li> Indicador Sugerido.</li><br/>' +
          '<li> Indicador GRI.</li><br/>' +
          '<li> Descripción Indicador GRI.</li><br/>' +
          '</ul>'
      },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)

    var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 1;
    valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
    valuesSetRectRow['x'] = rp(1500, 'x', width, height);
    valuesSetRectRow['y'] = rp(370, 'x', width, height);
    valuesSetRectRow['w'] = rp(296, 'x', width, height);
    valuesSetRectRow['h'] = rp(400, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc'] = 0.1;
    valuesSetRectRow['paddingLREnc'] = 0.1;
    valuesSetRectRow['paddingTBDesc'] = 0.17;
    valuesSetRectRow['paddingLRDesc'] = 0.1;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(5, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'center';
    valuesSetRectRow['fontEnc'] = 'Roboto';
    valuesSetRectRow['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectRow['marginEnc'] = '';
    valuesSetRectRow['colorEnc'] = 'black';
    valuesSetRectRow['boldEnc'] = 'bold';
    valuesSetRectRow['letterSpacingEnc'] = '';
    valuesSetRectRow['lineHeightEnc'] = '';
    valuesSetRectRow['textAlignDesc'] = 'center';
    valuesSetRectRow['fontDesc'] = 'Roboto';
    valuesSetRectRow['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectRow['marginDesc'] = '';
    valuesSetRectRow['colorDesc'] = 'black';
    valuesSetRectRow['boldDesc'] = '';
    valuesSetRectRow['letterSpacingDesc'] = '';
    valuesSetRectRow['lineHeightDesc'] = '';

    var textSetRectRow = [
      {
        enc: '',
        desc: '<ul style="padding-left: 15%">' +
          '<li> Situarse en el contexto de la gestión de la cadena de suministro.</li><br/>' +
          '<li> Posicionarse en el rol desde el cual se aborda la relación comercial.</li><br/>' +
          '<li> Enriquecer el conocimiento de la relación mandante y proveedor, para optimizar la gestión operacional.</li><br/>' +
          '<li> Identificar los riesgos, oportunidades e indicadores para fortalecer la gestión de la cadena suministro propia.</li>' +
          '</ul>'
      },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)

    var valuesSetRectCol = []
    valuesSetRectCol['svg'] = svg;
    valuesSetRectCol['id'] = 'container1';
    valuesSetRectCol['wCont'] = rp(1348, 'x', width, height);
    valuesSetRectCol['cantCol'] = 4;
    valuesSetRectCol['distRect'] = rp(55, 'x', width, height);
    valuesSetRectCol['x'] = rp(450, 'x', width, height);
    valuesSetRectCol['y'] = rp(310, 'x', width, height);
    valuesSetRectCol['h'] = rp(50, 'x', width, height);
    valuesSetRectCol['r'] = rp(12, 'x', width, height);
    valuesSetRectCol['paddingTBEnc'] = 0;
    valuesSetRectCol['paddingLREnc'] = 0.1;
    valuesSetRectCol['paddingTBDesc'] = 0;
    valuesSetRectCol['paddingLRDesc'] = 0;
    valuesSetRectCol['fill'] = 'transparent';
    valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectCol['filter'] = '';
    valuesSetRectCol['textAlignEnc'] = 'center';
    valuesSetRectCol['fontEnc'] = 'Roboto';
    valuesSetRectCol['fontSizeEnc'] = (rp(14, 'x', width, height));
    valuesSetRectCol['marginEnc'] = '';
    valuesSetRectCol['colorEnc'] = 'black';
    valuesSetRectCol['boldEnc'] = 'bold';
    valuesSetRectCol['letterSpacingEnc'] = '';
    valuesSetRectCol['lineHeightEnc'] = '';
    valuesSetRectCol['textAlignDesc'] = 'center';
    valuesSetRectCol['fontDesc'] = 'Roboto';
    valuesSetRectCol['fontSizeDesc'] = (rp(14, 'x', width, height));
    valuesSetRectCol['marginDesc'] = '';
    valuesSetRectCol['colorDesc'] = 'black';
    valuesSetRectCol['boldDesc'] = '';
    valuesSetRectCol['letterSpacingDesc'] = '';
    valuesSetRectCol['lineHeightDesc'] = '';
    valuesSetRectCol['fillColor'] = 'transparent';

    var textSetRectCol = [
      {
        enc: 'PASO 1:<br>Selección Etapa',
        desc: '',
      },
      {
        enc: 'PASO 2:<br>Selección Rol',
        desc: '',
      },
      {
        enc: 'PASO 3:<br>Revisión Contenido',
        desc: '',
      },
      {
        enc: 'RESULTADO:<br>¿Qué permite esta exploración?',
        desc: '',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    var valuesSetArrowRight = []
    valuesSetArrowRight['svg'] = svg;
    valuesSetArrowRight['id'] = 'container1';
    valuesSetArrowRight['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowRight['cantRect'] = 1;
    valuesSetArrowRight['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowRight['largeArrow'] = rp(80, 'x', width, height);
    valuesSetArrowRight['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowRight['x'] = rp(730, 'x', width, height);
    valuesSetArrowRight['y'] = rp(340, 'x', width, height);
    valuesSetArrowRight['arrow'] = 'y';
    setArrowRight(valuesSetArrowRight)
    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(31, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(728, 'x', width, height);
    valuesSetArrowDown['y'] = rp(340, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'n';
    setArrowDown(valuesSetArrowDown)
    var valuesSetArrowRight = []
    valuesSetArrowRight['svg'] = svg;
    valuesSetArrowRight['id'] = 'container1';
    valuesSetArrowRight['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowRight['cantRect'] = 1;
    valuesSetArrowRight['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowRight['largeArrow'] = rp(80, 'x', width, height);
    valuesSetArrowRight['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowRight['x'] = rp(1080, 'x', width, height);
    valuesSetArrowRight['y'] = rp(340, 'x', width, height);
    valuesSetArrowRight['arrow'] = 'y';
    setArrowRight(valuesSetArrowRight)
    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(31, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(1078, 'x', width, height);
    valuesSetArrowDown['y'] = rp(340, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'n';
    setArrowDown(valuesSetArrowDown)

    /******************************
    Sidebar - Start
    *******************************/
    getSideBarLines(svg, width);
    getSideBarGuiaFome(svg, width, height, styles.grow);
    /******************************
     Sidebar - End
     *******************************/
  }

  render() {
    const { guia, menuBreadcrumbs } = this.state;

    return (
      <div className={styles.container}>
        <div ref={this.main}></div>
      </div>
    )
  }
}
export default Metodologia