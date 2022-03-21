import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
import * as d3 from 'd3';
//import FooterGuia from "../components/FooterGuia";
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
    this.state = {

    }

  }
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
     // En base a una resolución de pantalla de W:1920 H:1080
     const refWidth = 1920;
     const refHeight = 941;
     const specialHeight = 1250;
     var heightCorrected = Math.round((refHeight * width) / refWidth);
     //const heightCorrected = Math.round(width/aspectRatio);
     if (height > width) {
         heightCorrected = Math.round((refHeight * width) / refWidth);
     }
     height = heightCorrected;



    const radio = 80;
    const radio_small = 160;

    const w_pageTitleBg = rp(930, 'x', width, height);
    const h_pageTitleBg = rp(100.42, 'x', width, height);
    const x_pageTitle = rp(690, 'x', width, height);
    const y_pageTitle = rp(110, 'x', width, height);
    const w_pageTitle = rp(820, 'x', width, height);
    const h_pageTitle = rp(100, 'x', width, height);
    const letterSpacing_pageTitle = rp(4, 'x', width, height);
    const fontSize_pageTitle = rp(26, 'x', width, height);
    const fontFamily_pageTitle = 'Oswald';
    const style_pageTitle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_pageTitle + 'px;letter-spacing:' + letterSpacing_pageTitle + 'px;color:#FFFFFF';

    const w_pageSubTitleBg = 4 * (w_pageTitleBg/5)
    const h_pageSubTitleBg = rp(100.42, 'x', width, height);
    const x_pageSubTitleBg = x_pageTitle + w_pageTitleBg/5;
    const y_pageSubTitleBg = rp(100.42, 'x', width, height);
    const x_pageSubTitle = rp(690, 'x', width, height);
    const y_pageSubTitle = rp(210, 'x', width, height);
    const w_pageSubTitle = rp(790, 'x', width, height);
    const h_pageSubTitle = rp(100, 'x', width, height);
    const letterSpacing_pageSubTitle = rp(0, 'x', width, height);
    const fontSize_pageSubTitle = rp(20, 'x', width, height);
    const fontFamily_pageSubTitle = 'Oswald';
    const style_pageSubTitle = 'font-family:' + fontFamily_pageSubTitle + ';font-weight:normal;font-size:' + fontSize_pageSubTitle + 'px;letter-spacing:' + letterSpacing_pageSubTitle + 'px;color:#90278D';

    const svg = d3.select(element)
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + width + " " + specialHeight)
      //class to make it responsive
      .classed("svg-content-responsive", true);

    //footer
    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg); 
    getArrowEnd(svg, heightCorrected)
    
    // declare each delay
    const delay1 = 300
    const delay2 = 400
    const delay3 = 600
    const delay4 = 800
    const delay5 = 1000

  //tooltop ~~~~~~~~~~~~~~~~~~~~~~~~~
    //white block
    svg.append('rect')
      .attr('x', rp(1058, 'x', width, height))
      .attr('y', rp(225, 'x', width, height))
      .attr('rx', rp(20, 'x', width, height))
      .attr('ry', rp(20, 'x', width, height))
      .transition()
      .delay(delay1)
      .attr('width', w_pageSubTitleBg)
      .attr('height', rp(55.15, 'x', width, height))
      .style('fill', 'white')

    /*svg.append("text")
      .attr("x", rp(914.29, 'x', width, height))
      .attr("y", rp(253.95, 'x', width, height))
      .transition()
      .delay(delay1)
      .text("Resultado de la agregación, análisis e integración de 4 etapas")
      .attr("font-weight", 400)
      .attr("font-size", rp(21.34, 'x', width, height))
      .attr("font-family", "Oswald")
      .style('fill', '#93278F')/**/
    svg.append("foreignObject")
      .attr('id', 'pageSubTitleFO')
      .attr('x', rp(1300, 'x', width, height))
      .attr('y', rp(225, 'x', width, height))
      .attr("width", w_pageSubTitle)
      .attr("height", h_pageSubTitle)
      .html(function (d) {
        return '<div style="' + style_pageSubTitle + '"><p align="justify">Resultado de la agregación, análisis e integración de 4 etapas</p></div>'
      })

    //tooltip rectangle
    svg.append('rect')
      //.classed('filled', true)
      .attr('x', rp(872.72, 'x', width, height))
      .attr('y', rp(139,'x', width, height))
      .attr('rx', rp(20, 'x', width, height)) //10
      .attr('ry', rp(20, 'x', width, height))
      .style("fill", "url(#bgLinGradB)")
      .transition()
      .delay(delay1)
      .attr('width', w_pageTitleBg)
      .attr('height', h_pageTitleBg)

    //tooltip triangle    
    const x_triangle = getPositionMenuSelected(7, width, height)
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
        valueSetTriangle['fill'] = '#376697'
        valueSetTriangle['filter'] = ''    
    setTriangle(valueSetTriangle)    

    const textGradientBold = [
      'METODOLOGÍA: ¿DESDE DÓNDE SE CONSTRUYE LA GUÍA PARA', 'LA GESTIÓN DE UNA CADENA DE SUMINISTRO SOSTENIBLE?'
    ]
    
    for (var i = 0; i < textGradientBold.length; i++)
      setHtmlText( svg, 1, 'textGradientBold' + i, 
                  rp(872.72, 'x', width, height), 
                  (rp(150, 'x', width, height) + (i * rp(41.1, 'x', width, height))),
                  w_pageTitleBg,
                  rp(36, 'x', width, height),
                  textGradientBold[i], 
                  rp(26, 'x', width, height), 'Oswald', 'center', 0, 'white', 'bold', rp(4, 'x', width, height))
    
    ////////////////////////////////////////////////////////////////
    /////new///////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    var valuesSetRectCol = []
    valuesSetRectCol['svg'] = svg;
    valuesSetRectCol['id'] = 'container1';
    valuesSetRectCol['wCont'] = rp(1344, 'x', width, height);
    valuesSetRectCol['cantCol'] = 4;
    valuesSetRectCol['distRect'] = rp(80, 'x', width, height);
    valuesSetRectCol['x'] = (rp(460, 'x', width, height));
    valuesSetRectCol['y'] =(rp(320, 'x', width, height));
    valuesSetRectCol['h'] = rp(880, 'x', width, height);
    valuesSetRectCol['r'] = rp(12, 'x', width, height);
    valuesSetRectCol['paddingTBEnc'] = 0.02;   
    valuesSetRectCol['paddingLREnc'] = 0.1;  
    valuesSetRectCol['paddingTEnc'] = 0;   
    valuesSetRectCol['paddingBEnc'] = 0;  
    valuesSetRectCol['paddingLEnc'] = 0;   
    valuesSetRectCol['paddingREnc'] = 0; 
    valuesSetRectCol['paddingTBDesc'] = 0.05;   
    valuesSetRectCol['paddingLRDesc'] = 0.1;  
    valuesSetRectCol['paddingTDesc'] = 0.4;   
    valuesSetRectCol['paddingBDesc'] = 0;  
    valuesSetRectCol['paddingLDesc'] = 0;   
    valuesSetRectCol['paddingRDesc'] = 0; 
    valuesSetRectCol['fill'] = 'url(#bgLinGradB)';
    valuesSetRectCol['stroke'] = (rp(2, 'x', width, height));
    valuesSetRectCol['filter'] = 'url(#shadowFilter)';
    valuesSetRectCol['textAlignEnc'] = 'left';
    valuesSetRectCol['fontEnc'] = 'Roboto';
    valuesSetRectCol['fontSizeEnc'] = (rp(14, 'x', width, height));
    valuesSetRectCol['marginEnc'] = '';
    valuesSetRectCol['colorEnc'] = 'black';
    valuesSetRectCol['boldEnc'] = 'bold';
    valuesSetRectCol['letterSpacingEnc'] = '';
    valuesSetRectCol['lineHeightEnc'] = '';
    valuesSetRectCol['textAlignDesc'] = 'justify';
    valuesSetRectCol['fontDesc'] = 'Roboto';
    valuesSetRectCol['fontSizeDesc'] = (rp(14, 'x', width, height));
    valuesSetRectCol['marginDesc'] = '';
    valuesSetRectCol['colorDesc'] = 'black';
    valuesSetRectCol['boldDesc'] = '';
    valuesSetRectCol['letterSpacingDesc'] = '';
    valuesSetRectCol['lineHeightDesc'] = '';
    valuesSetRectCol['opacity'] = '1';


  var textSetRectCol = [
    {
      enc: '1º IDENTIFICACIÓN DE NORMATIVAS ASOCIADAS A LA CADENA DE SUMINISTRO A NIVEL NACIONAL E INTERNACIONAL.',
      desc: 'Revisión del marco regulatorio, de protocolos y normativas asociadas a la relación de aprovisionamiento y de las dimensiones OCDE:'+
      '<ul style="padding-left: 15%">'+
      '<li>Derechos Humanos (DDHH.)</li>'+
      '<li>Derechos laborales.</li>'+
      '<li>Medio ambiente.</li>'+
      '<li>Ética, probidad y mediación.</li>'+
      '</ul>'+
      'Revisión y análisis de aproximadamente 90 documentos, realizado con el Programa Sin Límites de la Pontificia Universidad Católica de Chile.',
    },
    {
      enc: '2º EVALUACIÓN ACTUAL PROCESO DE APROVISIONAMIENTO EN CHILE.<br>'+
      'En actores del proceso de aprovisionamiento a nivel de grandes empresas y pymes.',
      desc: '<b>Fase cualitativa.</b>'+
      '<br><br>'+
      'Entrevistas en profundidad a grandes empresas y a pymes:'+
      '<ul style="padding-left: 15%">'+
      '<li>10 entrevistas a grandes empresas.</li>'+
      '<li>3 entrevistas a organizaciones: Ministerio de Economía, CORFO, Punto Nacional de Contacto OCDE (PNC).</li>'+
      '<li>9 entrevistas a actores relevantes: Pacto Global, Asociación de Emprendedores de Chile (ASECH), Sedex, Centro de Arbitraje y Mediación CCS (CAM), Global Reporting Initiative (GRI), Red Negocios CCS, Sistema B, Asociación Chilena de Profesionales de Compras (APCO), Corporate Citizenship.</li>'+
      '<li>7 entrevistas grupales a pymes.</li>'+
      '</ul>'+
      '<b>Fase cuantitativa.</b>'+
      '<br><br>'+
      'Encuestas online a grandes empresas (mandantes) y a pymes (proveedores), abordando aspectos relativos a cumplimientos y procesos relacionales asociados a:'+
      '<ul style="padding-left: 15%">'+
      '<li>DDHH.</li>'+
      '<li>Derechos laborales.</li>'+
      '<li>Medio ambiente.</li>'+
      '<li>Ética, probidad y mediación.</li>'+
      '</ul>'+
      '<br>'+
      '<b>20 encuestas a grandes empresas y 170 encuestas a pymes.</b>',
    },
    {
      enc: '3º LEVANTAMIENTO BUENAS PRÁCTICAS:',
      desc: '<ul style="padding-left: 15%">'+
      '<li>Nacional e Internacional: </li>'+
      '<br>'+
      '<ul style="padding-left: 15%">'+
      '<li>Mila.</li>'+
      '<li>Dow Jones.</li>'+
      '<li>Empresas destacadas de industria local.</li>'+
      '</ul>'+
      '<br>'+
      '<li>Revisión y registro de más de 30 reportes.</li>'+
      '</ul>',
    },
    {
      enc: '4º EVALUACIÓN PROTOTIPO GUÍA.',
      desc: 'Presentación y revisión de la estructura de la Guía a pymes y grandes empresas.',
    },
  ]
  setRectCol(valuesSetRectCol, textSetRectCol,)
  
  var valuesSetArrowRight = []
  valuesSetArrowRight['svg'] = svg;
  valuesSetArrowRight['id'] = 'container1';
  valuesSetArrowRight['wCont'] = rp(60, 'x', width, height);
  valuesSetArrowRight['cantRect'] = 1;
  valuesSetArrowRight['distRect'] = rp(0, 'x', width, height);
  valuesSetArrowRight['largeArrow'] = rp(50, 'x', width, height);
  valuesSetArrowRight['strokeW'] = rp(6, 'x', width, height);
  valuesSetArrowRight['x'] = rp(751, 'x', width, height);
  valuesSetArrowRight['y'] = rp(360, 'x', width, height);
  valuesSetArrowRight['arrow'] = 'y';    
  setArrowRight(valuesSetArrowRight)   

  var valuesSetArrowRight = []
  valuesSetArrowRight['svg'] = svg;
  valuesSetArrowRight['id'] = 'container1';
  valuesSetArrowRight['wCont'] = rp(60, 'x', width, height);
  valuesSetArrowRight['cantRect'] = 1;
  valuesSetArrowRight['distRect'] = rp(0, 'x', width, height);
  valuesSetArrowRight['largeArrow'] = rp(50, 'x', width, height);
  valuesSetArrowRight['strokeW'] = rp(6, 'x', width, height);
  valuesSetArrowRight['x'] = rp(1107, 'x', width, height);
  valuesSetArrowRight['y'] = rp(360, 'x', width, height);
  valuesSetArrowRight['arrow'] = 'y';    
  setArrowRight(valuesSetArrowRight) 

  var valuesSetArrowRight = []
  valuesSetArrowRight['svg'] = svg;
  valuesSetArrowRight['id'] = 'container1';
  valuesSetArrowRight['wCont'] = rp(60, 'x', width, height);
  valuesSetArrowRight['cantRect'] = 1;
  valuesSetArrowRight['distRect'] = rp(0, 'x', width, height);
  valuesSetArrowRight['largeArrow'] = rp(50, 'x', width, height);
  valuesSetArrowRight['strokeW'] = rp(6, 'x', width, height);
  valuesSetArrowRight['x'] = rp(1460, 'x', width, height);
  valuesSetArrowRight['y'] = rp(360, 'x', width, height);
  valuesSetArrowRight['arrow'] = 'y';    
  setArrowRight(valuesSetArrowRight) 

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

    theCircleShadow(svg, height)
    selectedcircleshadow(svg, height)
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
    breadCrumbGuia(svg, 7, width, height);
    /******************************
    Section 3 - breadcrumb - End
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
