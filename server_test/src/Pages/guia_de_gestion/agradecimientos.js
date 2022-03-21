import React, { Component } from "react"
import {useCallback, useState, useEffect} from "react"
import styles from '../../styles/Home.module.css'
//import {guiaApi} from "../api/guia-api"
import * as d3 from 'd3';
import FooterGuia from "../components/FooterGuia";
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadCrumbGuia, headerCornerLogo, gradients, setTriangle, shadowFilters, shadowFiltersReverse, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText,setHtmlTextLink, gradientRect, setRectColWithSmallRect, setMenuInteriorV,setMenuInteriorH, setArrowDownWS, setArrowDown, setArrowUp, setArrowLeft,setArrowRight , setRectCol, selectButtonV, selectButtonH } from "../../functions/htmlText";
import { OpenGraph, MetaData} from "../../functions/metaTags";

class Metodologia extends Component {
  constructor(props) {
    super(props);
    //this.state = {
    //  guia: null,
    //  menuBreadcrumbs: null
    //}
    //this.getMenuBreadcrumbs();
    //this.getGuias();
  }//
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
      .attr("rx", rx)								// radius
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
      .attr("rx", rx)								// radius
      .attr("ry", ry)	

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .attr("rx", rx)								// radius
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
      .attr("rx", 5)								// radius
      .attr("ry", 5)	

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .attr("rx", 5)								// radius
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

        // Asiga a una variable cada magnitud absoluta utilizada para posicionar o dar tamaño a elementos SVG
        const divW = [
          21.87, //0
          3.8,
          5.5,
          6.34,
          7,
          20,
          3.17,
          5.75,
          10,
          6.26, //9
          9, //10
          63.3,
          6.66,
          19, // 13
          1.84,
          27.1,
          2.1, //16
          6.5,
          10.57,
          7.5, // distance between nodes
          2, //20
          300,
          180,
          20, // radio circulo menu
          5,  // radio circulo pequeño
          30, // radio circulo grande
          2, // stroke-width circulo menu
          10, // radio circulo que redondea la línea
          15, // corner radio
          6, // standard deviation
          25, // 30
          0,
          0
        ]
    
        const divH = [
          7.25, // 0
          8.36,
          30,
          5.88, //3
          31.2,
          2.15, //5
          20,
          4.68, //7
          1.72,
          1.6, //9
          4.35, // 10
          5.29,
          1.7,
          2,
          300, //14
          180, //15
          20, //menu behind gradient bar height
          15, // dy segunda línea de texto menu
          50, // corner radio
          8,
          40, //20
          4, // deviation
          0,
          0,
          0,
          0,
          0
        ];
        const divWR = [divW.length];
        const divHR = [divH.length];
    
    // Calcula proporción entre la resolución de referencia y la resolución de pantalla

    var resizeRatioWidth = 0.5;
    var resizeRatioHeight = 0.5;
    if (width >= refWidth) {
      resizeRatioWidth = refWidth / width;
    } else {
      resizeRatioWidth = width / refWidth;
    }
    if (heightCorrected >= refHeight) {
      resizeRatioHeight = refHeight / heightCorrected;
    } else {
      resizeRatioHeight = heightCorrected / refHeight;
    }

    if (heightCorrected == width) {
      //resizeRatioHeight = resizeRatioWidth;
    }
    //Recalcula las variables cada magnitud absoluta utilizada para posicionar o dar tamaño a elementos SVG
    for (let i = 0; i < divH.length; i++) {
      /*if (heightCorrected >= width) {
        divHR[i] = (divH[i] * heightCorrected) / refHeight;
      } else {
        divHR[i] = divH[i] * resizeRatioHeight;
      }
      /**/
      divHR[i] = (divH[i] * heightCorrected) / refHeight;
      if (i == 0) {
        console.log("(divH[0] * heightCorrected) / refHeight " + (divH[0] * heightCorrected) / refHeight);
      }
    }

