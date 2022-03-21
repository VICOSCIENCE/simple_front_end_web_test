import React, { Component } from "react"
import styles from '../../styles/Home.module.css'
//import {guiaApi} from "../api/guia-api"
import * as d3 from 'd3';
import { theCircleShadow, selectedcircleshadow, shadow } from "../../functions/circleShadow";
import { behindHorizontalLine, curvedLine, menuCircles, breadCrumbGuia, headerCornerLogo, gradients, setTriangle, getPositionMenuSelected } from "../../functions/headerMenu";
import { getSideBarGuiaFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp } from "../../functions/referenceSize";
import { getFooter, getFooterImage } from "../../functions/footer";
import { setHtmlText,setHtmlTextLink, setHtmlTextBorde } from "../../functions/htmlText";
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
    
    


    /******************************
    tippedContainer - Start
    *******************************/
    //punta
    //triangle
    const x_triangle = getPositionMenuSelected(6, width, height)
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
      '¿Cuáles son los beneficios de una Gestión Sostenible de la Cadena de Suministro?'
    ]
    for(var i=0; i<textQuestion.length; i++)
      setHtmlText(svg, 1, 'textQuestion'+i, 
                  (rp(720, 'x', width, height)),
                  (rp(235, 'x', width, height)), 
                  (rp(1000, 'x', width, height)),
                  (rp(480, 'x', width, height)),
                  textQuestion[i], 
                  (rp(38.4, 'x', width, height)), 'Oswald', 'justify', 0, '#90278D', 'bold',)
    //line end point
    /******************************
    Divider - Start
    *******************************/
    svg.append('rect')
      .style('fill', 'url(#bgLinGradB)')
      .attr('x', rp(711.12, 'x', width, height))
      .attr('y', rp(350, 'x', width, height))
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
      .attr("cy", rp(355, 'x', width, height))
      .transition()
      .delay(200)
      .attr("cx", rp(1791.05, 'x', width, height))
    /******************************
    Divider - End
    *******************************/
/*svg.append('rect')
    .attr('x', rp(711.12, 'x', width, height))
    .attr('y', height /6.5)
    .attr('height', rp(804.17, 'x', width, height))
    .attr('width', rp(83.48, 'x', width, height))
    .style('stroke', 'red')
    .style("fill", "transparent")

  svg.append('rect')
    .attr('x', rp(711.12, 'x', width, height))
    .attr('y', height /2.275)
    .attr('height', rp(79.76, 'x', width, height))
    .attr('width', rp(1118.89, 'x', width, height))
    .style('stroke', 'red')
    .style("fill", "transparent")

  svg.append('rect')
    .attr('x', rp(1669.57, 'x', width, height))
    .attr('y', height /6.5)
    .attr('height', rp(804.17, 'x', width, height))
    .attr('width', rp(83.48, 'x', width, height))
    .style('stroke', 'red')
    .style("fill", "transparent")*/

    //text answer
 
    const textAnswer = [
      'LA CONSTRUCCIÓN DE RELACIONES Y VÍNCULO MANDANTE/PROVEEDOR QUE PERMITAN:',
      '<ul style="line-height: 150%;padding-left: 5%"><li> Gestión y prevención proactiva de riesgos ambientales sociales y de gobernanza.</li>'+
      '<li> Eficientar la gestión operacional.</li><li> Adaptación ante contingencias: resiliencia.</li><li> Optimización de procesos, generando aprendizaje e innovación.</li><li> Potenciar la cadena de valor de la compañía integrando el enfoque ASG.</li><li> Enriquecer la reputación corporativa.</li><li> Generar relaciones en el largo plazo y maximizar el logro de impactos positivos y de desarrollo sostenible.</li></ul>'
    ]
    setHtmlText(svg, 1, 'textQuestion'+i, 
                    (rp(795.04, 'x', width, height)),
                    (rp(364, 'x', width, height) + i * rp(96, 'x', width, height)), 
                    (rp(874.32, 'x', width, height)),
                    (rp(480, 'x', width, height)),
                    textAnswer[0], 
                    (rp(21.34, 'x', width, height)), 'Roboto', 'justify', 0, 'black', 'bold','0','100%')
    setHtmlText(svg, 1, 'textQuestion'+i, 
                    (rp(795.04, 'x', width, height)),
                    (rp(406.5, 'x', width, height) + i * rp(96, 'x', width, height)), 
                    (rp(874.32, 'x', width, height)),
                    (rp(480, 'x', width, height)),
                    textAnswer[1], 
                    (rp(21.34, 'x', width, height)), 'Roboto', 'justify', 0, 'black','', '0','')
                    //fontSize, font, align, margin, color, bold,letterSpacing, lineHeight
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
    breadCrumbGuia(svg, 6, width, height);
    /******************************
    Section 3 - breadcrumb - End
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
