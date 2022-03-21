import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
//import {guiaApi} from "../api/guia-api"
import * as d3 from 'd3';
//import FooterGuia from "../components/FooterGuia";
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadCrumbGuia, headerCornerLogo, gradients, setTriangle, shadowFilters, shadowFiltersReverse, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText, setHtmlTextLink, gradientRect, setRectColWithSmallRect, setMenuInteriorV, setArrowDownWS, setArrowDown, setArrowUp, setArrowLeft, setArrowRight, setRectCol, selectButtonV } from "../../functions/htmlText";
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

  //getMenuBreadcrumbs() {
  //  guiaApi.getMenuBreadcrumbs().then(res => {
  //    this.setState({
  //      menuBreadcrumbs: res
  //    })
  //  })
  //}
  //
  //getGuias() {
  //  guiaApi.getGuias().then(res => {
  //    this.setState({
  //      guia: res
  //    })
  //  })
  //}

  //selected circle shadow 
  selectedcircleshadow(svg, height) {
    var g1 = svg.append('g');
    var defs = svg.append("defs");

    var filter = defs.append("filter")
      .attr("id", "selectedcircleshadow")

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", height / 300)
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
  shadow(svg, x, y, w, h) {
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
      .attr("rx", 20)								// radius
      .attr("ry", 20)
  }
  gradientRect(svg, x, y, w, h, radio, stroke, strokeWidth) {
    svg.append('rect')
      //.classed('outlined', true)
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .style("stroke", stroke)
      .style("stroke-width", strokeWidth)
      .attr("rx", h / radio)			// 15					// radius
      .attr("ry", h / radio);	// 15

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .style("stroke", stroke)
      .style("stroke-width", strokeWidth)
      .attr("rx", h / radio)			// 15					// radius
      .attr("ry", h / radio);	// 15
  }

  arrow(svg) {
    svg.append("svg:defs").append("svg:marker")
      .attr("id", "triangle")
      .attr("refX", 6)
      .attr("refY", 6)
      .attr("markerWidth", 30)
      .attr("markerHeight", 30)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 12 6 0 12 3 6")
      .style("fill", "#82368C");
  }

  main = (element) => {
    // Obtiene el tamaño de la pantalla en uso
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
    const radio = 80;

    const w_pageTitleBg = rp(920, 'x', width, height);
    const h_pageTitleBg = rp(100.42, 'x', width, height);
    const x_pageTitle = rp(914, 'x', width, height);
    const y_pageTitle = rp(110, 'x', width, height);
    const w_pageTitle = rp(800, 'x', width, height);
    const h_pageTitle = rp(100, 'x', width, height);
    const letterSpacing_pageTitle = rp(4, 'x', width, height);
    const fontSize_pageTitle = rp(26, 'x', width, height);
    const fontFamily_pageTitle = 'Oswald';
    const style_pageTitle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_pageTitle + 'px;letter-spacing:' + letterSpacing_pageTitle + 'px;color:#FFFFFF';

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
    getArrowEnd(svg, heightCorrected)

    //tooltip ~~~~~~~~~~~~~~~~~~~~~~~~~
    //tooltip rectangle
    svg.append('rect')
      .attr('x', rp(872.72, 'x', width, height))
      .attr('y', rp(139, 'x', width, height))
      .attr('rx', 10)
      .attr('ry', 10)
      .style("fill", "url(#bgLinGradB)")
      .transition()
      .delay(200)
      .attr('width', w_pageTitleBg)
      .attr('height', h_pageTitleBg);

    //tooltip triangle    
    const x_triangle = getPositionMenuSelected(8, width, height);
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
    valueSetTriangle['fill'] = '#40549c'
    valueSetTriangle['filter'] = ''
    setTriangle(valueSetTriangle)

    var text = ["¿DESDE DÓNDE VIENEN LAS PRÁCTICAS DE GESTIÓN EN LAS", "ETAPAS DE LA CADENA DE SUMINISTRO Y SU ANÁLISIS?"]

    for (var i = 0; i < text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText(svg, 1, 'textGradientBold' + i,
        rp(872.72, 'x', width, height),
        (rp(150, 'x', width, height) + (i * rp(41.1, 'x', width, height))),
        w_pageTitleBg,
        rp(36, 'x', width, height),
        text[i],
        rp(26, 'x', width, height), 'Oswald', 'center', 0, 'white', 'bold', rp(4, 'x', width, height))

    var valuesSetMenuInteriorV = []
    valuesSetMenuInteriorV['svg'] = svg;
    valuesSetMenuInteriorV['id'] = '';
    valuesSetMenuInteriorV['cantBotones'] = 3;
    valuesSetMenuInteriorV['distBotones'] = rp(15, 'x', width, height);
    valuesSetMenuInteriorV['x'] = rp(290, 'x', width, height);
    valuesSetMenuInteriorV['y'] = rp(330, 'x', width, height);
    valuesSetMenuInteriorV['w'] = rp(95, 'x', width, height);
    valuesSetMenuInteriorV['h'] = rp(95, 'x', width, height);
    valuesSetMenuInteriorV['r'] = rp(8.78, 'x', width, height);
    valuesSetMenuInteriorV['textAlign'] = 'center';
    valuesSetMenuInteriorV['font'] = 'Roboto';
    valuesSetMenuInteriorV['fontSize'] = rp(12, 'x', width, height);
    valuesSetMenuInteriorV['margin'] = '';
    valuesSetMenuInteriorV['color'] = 'black';
    valuesSetMenuInteriorV['bold'] = '';
    valuesSetMenuInteriorV['letterSpacing'] = '';
    valuesSetMenuInteriorV['lineHeight'] = '';
    valuesSetMenuInteriorV['fill'] = '';
    valuesSetMenuInteriorV['stroke'] = '';
    valuesSetMenuInteriorV['filter'] = '';

    var contentMenuInterior = [
      {
        img: '/img/origen_de_las_buenas_practicas.png',
        text: '',
        idAction: 'container1',
      },
      {
        img: '/img/logo-mini-pg.png',
        text: '',
        idAction: 'container2',
      },
      {
        img: '/img/logo-mini-ods.png',
        text: '',
        idAction: 'container3',
      },
    ]

    setMenuInteriorV(valuesSetMenuInteriorV, contentMenuInterior)
    selectButtonV(valuesSetMenuInteriorV, 0, contentMenuInterior)

    var valuesSetRectColWithSmallRect = []
    valuesSetRectColWithSmallRect['svg'] = svg;
    valuesSetRectColWithSmallRect['id'] = 'container1';
    valuesSetRectColWithSmallRect['wCont'] = rp(1445, 'x', width, height);
    valuesSetRectColWithSmallRect['cantCol'] = 4;
    valuesSetRectColWithSmallRect['distRect'] = rp(20, 'x', width, height);
    valuesSetRectColWithSmallRect['x'] = rp(430, 'x', width, height);
    valuesSetRectColWithSmallRect['y'] = rp(321.67, 'x', width, height);
    valuesSetRectColWithSmallRect['h'] = rp(419.57, 'x', width, height);
    valuesSetRectColWithSmallRect['r'] = rp(12, 'x', width, height);
    valuesSetRectColWithSmallRect['fill'] = 'url(#bgLinGradB)';
    valuesSetRectColWithSmallRect['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectColWithSmallRect['filter'] = 'url(#shadowFilter)';
    valuesSetRectColWithSmallRect['textAlignEnc'] = 'justify';
    valuesSetRectColWithSmallRect['fontEnc'] = 'Roboto';
    valuesSetRectColWithSmallRect['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectColWithSmallRect['marginEnc'] = '';
    valuesSetRectColWithSmallRect['colorEnc'] = 'black';
    valuesSetRectColWithSmallRect['boldEnc'] = 'bold';
    valuesSetRectColWithSmallRect['letterSpacingEnc'] = '';
    valuesSetRectColWithSmallRect['lineHeightEnc'] = '';
    valuesSetRectColWithSmallRect['textAlignDesc'] = 'left';
    valuesSetRectColWithSmallRect['fontDesc'] = 'Roboto';
    valuesSetRectColWithSmallRect['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectColWithSmallRect['marginDesc'] = '';
    valuesSetRectColWithSmallRect['colorDesc'] = 'black';
    valuesSetRectColWithSmallRect['boldDesc'] = '';
    valuesSetRectColWithSmallRect['letterSpacingDesc'] = '';
    valuesSetRectColWithSmallRect['lineHeightDesc'] = '';
    valuesSetRectColWithSmallRect['textAlignSmallContent'] = 'center';
    valuesSetRectColWithSmallRect['fontSmallContent'] = 'Roboto';
    valuesSetRectColWithSmallRect['fontSizeSmallContent'] = (rp(13.72, 'x', width, height));
    valuesSetRectColWithSmallRect['marginSmallContent'] = '';
    valuesSetRectColWithSmallRect['colorSmallContent'] = 'black';
    valuesSetRectColWithSmallRect['boldSmallContent'] = 'bold';
    valuesSetRectColWithSmallRect['letterSpacingSmallContent'] = '';
    valuesSetRectColWithSmallRect['lineHeightSmallContent'] = '';
    var textSetRectColWithSmallRect = [
      {
        enc: 'A.- LEVANTAMIENTO DE BUENAS PRÁCTICAS A PARTIR DE ENTREVISTAS Y REPORTES DE SOSTENIBILIDAD 2020.',
        desc: 'Entrevistas en profundidad:<br/>' +
          '<ul style="line-height: 130%;padding-left: 10%"><li> Natura</li>' +
          '<li> Casa ideas</li>' +
          '<li> Sura</li>' +
          '<li> Sodimac</li>' +
          '<li> Falabella</li>' +
          '<li> BCI</li>' +
          '<li> Colbún</li>' +
          '<li> PYMES</li>' +
          '<li> Otras</li></ul>' +
          'Reportes sostenibilidad:<br/>' +
          '<ul style="line-height: 130%;padding-left: 10%"><li> Financiero: SURA - SANTANDER</li>' +
          '<li> Retailer: JUMBO - SODIMAC</li>' +
          '<li> Productivo: CODELCO - LIPIGAS</li>' +
          '<li> Consumo Masivo: LOREAL – NATURA – NESTLÉ, Otras</li></ul>',
      },
      {
        enc: 'B.- LEVANTAMIENTO DE BUENAS PRÁCTICAS DE EMPRESAS CHILENAS DE DISTINTAS CATEGORÍAS CON PARTICIPACIÓN EN DOW JONES:',
        desc: '<ul style="line-height: 130%;padding-left: 10%"><li> AntarChile</li>' +
          '<li> Copec</li>' +
          '<li> CCU</li>' +
          '<li> Parque Arauco</li>' +
          '<li> CMPC</li>' +
          '<li> Colbún',
      },
      {
        enc: 'C- LEVANTAMIENTO BUENAS PRÁCTICAS DE ABASTECIMIENTO EN EMPRESAS GOLD DEL DOW JONES INDEX, DE LAS SIGUIENTES CATEGORÍAS (*):',
        desc: '<ul style="line-height: 130%;padding-left: 10%"><li> Grupo Nutresa (alimentos)</li>' +
          '<li> Adidas (textiles-confección)</li>' +
          '<li> ITOCHU Corp (comercio –distribución)</li>' +
          '<li> Samsung (equipos-instrumentos-electrónicos)</li>' +
          '<li> Teck resources ltd (metales-minería)</li>' +
          '<li> UPM-Kymmene OYJ (productos madereros – papeleros)</li>' +
          '<li> Unilever NV (productos personales)</li>' +
          '<li> Sodexo FR (restaurantes – centros recreativos)</li>' +
          '<li> Industria de Diseño Textil (retail)</li>' +
          '<li> Allianz GE (seguros)</li>' +
          '<li> True Corp PCl Thai (servicios de telecomunicaciones)</li>' +
          '<li> Waste Management Inc (suministros y servicios comerciales)</li>' +
          '<li> Otros</li></ul>',
      },
      {
        enc: 'D- INSTITUCIONES NO GUBERNAMENTALES:',
        desc: '<ul style="line-height: 130%;padding-left: 10%">'
          + '<li> Pacto Global</li>'
          + '<li> ONU</li>'
          + '<li> OIT</li>'
          + '<li> OCDE</li>'
          + '<li> GRI</li>'
          + '</ul>',
      },
    ]
    var smallContentSetRectColWithSmallRect = [
      {
        img: '',
        text: 'INDUSTRIA LOCAL',
      },
      {
        img: '/img/mila.png',
        text: '',
      },
      {
        img: '/img/dow.png',
        text: '',
      },
      {
        img: '',
        text: 'Fuentes de Referencia',
      },
    ]

    setRectColWithSmallRect(valuesSetRectColWithSmallRect, textSetRectColWithSmallRect, smallContentSetRectColWithSmallRect)

    var valuesSetRectCol = []
    valuesSetRectCol['svg'] = svg;
    valuesSetRectCol['id'] = 'container1';
    valuesSetRectCol['wCont'] = rp(296, 'x', width, height);
    valuesSetRectCol['cantCol'] = 1;
    valuesSetRectCol['distRect'] = rp(0, 'x', width, height);
    valuesSetRectCol['x'] = rp(640, 'x', width, height);
    valuesSetRectCol['y'] = rp(790, 'x', width, height);
    valuesSetRectCol['h'] = rp(50, 'x', width, height);
    valuesSetRectCol['r'] = rp(12, 'x', width, height);
    valuesSetRectCol['paddingTBEnc'] = 0;
    valuesSetRectCol['paddingLREnc'] = 0.1;
    valuesSetRectCol['paddingTBDesc'] = 0;
    valuesSetRectCol['paddingLRDesc'] = 0;
    valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
    valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectCol['filter'] = 'url(#shadowFilter)';
    valuesSetRectCol['textAlignEnc'] = 'center';
    valuesSetRectCol['fontEnc'] = 'Roboto';
    valuesSetRectCol['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectCol['marginEnc'] = '';
    valuesSetRectCol['colorEnc'] = 'black';
    valuesSetRectCol['boldEnc'] = 'bold';
    valuesSetRectCol['letterSpacingEnc'] = '';
    valuesSetRectCol['lineHeightEnc'] = '';
    valuesSetRectCol['textAlignDesc'] = 'center';
    valuesSetRectCol['fontDesc'] = 'Roboto';
    valuesSetRectCol['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectCol['marginDesc'] = '';
    valuesSetRectCol['colorDesc'] = 'black';
    valuesSetRectCol['boldDesc'] = '';
    valuesSetRectCol['letterSpacingDesc'] = '';
    valuesSetRectCol['lineHeightDesc'] = '';

    var textSetRectCol = [
      {
        enc: 'BUENAS PRÁCTICAS: LÍNEA BASE Y REFERENCIAS',
        desc: '',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    var valuesSetRectCol = []
    valuesSetRectCol['svg'] = svg;
    valuesSetRectCol['id'] = 'container1';
    valuesSetRectCol['wCont'] = rp(296, 'x', width, height);
    valuesSetRectCol['cantCol'] = 1;
    valuesSetRectCol['distRect'] = rp(0, 'x', width, height);
    valuesSetRectCol['x'] = rp(640, 'x', width, height);
    valuesSetRectCol['y'] = rp(885, 'x', width, height);
    valuesSetRectCol['h'] = rp(50, 'x', width, height);
    valuesSetRectCol['r'] = rp(12, 'x', width, height);
    valuesSetRectCol['paddingTBEnc'] = 0;
    valuesSetRectCol['paddingLREnc'] = 0.1;
    valuesSetRectCol['paddingTBDesc'] = 0;
    valuesSetRectCol['paddingLRDesc'] = 0;
    valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
    valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectCol['filter'] = 'url(#shadowFilter)';
    valuesSetRectCol['textAlignEnc'] = 'center';
    valuesSetRectCol['fontEnc'] = 'Roboto';
    valuesSetRectCol['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectCol['marginEnc'] = '';
    valuesSetRectCol['colorEnc'] = 'black';
    valuesSetRectCol['boldEnc'] = 'bold';
    valuesSetRectCol['letterSpacingEnc'] = '';
    valuesSetRectCol['lineHeightEnc'] = '';
    valuesSetRectCol['textAlignDesc'] = 'center';
    valuesSetRectCol['fontDesc'] = 'Roboto';
    valuesSetRectCol['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectCol['marginDesc'] = '';
    valuesSetRectCol['colorDesc'] = 'black';
    valuesSetRectCol['boldDesc'] = '';
    valuesSetRectCol['letterSpacingDesc'] = '';
    valuesSetRectCol['lineHeightDesc'] = '';
    var textSetRectCol = [
      {
        enc: 'ETAPAS DEL PROCESO DE APROVISIONAMIENTO',
        desc: '',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    var valuesSetRectCol = []
    valuesSetRectCol['svg'] = svg;
    valuesSetRectCol['id'] = 'container1';
    valuesSetRectCol['wCont'] = rp(833, 'x', width, height);
    valuesSetRectCol['cantCol'] = 5;
    valuesSetRectCol['distRect'] = rp(10, 'x', width, height);
    valuesSetRectCol['x'] = rp(1040, 'x', width, height);
    valuesSetRectCol['y'] = rp(790, 'x', width, height);
    valuesSetRectCol['h'] = rp(145, 'x', width, height);
    valuesSetRectCol['r'] = rp(12, 'x', width, height);
    valuesSetRectCol['paddingTBEnc'] = 0;
    valuesSetRectCol['paddingLREnc'] = 0;
    valuesSetRectCol['paddingTBDesc'] = 0.05;
    valuesSetRectCol['paddingLRDesc'] = 0.13;
    valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
    valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectCol['filter'] = 'url(#shadowFilter)';
    valuesSetRectCol['textAlignEnc'] = 'center';
    valuesSetRectCol['fontEnc'] = 'Roboto';
    valuesSetRectCol['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectCol['marginEnc'] = '';
    valuesSetRectCol['colorEnc'] = 'black';
    valuesSetRectCol['boldEnc'] = 'bold';
    valuesSetRectCol['letterSpacingEnc'] = '';
    valuesSetRectCol['lineHeightEnc'] = '';
    valuesSetRectCol['textAlignDesc'] = 'left';
    valuesSetRectCol['fontDesc'] = 'Roboto';
    valuesSetRectCol['fontSizeDesc'] = (rp(12.8, 'x', width, height));
    valuesSetRectCol['marginDesc'] = '';
    valuesSetRectCol['colorDesc'] = 'black';
    valuesSetRectCol['boldDesc'] = '';
    valuesSetRectCol['letterSpacingDesc'] = '';
    valuesSetRectCol['lineHeightDesc'] = '';
    var textSetRectCol = [
      {
        enc: '',
        desc: 'Pertinencia de las practicas en cada etapa del proceso.',
      },
      {
        enc: '',
        desc: 'Competencia mandante, proveedor o compartida en cada etapa del proceso y asociación a práctica.',
      },
      {
        enc: '',
        desc: 'Asociación de prácticas y competencia a dimensiones OCDE (ya definidas desde el inicio).',
      },
      {
        enc: '',
        desc: 'Asociación de prácticas, competencia y dimensiones OCDE a los 10 principios de pacto global.',
      },
      {
        enc: '',
        desc: 'Asociación de práctica competencia dimensiones OCDE principios de pacto global y ODS.',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(20, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(20, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(getPositionMenuSelected(8), 'x', width, height);
    valuesSetArrowDown['y'] = rp(238, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'n';
    setArrowDown(valuesSetArrowDown)

    var valuesSetArrowDownWS = []
    valuesSetArrowDownWS['svg'] = svg;
    valuesSetArrowDownWS['id'] = 'container1';
    valuesSetArrowDownWS['wCont'] = rp(1445, 'x', width, height);
    valuesSetArrowDownWS['cantRect'] = 4;
    valuesSetArrowDownWS['distRect'] = rp(20, 'x', width, height);
    valuesSetArrowDownWS['altArrow'] = rp(20, 'x', width, height);
    valuesSetArrowDownWS['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDownWS['x'] = rp(430, 'x', width, height);
    valuesSetArrowDownWS['y'] = rp(260, 'x', width, height);
    valuesSetArrowDownWS['arrow'] = 'y';
    setArrowDownWS(valuesSetArrowDownWS)

    var valuesSetArrowLeft = []
    valuesSetArrowLeft['svg'] = svg;
    valuesSetArrowLeft['id'] = 'container1';
    valuesSetArrowLeft['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowLeft['cantRect'] = 1;
    valuesSetArrowLeft['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowLeft['largeArrow'] = rp(1105, 'x', width, height);
    valuesSetArrowLeft['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowLeft['x'] = rp(715.5, 'x', width, height);
    valuesSetArrowLeft['y'] = rp(257.34, 'x', width, height);
    valuesSetArrowLeft['arrow'] = 'n';
    setArrowLeft(valuesSetArrowLeft)

    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(1075, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 3;
    valuesSetArrowDown['distRect'] = rp(20, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(20, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(430, 'x', width, height);
    valuesSetArrowDown['y'] = rp(741.24, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'n';
    setArrowDown(valuesSetArrowDown)

    var valuesSetArrowLeft = []
    valuesSetArrowLeft['svg'] = svg;
    valuesSetArrowLeft['id'] = 'container1';
    valuesSetArrowLeft['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowLeft['cantRect'] = 1;
    valuesSetArrowLeft['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowLeft['largeArrow'] = rp(736, 'x', width, height);
    valuesSetArrowLeft['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowLeft['x'] = rp(599.5, 'x', width, height);
    valuesSetArrowLeft['y'] = rp(760, 'x', width, height);
    valuesSetArrowLeft['arrow'] = 'n';
    setArrowLeft(valuesSetArrowLeft)

    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(20, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(780, 'x', width, height);
    valuesSetArrowDown['y'] = rp(760, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'y';
    setArrowDown(valuesSetArrowDown)

    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(30, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(780, 'x', width, height);
    valuesSetArrowDown['y'] = rp(848, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'y';
    setArrowDown(valuesSetArrowDown)

    var valuesSetArrowUp = []
    valuesSetArrowUp['svg'] = svg;
    valuesSetArrowUp['id'] = 'container1';
    valuesSetArrowUp['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowUp['cantRect'] = 1;
    valuesSetArrowUp['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowUp['altArrow'] = rp(30, 'x', width, height);
    valuesSetArrowUp['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowUp['x'] = rp(780, 'x', width, height);
    valuesSetArrowUp['y'] = rp(848, 'x', width, height);
    valuesSetArrowUp['arrow'] = 'y';
    setArrowUp(valuesSetArrowUp)

    var valuesSetArrowLeft = []
    valuesSetArrowLeft['svg'] = svg;
    valuesSetArrowLeft['id'] = 'container1';
    valuesSetArrowLeft['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowLeft['cantRect'] = 1;
    valuesSetArrowLeft['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowLeft['largeArrow'] = rp(45, 'x', width, height);
    valuesSetArrowLeft['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowLeft['x'] = rp(936, 'x', width, height);
    valuesSetArrowLeft['y'] = rp(815, 'x', width, height);
    valuesSetArrowLeft['arrow'] = 'n';
    setArrowLeft(valuesSetArrowLeft)

    var valuesSetArrowLeft = []
    valuesSetArrowLeft['svg'] = svg;
    valuesSetArrowLeft['id'] = 'container1';
    valuesSetArrowLeft['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowLeft['cantRect'] = 1;
    valuesSetArrowLeft['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowLeft['largeArrow'] = rp(45, 'x', width, height);
    valuesSetArrowLeft['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowLeft['x'] = rp(936, 'x', width, height);
    valuesSetArrowLeft['y'] = rp(905, 'x', width, height);
    valuesSetArrowLeft['arrow'] = 'n';
    setArrowLeft(valuesSetArrowLeft)

    var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(90, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(973, 'x', width, height);
    valuesSetArrowDown['y'] = rp(815, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'n';
    setArrowDown(valuesSetArrowDown)

    var valuesSetArrowRight = []
    valuesSetArrowRight['svg'] = svg;
    valuesSetArrowRight['id'] = 'container1';
    valuesSetArrowRight['wCont'] = rp(1105, 'x', width, height);
    valuesSetArrowRight['cantRect'] = 1;
    valuesSetArrowRight['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowRight['largeArrow'] = rp(45, 'x', width, height);
    valuesSetArrowRight['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowRight['x'] = rp(975, 'x', width, height);
    valuesSetArrowRight['y'] = rp(860, 'x', width, height);
    valuesSetArrowRight['arrow'] = 'y';
    setArrowRight(valuesSetArrowRight)

    //links
    gradientRect(svg,
      rp(60, 'x', width, height),
      rp(804.17, 'x', width, height),
      rp(480, 'x', width, height),
      rp(120.63, 'x', width, height),
      rp(12, 'x', width, height),
      rp(12, 'x', width, height),
      'url(#bgLinGradB)',
      rp(2, 'x', width, height),
      'url(#shadowFilter)',
      'container1'
    )

    svg.append("text")
      .attr('id', 'container1')
      .attr("x", rp(426.67, 'x', width, height))
      .attr("y", rp(839.14, 'x', width, height))
      .attr("dx", "0px")
      .attr("dy", "0px")
      .text('LINKS')
      .style("font-size", rp(16.17, 'x', width, height))
      .style("font-weight", "bold")
      .style("font-family", "Roboto")

    const img = [
      '/img/repositorio_web-17.png',
      '/img/repositorio_web-19.png',
      '/img/repositorio_web-20.png',
      '/img/repositorio_web-21.png',
      '/img/repositorio_web-22.png',
      '/img/repositorio_web-23.png',
    ]

    for (var i = 0; i < img.length; i++)
      svg.append("image")
        .attr('id', 'container1')
        .attr("xlink:href", window.location.origin + img[i])
        .attr("x", width / 32 +
          i * rp(80.85, 'x', width, height))
        .attr("y", rp(861.61, 'x', width, height))
        .attr("width", rp(60.76, 'x', width, height))

    //first bottom left line
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
      .attr('id', 'container1')
      .classed('filled', true)
      .attr('x', 0)
      .attr('y', rp(846.5, 'x', width, height))
      .attr('width', rp(480, 'x', width, height))
      .attr('height', rp(3.22, 'x', width, height));

    //dot 
    svg.append("circle")
      .attr('id', 'container1')
      .attr("cx", rp(480, 'x', width, height))
      .attr("cy", rp(847.98, 'x', width, height))
      .attr("r", rp(3.86, 'x', width, height))
      .style("fill", "#82368C")

    ////////////////////////////////////////////////////////
    //pagina 2 - inicio/////////////////////////////////////
    ////////////////////////////////////////////////////////
    //linkref

    gradientRect(svg,
      rp(64, 'x', width, height),
      rp(804.17, 'x', width, height),
      rp(349.1, 'x', width, height),
      rp(120.63, 'x', width, height),
      rp(12, 'x', width, height),
      rp(12, 'x', width, height),
      'url(#bgLinGradB)',
      rp(2, 'x', width, height),
      'url(#shadowFilter)',
      'container2',
      0
    )
    //second bottom left line
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
      .attr('id', 'container2')
      .attr('opacity', 0)
      .classed('filled', true)
      .attr('x', 0)
      .attr('y', rp(860, 'x', width, height))
      .attr('width', rp(384, 'x', width, height))
      .attr('height', rp(3.22, 'x', width, height));

    //second dot 
    svg.append("circle")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("cx", rp(384, 'x', width, height))
      .attr("cy", rp(861, 'x', width, height))
      .attr("r", rp(3.86, 'x', width, height))
      .style("fill", "#82368C")

    var text = [
      'Link Guía ODS',
      'https://www.pactomundial.org/wp-content/uploads/20',
      '16/09/Guia_ODS_online.pdf'
    ]
    for (var i = 0; i < 1; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, link)
      setHtmlText(svg, 0, 'container2',
        (rp(96, 'x', width, height)),
        ((rp(831, 'x', width, height)) +
          (i * rp(12, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(480, 'x', width, height)),
        text[i],
        (rp(16, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold')
    for (var i = 1; i < text.length; i++)
      //setHtmlTextLink(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, link)
      setHtmlTextLink(svg, 0, 'container2',
        (rp(83.48, 'x', width, height)),
        ((rp(858, 'x', width, height)) +
          (i * rp(14.77, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(19.2, 'x', width, height)),
        text[i],
        (rp(13.25, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '', 'https://www.pactomundial.org/wp-content/uploads/2016/09/Guia_ODS_online.pdf')

    //reflink end
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(1280, 'x', width, height))
      .attr("height", rp(69.93, 'x', width, height))
      .attr("fill", "#a5a5a5")
      .attr("x", rp(505.27, 'x', width, height))
      .attr("y", rp(250, 'x', width, height))

    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(261, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '10 PRINCIPIOS PACTO GLOBAL',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(288, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '4 DIMENSIONES OCDE: DDHH, TRABAJO, MEDIO AMBIENTE, ÉTICA, PROBIDAD Y RESOLUCIÓN DE CONFLICTOS',
      (rp(19.2, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //celda A1
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#f2b21b")
      .attr("x", rp(505.27, 'x', width, height))
      .attr("y", rp(322, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(337, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '1',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textA1 = [
      'Las empresas deben apoyar y respetar la protección de los Derechos Humanos' +
      ' fundamentales, reconocidos internacionalmente, dentro de su ámbito de influencia.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(373, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textA1[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')
    //celda A2
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#f4bf42")
      .attr("x", rp(805.04, 'x', width, height))
      .attr("y", rp(322, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(820.52, 'x', width, height)),
      (rp(337, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '2',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textA2 = [
      'Las empresas deben asegurarse que sus empresas no son cómplices en la vulneración de los Derechos Humanos.',
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(820.52, 'x', width, height)),
      (rp(373, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textA2[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')
    //celda A3
    setHtmlText(svg, 0, 'container2',
      (rp(1122.81, 'x', width, height)),
      (rp(341, 'x', width, height)),
      (rp(76.8, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      'DERECHOS HUMANOS',
      (rp(14.77, 'x', width, height)),
      'Roboto', 'left', 0, 'black', 'bold')
    svg.append("line")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .style("stroke", "#f4bf42")
      .style("stroke-width", rp(3, 'x', width, height))
      .style("stroke-linecap", "butt")
      .attr("x1", rp(1122.81, 'x', width, height))
      .attr("y1", rp(379, 'x', width, height))
      .attr("x2", rp(1202.26, 'x', width, height))
      .attr("y2", rp(379, 'x', width, height))

    //celda B1
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#34b6ec")
      .attr("x", rp(505.27, 'x', width, height))
      .attr("y", rp(476, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(494, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '3',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textB1 = [
      'Las empresas deben apoyar la libertad de afiliación y el reconocimiento efectivo del derecho a la negociación colectiva.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(534, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textB1[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')
    //celda B2
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#5cc4f0")
      .attr("x", rp(805.04, 'x', width, height))
      .attr("y", rp(476, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(820.52, 'x', width, height)),
      (rp(494, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '4',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textB2 = [
      'Las empresas deben apoyar la eliminación de toda forma de trabajo forzoso o realizado bajo coacción.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(820.52, 'x', width, height)),
      (rp(534, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textB2[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')
    //celda B3
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#34b6ec")
      .attr("x", rp(1104.72, 'x', width, height))
      .attr("y", rp(476, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(1122.81, 'x', width, height)),
      (rp(494, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '5',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textB3 = [
      'Las empresas deben apoyar la erradicación del trabajo infantil.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(1122.81, 'x', width, height)),
      (rp(534, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textB3[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')
    //celda B4
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#5cc4f0")
      .attr("x", rp(1404.54, 'x', width, height))
      .attr("y", rp(476, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(1416.98, 'x', width, height)),
      (rp(494, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '6',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textB4 = [
      'Las empresas deben apoyar la abolición de las prácticas de discriminación en el empleo y la ocupación.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(1416.98, 'x', width, height)),
      (rp(534, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textB4[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //celda B5
    setHtmlText(svg, 0, 'container2',
      (rp(1717.36, 'x', width, height)),
      (rp(491, 'x', width, height)),
      (rp(87.28, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      'NORMAS LABORALES',
      (rp(14.77, 'x', width, height)),
      'Roboto', 'left', 0, 'black', 'bold')
    svg.append("line")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .style("stroke", "#34b6ec")
      .style("stroke-width", rp(3, 'x', width, height))
      .style("stroke-linecap", "butt")
      .attr("x1", rp(1717.36, 'x', width, height))
      .attr("y1", rp(530, 'x', width, height))
      .attr("x2", rp(1802.82, 'x', width, height))
      .attr("y2", rp(530, 'x', width, height));
    //celda C1
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#5f864d")
      .attr("x", rp(505.27, 'x', width, height))
      .attr("y", rp(631, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(643, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '7',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textC1 = [
      'Las empresas deberán mantener un enfoque preventivo que favorezca el medio ambiente.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(684, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textC1[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //celda C2
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#7a9965")
      .attr("x", rp(805.04, 'x', width, height))
      .attr("y", rp(631, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(820.52, 'x', width, height)),
      (rp(643, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '8',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textC2 = [
      'Las empresas deben fomentar las iniciativas que promuevan una mayor responsabilidad ambiental.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(820.52, 'x', width, height)),
      (rp(684, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textC2[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //celda C3
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#5f864d")
      .attr("x", rp(1104.72, 'x', width, height))
      .attr("y", rp(631, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(1122.81, 'x', width, height)),
      (rp(643, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '9',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')

    var textC3 = [
      'Las empresas deben favorecer el desarrollo y la difusión de las tecnologías respetuosas con el medio ambiente.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(1122.81, 'x', width, height)),
      (rp(684, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textC3[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //celda C4
    setHtmlText(svg, 0, 'container2',
      (rp(1416.98, 'x', width, height)),
      (rp(638, 'x', width, height)),
      (rp(87.28, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      'MEDIO AMBIENTE',
      (rp(14.77, 'x', width, height)),
      'Roboto', 'left', 0, 'black', 'bold')
    svg.append("line")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .style("stroke", "#5f864d")
      .style("stroke-width", rp(3, 'x', width, height))
      .style("stroke-linecap", "butt")
      .attr("x1", rp(1416.98, 'x', width, height))
      .attr("y1", rp(686, 'x', width, height))
      .attr("x2", rp(1494.17, 'x', width, height))
      .attr("y2", rp(686, 'x', width, height));
    //celda D1
    svg.append("rect")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .attr("width", rp(300, 'x', width, height))
      .attr("height", rp(155.65, 'x', width, height))
      .attr("fill", "#e6472e")
      .attr("x", rp(505.27, 'x', width, height))
      .attr("y", rp(786, 'x', width, height))
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(802, 'x', width, height)),
      (rp(1280, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      '10',
      (rp(22.59, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')
    var textD1 = [
      'Las empresas deben trabajar contra la corrupción en todas sus formas, incluidas extorsión y soborno.'
    ]
    setHtmlText(svg, 0, 'container2',
      (rp(518.92, 'x', width, height)),
      (rp(840, 'x', width, height)),
      (rp(274.29, 'x', width, height)),
      (rp(155.65, 'x', width, height)),
      textD1[0],
      (rp(12.8, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //celda D2
    setHtmlText(svg, 0, 'container2',
      (rp(818.77, 'x', width, height)),
      (rp(805, 'x', width, height)),
      (rp(128, 'x', width, height)),
      (rp(139.14, 'x', width, height)),
      'LUCHA CONTRA LA CORRUPCIÓN',
      (rp(14.77, 'x', width, height)),
      'Roboto', 'left', 0, 'black', 'bold')
    svg.append("line")
      .attr('id', 'container2')
      .attr('opacity', 0)
      .style("stroke", "#e6472e")
      .style("stroke-width", rp(3, 'x', width, height))
      .style("stroke-linecap", "butt")
      .attr("x1", rp(820.52, 'x', width, height))
      .attr("y1", rp(843, 'x', width, height))
      .attr("x2", rp(941.18, 'x', width, height))
      .attr("y2", rp(843, 'x', width, height));

    ////////////////////////////////////////////////////////
    //pagina 2 - fin////////////////////////////////////////
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    //pagina 3 - inicio/////////////////////////////////////
    ////////////////////////////////////////////////////////
    gradientRect(svg,
      rp(64, 'x', width, height),
      rp(804.17, 'x', width, height),
      rp(349.1, 'x', width, height),
      rp(120.63, 'x', width, height),
      rp(12, 'x', width, height),
      rp(12, 'x', width, height),
      'url(#bgLinGradB)',
      rp(2, 'x', width, height),
      'url(#shadowFilter)',
      'container3',
      0
    )
    //second bottom left line
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
      .attr('id', 'container3')
      .attr('opacity', 0)
      .classed('filled', true)
      .attr('x', 0)
      .attr('y', rp(860, 'x', width, height))
      .attr('width', rp(384, 'x', width, height))
      .attr('height', rp(3.22, 'x', width, height));

    //second dot 
    svg.append("circle")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("cx", rp(384, 'x', width, height))
      .attr("cy", rp(861, 'x', width, height))
      .attr("r", rp(3.86, 'x', width, height))
      .style("fill", "#82368C")

    var text = [
      'Link Guía ODS',
      'https://www.pactomundial.org/wp-content/uploads/20',
      '16/09/Guia_ODS_online.pdf'
    ]
    for (var i = 0; i < 1; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, link)
      setHtmlText(svg, 0, 'container3',
        (rp(96, 'x', width, height)),
        ((rp(831, 'x', width, height)) +
          (i * rp(12, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(19.2, 'x', width, height)),
        text[i],
        (rp(16, 'x', width, height)),
        'Roboto', 'left', 0, 'black', 'bold')
    for (var i = 1; i < text.length; i++)
      //setHtmlTextLink(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold, link)
      setHtmlTextLink(svg, 0, 'container3',
        (rp(83.48, 'x', width, height)),
        ((rp(858, 'x', width, height)) +
          (i * rp(14.77, 'x', width, height))),
        (rp(640, 'x', width, height)),
        (rp(19.2, 'x', width, height)),
        text[i],
        (rp(13.25, 'x', width, height)),
        'Roboto', 'left', 0, 'black', '', 'https://www.pactomundial.org/wp-content/uploads/2016/09/Guia_ODS_online.pdf')

    //reflink end
    svg.append("image")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("xlink:href", window.location.origin + "/img/losdiezprincipiosgrafico.png")
      .attr("x", rp(450, 'x', width, height))
      .attr("y", rp(250, 'x', width, height))
      .attr("width", rp(700, 'x', width, height))
      .attr("height", rp(700, 'x', width, height))

    svg.append("rect")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("width", rp(594, 'x', width, height))
      .attr("height", rp(96.5, 'x', width, height))
      .attr("fill", "#a5a5a5")
      .attr("x", rp(1200, 'x', width, height))
      .attr("y", rp(256.5, 'x', width, height))

    setHtmlText(svg, 0, 'container3',
      (rp(1230.77, 'x', width, height)),
      (rp(270.92, 'x', width, height)),
      (rp(512, 'x', width, height)),
      (rp(77.2, 'x', width, height)),
      'LOS DIEZ PRINCIPIOS',
      (rp(25.7, 'x', width, height)),
      'Roboto', 'left', 0, 'white', 'bold')

    setHtmlText(svg, 0, 'container3',
      (rp(1230.77, 'x', width, height)),
      (rp(160, 'x', width, height) + rp(148.92, 'x', width, height)),
      (rp(512, 'x', width, height)),
      (rp(77.2, 'x', width, height)),
      'de la Red de Pacto Global',
      (rp(19.3, 'x', width, height)),
      'Roboto', 'left', 0, 'white', '')

    //10principlesA1
    svg.append("circle")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("cx", rp(1247, 'x', width, height))
      .attr("cy", rp(386, 'x', width, height))
      .attr("r", rp(18.832, 'x', width, height))
      .style("stroke", "#f4bf42")
      .style("fill", "#f4bf42")

    setHtmlText(svg, 0, 'container3',
      (rp(1280, 'x', width, height)),
      (rp(367, 'x', width, height)),
      (rp(102.4, 'x', width, height)),
      (rp(111.32, 'x', width, height)),
      'DERECHOS HUMANOS',
      (rp(16.8, 'x', width, height)),
      'Roboto', 'left', 0, '#114065', 'bold')

    //10principlesA2
    svg.append("circle")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("cx", rp(1537, 'x', width, height))
      .attr("cy", rp(386, 'x', width, height))
      .attr("r", rp(18.332, 'x', width, height))
      .style("stroke", "#34b6ec")
      .style("fill", "#34b6ec")

    setHtmlText(svg, 0, 'container3',
      (rp(1567, 'x', width, height)),
      (rp(367, 'x', width, height)),
      (rp(102.464, 'x', width, height)),
      (rp(111.3, 'x', width, height)),
      'NORMAS LABORALES',
      (rp(16.8, 'x', width, height)),
      'Roboto', 'left', 0, '#114065', 'bold')

    //10principlesB1
    svg.append("circle")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("cx", rp(1247, 'x', width, height))
      .attr("cy", rp(446.36, 'x', width, height))
      .attr("r", rp(18.332, 'x', width, height))
      .style("stroke", "#5f864d")
      .style("fill", "#5f864d")

    setHtmlText(svg, 0, 'container3',
      (rp(1280, 'x', width, height)),
      (rp(427, 'x', width, height)),
      (rp(102.464, 'x', width, height)),
      (rp(111.3, 'x', width, height)),
      'MEDIO AMBIENTE',
      (rp(16.8, 'x', width, height)),
      'Roboto', 'left', 0, '#114065', 'bold')

    //10principlesB2
    svg.append("circle")
      .attr('id', 'container3')
      .attr('opacity', 0)
      .attr("cx", rp(1537, 'x', width, height))
      .attr("cy", rp(446.36, 'x', width, height))
      .attr("r", rp(18.332, 'x', width, height))
      .style("stroke", "#e6472e")
      .style("fill", "#e6472e")

    setHtmlText(svg, 0, 'container3',
      (rp(1567, 'x', width, height)),
      (rp(427, 'x', width, height)),
      (0.8 * rp(240, 'x', width, height)),
      (rp(111.3, 'x', width, height)),
      'LUCHA CONTRA LA CORRUPCIÓN',
      (rp(16.8, 'x', width, height)),
      'Roboto', 'left', 0, '#114065', 'bold')

    //item numbers

    var idCircles = 'container3'
    var cantCircles = 10
    var distCircles = rp(30, 'x', width, height)
    var cx = rp(1215.19, 'x', width, height)
    var cy = rp(500, 'x', width, height)
    var cr = rp(15, 'x', width, height)
    var w = rp(594, 'x', width, height)
    var h = rp(30, 'x', width, height)


    var paramCircles = [
      {
        color: '#f4bf42',
        text: 'Las empresas deben apoyar y respetar la protección de los derechos humanos fundamentales, reconocidos internacionalmente, dentro de su ámbito de influencia.',
      },
      {
        color: '#f4bf42',
        text: 'Las empresas deben asegurarse de que sus empresas no son cómplices en la vulneración de los Derechos Humanos.',
      },
      {
        color: '#34b6ec',
        text: 'Las empresas deben apoyar la libertad de afiliación y el reconocimiento efectivo del derecho a la negociación colectiva.',
      },
      {
        color: '#34b6ec',
        text: 'Las empresas deben apoyar la eliminación de toda forma de trabajo forzoso o realizado bajo coacción.',
      },
      {
        color: '#34b6ec',
        text: 'Las empresas deben apoyar la erradicación del trabajo infantil.',
      },
      {
        color: '#34b6ec',
        text: 'Las empresas deben apoyar la abolición de las prácticas de discriminación en el empleo y la ocupación.',
      },
      {
        color: '#5f864d',
        text: 'Las empresas deberán mantener un enfoque preventivo que favorezca el medio ambiente.',
      },
      {
        color: '#5f864d',
        text: 'Las empresas deben fomentar las iniciativas que promuevan una mayor responsabilidad ambiental.',
      },
      {
        color: '#5f864d',
        text: 'Las empresas deben favorecer el desarrollo y la difusión de las tecnologías respetuosas con el medioambiente.',
      },
      {
        color: '#e6472e',
        text: 'Las empresas deben trabajar contra la corrupción en todas sus formas, incluidas extorsión y soborno.',
      },
    ]

    for (var i = 0; i < cantCircles; i++) {
      svg.append('circle')
        .attr('id', idCircles)
        .attr('opacity', 0)
        .attr("cx", cx)
        .attr("cy", (cy + (distCircles * i) + (cr * i)))
        .attr("r", cr)
        .style("stroke", paramCircles[i].color)
        .style("fill", paramCircles[i].color)
      if ((i + 1) > 9) {
        setHtmlText(svg, 0, idCircles,
          cx * 0.993,
          ((cy * 0.985) + (distCircles * i) + (cr * i)),
          cr * 1.3,
          cr,
          i + 1,
          (rp(15, 'x', width, height)),
          'Roboto', 'left', 0, 'white', 'bold')
      } else {
        setHtmlText(svg, 0, idCircles,
          cx * 0.997,
          ((cy * 0.985) + (distCircles * i) + (cr * i)),
          cr,
          cr,
          i + 1,
          (rp(15, 'x', width, height)),
          'Roboto', 'left', 0, 'white', 'bold')
      }
      setHtmlText(svg, 0, idCircles,
        cx + distCircles,
        ((cy * 0.975) + (distCircles * i) + (cr * i)),
        w - distCircles - cr,
        h,
        paramCircles[i].text,
        (rp(12, 'x', width, height)),
        'Roboto', 'justify', 0, 'black', '')

    }


    ////////////////////////////////////////////////////////
    //pagina 3 - fin////////////////////////////////////////
    ////////////////////////////////////////////////////////

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

    getSideBarGuiaFome(svg, width, heightCorrected, styles.grow);
    /******************************
    Sidebar - End
    *******************************/

    /******************************
      Brand corner - begin
    *******************************/
    headerCornerLogo(svg, width, heightCorrected);
    /******************************
      Brand corner - end
    *******************************/

    /******************************
    Section 3 - breadcrumb - Start
    *******************************/
    breadCrumbGuia(svg, 8, width, height);
    /******************************
    Section 3 - breadcrumb - End
    *******************************/
  }
  render() {
    //const {guia, menuBreadcrumbs} = this.state

    return (
      <div className={styles.container}>
        <div ref={this.main}></div>
      </div>
    )
  }
}
export default Metodologia
