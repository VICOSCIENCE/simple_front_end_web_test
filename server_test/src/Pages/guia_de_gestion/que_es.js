import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
//import {guiaApi} from "../api/guia-api"
import * as d3 from 'd3';
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadCrumbGuia, headerCornerLogo, gradients, setTriangle, shadowFilters, shadowFiltersReverse, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText,setHtmlTextLink, setHtmlTextBorde, setMenuInteriorV, setArrowDownWS, setArrowDown, setArrowUp, setArrowLeft,setArrowRight , setRectRow, setRectCol,selectButtonV  } from "../../functions/htmlText";
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
      var height = (getReferenceSizeHeight()/getReferenceSizeWidth())*window.innerWidth
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
      .attr('stroke', 'url(#bgLinGradB)')
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
    // En base a una resolución de pantalla de W:getReferenceSizeWidth() H:1080
    const refWidth = getReferenceSizeWidth();
    const refHeight = getReferenceSizeHeight();
    var heightCorrected = Math.round((refHeight * width)/refWidth);
    //const heightCorrected = Math.round(width/aspectRatio);
    if (height > width) {
      heightCorrected = Math.round((refHeight * width)/refWidth);
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

    //footer
    getFooter(svg, width, height)
    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg); 
    getArrowEnd(svg, heightCorrected)

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

    
    /******************************
    Section 4 - leftMenu - Finish
    *******************************/

    /******************************
    tippedContainer - Start
    *******************************/
    //punta
    //triangle
    
    const x_triangle = getPositionMenuSelected(1, width, height);
    const y_triangle = rp(140,'x', width, height)
    const vertexA = (-rp(40,'x', width, height)) //valor negativo indica punta arriba
    const vertexBX = (-rp(10,'x', width, height))
    const vertexBY = (rp(45,'x', width, height))
    const vertexCX = (rp(45,'x', width, height))
    const vertexCY = (rp(6,'x', width, height))

    var valueSetTriangle = []
        valueSetTriangle['svg'] = svg
        valueSetTriangle['x'] = x_triangle
        valueSetTriangle['y'] = y_triangle
        valueSetTriangle['vertexA'] = vertexA
        valueSetTriangle['vertexBX'] = vertexBX
        valueSetTriangle['vertexBY'] = vertexBY
        valueSetTriangle['vertexCX'] = vertexCX
        valueSetTriangle['vertexCY'] = vertexCY
        valueSetTriangle['fill'] = 'white'
        valueSetTriangle['filter'] = 'url(#dropshadow)'    
    setTriangle(valueSetTriangle)

    //container
    this.shadow(svg,
                (rp(640, 'x', width, height)),
                rp(139,'x', width, height),
                (rp(1371.43, 'x', width, height)),
                (rp(919.05, 'x', width, height)),
                rp(96.5, 'x', width, height),
                rp(96.5, 'x', width, height))

    var valueSetTriangle = []
        valueSetTriangle['svg'] = svg
        valueSetTriangle['x'] = x_triangle
        valueSetTriangle['y'] = y_triangle
        valueSetTriangle['vertexA'] = vertexA
        valueSetTriangle['vertexBX'] = vertexBX
        valueSetTriangle['vertexBY'] = vertexBY
        valueSetTriangle['vertexCX'] = vertexCX
        valueSetTriangle['vertexCY'] = vertexCY
        valueSetTriangle['fill'] = 'white'
        valueSetTriangle['filter'] = ''    
    setTriangle(valueSetTriangle)

    //text question
    const textQuestion = [
      '¿Qué es la Guía de Gestión de una Cadena de Suministro Sostenible?'
    ]
    setHtmlText(svg, 1, 'textQuestion', 
                (rp(720, 'x', width, height)),
                (rp(235, 'x', width, height)), 
                (rp(1100, 'x', width, height)),
                (rp(480, 'x', width, height)),
                textQuestion[0], 
                (rp(38.4, 'x', width, height)), 'Oswald', 'justify', 0, '#90278D', 'bold',)

    /******************************
    Divider - Start
    *******************************/
    svg.append('rect')
      .style('fill', 'url(#bgLinGradB)')
      .attr('x', rp(711.12, 'x', width, height))
      .attr('y', rp(320, 'x', width, height))
      .attr("rx", height/radio)
      .attr("ry", height/radio)
      .attr('height', rp(13.79, 'x', width, height))
      .transition()
      .delay(200)
      .attr('width', rp(1066.67, 'x', width, height));

    svg.append("circle")
      .attr("r", rp(38.6, 'x', width, height))
      .style("stroke", "#90278D")
      .style("fill", "#90278D")
      .attr("cx", rp(960, 'x', width, height))
      .attr("cy", rp(325, 'x', width, height))
      .transition()
      .delay(200)
      .attr("cx", rp(1791.05, 'x', width, height))
    /******************************
    Divider - End
    *******************************/  
    //text answer


    /******************************
    tippedContainer - Finish
    *******************************/

    //footerImage
    getFooterImage(svg, width, height)
    
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
    menuCircles(svg, width, height, x_triangle,1);
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
    breadCrumbGuia(svg, 1, width, height);
    /******************************
    Section 3 - breadcrumb - End
    *******************************/
    var valuesSetRectCol = []
    valuesSetRectCol['svg'] = svg;
    valuesSetRectCol['id'] = 'container1';
    valuesSetRectCol['wCont'] = rp(500, 'x', width, height);
    valuesSetRectCol['cantCol'] = 1;
    valuesSetRectCol['distRect'] = rp(0, 'x', width, height);
    valuesSetRectCol['x'] = rp(700, 'x', width, height);
    valuesSetRectCol['y'] = rp(400, 'x', width, height);
    valuesSetRectCol['h'] = rp(500, 'x', width, height);
    valuesSetRectCol['r'] = rp(12, 'x', width, height);
    valuesSetRectCol['paddingTBEnc']  = 0;
    valuesSetRectCol['paddingLREnc']  = 0;
    valuesSetRectCol['paddingTBDesc'] = 0;
    valuesSetRectCol['paddingLRDesc']  = 0.05;
    valuesSetRectCol['fill'] = '';
    valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectCol['filter'] = '';
    valuesSetRectCol['textAlignEnc'] = 'left';
    valuesSetRectCol['fontEnc'] = 'Roboto';
    valuesSetRectCol['fontSizeEnc'] = (rp(12, 'x', width, height));
    valuesSetRectCol['marginEnc'] = '';
    valuesSetRectCol['colorEnc'] = 'black';
    valuesSetRectCol['boldEnc'] = 'bold';
    valuesSetRectCol['letterSpacingEnc'] = '';
    valuesSetRectCol['lineHeightEnc'] = '';
    valuesSetRectCol['textAlignDesc'] = 'justify';
    valuesSetRectCol['fontDesc'] = 'Roboto';
    valuesSetRectCol['fontSizeDesc'] = (rp(22, 'x', width, height));
    valuesSetRectCol['marginDesc'] = '';
    valuesSetRectCol['colorDesc'] = 'black';
    valuesSetRectCol['boldDesc'] = '';
    valuesSetRectCol['letterSpacingDesc'] = '';
    valuesSetRectCol['lineHeightDesc'] = '';


  var textSetRectCol = [
    {
      enc: '',
      desc: 'Una herramienta que busca contribuir al desarrollo sostenible y colaborativo en la relación <b>entre mandantes y proveedores</b>,'+
      ' a través de la mejora continua de la gestión de aspectos ambientales, sociales y de gobernanza (ASG), para optimizar procesos y '+
      'administrar los recursos de manera eficiente, innovadora y con una visión de largo plazo.'+
      'De esta manera, la guía plantea los elementos necesarios para sentar las bases del desarrollo de una cadena de suministro sostenible '+
      'para Chile, en concordancia con el cuarto principio de conducta empresarial, propuesto por la Cámara de Comercio de Santiago.',
    },
  ]
  setRectCol(valuesSetRectCol, textSetRectCol,)

  svg.append('image')
    .attr('id', 'img')
    .attr("xlink:href", window.location.origin + '/img/que-es.png')
    .attr("x", rp(1224, 'x', width, height))
    .attr("y", rp(400, 'x', width, height))
    .attr("width", rp(500, 'x', width, height))
    .attr('opacity', 1)

  }

  render() {
    //const { guia, menuBreadcrumbs } = this.state;

    return (
      <div className={styles.container}>
        <div ref={this.main}></div>
      </div>
    )
  }
}
export default Metodologia
