import React, { Component } from "react"
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

class Contenido extends Component {
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
 
// shadow stuff:
  /*shadow (svg, x, y, w, h, radio) {
    var g1 = svg.append('g');
    var defs = svg.append("defs");

    var filter = defs.append("filter")
        .attr("id", "dropshadow")

    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", h/80)
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
      .attr('rx', h/radio)
      .attr('ry', h/radio);
  }/**/
//gradient rect
gradientRect(svg, x, y, w, h, radio, stroke, strokeWidth) {
  svg.append('rect')
    //.classed('outlined', true)
    .attr('x', x)
    .attr('y', y)
    .attr('width', w)
    .attr('height', h)
    .style("stroke", stroke)
    .style("stroke-width", strokeWidth)
    .attr("rx", h/radio)			// 15					// radius
    .attr("ry", h/radio);	// 15

  svg.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('width', w)
    .attr('height', h)
    .attr("fill", "white")
    .style("stroke", stroke)
    .style("stroke-width", strokeWidth)
    .attr("rx", h/radio)			// 15					// radius
    .attr("ry", h/radio);	// 15
}
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
    const radio_small = 160;

    const w_pageTitleBg = rp(920, 'x', width, height);
    const h_pageTitleBg = rp(100.42, 'x', width, height);
    const x_pageTitle = rp(790, 'x', width, height);
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