    const svg = d3.select(element)
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + width + " " + heightCorrected)
      //class to make it responsive
      .classed("svg-content-responsive", true)
      .append("g");
    
    //footer
    getFooter(svg, width, height)

    // header white
    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", heightCorrected / 7.25)
      .attr("fill", "white")

    //header image
    svg.append("image")
    .attr("xlink:href", window.location.origin + "/img/repositorio_web-05.png")
    .attr("x", width / divW[8])
    .attr("y", heightCorrected / divH[2])
    .attr("width", width / 4)
    .style("cursor", "pointer")
    .on("click", function () {
          window.location.href = '/'
      })  

      gradients(svg);
      shadowFilters(svg);
      shadowFiltersReverse(svg); 
      getArrowEnd(svg, heightCorrected)

    /******************************
    Section 3 - breadcrumb - Start
    *******************************/
    breadCrumbGuia(svg, 13, width, height);
    /******************************
    Section 3 - breadcrumb - End
    *******************************/

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

        var valuesSetRectCol = []
          valuesSetRectCol['svg'] = svg;
          valuesSetRectCol['id'] = 'container1';
          valuesSetRectCol['wCont'] = rp(1128, 'x', width, height);
          valuesSetRectCol['cantCol'] = 1;
          valuesSetRectCol['distRect'] = rp(0, 'x', width, height);
          valuesSetRectCol['x'] = rp(650, 'x', width, height);
          valuesSetRectCol['y'] = rp(138, 'x', width, height);
          valuesSetRectCol['h'] = rp(107, 'x', width, height);
          valuesSetRectCol['r'] = rp(12, 'x', width, height);
          valuesSetRectCol['paddingTBEnc']  = 0.015;
          valuesSetRectCol['paddingLREnc']  = 0.04;
          valuesSetRectCol['paddingTBDesc'] = 0.05;
          valuesSetRectCol['paddingLRDesc']  = 0.13;
          valuesSetRectCol['fill'] = '';
          valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
          valuesSetRectCol['filter'] = 'url(#shadowFilter)';
          valuesSetRectCol['textAlignEnc'] = 'left';
          valuesSetRectCol['fontEnc'] = 'Roboto';
          valuesSetRectCol['fontSizeEnc'] = (rp(24, 'x', width, height));
          valuesSetRectCol['marginEnc'] = '';
          valuesSetRectCol['colorEnc'] = 'white';
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
          valuesSetRectCol['fillColor'] = 'url(#bgLinGradB)';
      var textSetRectCol = [
        {
          enc: 'AGRADECIMIENTOS',
          desc: '',
        },
      ]
      setRectCol(valuesSetRectCol, textSetRectCol,)
    //fondo con gradiante

      var valuesSetRectCol = []
        valuesSetRectCol['svg'] = svg;
        valuesSetRectCol['id'] = 'container1';
        valuesSetRectCol['wCont'] = rp(1627, 'x', width, height);
        valuesSetRectCol['cantCol'] = 1;
        valuesSetRectCol['distRect'] = rp(0, 'x', width, height);
        valuesSetRectCol['x'] = rp(150, 'x', width, height);
        valuesSetRectCol['y'] = rp(284.6, 'x', width, height);
        valuesSetRectCol['h'] = rp(567, 'x', width, height);
        valuesSetRectCol['r'] = rp(12, 'x', width, height);
        valuesSetRectCol['paddingTBEnc']  = 0;
        valuesSetRectCol['paddingLREnc']  = 0;
        valuesSetRectCol['paddingTBDesc'] = 0.05;
        valuesSetRectCol['paddingLRDesc']  = 0.13;
        valuesSetRectCol['fill'] = '';
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
        valuesSetRectCol['fillColor'] = 'url(#bgLinGradB)';
    var textSetRectCol = [
      {
        enc: '',
        desc: '',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

var valuesSetMenuInteriorH = []
valuesSetMenuInteriorH['svg'] = svg;
valuesSetMenuInteriorH['id'] = '';
valuesSetMenuInteriorH['cantBotones'] = 3;
valuesSetMenuInteriorH['distBotones'] = rp(50, 'x', width, height);
valuesSetMenuInteriorH['x'] = rp(700, 'x', width, height);;
valuesSetMenuInteriorH['y'] = rp(260, 'x', width, height);;
valuesSetMenuInteriorH['w'] = rp(309, 'x', width, height);
valuesSetMenuInteriorH['h'] = rp(50, 'x', width, height);
valuesSetMenuInteriorH['r'] = rp(12, 'x', width, height);
valuesSetMenuInteriorH['textAlign'] = 'center';
valuesSetMenuInteriorH['font'] = 'Roboto';
valuesSetMenuInteriorH['fontSize'] = rp(16, 'x', width, height);
valuesSetMenuInteriorH['margin'] = '';
valuesSetMenuInteriorH['color'] = '#114065';
valuesSetMenuInteriorH['bold'] = 'bold';
valuesSetMenuInteriorH['letterSpacing'] = '';
valuesSetMenuInteriorH['lineHeight'] = '';

var contentMenuInterior = [
  {
      img: '',
      text: 'Grandes Empresa',
      idAction: 'container1',
  },
  {
      img: '',
      text: 'Pymes',
      idAction: 'container2',
  },
  {
      img: '',
      text: 'Instituciones',
      idAction: 'container3',
  },
]

setMenuInteriorH(valuesSetMenuInteriorH, contentMenuInterior)
selectButtonH(valuesSetMenuInteriorH, 0, contentMenuInterior)    

  //cuadros con imagenes
  var valuesSetRectCol = []
  valuesSetRectCol['svg'] = svg;
  valuesSetRectCol['id'] = 'container1';
  valuesSetRectCol['wCont'] = rp(1078, 'x', width, height);
  valuesSetRectCol['cantCol'] = 8;
  valuesSetRectCol['distRect'] = rp(50, 'x', width, height);
  valuesSetRectCol['x'] = rp(675, 'x', width, height);
  valuesSetRectCol['y'] = rp(350, 'x', width, height);
  valuesSetRectCol['h'] = rp(91, 'x', width, height);
  valuesSetRectCol['r'] = rp(12, 'x', width, height);
  valuesSetRectCol['paddingTBEnc']  = 0.015;
  valuesSetRectCol['paddingLREnc']  = 0.08;
  valuesSetRectCol['paddingTBDesc'] = 0.05;
  valuesSetRectCol['paddingLRDesc']  = 0.13;
  valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
  valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
  valuesSetRectCol['filter'] = '';
  valuesSetRectCol['textAlignEnc'] = 'left';
  valuesSetRectCol['fontEnc'] = 'Roboto';
  valuesSetRectCol['fontSizeEnc'] = (rp(24, 'x', width, height));
  valuesSetRectCol['marginEnc'] = '';
  valuesSetRectCol['colorEnc'] = 'white';
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
  valuesSetRectCol['fillColor'] = '';
var textSetRectCol = [
{
  enc: '',
  desc: '',
},
]
setRectCol(valuesSetRectCol, textSetRectCol,)

var valuesSetRectCol = []
valuesSetRectCol['svg'] = svg;
valuesSetRectCol['id'] = 'container1';
valuesSetRectCol['wCont'] = rp(1078, 'x', width, height);
valuesSetRectCol['cantCol'] = 8;
valuesSetRectCol['distRect'] = rp(50, 'x', width, height);
valuesSetRectCol['x'] = rp(675, 'x', width, height);
valuesSetRectCol['y'] = rp(466, 'x', width, height);
valuesSetRectCol['h'] = rp(91, 'x', width, height);
valuesSetRectCol['r'] = rp(12, 'x', width, height);
valuesSetRectCol['paddingTBEnc']  = 0.015;
valuesSetRectCol['paddingLREnc']  = 0.08;
valuesSetRectCol['paddingTBDesc'] = 0.05;
valuesSetRectCol['paddingLRDesc']  = 0.13;
valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
valuesSetRectCol['filter'] = '';
valuesSetRectCol['textAlignEnc'] = 'left';
valuesSetRectCol['fontEnc'] = 'Roboto';
valuesSetRectCol['fontSizeEnc'] = (rp(24, 'x', width, height));
valuesSetRectCol['marginEnc'] = '';
valuesSetRectCol['colorEnc'] = 'white';
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
valuesSetRectCol['fillColor'] = '';
var textSetRectCol = [
{
enc: '',
desc: '',
},
]
setRectCol(valuesSetRectCol, textSetRectCol,)

var valuesSetRectCol = []
valuesSetRectCol['svg'] = svg;
valuesSetRectCol['id'] = 'container1';
valuesSetRectCol['wCont'] = rp(1078, 'x', width, height);
valuesSetRectCol['cantCol'] = 8;
valuesSetRectCol['distRect'] = rp(50, 'x', width, height);
valuesSetRectCol['x'] = rp(675, 'x', width, height);
valuesSetRectCol['y'] = rp(582, 'x', width, height);
valuesSetRectCol['h'] = rp(91, 'x', width, height);
valuesSetRectCol['r'] = rp(12, 'x', width, height);
valuesSetRectCol['paddingTBEnc']  = 0.015;
valuesSetRectCol['paddingLREnc']  = 0.08;
valuesSetRectCol['paddingTBDesc'] = 0.05;
valuesSetRectCol['paddingLRDesc']  = 0.13;
valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
valuesSetRectCol['filter'] = '';
valuesSetRectCol['textAlignEnc'] = 'left';
valuesSetRectCol['fontEnc'] = 'Roboto';
valuesSetRectCol['fontSizeEnc'] = (rp(24, 'x', width, height));
valuesSetRectCol['marginEnc'] = '';
valuesSetRectCol['colorEnc'] = 'white';
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
valuesSetRectCol['fillColor'] = '';
var textSetRectCol = [
{
enc: '',
desc: '',
},
]
setRectCol(valuesSetRectCol, textSetRectCol,)

var valuesSetRectCol = []
valuesSetRectCol['svg'] = svg;
valuesSetRectCol['id'] = 'container1';
valuesSetRectCol['wCont'] = rp(1078, 'x', width, height);
valuesSetRectCol['cantCol'] = 8;
valuesSetRectCol['distRect'] = rp(50, 'x', width, height);
valuesSetRectCol['x'] = rp(675, 'x', width, height);
valuesSetRectCol['y'] = rp(698, 'x', width, height);
valuesSetRectCol['h'] = rp(91, 'x', width, height);
valuesSetRectCol['r'] = rp(12, 'x', width, height);
valuesSetRectCol['paddingTBEnc']  = 0.015;
valuesSetRectCol['paddingLREnc']  = 0.08;
valuesSetRectCol['paddingTBDesc'] = 0.05;
valuesSetRectCol['paddingLRDesc']  = 0.13;
valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
valuesSetRectCol['filter'] = '';
valuesSetRectCol['textAlignEnc'] = 'left';
valuesSetRectCol['fontEnc'] = 'Roboto';
valuesSetRectCol['fontSizeEnc'] = (rp(24, 'x', width, height));
valuesSetRectCol['marginEnc'] = '';
valuesSetRectCol['colorEnc'] = 'white';
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
valuesSetRectCol['fillColor'] = '';
var textSetRectCol = [
{
enc: '',
desc: '',
},
]
setRectCol(valuesSetRectCol, textSetRectCol,)

    svg.data([{ textContainer1:'UN TRABAJO EN CONJUNTO'
          }])
          .append("foreignObject")
          .attr('x', rp(200, 'x', width, height))
          .attr('y', rp(470, 'x', width, height))
          .attr("width", rp(384, 'x', width, height))
          .attr("height", rp(800, 'x', width, height))
          .html(function (d) {        
            return '<div style="color:white"><p align="center">'+d.textContainer1+'</p></div>'  
          })
          .style("font-family", "Roboto")
          .style("font-size", rp(19.2, 'x', width, height)) 
          .style("fill", "White")
          .attr("font-weight","bold")

    svg.data([{ textContainer2:'Porque la colaboración ha sido fundamental para la realización de esta guía, queremos agradecer a las empresas que nos compartieron su experiencia, procesos de abastecimiento, recomendaciones y prácticas, especialmente a Falabella y BCI como integrantes de los comités de Sostenibilidad y Compras CCS'
          }])
          .append("foreignObject")
          .attr('x', rp(200, 'x', width, height))
          .attr('y', rp(536, 'x', width, height))
          .attr("width", rp(384, 'x', width, height))
          .attr("height", rp(800, 'x', width, height))
          .html(function (d) {        
            return '<div style="color:white"><p align="justify">'+d.textContainer2+'</p></div>'  
          })
          .style("font-family", "Roboto")
          .style("font-size", rp(19.2, 'x', width, height)) 
          .style("fill", "White")


 
    /******************************
    Containers - Finish
    *******************************/ 

    /******************************
    Section 4 - leftMenu - Start
    *******************************/
    // down arrow line
    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
      .attr('id', 'mainGradient');

    mainGradient.append('stop')
      .attr('class', 'stop-left')
      .attr('offset', '0');

    mainGradient.append('stop')
      .attr('class', 'stop-right')
      .attr('offset', '1');

    // first image
    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-01.png")
      .attr("x", rp(232, 'x', width, height))
      .attr("y", height/6.5)
      .attr("width", width/6)

    /******************************
    Section 4 - leftMenu - Finish
    *******************************/
  
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