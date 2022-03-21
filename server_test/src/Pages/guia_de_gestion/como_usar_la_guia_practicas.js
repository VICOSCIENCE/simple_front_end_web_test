import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
//import {guiaApi} from "../api/guia-api"
import * as d3 from 'd3';
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadcrumb, headerCornerLogo, gradients, setTriangle, shadowFilters, shadowFiltersReverse, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText,setHtmlTextLink, setHtmlTextBorde, setMenuInteriorV, setArrowDownWS, setArrowDown, setArrowUp, setArrowLeft,setArrowRight , setRectRow, setRectCol,selectButtonV, gradientRect  } from "../../functions/htmlText";
import { OpenGraph, MetaData} from "../../functions/metaTags";

class Metodologia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guia: null,
      menuBreadcrumbs: null
    }
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
  circleShadow (svg) {
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
  selectedcircleshadow (svg) {
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
  shadow (svg, x, y, w, h, rx, ry) {
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
  gradientRect(svg, x, y, w, h,rx,ry) {
    if (window.innerHeight > window.innerWidth) {
      var width = window.innerWidth
      var height = (941/1920)*window.innerWidth
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
      .attr('stroke-width', height/250)
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
    for(var i=0; i < text2.length; i++)
        
        setHtmlText( svg, 1, 'textGradientBold' + i, 
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
        'BUENAS PRÁCTICAS'
      ]
    for(var i=0; i < text.length; i++)
        
        setHtmlText( svg, 1, 'textGradientBold' + i, 
                    (width / 2.3), 
                    ((width / 11) + (i * width / 46.7)),
                    (width / 2),
                    rp(36, 'x', width, height),
                    text[i], 
                    rp(26, 'x', width, height), 
                    'Oswald', 'center', 0, 'white', 'bold', rp(4, 'x', width, height))
    
    //tooltip triangle    
    const x_triangle = getPositionMenuSelected(11, width, height)
    const y_triangle = rp(140,'x', width, height)
    const vertexA = (-rp(40,'x', width, height)) //valor negativo indica punta arriba
    const vertexBX = (-rp(25,'x', width, height))
    const vertexBY = (0)
    const vertexCX = (rp(25,'x', width, height))
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
        valueSetTriangle['fill'] = '#793594'
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
    .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
    .attr("x", x_triangle - rp(45, 'x', width, height))
    .attr("y", rp(10, 'x', width, height))
    .attr("width", rp(90, 'x', width, height))
    .style("cursor", "pointer")
    .on('click', function () {
      window.location.href = '/buenas_practicas'
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
      valuesSetRectRow['cantCol'] = 6;
      valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
      valuesSetRectRow['x'] = rp(350, 'x', width, height);
      valuesSetRectRow['y'] = rp(380, 'x', width, height);
      valuesSetRectRow['w'] = rp(245, 'x', width, height);
      valuesSetRectRow['h'] = rp(45, 'x', width, height);
      valuesSetRectRow['r'] = rp(12, 'x', width, height);
      valuesSetRectRow['paddingTBEnc']  = 0;
      valuesSetRectRow['paddingLREnc']  = 0.1;
      valuesSetRectRow['paddingTBDesc'] = 0;
      valuesSetRectRow['paddingLRDesc']  = 0;
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
        enc: 'Cumplimiento de la legalidad vigente.',
        desc: '',
      },
      {
        enc: 'Compromisos y cumplimientos extralegalidad.',
        desc: '',
      },
      {
        enc: 'Adopción de compromisos internacionales.',
        desc: '',
      },
      {
        enc: 'Mecanismos de monitoreo y validación.',
        desc: '',
      },
      {
        enc: 'Getión operacional ASG mandante-proveedor.',
        desc: '',
      },
      {
        enc: 'Métodos de trabajo colaborativo e integrado.',
        desc: '',
      },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)

    var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 2;
    valuesSetRectRow['distRect'] = rp(105, 'x', width, height);
    valuesSetRectRow['x'] = rp(650, 'x', width, height);
    valuesSetRectRow['y'] = rp(380, 'x', width, height);
    valuesSetRectRow['w'] = rp(245, 'x', width, height);
    valuesSetRectRow['h'] = rp(45, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc'] = 0.1;
    valuesSetRectRow['paddingLREnc'] = 0;
    valuesSetRectRow['paddingTEnc']  = 0;
    valuesSetRectRow['paddingBEnc']  = 0;
    valuesSetRectRow['paddingLEnc']  = 0.19;
    valuesSetRectRow['paddingREnc']  = 0;
    valuesSetRectRow['paddingTBDesc']= 0;
    valuesSetRectRow['paddingLRDesc']= 0;
    valuesSetRectRow['paddingTDesc'] = 0;
    valuesSetRectRow['paddingBDesc'] = 0;
    valuesSetRectRow['paddingLDesc'] = 0;
    valuesSetRectRow['paddingRDesc'] = 0;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'left';
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
      enc: '17 ODS',
      desc: '',
    },
    {
      enc: '10 PRINCIPIOS DE PACTO GLOBAL',
      desc: '',
    },
  ]
  setRectRow(valuesSetRectRow, textSetRectRow,)

  var valuesSetMenuInteriorV = []
    valuesSetMenuInteriorV['svg'] = svg;
    valuesSetMenuInteriorV['id'] = '';
    valuesSetMenuInteriorV['cantBotones'] = 2;
    valuesSetMenuInteriorV['distBotones'] = rp(110, 'x', width, height);
    valuesSetMenuInteriorV['x'] = rp(655, 'x', width, height);
    valuesSetMenuInteriorV['y'] = rp(382, 'x', width, height);
    valuesSetMenuInteriorV['w'] = rp(40, 'x', width, height);
    valuesSetMenuInteriorV['h'] = rp(40, 'x', width, height);
    valuesSetMenuInteriorV['r'] = rp(8.78, 'x', width, height);
    valuesSetMenuInteriorV['textAlign'] = 'center';
    valuesSetMenuInteriorV['font'] = 'Roboto';
    valuesSetMenuInteriorV['fontSize'] = rp(12, 'x', width, height);
    valuesSetMenuInteriorV['margin'] = '';
    valuesSetMenuInteriorV['color'] = 'black';
    valuesSetMenuInteriorV['bold'] = '';
    valuesSetMenuInteriorV['letterSpacing'] = '';
    valuesSetMenuInteriorV['lineHeight'] = '';
    valuesSetMenuInteriorV['fill'] = 'transparent';
    valuesSetMenuInteriorV['stroke'] = 'transparent';
    valuesSetMenuInteriorV['filter'] = 'transparent';

  var contentMenuInterior = [
      {
          img: '/img/logo-mini-ods.png',
          text: '',
          idAction: 'container2',
      },
      {
          img: '/img/logo-mini-pg.png',
          text: '',
          idAction: 'container3',
      },
  ]

  setMenuInteriorV(valuesSetMenuInteriorV, contentMenuInterior)

  var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 2;
    valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
    valuesSetRectRow['x'] = rp(950, 'x', width, height);
    valuesSetRectRow['y'] = rp(380, 'x', width, height);
    valuesSetRectRow['w'] = rp(245, 'x', width, height);
    valuesSetRectRow['h'] = rp(45, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc']  = 0.1;
    valuesSetRectRow['paddingLREnc']  = 0.2;
    valuesSetRectRow['paddingTBDesc'] = 0;
    valuesSetRectRow['paddingLRDesc']  = 0;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'left';
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
      enc: 'PRÁCTICAS - ODS',
      desc: '',
    },
    {
      enc: 'ODS - PRÁCTICAS',
      desc: '',
    },
  ]
  setRectRow(valuesSetRectRow, textSetRectRow,)
  var valuesSetMenuInteriorV = []
    valuesSetMenuInteriorV['svg'] = svg;
    valuesSetMenuInteriorV['id'] = '';
    valuesSetMenuInteriorV['cantBotones'] = 2;
    valuesSetMenuInteriorV['distBotones'] = rp(10, 'x', width, height);
    valuesSetMenuInteriorV['x'] = rp(955, 'x', width, height);
    valuesSetMenuInteriorV['y'] = rp(382.5, 'x', width, height);
    valuesSetMenuInteriorV['w'] = rp(40, 'x', width, height);
    valuesSetMenuInteriorV['h'] = rp(40, 'x', width, height);
    valuesSetMenuInteriorV['r'] = rp(8.78, 'x', width, height);
    valuesSetMenuInteriorV['textAlign'] = 'center';
    valuesSetMenuInteriorV['font'] = 'Roboto';
    valuesSetMenuInteriorV['fontSize'] = rp(12, 'x', width, height);
    valuesSetMenuInteriorV['margin'] = '';
    valuesSetMenuInteriorV['color'] = 'black';
    valuesSetMenuInteriorV['bold'] = '';
    valuesSetMenuInteriorV['letterSpacing'] = '';
    valuesSetMenuInteriorV['lineHeight'] = '';
    valuesSetMenuInteriorV['fill'] = 'transparent';
    valuesSetMenuInteriorV['stroke'] = 'transparent';
    valuesSetMenuInteriorV['filter'] = 'transparent';

  var contentMenuInterior = [
      {
          img: '/img/logo-mini-ods.png',
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

  var valuesSetRectRow = []
    valuesSetRectRow['svg'] = svg;
    valuesSetRectRow['id'] = 'container1';
    valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
    valuesSetRectRow['cantCol'] = 2;
    valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
    valuesSetRectRow['x'] = rp(950, 'x', width, height);
    valuesSetRectRow['y'] = rp(530, 'x', width, height);
    valuesSetRectRow['w'] = rp(245, 'x', width, height);
    valuesSetRectRow['h'] = rp(45, 'x', width, height);
    valuesSetRectRow['r'] = rp(12, 'x', width, height);
    valuesSetRectRow['paddingTBEnc'] = 0.1;
    valuesSetRectRow['paddingLREnc'] = 0;
    valuesSetRectRow['paddingTEnc']  = 0;
    valuesSetRectRow['paddingBEnc']  = 0;
    valuesSetRectRow['paddingLEnc']  = 0.2;
    valuesSetRectRow['paddingREnc']  = 0;
    valuesSetRectRow['paddingTBDesc']= 0;
    valuesSetRectRow['paddingLRDesc']= 0;
    valuesSetRectRow['paddingTDesc'] = 0;
    valuesSetRectRow['paddingBDesc'] = 0;
    valuesSetRectRow['paddingLDesc'] = 0;
    valuesSetRectRow['paddingRDesc'] = 0;
    valuesSetRectRow['fill'] = 'url(#bgLinGradB)';
    valuesSetRectRow['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectRow['filter'] = 'url(#shadowFilter)';
    valuesSetRectRow['textAlignEnc'] = 'left';
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
      enc: 'PACTO GLOBAL - PRÁCTICAS',
      desc: '',
    },
    {
      enc: 'PRÁCTICAS - PACTO GLOBAL',
      desc: '',
    },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)
    var valuesSetMenuInteriorV = []
      valuesSetMenuInteriorV['svg'] = svg;
      valuesSetMenuInteriorV['id'] = '';
      valuesSetMenuInteriorV['cantBotones'] = 2;
      valuesSetMenuInteriorV['distBotones'] = rp(5, 'x', width, height);
      valuesSetMenuInteriorV['distBotones'] = rp(10, 'x', width, height);
      valuesSetMenuInteriorV['x'] = rp(955, 'x', width, height);
      valuesSetMenuInteriorV['y'] = rp(532.5, 'x', width, height);
      valuesSetMenuInteriorV['w'] = rp(40, 'x', width, height);
      valuesSetMenuInteriorV['h'] = rp(40, 'x', width, height);
      valuesSetMenuInteriorV['r'] = rp(8.78, 'x', width, height);
      valuesSetMenuInteriorV['textAlign'] = 'center';
      valuesSetMenuInteriorV['font'] = 'Roboto';
      valuesSetMenuInteriorV['fontSize'] = rp(12, 'x', width, height);
      valuesSetMenuInteriorV['margin'] = '';
      valuesSetMenuInteriorV['color'] = 'black';
      valuesSetMenuInteriorV['bold'] = '';
      valuesSetMenuInteriorV['letterSpacing'] = '';
      valuesSetMenuInteriorV['lineHeight'] = '';
      valuesSetMenuInteriorV['fill'] = 'transparent';
      valuesSetMenuInteriorV['stroke'] = 'transparent';
      valuesSetMenuInteriorV['filter'] = 'transparent';

    var contentMenuInterior = [
        {
            img: '/img/logo-mini-pg.png',
            text: '',
            idAction: 'container2',
        },
        {
            img: '/img/logo-mini-pg.png',
            text: '',
            idAction: 'container3',
        },
    ]

    setMenuInteriorV(valuesSetMenuInteriorV, contentMenuInterior)

    var valuesSetRectRow = []
      valuesSetRectRow['svg'] = svg;
      valuesSetRectRow['id'] = 'container1';
      valuesSetRectRow['hCont'] = rp(1000, 'x', width, height);
      valuesSetRectRow['cantCol'] = 1;
      valuesSetRectRow['distRect'] = rp(5, 'x', width, height);
      valuesSetRectRow['x'] = rp(1250, 'x', width, height);
      valuesSetRectRow['y'] = rp(380, 'x', width, height);
      valuesSetRectRow['w'] = rp(245, 'x', width, height);
      valuesSetRectRow['h'] = rp(300, 'x', width, height);
      valuesSetRectRow['r'] = rp(12, 'x', width, height);
      valuesSetRectRow['paddingTBEnc']  = 0.15;
      valuesSetRectRow['paddingLREnc']  = 0.1;
      valuesSetRectRow['paddingTBDesc'] = 0.1;
      valuesSetRectRow['paddingLRDesc']  = 0.1;
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
      valuesSetRectRow['textAlignDesc'] = 'justify';
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
        desc: '<ul style="padding-left: 15%">'+
        '<li>Pertinencia de la práctica a las distintas etapas de la cadena de suministro.</li><br/>'+
        '<li>Rol del mandante y del proveedor en cada etapa y práctica.</li><br/>'+
        '<li>Asociación a los 10 principios de Pacto Global de la ONU.</li><br/>'+
        '<li>Asociación a los Objetivos de Desarollo Sostenible (ODS).</li><br/>'+
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
      valuesSetRectRow['x'] = rp(1550, 'x', width, height);
      valuesSetRectRow['y'] = rp(380, 'x', width, height);
      valuesSetRectRow['w'] = rp(245, 'x', width, height);
      valuesSetRectRow['h'] = rp(480, 'x', width, height);
      valuesSetRectRow['r'] = rp(12, 'x', width, height);
      valuesSetRectRow['paddingTBEnc']  = 0.1;
      valuesSetRectRow['paddingLREnc']  = 0.1;
      valuesSetRectRow['paddingTBDesc'] = 0.05;
      valuesSetRectRow['paddingLRDesc']  = 0.05;
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
      valuesSetRectRow['textAlignDesc'] = 'justify';
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
        desc: '<ul style="padding-left: 10%">'+
        '<li>Situar nivel de gestión interno respecto a los 6 niveles de la cadena de suministro sostenible, considerando la estrategia, objetivos y desafíos de su empresa.</li><br/>'+
        '<li>Identificar buena prácticas por nivel.</li><br/>'+
        '<li>Identificar la participación del mandante y proveedor en las prácticas contempladas en cada uno de los 6 niveles.</li><br/>'+
        '<li>Detectar oportunidades de mejora respecto a las buenas prácticas planteadas, que permitan avanzar progresivamente hacia una cadena de suministro sostenible.</li><br/>'+
        '<li>Identificar la contribución de las buenas prácticas a los Principios de Pacto Glabal y los Obejetivos de Desarrollo Sostenible (ODS), en concordancia con el marco de la guía de la debida diligencia de la OCDE.</li>'+
        '</ul>'
      },
    ]
    setRectRow(valuesSetRectRow, textSetRectRow,)  

    var valuesSetRectCol = []
      valuesSetRectCol['svg'] = svg;
      valuesSetRectCol['id'] = 'container1';
      valuesSetRectCol['wCont'] = rp(1446, 'x', width, height);
      valuesSetRectCol['cantCol'] = 5;
      valuesSetRectCol['distRect'] = rp(55, 'x', width, height);
      valuesSetRectCol['x'] = rp(350, 'x', width, height);
      valuesSetRectCol['y'] = rp(300, 'x', width, height);
      valuesSetRectCol['h'] = rp(90, 'x', width, height);
      valuesSetRectCol['r'] = rp(12, 'x', width, height);
      valuesSetRectCol['paddingTBEnc']  = 0;
      valuesSetRectCol['paddingLREnc']  = 0.05;
      valuesSetRectCol['paddingTBDesc'] = 0.1;
      valuesSetRectCol['paddingLRDesc']  = 0;
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
      valuesSetRectCol['boldDesc'] = 'bold';
      valuesSetRectCol['letterSpacingDesc'] = '';
      valuesSetRectCol['lineHeightDesc'] = '';
      valuesSetRectCol['fillColor'] = 'transparent';

    var textSetRectCol = [
      {
        enc: 'PASO 1:<br>Selección Nivel <br>de Adopción',
        desc: '',
      },
      {
        enc: 'PASO 2:<br>Selección Opción <br>de Visualización',
        desc: '',
      },
      {
        enc: 'PASO 3:<br>Selección Relación Prácticas <br>con ODS o Pacto Global',
        desc: '',
      },
      {
        enc: 'PASO 4:<br>Revisión Contenido',
        desc: '',
      },
      {
        enc: 'RESULTADO',
        desc: '¿Qué permite esta exploración?',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    var valuesSetArrowDown = []
        valuesSetArrowDown['svg'] = svg;
        valuesSetArrowDown['id'] = 'container1';
        valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
        valuesSetArrowDown['cantRect'] = 1;
        valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
        valuesSetArrowDown['altArrow'] = rp(40, 'x', width, height);
        valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
        valuesSetArrowDown['x'] = rp(578, 'x', width, height);
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
        valuesSetArrowRight['x'] = rp(580, 'x', width, height);
        valuesSetArrowRight['y'] = rp(340, 'x', width, height);
        valuesSetArrowRight['arrow'] = 'y';    
    setArrowRight(valuesSetArrowRight) 
    var valuesSetArrowDown = []
        valuesSetArrowDown['svg'] = svg;
        valuesSetArrowDown['id'] = 'container1';
        valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
        valuesSetArrowDown['cantRect'] = 1;
        valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
        valuesSetArrowDown['altArrow'] = rp(40, 'x', width, height);
        valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
        valuesSetArrowDown['x'] = rp(878, 'x', width, height);
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
        valuesSetArrowRight['x'] = rp(880, 'x', width, height);
        valuesSetArrowRight['y'] = rp(340, 'x', width, height);
        valuesSetArrowRight['arrow'] = 'y';    
    setArrowRight(valuesSetArrowRight)   
    var valuesSetArrowDown = []
        valuesSetArrowDown['svg'] = svg;
        valuesSetArrowDown['id'] = 'container1';
        valuesSetArrowDown['wCont'] = rp(10, 'x', width, height);
        valuesSetArrowDown['cantRect'] = 1;
        valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
        valuesSetArrowDown['altArrow'] = rp(40, 'x', width, height);
        valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
        valuesSetArrowDown['x'] = rp(1178, 'x', width, height);
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
        valuesSetArrowRight['x'] = rp(1180, 'x', width, height);
        valuesSetArrowRight['y'] = rp(340, 'x', width, height);
        valuesSetArrowRight['arrow'] = 'y';    
    setArrowRight(valuesSetArrowRight)   

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
    const {guia, menuBreadcrumbs} = this.state;

    return (
      <div className={styles.container}>
          <div ref={this.main}></div>
      </div>
    )
  }
}
export default Metodologia