    //footer
    getFooter(svg, width, height)
    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg);  

    //tooltop ~~~~~~~~~~~~~~~~~~~~~~~~~
    
    //tooltip rectangle
    svg.append('rect')
      //.classed('filled', true)
      .attr('x', rp(872.72, 'x', width, height))
      .attr('y', rp(139,'x', width, height))
      .attr('rx', height/radio)
      .attr('ry', height/radio)
      .style("fill", "url(#bgLinGradB)")
      .transition()
      .delay(200)
      .attr('width', w_pageTitleBg)
      .attr('height', h_pageTitleBg);//height/9.37
    
    //tooltip triangle    
    const x_triangle = getPositionMenuSelected(9, width, height)
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
        valueSetTriangle['fill'] = '#534a9a'
        valueSetTriangle['filter'] = ''    
    setTriangle(valueSetTriangle)   

    var text = ['¿QUÉ CONTIENE LA GUÍA PARA GESTIÓN DE UNA CADENA','DE SUMINISTRO SOSTENIBLE?'
    ]
    
    for(var i=0; i<text.length; i++)
      //setHtmlText(svg, opacity, id, x, y, w, h, texto, fontSize, font, align, margin, color, bold)
      setHtmlText( svg, 1, 'textGradientBold' + i, 
                  rp(872.72, 'x', width, height), 
                  (rp(150, 'x', width, height) + (i * rp(41.1, 'x', width, height))),
                  w_pageTitleBg,
                  rp(36, 'x', width, height),
                  text[i], 
                  rp(26, 'x', width, height), 'Oswald', 'center', 0, 'white', 'bold', rp(4, 'x', width, height))

  //main~~~~~~~~~~~~~~~~~~~~~~~~~
  var valuesSetArrowDown = []
    valuesSetArrowDown['svg'] = svg;
    valuesSetArrowDown['id'] = 'container1';
    valuesSetArrowDown['wCont'] = rp(6, 'x', width, height);
    valuesSetArrowDown['cantRect'] = 1;
    valuesSetArrowDown['distRect'] = rp(0, 'x', width, height);
    valuesSetArrowDown['altArrow'] = rp(157, 'x', width, height);
    valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
    valuesSetArrowDown['x'] = rp(1084, 'x', width, height);
    valuesSetArrowDown['y'] = rp(239, 'x', width, height);
    valuesSetArrowDown['arrow'] = 'n';    
  setArrowDown(valuesSetArrowDown)

    getArrowEnd(svg, height)
    var valuesSetRectCol = []
      valuesSetRectCol['svg'] = svg;
      valuesSetRectCol['id'] = 'container1';
      valuesSetRectCol['wCont'] = rp(1018, 'x', width, height);
      valuesSetRectCol['cantCol'] = 1;
      valuesSetRectCol['distRect'] = rp(0, 'x', width, height);
      valuesSetRectCol['x'] = rp(575, 'x', width, height);
      valuesSetRectCol['y'] = rp(260, 'x', width, height);
      valuesSetRectCol['h'] = rp(110, 'x', width, height);
      valuesSetRectCol['r'] = rp(12, 'x', width, height);
      valuesSetRectCol['paddingTBEnc'] = 0.01;  
      valuesSetRectCol['paddingLREnc'] = 0.03; 
      valuesSetRectCol['paddingTEnc']  = 0; 
      valuesSetRectCol['paddingBEnc']  = 0;
      valuesSetRectCol['paddingLEnc']  = 0; 
      valuesSetRectCol['paddingREnc']  = 0;
      valuesSetRectCol['paddingTBDesc']= 0;   
      valuesSetRectCol['paddingLRDesc']= 0;  
      valuesSetRectCol['paddingTDesc'] = 0;  
      valuesSetRectCol['paddingBDesc'] = 0; 
      valuesSetRectCol['paddingLDesc'] = 0;  
      valuesSetRectCol['paddingRDesc'] = 0;  
      valuesSetRectCol['textAlignEnc'] = 0;  
      valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
      valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
      valuesSetRectCol['filter'] = 'url(#shadowFilter)';
      valuesSetRectCol['textAlignEnc'] = 'justify';
      valuesSetRectCol['fontEnc'] = 'Roboto';
      valuesSetRectCol['fontSizeEnc'] = (rp(16, 'x', width, height));
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
      valuesSetRectCol['fillColor'] = '';
    var textSetRectCol = [
    {
    enc: 'ESTE DOCUMENTO CONTIENE UN ABORDAJE DE LA CADENA DE SUMINISTRO TRANSVERSAL A LAS DISTINTAS ACTIVIDADES ECONÓMICAS, '+
    'ASÍ COMO LA IDENTIFICACIÓN DE BUENAS PRÁCTICAS ASOCIADAS A LAS DISTINTAS ETAPAS DE MADUREZ DE LA GESTIÓN SOSTENIBLE DE '+
    'ESTA CADENA.',
    desc: '',
    },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)
    var valuesSetRectCol = []
      valuesSetRectCol['svg'] = svg;
      valuesSetRectCol['id'] = 'container1';
      valuesSetRectCol['wCont'] = rp(1418, 'x', width, height);
      valuesSetRectCol['cantCol'] = 2;
      valuesSetRectCol['distRect'] = rp(50, 'x', width, height);
      valuesSetRectCol['x'] = rp(375, 'x', width, height);
      valuesSetRectCol['y'] = rp(430, 'x', width, height);
      valuesSetRectCol['h'] = rp(420, 'x', width, height);
      valuesSetRectCol['r'] = rp(12, 'x', width, height);
      valuesSetRectCol['paddingTBEnc'] = 0;  
      valuesSetRectCol['paddingLREnc'] = 0; 
      valuesSetRectCol['paddingTEnc']  = 0; 
      valuesSetRectCol['paddingBEnc']  = 0;
      valuesSetRectCol['paddingLEnc']  = 0; 
      valuesSetRectCol['paddingREnc']  = 0;
      valuesSetRectCol['paddingTBDesc']= 0;   
      valuesSetRectCol['paddingLRDesc']= 0;  
      valuesSetRectCol['paddingTDesc'] = 0;  
      valuesSetRectCol['paddingBDesc'] = 0; 
      valuesSetRectCol['paddingLDesc'] = 0;  
      valuesSetRectCol['paddingRDesc'] = 0;  
      valuesSetRectCol['textAlignEnc'] = 0;  
      valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
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
      valuesSetRectCol['fillColor'] = '';
    var textSetRectCol = [
    {
    enc: '',
    desc: '',
    },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-03.png")
      .attr("x", rp(790, 'x', width, height))
      .attr("y", rp(480, 'x', width, height))
      .attr("width", rp(250, 'x', width, height))
      .attr('opacity', 0.3)

    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-02.png")
      .attr("x", rp(1520, 'x', width, height))
      .attr("y", rp(480, 'x', width, height))
      .attr("width", rp(250, 'x', width, height))
      .attr('opacity', 0.3)

      var valuesSetRectCol = []
      valuesSetRectCol['svg'] = svg;
      valuesSetRectCol['id'] = 'container1';
      valuesSetRectCol['wCont'] = rp(1418, 'x', width, height);
      valuesSetRectCol['cantCol'] = 2;
      valuesSetRectCol['distRect'] = rp(50, 'x', width, height);
      valuesSetRectCol['x'] = rp(375, 'x', width, height);
      valuesSetRectCol['y'] = rp(430, 'x', width, height);
      valuesSetRectCol['h'] = rp(420, 'x', width, height);
      valuesSetRectCol['r'] = rp(12, 'x', width, height);
      valuesSetRectCol['paddingTBEnc'] = 0.01;  
      valuesSetRectCol['paddingLREnc'] = 0.04; 
      valuesSetRectCol['paddingTEnc']  = 0; 
      valuesSetRectCol['paddingBEnc']  = 0;
      valuesSetRectCol['paddingLEnc']  = 0; 
      valuesSetRectCol['paddingREnc']  = 0;
      valuesSetRectCol['paddingTBDesc']= 0;   
      valuesSetRectCol['paddingLRDesc']= 0.04;  
      valuesSetRectCol['paddingTDesc'] = 0.05;  
      valuesSetRectCol['paddingBDesc'] = 0; 
      valuesSetRectCol['paddingLDesc'] = 0;  
      valuesSetRectCol['paddingRDesc'] = 0;  
      valuesSetRectCol['textAlignEnc'] = 0;  
      valuesSetRectCol['fill'] = '';
      valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
      valuesSetRectCol['filter'] = '';
      valuesSetRectCol['textAlignEnc'] = 'left';
      valuesSetRectCol['fontEnc'] = 'Roboto';
      valuesSetRectCol['fontSizeEnc'] = (rp(15, 'x', width, height));
      valuesSetRectCol['marginEnc'] = '';
      valuesSetRectCol['colorEnc'] = 'Black';
      valuesSetRectCol['boldEnc'] = 'bold';
      valuesSetRectCol['letterSpacingEnc'] = '';
      valuesSetRectCol['lineHeightEnc'] = '';
      valuesSetRectCol['textAlignDesc'] = 'left';
      valuesSetRectCol['fontDesc'] = 'Roboto';
      valuesSetRectCol['fontSizeDesc'] = (rp(13, 'x', width, height));
      valuesSetRectCol['marginDesc'] = '';
      valuesSetRectCol['colorDesc'] = 'black';
      valuesSetRectCol['boldDesc'] = '';
      valuesSetRectCol['letterSpacingDesc'] = '';
      valuesSetRectCol['lineHeightDesc'] = '';
      valuesSetRectCol['fillColor'] = 'transparent';
    var textSetRectCol = [
      {
        enc: 'ETAPAS EN LA CADENA DE SUMINISTRO',
        desc: 'Etapas de gestión de la cadena de suministro:'+
        '<br>'+'<br>'+
        '1. Necesidad,'+
        '<br>'+
        '2. Solicitud del pedido'+
        '<br>'+
        '3. Fuentes de aprovisionamiento'+
        '<br>'+
        '4. Creación y seguimiento orden de compra/contrato'+
        '<br>'+
        '5. Ejecución del servicio y administración del contrato'+
        '<br>'+
        '6. Recepción de mercancías'+
        '<br>'+
        '7. Recepción del servicio'+
        '<br>'+
        '8. Recepción de facturas'+
        '<br>'+
        '9. Verificación de facturas'+
        '<br>'+
        '10. Proceso de pago'+
        '<br>'+
        '11. Evaluación y cierre'+
        '<br>'+'<br>'+
        '¿Qué permite esta exploración?'+
        '<br>'+'<br>'+
        '• La identificación de roles de mandante/proveedor en cada etapa de la cadena'+
        '<br>'+
        '• La identificación de riesgos y oportunidades en cada etapa de la cadena'+
        '<br>'+
        '• La identificación de oportunidades en las distintas etapas de la cadena de suministro',
      },
      {
        enc: 'DESARROLLO PROGRESIVO DE BUENAS PRÁCTICAS',
        desc: 'Este modelo nos permite identificar 6 niveles progresivos de buenas prácticas, las que en su implementación'+
        'impactan positivamente el desarrollo de una cadena de suministro sostenible.'+
        '<br>'+'<br>'+
        'Niveles de adopción:'+
        '<br>'+'<br>'+
        '1. “Buenas prácticas: Cumplimiento de la legalidad vigente”'+'<br>'+
        '2. “Buenas prácticas: Compromisos y cumplimientos extralegalidad”'+'<br>'+
        '3. “Buenas prácticas: Adopción de compromisos internacionales”'+'<br>'+
        '4. “Buenas prácticas: Mecanismos de monitoreo y validación”'+'<br>'+
        '5. “Buenas prácticas: Gestión operacional ASG mandante-proveedor”'+'<br>'+
        '6. “Buenas prácticas: Métodos de trabajo colaborativo e integrado”'+'<br>'+'<br>'+
        '¿Qué permite esta exploración?'+'<br>'+'<br>'+
        '• Situar nivel de gestión interno respecto a los 6 niveles de la cadena de suministro sostenible, considerando la'+
        'estrategia, objetivos y desafíos de su empresa.'+'<br>'+
        '• Identificar buenas prácticas por nivel.'+'<br>'+
        '• Identificar la participación del mandante y proveedor en las prácticas contempladas en cada uno de los 6 niveles.'+'<br>'+
        '• Detectar oportunidades de mejora respecto a las buenas prácticas planteadas, que permitan avanzar'+
        'progresivamente hacia una cadena de suministro sostenible.'+'<br>'+
        '• Identificar la contribución de las buenas prácticas a los Principios de Pacto Global y los Objetivos de Desarrollo'+'<br>'+
        '• Sostenible (ODS), en concordancia con el marco de la guía de la debida diligencia de la OCDE.',
      },
    ]
    setRectCol(valuesSetRectCol, textSetRectCol,)

    var valuesSetArrowLeft = []
        valuesSetArrowLeft['svg'] = svg;
        valuesSetArrowLeft['id'] = 'container1';
        valuesSetArrowLeft['wCont'] = rp(1105, 'x', width, height);
        valuesSetArrowLeft['cantRect'] = 1;
        valuesSetArrowLeft['distRect'] = rp(0, 'x', width, height);
        valuesSetArrowLeft['largeArrow'] = rp(736, 'x', width, height);
        valuesSetArrowLeft['strokeW'] = rp(6, 'x', width, height);
        valuesSetArrowLeft['x'] = rp(715, 'x', width, height);
        valuesSetArrowLeft['y'] = rp(393, 'x', width, height);
        valuesSetArrowLeft['arrow'] = 'n';    
    setArrowLeft(valuesSetArrowLeft)

    var valuesSetArrowDown = []
        valuesSetArrowDown['svg'] = svg;
        valuesSetArrowDown['id'] = 'container1';
        valuesSetArrowDown['wCont'] = rp(1418, 'x', width, height);
        valuesSetArrowDown['cantRect'] = 2;
        valuesSetArrowDown['distRect'] = rp(50, 'x', width, height);
        valuesSetArrowDown['altArrow'] = rp(30, 'x', width, height);
        valuesSetArrowDown['strokeW'] = rp(6, 'x', width, height);
        valuesSetArrowDown['x'] = rp(375, 'x', width, height);
        valuesSetArrowDown['y'] = rp(390, 'x', width, height);
        valuesSetArrowDown['arrow'] = 'y';    
    setArrowDown(valuesSetArrowDown)
   
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
    breadCrumbGuia(svg, 9, width, height);
    /******************************
    Section 3 - breadcrumb - End
    *******************************/
  }



  render() {
    //const {guia, menuBreadcrumbs} = this.state;

    return (      
      <div className={styles.container}>
          <div ref={this.main} ></div>
      </div>
    )
  }
}
export default Contenido
