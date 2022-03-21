import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
//import {guiaApi} from "../api/guia-api"
import * as d3 from 'd3';
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadCrumbGuia, headerCornerLogo, gradients, shadowFilters, setTriangle, shadowFiltersReverse, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../../functions/referenceSize";
import { getArrowEnd } from "../../functions/arrowEnd";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText,setHtmlTextLink, setFlipBienvenida,setMenuInteriorH, selectButtonH} from "../../functions/htmlText";
import { OpenGraph, MetaData} from "../../functions/metaTags";

class Bienvenida extends Component {
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
      .attr("rx", rx)								// radius
      .attr("ry", ry)	
  }
  
  //gradient rect
  gradientRect(svg, x, y, w, h) {
    var radio = relPos(80, w);
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
      .attr("rx", h/radio)								// radius
      .attr("ry", h / radio)	

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .attr("rx", h / radio)								// radius
      .attr("ry", h / radio)	
  }
  //small rect gradient
  gradientRectSmall(svg, x, y, w, h) {
    var radio = relPos(80, w);
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
      .attr("rx", h / radio)								// radius
      .attr("ry", h / radio)	

    svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr("fill", "white")
      .attr("rx", h / radio)								// radius
      .attr("ry", h / radio)	
  }
  //arrow
  arrow(svg) {
    svg.append("svg:defs").append("svg:marker")
      .attr("id", "triangle")
      .attr("refX", 6)
      .attr("refY", 6)
      .attr("markerWidth", 30)
      .attr("markerHeight", 30)
      .attr("markerUnits","userSpaceOnUse")
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 12 6 0 12 3 6")
      .style("fill", "#82368C");
  }
  //main
  main = (element) => {
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
    const radio = relPos(80, width);

    var timeOut = getTimeOut();
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

    /******************************
    linkRef - Finish
    *******************************/

    /******************************
    tippedContainer - Start
    *******************************/
    //punta
    //triangle

    const x_triangle = getPositionMenuSelected(0, width, height);
    const y_triangle = rp(214,'x', width, height)
    const vertexA = (-rp(115,'x', width, height)) //valor negativo indica punta arriba
    const vertexBX = (rp(90,'x', width, height))
    const vertexBY = (0)
    const vertexCX = (rp(150,'x', width, height))
    const vertexCY = (-rp(50,'x', width, height))

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
    breadCrumbGuia(svg, 0, width, height);
    /******************************
    Section 3 - breadcrumb - End
    *******************************/
    //container
    //shadow (svg, x, y, w, h,rx,ry)
    
    this.shadow(svg ,
      (rp(720, 'x', width, height)) ,
      (rp(830, 'x', width, height)),
      (rp(400 , 'x', width, height)) ,
      (rp(60, 'x', width, height)) ,
      rp(14, 'x', width, height),
      rp(14, 'x', width, height)
    )

    setHtmlText(svg , 1 ,
        'textYoutube',
        (rp(675, 'x', width, height)) ,
        ((rp(845, 'x', width, height))) ,
        (rp(400, 'x', width, height)) ,
        (rp(60, 'x', width, height)) ,
        'Video Bienvenida',
        (rp(20, 'x', width, height)) ,
        'Oswald' ,
        'center' ,
        0 ,
        'black'
    )
    svg.append("image")
      .attr("xlink:href", window.location.origin + "/svg/play_button.svg")
      .attr("x", rp(970, 'x', width, height))
      .attr("y", rp(840, 'x', width, height))
      .attr("width", rp(60, 'x', width, height))

    this.shadow(svg ,
      (rp(720, 'x', width, height)),
      (rp(200, 'x', width, height)),
      (rp(400 , 'x', width, height)) ,
      (rp(600, 'x', width, height)) ,
      rp(32, 'x', width, height),
      rp(32, 'x', width, height)
    )

    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/bg_creditos_a.png")
      .attr("x", rp(750, 'x', width, height))
      .attr("y", rp(330, 'x', width, height))
      .attr("width", rp(350, 'x', width, height))
    const textTitle1 = [
    'BIENVENIDO A LA GUÍA PARA LA GESTIÓN DE UNA CADENA DE SUMINISTRO SOSTENIBLE'
    ]
    for(var i=0; i<textTitle1.length; i++)
    setHtmlText(svg , 1 ,
                'textTitle1'+i ,
                (rp(750, 'x', width, height)) ,
                ((rp(300, 'x', width, height))+(i*width/50)) ,
                (rp(340, 'x', width, height)) ,
                (rp(480, 'x', width, height)) ,
                textTitle1[i] ,
                (rp(30, 'x', width, height)) ,
                'Oswald' ,
                'left' ,
                0 ,
                '#616060')
    const textDescription1 ='“La sostenibilidad de la cadena de suministro aporta directrices para la creación de valor de su empresa y a través de esta guía esperamos entregar elementos estratégicos y tácticos para poder avanzar hacia un siguiente nivel en las relaciones B2B acorde a los desafíos empresariales actuales”'
    setHtmlText(svg , 1 ,
                'textDescription1' ,
                (rp(750, 'x', width, height)) ,
                ((rp(505.27, 'x', width, height))) ,
                (rp(340, 'x', width, height)) ,
                (rp(480, 'x', width, height)) ,
                textDescription1 ,
                (rp(22, 'x', width, height)) ,
                'Roboto' ,
                'justify' ,
                0 ,
                '#616060')

    svg.append("rect")
      .attr("id", 'textYoutubeClick')
      .attr("x", rp(720, 'x', width, height))
      .attr("y", rp(830, 'x', width, height))
      .attr("width", rp(400, 'x', width, height))
      .attr("height", rp(60, 'x', width, height))
      .attr("fill", "transparent")
      .style("cursor", "pointer")
      .on('click', function () {
        setTimeout(function () {
          window.location.href = 'https://youtu.be/f4WdOCOdn2I';
        }, timeOut)
      });
          
    /******************************
    resume - Finish
    *******************************/

    /******************************
    footerInMain - Start
    *******************************/
    svg.append("rect")
    .attr("width", rp(1900, 'x', width, height))
    .attr("height", rp(70, 'x', width, height))
    .attr("fill", "white")
    .attr("x", rp(0, 'x', width, height))
    .attr("y", rp(895, 'x', width, height))
    //photo ccs
    svg.append("image")
        .attr("xlink:href", window.location.origin + "/img/repositorio_web-07.png")
        .attr("x", rp(1669.57, 'x', width, height))
        .attr("y", rp(895, 'x', width, height))
        .attr("width", rp(192, 'x', width, height))
    /******************************
    footerInMain - Finish
    *******************************/
    
    var setValuesFlipBienvenida = []
      setValuesFlipBienvenida['svg'] = svg;
      setValuesFlipBienvenida['flip_x1'] = rp(1170, 'x', width, height);
      setValuesFlipBienvenida['flip_y1'] = rp(200, 'x', width, height);
      setValuesFlipBienvenida['flip_x2'] = rp(1520, 'x', width, height);
      setValuesFlipBienvenida['flip_y2'] = rp(200, 'x', width, height);
      setValuesFlipBienvenida['flip_w' ] = rp(300, 'x', width, height);
      setValuesFlipBienvenida['flip_h' ] = rp(350, 'x', width, height);
      setValuesFlipBienvenida['flip_r' ] = rp(32, 'x', width, height);
      setValuesFlipBienvenida['flip_cx'] = rp(1500, 'x', width, height);
      setValuesFlipBienvenida['flip_cy'] = rp(850, 'x', width, height);
      setValuesFlipBienvenida['flip_cr'] = rp(30, 'x', width, height);
      setValuesFlipBienvenida['imgSource1'] = '/img/carlos.png';
      setValuesFlipBienvenida['imgSource2'] = '/img/veronica.png';
      setValuesFlipBienvenida['imgSource3'] = '/img/luis_felipe_cubillos.png';
      setValuesFlipBienvenida['imgSource4'] = '/img/maria_trinidad_alvarez.png';
      setValuesFlipBienvenida['textTitle1'] = 'Carlos Soublette<br>Gerente General<br>Cámara de Comercio de Santiago hola';
      setValuesFlipBienvenida['textTitle2'] = 'Verónica Torres<br>Gerente Sostenibilidad<br>Cámara de Comercio de Santiago';
      setValuesFlipBienvenida['textTitle3'] = 'Luis Felipe Cubillos<br/>Presidente<br>Comité Compras CCS';
      setValuesFlipBienvenida['textTitle4'] = 'María Trinidad Álvarez<br/>Sub Directora de Data y Estudios<br/>Centro de Innovación UC';
      setValuesFlipBienvenida['textDesc1'] = '"Buscamos acompañar a las empresas en la ruta del fortalecimiento y consolidación de sus cadenas de suministro."';
      setValuesFlipBienvenida['textDesc2'] = '"Una correcta gestión de la cadena de suministro, desde el punto de vista de la sostenibilidad, permite a la organización generar una serie de externalidades positivas."';
      setValuesFlipBienvenida['textDesc3'] = '"El valor que entrega la guía, es su propósito de convocar y de generar una contribución al país, lo cual está totalmente alineado con el rol que cumple la Cámara de Comercio de Santiago con sus socios. Pro otro lado el desafío que busca abarcar es que sea simple, intuitiva y pragmática"';
      setValuesFlipBienvenida['textDesc4'] = '"Incorporar la sostenibilidad a la gestión del abastecimiento, hace posible desarrollar una relación virtuosa entre mandante y proveedor, logrando una cadena de abastecimiento más robusta, ágil, responsable y transparente, que permita abordar con mayor seguridad los desafíos futuros."';
      setValuesFlipBienvenida['fontSizeTitle'] = (rp(17, 'x', width, height));
      setValuesFlipBienvenida['fontSizeDesc'] = (rp(15, 'x', width, height));
      setValuesFlipBienvenida['fontTitle'] = 'Oswald';
      setValuesFlipBienvenida['fontDesc'] = 'Roboto';
      setValuesFlipBienvenida['alignTitle'] = 'center';
      setValuesFlipBienvenida['alignDesc'] = 'justify'    ;
      setValuesFlipBienvenida['colorTitle'] = '#616060';
      setValuesFlipBienvenida['colorDesc'] = 'black';
      setValuesFlipBienvenida['letterSpacingTitle'] = '';
      setValuesFlipBienvenida['letterSpacingDesc'] = '';
      setValuesFlipBienvenida['lineHeightTitle'] = '';
      setValuesFlipBienvenida['lineHeightDesc'] = '';
      setValuesFlipBienvenida['fill'] = '';
      setValuesFlipBienvenida['stroke'] = '';
      setValuesFlipBienvenida['filter'] = 'url(#shadowFilter)';

    setFlipBienvenida(setValuesFlipBienvenida);

    var valuesSetMenuInteriorH = []
      valuesSetMenuInteriorH['svg'] = svg;
      valuesSetMenuInteriorH['id'] = '';
      valuesSetMenuInteriorH['cantBotones'] = 2;
      valuesSetMenuInteriorH['distBotones'] = rp(15, 'x', width, height);
      valuesSetMenuInteriorH['x'] = rp(1430, 'x', width, height);;
      valuesSetMenuInteriorH['y'] = rp(830, 'x', width, height);;
      valuesSetMenuInteriorH['w'] = rp(60, 'x', width, height);
      valuesSetMenuInteriorH['h'] = rp(60, 'x', width, height);
      valuesSetMenuInteriorH['r'] = rp(8.78, 'x', width, height);
      valuesSetMenuInteriorH['textAlign'] = 'center';
      valuesSetMenuInteriorH['font'] = 'Roboto';
      valuesSetMenuInteriorH['fontSize'] = rp(20, 'x', width, height);
      valuesSetMenuInteriorH['margin'] = '';
      valuesSetMenuInteriorH['color'] = '#114065';
      valuesSetMenuInteriorH['bold'] = 'bold';
      valuesSetMenuInteriorH['letterSpacing'] = '';
      valuesSetMenuInteriorH['lineHeight'] = '';
    
    //var contentMenuInterior = [
    //    {
    //        img: '',
    //        text: '<',
    //        idAction: 'flipFront',
    //    },
    //    {
    //        img: '',
    //        text: '>',
    //        idAction: 'flipBack',
    //    },
    //]
    
    var contentMenuInterior = [
      ['', '<','flipFront'],
      ['', '>','flipBack']
    ]
    //console.log('contentMenuInterior ' + contentMenuInterior[0][1]);
    setMenuInteriorH(valuesSetMenuInteriorH, contentMenuInterior)    
    selectButtonH(valuesSetMenuInteriorH, 0, contentMenuInterior)
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
export default Bienvenida