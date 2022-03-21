import React, { Component } from "react";
import styles from '../../styles/Home.module.css';
import FooterGuia from "../components/FooterGuia";
import { breadcrumb, headerCornerLogo, gradients, shadowFilters, setTriangleAdvance, setLinkRef, setPointerPositionTool } from "../../functions/headerMenu";
import * as etapa from "../../functions/etapas";
import * as practica from "../../functions/practicas";
import * as practicasData from "../../functions/practicasData";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../../functions/referenceSize";
import * as d3 from 'd3';
import { getSideBarPracticasFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { OpenGraph, MetaData } from "../../functions/metaTags";

class Etapas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  main = (element) => {
    // Obtiene el tamaño de la pantalla en uso
    const width = window.innerWidth;
    var height = window.innerHeight;
    // Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
    // En base a una resolución de pantalla de W:1920 H:1080
    const refWidth = 1920;
    const refHeight = 941;
    const specialHeight = refHeight + 30;
    var heightCorrected = Math.round((refHeight * width) / refWidth);
    //const heightCorrected = Math.round(width / aspectRatio);
    if (height > width) {
      heightCorrected = Math.round((refHeight * width) / refWidth);
    }
    height = heightCorrected;

    const svg = d3.select(element)
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + width + " " + specialHeight)
      //class to make it responsive
      .classed("svg-content-responsive", true);

    gradients(svg);
    shadowFilters(svg);

    const durationAnim = getDurationAnim();
    const timeOut = getTimeOut();

    /****************************************
     Contenido de Practicas - begin
    ****************************************/

    const currentPractica = 4;

    const coord_x = 0;
    const coord_y = 1;
    const estado_nodo = 2;
    const relacion_pacto_global_nodo = 3;

    const practicasColor = practicasData.getPracticasColorl();
    const practicasLabel = practicasData.getPracticasLabel();
    const practicasLink = practicasData.getPracticasLink();
    const arrayPracticaDetalle = practicasData.getArrayPracticaDetalle(currentPractica);

    var textFila = [
      [], // fila 0
      [], // fila 1
      [], // fila 2
      [], // fila 3
      [], // fila 4
      [], // fila 5
      [], // fila 6
      [], // fila 7
      [], // fila 8
      [], // fila 9
      [], // fila 10
    ];
    var segmenFila = [
      [], // fila 1
      [], // fila 2
      [], // fila 3
      [], // fila 4
      [], // fila 5
      [], // fila 6
      [], // fila 7
      [], // fila 8
      [], // fila 9
      [], // fila 10
    ];

    var color_textArco = '#ffffff';
    var fontSize_textArco = relPos(20, width) + 'px';
    var cantidadMaximaDeCaracteres = 18;
    var ultimoEspacio = 0;
    var filaDetalle;
    var arrFilaDetalle;
    var filaRecortada;
    // recorrre practicas
    for (let i = 0; i < arrayPracticaDetalle.length; i++) {

      // asigna fila de trabajo
      filaDetalle = arrayPracticaDetalle[i];
      // recorre filas
      for (let j = 0; j < textFila.length; j++) {
        if (filaDetalle.length > 0) {
          //determina la posición del último espacio en blanco
          arrFilaDetalle = filaDetalle.split('');
          for (let k = 0; k < cantidadMaximaDeCaracteres; k++) {
            if (arrFilaDetalle[k] == ' ') {
              ultimoEspacio = k;
            }
          }
          // recorta el trozo correspondiente a la fila j
          filaRecortada = filaDetalle.slice(0, ultimoEspacio).trim();
          //console.log('fila' + j + ': ' + filaRecortada);
          // reasigna el resto de fila para continuar con el proceso hasta que no no quede fila
          filaDetalle = filaDetalle.slice(ultimoEspacio).trim();
        } else
          filaRecortada = '';
        textFila[j].push(filaRecortada)
        //console.log('textFila[' + j + '] ' + textFila[j]);
      }

    }
    


    /****************************************
     Pacto Global y ODS - begin
     ****************************************/

    const arrayEtapas = practicasData.getArrayEtapas();
    var arrayNodo = [];
    /* Nodo etapas - begin */
    var arrayNodosEtapas = [];


    /* Nodo practicas - begin */
    var arrayNodosPracticas = practicasData.getArrayNodosPracticas(arrayPracticaDetalle.length);
    /* Nodo practicas - end */


    /* Nodo pacto global - begin */
    var arrayNodosPactoGlobal = practicasData.getArrayNodosPactoGlobal();
    /* Nodo pacto global - end */


    /* Nodo ODS - begin */
    var arrayNodosODS = practicasData.getArrayNodosODS();
    /* Nodo ODS - end */

    var arrayNodosPracticasPactoGlobal_m = [];
    var arrayNodosPracticasPactoGlobal_c = [];
    var arrayNodosPracticasPactoGlobal_o = [];

    var arrayNodosPracticasODS_m = [];
    var arrayNodosPracticasODS_c = [];
    var arrayNodosPracticasODS_o = [];

    arrayNodosPracticasPactoGlobal_m = practicasData.setNodosPracticasPactoGlobal(arrayNodosPracticasPactoGlobal_m, currentPractica);
    arrayNodosPracticasPactoGlobal_c = practicasData.setNodosPracticasPactoGlobal(arrayNodosPracticasPactoGlobal_c, currentPractica);
    arrayNodosPracticasPactoGlobal_o = practicasData.setNodosPracticasPactoGlobal(arrayNodosPracticasPactoGlobal_o, currentPractica);

    arrayNodosPracticasODS_m = practicasData.setNodosPracticasPactoGlobal(arrayNodosPracticasODS_m, currentPractica);
    arrayNodosPracticasODS_c = practicasData.setNodosPracticasPactoGlobal(arrayNodosPracticasODS_c, currentPractica);
    arrayNodosPracticasODS_o = practicasData.setNodosPracticasPactoGlobal(arrayNodosPracticasODS_o, currentPractica);


    arrayNodosPactoGlobal = practicasData.setNodosPactoGlobal(arrayNodosPactoGlobal, currentPractica);
    arrayNodosODS = practicasData.setNodosODS(arrayNodosODS, currentPractica);

    var tituloOds = practicasData.getTituloOds();
    var descripcionOds = practicasData.getDescripcionOds();
    var colorODS = practicasData.getColorODS();
    var arrImgODS = practicasData.getArrImgODS();

    var tituloPactoGlobal = practicasData.getTituloPactoGlobal();
    var descripcionPactoGlobal = practicasData.getDescripcionPactoGlobal();
    var colorPactoGlobal = practicasData.getColorPactoGlobal();

    const objetivosOds = [];
    objetivosOds[0] = tituloOds;
    objetivosOds[1] = descripcionOds;

    const objetivosPG = [];
    objetivosPG[0] = tituloPactoGlobal;
    objetivosPG[1] = descripcionPactoGlobal;

    /****************************************
     Pacto Global y ODS - end
    ****************************************/

    // Estados

    /*****************************************
     Posicionamiento y tamaño relativo - Begin
    *****************************************/

    const radio = rp(40, 'x', width, height);
    const radio_small = rp(20, 'x', width, height);

    // Posición y tamaño etapas "caracol"
    var outerRadius = rp(50, 'x', width, height);//110;
    var innerRadius = rp(100, 'x', width, height);//100;
    var arcPad = 0.05223;
    var startAngle = 0;
    var arcLen = 0.44857; //0.47097
    var endAngle = 0.44857;


    // Posición y tamaño de fondo del "contenido" de la matriz de etapas
    let x_bg_matriz = rp(200, 'x', width, height); //width / 6
    let y_bg_matriz = rp(90, 'y', width, height); //165
    let width_bg_matriz = rp(1920 / 2, 'x', width, height); //width / 6
    let height_bg_matriz = rp(845, 'y', width, height);
    const contenido_delta = rp(60, 'y', width, height);

    const margen_h = 60; // Sin RP a proósito
    const margen_v = 90; // Sin RP a proósito

    // Posición y tamaño de del "arcoiris" de la matriz de practicas
    const x_content = x_bg_matriz + rp(margen_h, 'x', width, height); //350
    const y_content = y_bg_matriz + rp(margen_v, 'y', width, height); //200



    // posición del logo marca de agua
    const margen_h_bg = 80;
    const x_logo_bg = x_bg_matriz + rp(margen_h_bg, 'x', width, height);
    const y_logo_bg = y_bg_matriz + rp(margen_v, 'y', width, height);
    const w_logo_bg = width_bg_matriz - rp(2 * margen_h_bg, 'x', width, height);

    // Posición de la lista de la página 1
    // Posición de la lista rol
    const delta_y_circleLeyenda = rp(45, 'x', width, height);
    const x_circleLeyenda = x_content + rp(30, 'x', width, height);
    const y_circleLeyenda = y_content + rp(24, 'x', width, height);
    const r_circleLeyenda = rp(18, 'x', width, height);
    const x_textLeyenda = x_circleLeyenda + rp(35, 'x', width, height);
    const y_textLeyenda = y_circleLeyenda - rp(25, 'x', width, height);;//y_circleLeyenda + rp(5, 'x', width, height);
    const w_textLeyenda = width_bg_matriz - (3 * margen_h);
    const h_textLeyenda = rp(60, 'x', width, height);
    const fonSize_textLeyenda = rp(16, 'x', width, height);
    const fonSize_tituloLeyenda = rp(20, 'x', width, height);
    const x_tituloLeyenda = x_circleLeyenda - r_circleLeyenda - relPos(0, width);
    const y_tituloLeyenda = y_circleLeyenda - r_circleLeyenda - fonSize_tituloLeyenda - relPos(35, width);
    const x_circleNumberLeyenda = x_circleLeyenda - rp(4, 'x', width, height);
    const y_circleNumberLeyenda = y_circleLeyenda + rp(4, 'x', width, height);
    const fonSize_circleNumberLeyenda = rp(13, 'x', width, height);

    // Posición y tamaño selección de rol
    var tituloLeyenda = 'Rol';
    var textRol = ['Mandante', 'Mandante y Proveedor'];
    const colorRol = ['#9E6F9E', '#D9E021']; // mandante, compartido, proveedor,

    // Posición y tamaño de del "espiral" de la matriz de buenas prácticas
    const x_clickAreaArcoiris = rp(1052, 'x', width, height);
    const y_clickAreaArcoiris = rp(750, 'x', width, height);

    // Posición y tamaño de textos de titulos de etapas
    var paso = rp(65, 'x', width, height);

    // Posición y tamaño de título de página "tool tip"
    const x_pageTitleBg = rp(1500, 'x', width, height);
    const y_pageTitleBg = rp(60, 'x', width, height);
    const w_pageTitleBg = rp(450, 'x', width, height);
    const h_pageTitleBg = rp(70, 'x', width, height);
    const margenPageTitle_h = rp(30, 'x', width, height);
    const margenPageTitle_v = rp(60, 'x', width, height);
    const x_pageTitle = x_pageTitleBg + margenPageTitle_h;
    const y_pageTitle = y_pageTitleBg - rp(5, 'x', width, height);
    const w_pageTitle = w_pageTitleBg - (5 * margenPageTitle_h);
    const h_pageTitle = h_pageTitleBg;
    const letterSpacing_pageTitle = rp(2, 'x', width, height);
    const fontSize_pageTitle = rp(18, 'x', width, height);
    const fontFamily_pageTitle = 'Roboto';
    const style_pageTitle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_pageTitle + 'px;letter-spacing:' + letterSpacing_pageTitle + 'px;color:#111111';

    /*********************************************
      Renderiza elementos del "tejido" - Begin
    *********************************************/
    const svgArcoiris = svg.append('g')
      .attr('id', 'arcoiris')
      .attr("transform", "translate(" + x_clickAreaArcoiris + "," + y_clickAreaArcoiris + ")")
      .attr('opacity', 1);

    const svgLeyenda = svg.append('g')
      .attr('id', 'svgLeyenda')
      .attr('opacity', 1);

    const svgClicklAreaArcoiris = svg.append("g")
      .attr('id', 'clickAreaArcoiris')
      .attr('opacity', 1)
      .attr('transform', 'translate(' + x_clickAreaArcoiris + ',' + y_clickAreaArcoiris + ')');

    var svgClicklAreaEtapas = svg.append("g")
      .attr('id', 'clickAreaEtapas')
      .attr('opacity', 1)
      .attr("transform", "translate(" + x_clickAreaArcoiris + "," + y_clickAreaArcoiris + ")");
    var svgCirculosPactoGlobal = svg.append("g")
      .attr('id', 'circulosPactoGlobal')
      .attr('opacity', 1)
      .attr("transform", "translate(" + x_clickAreaArcoiris + "," + y_clickAreaArcoiris + ")");
    var svgCirculosOds = svg.append("g")
      .attr('id', 'circulosOds')
      .attr('opacity', 1)
      .attr("transform", "translate(" + x_clickAreaArcoiris + "," + y_clickAreaArcoiris + ")");

    const svgLineasRelaciones = svg.append('g')
      .attr('id', 'svgLineasRelaciones')
      .attr('opacity', 1);

    const svgNodosPactoGlobal = svg.append('g')
      .attr('id', 'svgNodosPactoGlobal')
      .attr('opacity', 1);

    const svgNodosODS = svg.append('g')
      .attr('id', 'svgNodosODS')
      .attr('opacity', 0);

    const svgSubmenuPracticas = svg.append('g')
      .attr('id', 'svgSubmenuPracticas')
      .attr('opacity', 1);

    // Leyenda
    var deltaCircle = 0;
    var deltaCircleDoubleLine = 3;
    svgLeyenda.append("foreignObject")
      .attr('id', 'circleTituloLeyenda')
      .attr('x', x_tituloLeyenda)
      .attr('y', y_tituloLeyenda)
      .attr("width", w_textLeyenda)
      .attr("height", h_textLeyenda)
      .html(function (d) {
        return '<div style="font-family:Roboto;font-weight:bold;color:#111111;font-size:' + fonSize_tituloLeyenda + 'px"><p align="justify">' + tituloLeyenda + '</p></div>'
      });

    for (let i = 0; i < textRol.length; i++) {

      svgLeyenda.append("circle")
        .attr("id", 'circleLeyenda' + i)
        .attr("cx", x_circleLeyenda)
        .attr("cy", y_circleLeyenda + deltaCircle)
        .attr("r", r_circleLeyenda)
        .style("stroke", "white")
        .attr('opacity', 1)
        .style("fill", colorRol[i]);

      svgLeyenda.append("text")
        .attr('id', 'circleNumberLeyenda')
        .attr('x', x_circleNumberLeyenda)
        .attr('y', y_circleNumberLeyenda + deltaCircle)
        .attr("font-size", fonSize_circleNumberLeyenda)
        .attr("font-weight", "bold")
        //.text(i + 1)
        .style('fill', 'white');

      svgLeyenda.append("foreignObject")
        .attr('id', 'circleTextLeyenda')
        .attr('x', x_textLeyenda)
        .attr('y', y_textLeyenda + deltaCircle)
        .attr("width", w_textLeyenda)
        .attr("height", h_textLeyenda)
        .html(function (d) {
          return '<div style="font-family:Roboto;font-weight:bold;color:#111111;font-size:' + fonSize_textLeyenda + 'px"><p align="justify">' + textRol[i] + '</p></div>'
        })

      deltaCircle = deltaCircle + delta_y_circleLeyenda;
    }
    // Pacto Global
    var delta_y_hide_submenu = relPos(820, width);
    // botón pacto global
    var x_botonPactoGlobal = relPos(310, width);
    var y_botonPactoGlobal = relPos(820, width);
    var w_botonSubmenu = relPos(100, width);
    var h_botonSubmenu = relPos(100, width);
    var imageMargin_botonSubmenu = 0.95;
    var strokeWidth_botonSubmenu = relPos(2, width);
    svgSubmenuPracticas.append('rect')
      .attr('id', 'botonPactoGlobal')
      .attr("x", x_botonPactoGlobal)
      .attr("y", y_botonPactoGlobal)
      .attr('width', w_botonSubmenu)
      .attr('height', h_botonSubmenu)
      .attr("rx", rp(8.78, 'x', width, height))
      .attr("ry", rp(8.78, 'x', width, height))
      //.attr('style', 'position: absolute; opacity: 0;')
      .attr('fill', 'white')
      .attr('stroke', 'url(#bgLinGradC)')
      .style("stroke-width", strokeWidth_botonSubmenu)
      .attr("filter", 'url(#shadowFilter)');

    svgSubmenuPracticas.append("image")
      .attr('id', 'imagenBotonPactoGlobal')
      .attr("xlink:href", window.location.origin + '/img/logoPG.png')
      .attr("x", x_botonPactoGlobal + (w_botonSubmenu * (1 - imageMargin_botonSubmenu)))
      .attr("y", y_botonPactoGlobal + (h_botonSubmenu * (1 - imageMargin_botonSubmenu)))
      .attr("width", w_botonSubmenu * 0.9);

    svgSubmenuPracticas.append('rect')
      .attr('id', 'clickAreaBotonPactoGlobal')
      .attr("x", x_botonPactoGlobal)
      .attr("y", y_botonPactoGlobal)
      .attr('width', w_botonSubmenu)
      .attr('height', h_botonSubmenu)
      .attr("rx", rp(8.78, 'x', width, height))
      .attr("ry", rp(8.78, 'x', width, height))
      .attr('fill', 'blue')
      .attr('opacity', 0)
      .style("cursor", "pointer")
      .on('mouseover', function (d, i) {
        // rebaja el color de todos los íconos
        d3.select('#botonPactoGlobal')
          .transition()
          .duration(100)
          .attr('opacity', 1);
        d3.select('#imagenBotonPactoGlobal')
          .transition()
          .duration(100)
          .attr('opacity', 1);
        d3.select('#botonODS')
          .transition()
          .duration(100)
          .attr('opacity', 0.5);
        d3.select('#imagenBotonODS')
          .transition()
          .duration(100)
          .attr('opacity', 0.5);

      })
      .on('mouseout', function (d, i) {
        // Restaura el color de todos los íconos
        if (d3.select("#" + 'svgNodosPactoGlobal').attr('opacity') == 1) {
          d3.select('#botonODS')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#imagenBotonODS')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#botonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#imagenBotonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 1);
        } else {
          d3.select('#botonODS')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#imagenBotonODS')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#botonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#imagenBotonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
        }

      })
      .on('click', function () {
        //console.log('botón que activa el submenú de Pacto Global');
        // elimina elementos dibujados
        arrayNodosODS = practica.setDesactivaNodos(arrayNodosODS);
        practica.setClearRelationshipsODS(arrayNodosODS);
        arrayNodosPracticasPactoGlobal_m = practica.setDesactivaNodos(arrayNodosPracticasPactoGlobal_m);
        arrayNodosPracticasPactoGlobal_c = practica.setDesactivaNodos(arrayNodosPracticasPactoGlobal_c);
        arrayNodosPracticasPactoGlobal_o = practica.setDesactivaNodos(arrayNodosPracticasPactoGlobal_o);
        practica.setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal_m);
        practica.setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal_c);
        practica.setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal_o);
        practica.setClearHighlightPG(arrayNodosPactoGlobal);
        // ejecuta acciones propias del botón
        if (d3.select("#" + 'svgNodosPactoGlobal').attr('opacity') == 0) {
          d3.select("#" + 'svgNodosPactoGlobal').attr('opacity', 1);
          d3.select("#" + 'svgNodosODS').attr('opacity', 0);
          d3.select('#botonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#imagenBotonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#botonODS')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#imagenBotonODS')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          for (let i = 0; i < tituloPactoGlobal.length; i++) {
            d3.select('#svgNodosPactoGlobalId_area' + i).attr('y', y_nodosODS);
            d3.select('#svgNodosPactoGlobalId_' + i).attr('y', y_nodosODS);
            d3.select('#pacto_global_number_' + i).attr('y', y_nodosPactoGlobal + delta_y_nodosPactoGlobal);
          }
          for (let i = 0; i < arrayNodosODS.length; i++) {
            d3.select('#imagenMouseoverODS_' + i).attr('y', y_imgODS + delta_y_hide_submenu);
            d3.select('#svgNodosODSId_area' + i).attr('y', y_nodosODS + delta_y_hide_submenu);
            d3.select('#svgNodosODSId_' + i).attr('y', y_nodosODS + delta_y_hide_submenu);
            d3.select('#ODS_number_' + i).attr('y', y_nodosODS + delta_y_hide_submenu);
          }
        } else {
          //nada
        }
      });

    // Etiquetas
    var x_labelPactoGlobal = x_botonPactoGlobal;
    var y_labelPactoGlobal = y_botonPactoGlobal + h_botonSubmenu + relPos(10, width);
    var font_textP2ImagenContenido = 'Roboto';
    var color_etiquetaPactoGlobal = '#3F3F3E';
    svgSubmenuPracticas.append("foreignObject")
      .attr("id", 'etiqueta_pacto_global')
      .attr('opacity', 1)
      .attr('x', x_labelPactoGlobal)
      .attr('y', y_labelPactoGlobal)
      .attr("width", relPos(150, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="color:' + color_etiquetaPactoGlobal + '"><b>10 Principios Pacto Global</b></div>'
      })
      .style("font-family", font_textP2ImagenContenido);

    // sub menú pacto global
    var width_nodosPactoGlobal = relPos(65, width);
    var height_nodosPactoGlobal = relPos(65, width);
    var delta_nodosPactoGlobal_a = relPos(8, width);
    var delta_nodosPactoGlobal_b = relPos(40, width);
    var x_nodosPactoGlobal_ref = relPos(640, width);
    var x_nodosPactoGlobal = x_nodosPactoGlobal_ref;
    var y_nodosPactoGlobal = relPos(850, width);
    var delta_y_nodosPactoGlobal = relPos(12, width);
    var fontSize_nodosPactoGlobal = relPos(32, width);
    var style_nodosPactoGlobal = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_nodosPactoGlobal + 'px;color:#ffffff;text-align:center';
    var fontSize_tooltipPactoGlobal = relPos(25, width);
    var style_tooltipPactoGlobal = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_tooltipPactoGlobal + 'px;color:#ffffff;text-align:left;position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0;';

    var w_tooltipPG = relPos(200, width);
    var h_tooltipPG = w_tooltipPG;// * 0.6;
    var x_tooltipPG = x_nodosPactoGlobal + (width_nodosPactoGlobal / 2) - (w_tooltipPG / 2);
    var y_tooltipPG = y_nodosPactoGlobal - height_nodosPactoGlobal - relPos(10, width);

    for (let i = 0; i < tituloPactoGlobal.length; i++) {

      // tooltip
      var tooltipBGId = 'svgtooltipPGId_' + i;
      var tooltipFOId = 'tooltip_pacto_global_number_' + i + 'FO';
      svgNodosPactoGlobal.append('rect')
        .attr('id', tooltipBGId)
        .attr('elementIndex', i)
        .attr('state', 0)
        .attr('x', x_tooltipPG)
        .attr('y', y_tooltipPG - (h_tooltipPG * 1.2 * 0.6))
        .attr("width", w_tooltipPG)
        .attr("height", h_tooltipPG)
        .attr("yAnimOri", y_tooltipPG - (h_tooltipPG * 2 * 0.6))
        .attr("yAnimDes", y_tooltipPG - (h_tooltipPG * 1.2 * 0.6))
        .style("stroke", 'none')
        .attr('fill', colorPactoGlobal[i])
        .attr('opacity', 0);
      svgNodosPactoGlobal.append("foreignObject")
        .attr('id', tooltipFOId)
        .attr('x', x_tooltipPG)
        .attr('y', y_tooltipPG - (h_tooltipPG * 1.2 * 0.6))
        .attr("width", w_tooltipPG)
        .attr("height", h_tooltipPG)
        .attr('opacity', 0)
        .html(function (d) {
          return '<div style="' + style_tooltipPactoGlobal + '">' + objetivosPG[0][i] + '</div>'
        });

      // iconos/botones
      svgNodosPactoGlobal.append('rect')
        .attr('id', 'svgNodosPactoGlobalId_' + i)
        .attr('elementIndex', i)
        .attr('state', 0)
        .attr('x', x_nodosPactoGlobal)
        .attr('y', y_nodosPactoGlobal)
        .attr("width", width_nodosPactoGlobal)
        .attr("height", height_nodosPactoGlobal)
        .style("stroke", 'none')
        //.style("stroke-width", relPos(1, width))
        .attr('fill', colorPactoGlobal[i])
        .attr("filter", "url(#shadowFilter)")
        .attr('opacity', 1);
      svgNodosPactoGlobal.append("foreignObject")
        .attr('id', 'pacto_global_number_' + i)
        .attr('x', x_nodosPactoGlobal)
        .attr('y', y_nodosPactoGlobal + delta_y_nodosPactoGlobal)
        .attr("width", width_nodosPactoGlobal)
        .attr("height", height_nodosPactoGlobal)
        .html(function (d) {
          return '<div style="' + style_nodosPactoGlobal + '">' + (i + 1) + '</div>'
        });
      svgNodosPactoGlobal.append('rect')
        .attr('id', 'svgNodosPactoGlobalId_area' + i)
        .attr('elementIndex', i)
        .attr('state', 0)
        .attr('x', x_nodosPactoGlobal)
        .attr('y', y_nodosPactoGlobal)
        .attr("width", width_nodosPactoGlobal)
        .attr("height", height_nodosPactoGlobal)
        .style("stroke", 'none')
        //.style("stroke-width", relPos(1, width))
        .attr('fill', 'transparent')
        .attr('opacity', 0.2)
        .style("cursor", "pointer")
        .on('mouseover', function () {
          var y_imgODSAnimOri = d3.select('#' + tooltipBGId).attr("yAnimOri");
          var y_imgODSAnimDes = d3.select('#' + tooltipBGId).attr("yAnimDes");
          d3.select(this)
            .style("stroke", '#555555')
            .style("stroke-width", rp(4, 'x', width, height));

          d3.select('#' + tooltipBGId)
            .attr('y', y_imgODSAnimOri)
            .transition()
            .duration(250)
            .attr('y', y_imgODSAnimDes)
            .attr('opacity', 1);
          d3.select('#' + tooltipFOId)
            .attr('y', y_imgODSAnimOri)
            .transition()
            .duration(250)
            .attr('y', y_imgODSAnimDes)
            .attr('opacity', 1);
        })
        .on('mouseout', function (i) {
          d3.select(this).style("stroke", 'none');
          var y_imgODSAnimOri = d3.select('#' + tooltipBGId).attr("yAnimOri");
          var y_imgODSAnimDes = d3.select('#' + tooltipBGId).attr("yAnimDes");
          d3.select('#' + tooltipBGId)
            .attr('y', y_imgODSAnimDes)
            .transition()
            .duration(250)
            .attr('y', y_imgODSAnimOri)
            .attr('opacity', 0);
          d3.select('#' + tooltipFOId)
            .attr('y', y_imgODSAnimDes)
            .transition()
            .duration(250)
            .attr('y', y_imgODSAnimOri)
            .attr('opacity', 0);
        })
        .on('click', function () {
          console.log('botones del sub menú de pacto global')
          var index = d3.select('#svgNodosPactoGlobalId_' + i).attr('elementIndex');
          if (d3.select('#svgNodosPactoGlobalId_' + i).attr('state') == 0) {
            d3.select('#svgNodosPactoGlobalId_' + i).attr('state', 1);
            d3.select('#svgNodosPactoGlobalId_' + i)
              .style("stroke", '#555555')
              .style("stroke-width", rp(4, 'x', width, height));
          } else {
            d3.select('#svgNodosPactoGlobalId_' + i).attr('state', 0);
            d3.select('#svgNodosPactoGlobalId_' + i).style("stroke", 'none');
          }
          arrayNodosPactoGlobal = practica.setActivaNodo(arrayNodosPactoGlobal, index);
          var mandante = false; // 0
          var compartido = false; // 1
          var otro = false; // 2
          for (let j = 0; j < arrayNodosPracticasPactoGlobal_m.length; j++) {
            var arrRelacionPractica = arrayNodosPracticasPactoGlobal_m[j][relacion_pacto_global_nodo].split('-');
            for (let k = 0; k < arrRelacionPractica.length; k++) {
              var modId = parseInt(index) + 1;
              var relacionPractica = arrRelacionPractica[k].split(',');
              console.log('relacionPractica.length ' + relacionPractica.length)
              if (relacionPractica[0] == modId) {
                if (relacionPractica.length > 0)
                  mandante = true;
                if (relacionPractica.length > 1)
                  compartido = true;
                if (relacionPractica.length > 2)
                  otro = true;
              }
            }
          }
          if (mandante)
            practica.getRelationshipLinePGPractica(svgLineasRelaciones, width, arrayNodosPracticasPactoGlobal_m, arrayNodosPactoGlobal, relPos(4, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, colorPactoGlobal, 'm', colorRol, color_nodoPractica);
          if (compartido)
            practica.getRelationshipLinePGPractica(svgLineasRelaciones, width, arrayNodosPracticasPactoGlobal_c, arrayNodosPactoGlobal, relPos(4, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, colorPactoGlobal, 'c', colorRol, color_nodoPractica);
          if (otro)
            practica.getRelationshipLinePGPractica(svgLineasRelaciones, width, arrayNodosPracticasPactoGlobal_o, arrayNodosPactoGlobal, relPos(4, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, colorPactoGlobal, 'o', colorRol, color_nodoPractica);
        });

      var x_original = x_nodosPactoGlobal + width_nodosPactoGlobal;
      if (i == 1 || i == 5 || i == 8)
        x_nodosPactoGlobal = x_nodosPactoGlobal + width_nodosPactoGlobal + delta_nodosPactoGlobal_b;
      else
        x_nodosPactoGlobal = x_nodosPactoGlobal + width_nodosPactoGlobal + delta_nodosPactoGlobal_a;

      x_tooltipPG = x_nodosPactoGlobal + (width_nodosPactoGlobal / 2) - (w_tooltipPG / 2);

      arrayNodosPactoGlobal[i][0] = x_original - (width_nodosPactoGlobal / 2);
      arrayNodosPactoGlobal[i][1] = y_nodosPactoGlobal;
    }

    // ODS
    var x_botonODS = relPos(1690, width);
    var y_botonODS = relPos(820, width);
    svgSubmenuPracticas.append('rect')
      .attr('id', 'botonODS')
      .attr("x", x_botonODS)
      .attr("y", y_botonODS)
      .attr('width', w_botonSubmenu)
      .attr('height', h_botonSubmenu)
      .attr("rx", rp(8.78, 'x', width, height))
      .attr("ry", rp(8.78, 'x', width, height))
      //.attr('style', 'position: absolute; opacity: 0;')
      .attr('fill', 'white')
      .attr('opacity', 0.5)
      .attr('stroke', 'url(#bgLinGradC)')
      .style("stroke-width", strokeWidth_botonSubmenu)
      .attr("filter", 'url(#shadowFilter)');

    svgSubmenuPracticas.append("image")
      .attr('id', 'imagenBotonODS')
      .attr("xlink:href", window.location.origin + '/img/logoODS.png')
      .attr("x", x_botonODS + (w_botonSubmenu * (1 - imageMargin_botonSubmenu)))
      .attr("y", y_botonODS + (h_botonSubmenu * (1 - imageMargin_botonSubmenu)))
      .attr("width", w_botonSubmenu * 0.9)
      .attr('opacity', 0.5);

    svgSubmenuPracticas.append('rect')
      .attr('id', 'clickAreaBotonODS')
      .attr("x", x_botonODS)
      .attr("y", y_botonODS)
      .attr('width', w_botonSubmenu)
      .attr('height', h_botonSubmenu)
      .attr("rx", rp(8.78, 'x', width, height))
      .attr("ry", rp(8.78, 'x', width, height))
      .attr('fill', 'blue')
      .attr('opacity', 0)
      .style("cursor", "pointer")
      .on('mouseover', function (d, i) {
        // rebaja el color de todos los íconos
        d3.select('#botonODS')
          .transition()
          .duration(100)
          .attr('opacity', 1);
        d3.select('#imagenBotonODS')
          .transition()
          .duration(100)
          .attr('opacity', 1);
        d3.select('#botonPactoGlobal')
          .transition()
          .duration(100)
          .attr('opacity', 0.5);
        d3.select('#imagenBotonPactoGlobal')
          .transition()
          .duration(100)
          .attr('opacity', 0.5);
      })
      .on('mouseout', function (d, i) {
        // Restaura el color de todos los íconos
        if (d3.select("#" + 'svgNodosODS').attr('opacity') == 1) {
          d3.select('#botonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#imagenBotonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#botonODS')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#imagenBotonODS')
            .transition()
            .duration(100)
            .attr('opacity', 1);
        } else {
          d3.select('#botonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#imagenBotonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#botonODS')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#imagenBotonODS')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
        }

      })
      .on('click', function () {
        //console.log('botón que activa el submenú de ODS')
        // elimina elementos dibujados
        arrayNodosPactoGlobal = practica.setDesactivaNodos(arrayNodosPactoGlobal);
        practica.setClearRelationshipsPG(arrayNodosPactoGlobal);
        arrayNodosPracticasPactoGlobal_m = practica.setDesactivaNodos(arrayNodosPracticasPactoGlobal_m);
        arrayNodosPracticasPactoGlobal_c = practica.setDesactivaNodos(arrayNodosPracticasPactoGlobal_c);
        arrayNodosPracticasPactoGlobal_o = practica.setDesactivaNodos(arrayNodosPracticasPactoGlobal_o);
        practica.setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal_m);
        practica.setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal_c);
        practica.setClearRelationshipsPrincipios(arrayNodosPracticasPactoGlobal_o);
        practica.setClearHighlightODS(arrayNodosODS);
        // ejecuta acciones propias del botón
        if (d3.select("#" + 'svgNodosODS').attr('opacity') == 0) {
          d3.select("#" + 'svgNodosODS').attr('opacity', 1);
          d3.select("#" + 'svgNodosPactoGlobal').attr('opacity', 0);
          d3.select('#botonODS')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#imagenBotonODS')
            .transition()
            .duration(100)
            .attr('opacity', 1);
          d3.select('#botonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          d3.select('#imagenBotonPactoGlobal')
            .transition()
            .duration(100)
            .attr('opacity', 0.5);
          for (let i = 0; i < tituloOds.length; i++) {
            d3.select('#ODS_number_' + i).attr('y', y_nodosODS + delta_y_nodosODS);
            d3.select('#svgNodosODSId_' + i).attr('y', y_nodosODS);
            d3.select('#svgNodosODSId_area' + i).attr('y', y_nodosODS);
            d3.select('#imagenMouseoverODS_' + i).attr('y', y_imgODS);
          }
          for (let i = 0; i < tituloPactoGlobal.length; i++) {
            d3.select('#pacto_global_number_' + i).attr('y', y_nodosPactoGlobal + delta_y_hide_submenu);
            d3.select('#svgNodosPactoGlobalId_' + i).attr('y', y_nodosODS + delta_y_hide_submenu);
            d3.select('#svgNodosPactoGlobalId_area' + i).attr('y', y_nodosODS + delta_y_hide_submenu);
          }
        } else {
          //nada
        }
      });

    // Etiquetas
    var x_labelODS = x_botonODS;
    var y_labelODS = y_botonODS + h_botonSubmenu + relPos(10, width);
    svgSubmenuPracticas.append("foreignObject")
      .attr("id", 'etiqueta_pacto_global')
      .attr('opacity', 1)
      .attr('x', x_labelODS)
      .attr('y', y_labelODS)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="color:' + color_etiquetaPactoGlobal + '"><b>17 Objetivos Desarrollo Sostenible(ODS)</b></div>'
      })
      .style("font-family", font_textP2ImagenContenido);

    x_labelODS = x_botonODS - relPos(1000, width);
    svgNodosPactoGlobal.append("foreignObject")
      .attr("id", 'etiqueta_pacto_global_categoria1')
      .attr('opacity', 1)
      .attr('x', x_labelODS - relPos(5, width))
      .attr('y', y_labelODS)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="color:' + color_etiquetaPactoGlobal + ';font-weight:bold">DDHH</div>'
      })
      .style("font-family", font_textP2ImagenContenido);

    x_labelODS = x_labelODS + relPos(160, width);
    svgNodosPactoGlobal.append("foreignObject")
      .attr("id", 'etiqueta_pacto_global_categoria1')
      .attr('opacity', 1)
      .attr('x', x_labelODS + relPos(35, width))
      .attr('y', y_labelODS)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="color:' + color_etiquetaPactoGlobal + ';font-weight:bold">Normas Laborales</div>'
      })
      .style("font-family", font_textP2ImagenContenido);

    x_labelODS = x_labelODS + relPos(310, width);
    svgNodosPactoGlobal.append("foreignObject")
      .attr("id", 'etiqueta_pacto_global_categoria1')
      .attr('opacity', 1)
      .attr('x', x_labelODS + relPos(25, width))
      .attr('y', y_labelODS)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="color:' + color_etiquetaPactoGlobal + ';font-weight:bold">Medio ambientales</div>'
      })
      .style("font-family", font_textP2ImagenContenido);

    x_labelODS = x_labelODS + relPos(230, width);
    svgNodosPactoGlobal.append("foreignObject")
      .attr("id", 'etiqueta_pacto_global_categoria1')
      .attr('opacity', 1)
      .attr('x', x_labelODS - relPos(15, width))
      .attr('y', y_labelODS)
      .attr("width", relPos(200, width))
      .attr("height", relPos(50, width))
      .html(function (d) {
        return '<div style="color:' + color_etiquetaPactoGlobal + ';font-weight:bold">Anticorrupción</div>'
      })
      .style("font-family", font_textP2ImagenContenido);



    // Submenu ODS
    var width_nodosODS = relPos(65, width);
    var height_nodosODS = relPos(65, width);
    var delta_nodosODS_a = relPos(6, width);
    var delta_nodosODS_b = relPos(18, width);
    var x_nodosODS_ref = relPos(445, width);
    var x_nodosODS = x_nodosODS_ref;
    var y_nodosODS = relPos(850, width);
    var delta_y_nodosODS = relPos(12, width);
    var fontSize_nodosODS = relPos(32, width);
    var style_nodosODS = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_nodosODS + 'px;color:#ffffff;text-align:center';
    var w_imgODS = relPos(200, width);
    var h_imgODS = w_imgODS * 0.6;
    var x_imgODS = x_nodosODS + (width_nodosODS / 2) - (w_imgODS / 2);
    var y_imgODS = y_nodosODS - height_nodosODS - relPos(10, width);
    for (let i = 0; i < tituloOds.length; i++) {

      svgNodosODS.append("image")
        .attr('id', 'imagenMouseoverODS_' + i)
        .attr("xlink:href", window.location.origin + '/img/' + arrImgODS[i])
        .attr("x", x_imgODS)
        .attr("y", y_imgODS + delta_y_hide_submenu)
        .attr("yAnimOri", y_imgODS - (h_imgODS * 2))
        .attr("yAnimDes", y_imgODS - (h_imgODS * 1.2))
        .attr("width", w_imgODS)
        .attr('opacity', 0);
      svgNodosODS.append('rect')
        .attr('id', 'svgNodosODSId_' + i)
        .attr('elementIndex', i)
        .attr('state', 0)
        .attr('x', x_nodosODS)
        .attr('y', y_nodosODS + delta_y_hide_submenu)
        .attr("width", width_nodosODS)
        .attr("height", height_nodosODS)
        .style("stroke", 'none')
        //.style("stroke-width", relPos(1, width))
        .attr('fill', colorODS[i])
        .attr("filter", "url(#shadowFilter)")
        .attr('opacity', 1);
      svgNodosODS.append("foreignObject")
        .attr('id', 'ODS_number_' + i)
        .attr('x', x_nodosODS)
        .attr('y', y_nodosODS + delta_y_nodosODS + delta_y_hide_submenu)
        .attr("width", width_nodosODS)
        .attr("height", height_nodosODS)
        .html(function (d) {
          return '<div style="' + style_nodosODS + '">' + (i + 1) + '</div>'
        });
      svgNodosODS.append('rect')
        .attr('id', 'svgNodosODSId_area' + i)
        .attr('elementIndex', i)
        .attr('state', 0)
        .attr('x', x_nodosODS)
        .attr('y', y_nodosODS + delta_y_hide_submenu)
        .attr("width", width_nodosODS)
        .attr("height", height_nodosODS)
        .style("stroke", 'none')
        //.style("stroke-width", relPos(1, width))
        .attr('fill', 'transparent')
        .attr('opacity', 0.2)
        .style("cursor", "pointer")
        .on('mouseover', function () {
          var y_imgODSAnimOri = d3.select('#imagenMouseoverODS_' + i).attr("yAnimOri");
          var y_imgODSAnimDes = d3.select('#imagenMouseoverODS_' + i).attr("yAnimDes");

          d3.select(this)
            .style("stroke", '#555555')
            .style("stroke-width", rp(4, 'x', width, height));
          d3.select('#imagenMouseoverODS_' + i)
            .attr('y', y_imgODSAnimOri)
            .transition()
            .duration(250)
            .attr('y', y_imgODSAnimDes)
            .attr('opacity', 1);
        })
        .on('mouseout', function () {
          var y_imgODSAnimOri = d3.select('#imagenMouseoverODS_' + i).attr("yAnimOri");
          var y_imgODSAnimDes = d3.select('#imagenMouseoverODS_' + i).attr("yAnimDes");
          d3.select(this).style("stroke", 'none');
          d3.select('#imagenMouseoverODS_' + i)
            .attr('y', y_imgODSAnimDes)
            .transition()
            .duration(250)
            .attr('y', y_imgODSAnimOri)
            .attr('opacity', 0);
        })
        .on('click', function () {
          console.log('botones del sub menú de ODS')
          var index = d3.select('#svgNodosODSId_' + i).attr('elementIndex');
          if (d3.select('#svgNodosODSId_' + i).attr('state') == 0) {
            d3.select('#svgNodosODSId_' + i).attr('state', 1);
            d3.select('#svgNodosODSId_' + i)
              .style("stroke", '#555555')
              .style("stroke-width", rp(4, 'x', width, height));
          } else {
            d3.select('#svgNodosODSId_' + i).attr('state', 0);
            d3.select('#svgNodosODSId_' + i).style("stroke", 'none');
          }
          arrayNodosODS = practica.setActivaNodo(arrayNodosODS, index);
          var mandante = false; // 0
          var compartido = false; // 1
          var otro = false; // 2
          for (let j = 0; j < arrayNodosPracticasODS_m.length; j++) {
            var arrRelacionPractica = arrayNodosPracticasODS_m[j][relacion_pacto_global_nodo].split('-');
            for (let k = 0; k < arrRelacionPractica.length; k++) {
              var modId = parseInt(index) + 1;
              var relacionPractica = arrRelacionPractica[k].split(',');
              if (relacionPractica[0] == modId) {
                if (relacionPractica.length > 0)
                  mandante = true;
                if (relacionPractica.length > 1)
                  compartido = true;
                if (relacionPractica.length > 2)
                  otro = true;
              }
            }
          }
          if (mandante)
            practica.getRelationshipLineODSPractica(svgLineasRelaciones, width, arrayNodosPracticasODS_m, arrayNodosODS, relPos(4, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, colorODS, 'm', colorRol, color_nodoPractica);
          if (compartido)
            practica.getRelationshipLineODSPractica(svgLineasRelaciones, width, arrayNodosPracticasODS_c, arrayNodosODS, relPos(4, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, colorODS, 'c', colorRol, color_nodoPractica);
          if (otro)
            practica.getRelationshipLineODSPractica(svgLineasRelaciones, width, arrayNodosPracticasODS_o, arrayNodosODS, relPos(4, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, colorODS, 'o', colorRol, color_nodoPractica);
        });

      var x_original = x_nodosODS + width_nodosODS;
      x_nodosODS = x_nodosODS + width_nodosODS + delta_nodosODS_a;
      x_imgODS = x_nodosODS + (width_nodosODS / 2) - (w_imgODS / 2);

      arrayNodosODS[i][0] = x_original - (width_nodosODS / 2);
      arrayNodosODS[i][1] = y_nodosODS;

    }
    //console.log(arrayNodosODS);
    /*********************************************
     Renderiza elementos del "tejido" - End
    *********************************************/

    /*********************************************
      Renderiza área clickeable "arcoiris" - Begin
    *********************************************/


    const numPosicionesPorCadaEtapa = 4;
    var parametrosSet = [];

    var innerRadius_main = relPos(450, width);
    var outerRadius_main = relPos(780, width);
    // --------------------------------
    // Área clickeable detalle práctica
    // --------------------------------
    var arcLenA = 3.14 / arrayPracticaDetalle.length;
    var startAngle = -(practica.getCounterRotation(currentPractica) * arcLenA);//var startAngle = -(5.5 * arcLenA);
    var endAngle = startAngle + arcLenA;
    var mueveSegmento_ref = relPos(145, width);   //<======================
    var mueveSegmento = relPos(55, width);       //<======================
    var innerRadius = innerRadius_main + mueveSegmento; // Mueve el segmento
    var outerRadius = outerRadius_main - relPos(40, width); // Cambia el tamaño del segmento
    var ajuste = (mueveSegmento_ref - mueveSegmento + relPos(90, width)) * -1;
    // Configuración del Nodo prácticas
    var labelOuterRadius = relPos(700, width); // mueve el texto
    var delta_practicaLabel = ajuste;//-(mueveSegmento_ref - mueveSegmento + relPos(10, width));
    var r_nodoPractica = relPos(15, width);
    var color_nodoPractica = '#3F3F3E';
    var strokeWidth_nodoPractica = relPos(3, width);
    var opacity_nodoPractica = 0;

    // Configuración del nodo etapas
    var delta_practicaEtapaLabel = relPos(120, width);

    var segmentId = '';
    var segmentId_centroideEtapa = '';
    var segmentClickeableId = '';
    var segmentTexetDetalleId;
    var fonSize_detalle = rp(9.5, 'x', width, height);
    var divHeight_detalle = 'height:' + rp(80, 'x', width, height) + 'px';
    const rotationAngle_detalle = 180 / arrayPracticaDetalle.length;
    const x_segmentText = rp(-320, 'x', width, height);
    const y_segmentText = rp(-80, 'x', width, height);
    var rotationAngle_practicas = [];
    rotationAngle_practicas[0] = -85;
    rotationAngle_practicas[1] = -72;
    rotationAngle_practicas[2] = -54;
    rotationAngle_practicas[3] = -36;
    rotationAngle_practicas[4] = -18;
    rotationAngle_practicas[5] = 0;
    rotationAngle_practicas[6] = 18;
    rotationAngle_practicas[7] = 36;
    rotationAngle_practicas[8] = 54;
    rotationAngle_practicas[9] = 72;
    rotationAngle_practicas[10] = 85;

    // Segmentos Nodos de practicas auxiliares para centroides de practicas
    var arcLenA_centroidePractica = 3.14 / (arrayPracticaDetalle.length * 3);
    var startAngle_centroidePractica = 6.28 - (3.14 / 2);//-(practica.getCounterRotation(currentPractica) * arcLenA_centroideEtapa);//var startAngle = -(5.5 * arcLenA);
    var endAngle_centroidePractica = startAngle_centroidePractica + arcLenA_centroidePractica;
    var innerRadius_centroidePractica = innerRadius_main;
    var outerRadius_centroidePractica = outerRadius + delta_practicaLabel;//relPos(738, width);// rp(730, 'x', width, height);

    // Segmentos auxiliares para centroides de etapas
    var arcLenA_centroideEtapa = (3.14 / arrayNodosPracticas.length) / arrayNodosEtapas.length;
    var startAngle_centroideEtapa = 6.28 - (3.14 / 2);//-(practica.getCounterRotation(currentPractica) * arcLenA_centroideEtapa);//var startAngle = -(5.5 * arcLenA);
    var endAngle_centroideEtapa = startAngle_centroideEtapa + arcLenA_centroideEtapa;
    var innerRadius_centroideEtapa = innerRadius_main;
    var outerRadius_centroideEtapa = relPos(530, width);// rp(730, 'x', width, height);

    // Segmentos nodo etapa
    var arcLenA_nodoEtapa = (3.14 / arrayNodosPracticas.length) / arrayNodosEtapas.length;
    var startAngle_nodoEtapa = 6.28 - (3.14 / 2);//-(practica.getCounterRotation(currentPractica) * arcLenA_centroideEtapa);//var startAngle = -(5.5 * arcLenA);
    var endAngle_nodoEtapa = startAngle_nodoEtapa + arcLenA_nodoEtapa
    var innerRadius_nodoEtapa = innerRadius_main - (outerRadius_main - innerRadius_main);//relPos(150, width);
    var outerRadius_nodoEtapa = relPos(1100, width);// rp(730, 'x', width, height);

    // Segmentos auxiliares para centroides etiqueta practica
    var arcLenA_ep = 3.14 / arrayPracticaDetalle.length;
    var startAngle_ep = -(practica.getCounterRotation(currentPractica) * arcLenA_ep);//var startAngle = -(5.5 * arcLenA);
    var endAngle_ep = startAngle_ep + arcLenA_ep;
    var innerRadius_ep = innerRadius_main + delta_practicaEtapaLabel;
    var outerRadius_ep = labelOuterRadius; //rp(700, 'x', width, height);
    var outerRadius_ep_text = outerRadius_ep;
    var delta_outerRadius_ep_text = relPos(20, width);
    var cornerRadius_ep = relPos(10, width);

    var rotationAngle_etapas = 180 / 109;
    var rotation_size = relPos(230, width);
    var rotation_width = rotation_size;//relPos(300, width);
    var rotation_height = rotation_size;//relPos(50, width);}+

    //Recorre practicas
    var rotation_index = 0;
    for (let i = 0; i < arrayNodosPracticas.length; i++) {

      // Segmentos Auxiliar practicas
      var arcSegment_centroidePractica = d3.arc()
        .innerRadius(innerRadius_centroidePractica)
        .outerRadius(outerRadius_centroidePractica)
        .startAngle(startAngle_centroidePractica)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngle_centroidePractica);        // 2*Pi = 6.28 = top 
      var [x_nodo_m, y_nodo_m] = arcSegment_centroidePractica.centroid(arcSegment_centroidePractica);

      startAngle_centroidePractica = endAngle_centroidePractica;
      endAngle_centroidePractica = arcLenA_centroidePractica + endAngle_centroidePractica;
      var arcSegment_centroidePractica = d3.arc()
        .innerRadius(innerRadius_centroidePractica)
        .outerRadius(outerRadius_centroidePractica)
        .startAngle(startAngle_centroidePractica)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngle_centroidePractica);        // 2*Pi = 6.28 = top 
      var [x_nodo_c, y_nodo_c] = arcSegment_centroidePractica.centroid(arcSegment_centroidePractica);

      startAngle_centroidePractica = endAngle_centroidePractica;
      endAngle_centroidePractica = arcLenA_centroidePractica + endAngle_centroidePractica;
      var arcSegment_centroidePractica = d3.arc()
        .innerRadius(innerRadius_centroidePractica)
        .outerRadius(outerRadius_centroidePractica)
        .startAngle(startAngle_centroidePractica)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngle_centroidePractica);        // 2*Pi = 6.28 = top 
      var [x_nodo_o, y_nodo_o] = arcSegment_centroidePractica.centroid(arcSegment_centroidePractica);


      arrayNodosPracticasPactoGlobal_m[i][0] = x_nodo_m;// Coord X
      arrayNodosPracticasPactoGlobal_m[i][1] = y_nodo_m;// Coord Y
      arrayNodosPracticasPactoGlobal_c[i][0] = x_nodo_c;// Coord X
      arrayNodosPracticasPactoGlobal_c[i][1] = y_nodo_c;// Coord Y
      arrayNodosPracticasPactoGlobal_o[i][0] = x_nodo_o;// Coord X
      arrayNodosPracticasPactoGlobal_o[i][1] = y_nodo_o;// Coord Y

      arrayNodosPracticasODS_m[i][0] = x_nodo_m;// Coord X
      arrayNodosPracticasODS_m[i][1] = y_nodo_m;// Coord Y
      arrayNodosPracticasODS_c[i][0] = x_nodo_c;// Coord X
      arrayNodosPracticasODS_c[i][1] = y_nodo_c;// Coord Y
      arrayNodosPracticasODS_o[i][0] = x_nodo_o;// Coord X
      arrayNodosPracticasODS_o[i][1] = y_nodo_o;// Coord Y


      segmentId = 'segmentarcSegment_centroidePractica_' + i;
      svgClicklAreaArcoiris.append("path")
        .attr("id", segmentId)
        .attr("d", arcSegment_centroidePractica)
        .attr("fill", 'transparent')
        .style("stroke", 'none')
        //.style("stroke", '#959B99')
        .style("stroke-dasharray", ("3, 3"))
        .style("stroke-width", relPos(1, width))
        .attr('opacity', 0.3);

      // Segmentos practicas
      var arcSegment = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(startAngle)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngle)
        .cornerRadius(cornerRadius_ep);        // 2*Pi = 6.28 = top        

      segmentId = 'segment_' + i;
      svgArcoiris.append("path")
        .attr("id", segmentId)
        .attr("d", arcSegment)
        .attr("fill", practicasColor[currentPractica])
        .style("stroke", 'none')
        //.style("stroke", '#959B99')
        .style("stroke-dasharray", ("3, 3"))
        .style("stroke-width", relPos(1, width))
        .attr("filter", "url(#shadowFilter)")
        .attr('opacity', 1);

      // Textos/etiquetas prácticas
      var idArco;// = 'arcoTest_' + i + '_' + j;
      var idTextArco;// = 'textArcoTest_' + i + '_' + j;
      outerRadius_ep_text = outerRadius_ep;
      for (let j = 0; j < segmenFila.length; j++) {
        var segmenFila_practica = d3.arc().innerRadius(outerRadius_ep_text).outerRadius(outerRadius_ep_text).startAngle(startAngle_ep).endAngle(endAngle_ep);
        //console.log(segmenFila_practica);
        //segmenFila[j].push(segmenFila_practica);
        outerRadius_ep_text = outerRadius_ep_text - delta_outerRadius_ep_text;

        idArco = 'arcoTest_' + i + '_' + j;
        idTextArco = 'textArcoTest_' + i + '_' + j;

        svgArcoiris.append("path")
          .attr("id", idArco) //Unique id of the path
          .attr("d", segmenFila_practica) //SVG path
          //.attr("transform", "translate(" + x_clickAreaArcoiris + "," + y_clickAreaArcoiris + ")")
          .style("fill", "none")
          .style("stroke", "none");
        svgArcoiris.append("text")
          .attr("id", idTextArco)
          .append("textPath") //append a textPath to the text element
          .attr("xlink:href", "#" + idArco) //place the ID of the path here
          .style("text-anchor", "middle") //place the text halfway on the arc
          .attr("startOffset", "25%")
          .style('fill', color_textArco)
          .style("font-size", fontSize_textArco)
          .text(textFila[j][i]);
        //}

      }/**/

      var arcSegment_ep = d3.arc()
        .innerRadius(innerRadius_ep)
        .outerRadius(outerRadius_ep)
        .startAngle(startAngle_ep)     // It's in radian, so Pi = 3.14 = bottom.
        .endAngle(endAngle_ep);        // 2*Pi = 6.28 = top        
      var [x_ep, y_ep] = arcSegment_ep.centroid(arcSegment_ep);

      // Recorre etapas
      for (let j = 0; j < arrayNodosEtapas.length; j++) {
        var arcSegment_centroideEtapa = d3.arc()
          .innerRadius(innerRadius_centroideEtapa)
          .outerRadius(outerRadius_centroideEtapa)
          .startAngle(startAngle_centroideEtapa)     // It's in radian, so Pi = 3.14 = bottom.
          .endAngle(endAngle_centroideEtapa);        // 2*Pi = 6.28 = top        
        var [x_centroideEtapa, y_centroideEtapa] = arcSegment_centroideEtapa.centroid(arcSegment_centroideEtapa);

        var arcSegment_nodoEtapa = d3.arc()
          .innerRadius(innerRadius_nodoEtapa)
          .outerRadius(outerRadius_nodoEtapa)
          .startAngle(startAngle_nodoEtapa)     // It's in radian, so Pi = 3.14 = bottom.
          .endAngle(endAngle_nodoEtapa);        // 2*Pi = 6.28 = top        
        var [x_nodoEtapa, y_nodoEtapa] = arcSegment_nodoEtapa.centroid(arcSegment_nodoEtapa);

        // Puebla el arreglo de nodos de practicas
        arrayNodosPracticas[i][j][0] = x_nodoEtapa;
        arrayNodosPracticas[i][j][1] = y_nodoEtapa;

        segmentId_centroideEtapa = 'segment_centroideEtapa_' + i;
        svgClicklAreaArcoiris.append("path")
          .attr("id", segmentId_centroideEtapa)
          .attr("d", arcSegment_centroideEtapa)
          .attr("fill", 'transparent')
          .attr("opacity", '0.2')
          .style("stroke", 'none')
          //.style("stroke", '#959B99')
          //.style("stroke-dasharray", ("3, 3"))
          .style("stroke-width", rp(2, 'x', width, height));

        svgClicklAreaArcoiris.append("circle")
          .attr("id", 'circle_nodoEtapa_' + j)
          .attr("cx", x_nodoEtapa)
          .attr("cy", y_nodoEtapa)
          .attr("r", rp(7, 'x', width, height))
          .style("stroke", "black")
          .style("stroke-width", relPos(2, width))
          .attr('text', j)
          .attr('opacity', 0)
          .style("fill", "white");/** */

        // textos etapas
        svgClicklAreaArcoiris.append('rect')
          .attr("id", 'segmentTexetDetalleId_' + j)
          .attr('x', x_centroideEtapa)
          .attr('y', y_centroideEtapa)
          .attr("width", rotation_width)
          .attr("height", rotation_height)
          .style("stroke", 'none')
          //.style("stroke", '#000000')
          .style("stroke-width", relPos(1, width))
          .attr('fill', 'transparent')
          .attr('opacity', 0.1)
          .attr("transform", 'translate(-' + (rotation_width / 2) + ',-' + (rotation_height / 2) + ') ');
        svgClicklAreaArcoiris.append('foreignObject')
          .attr("id", 'segmentTexetDetalleId_' + j)
          .attr('x', x_centroideEtapa)
          .attr('y', y_centroideEtapa)
          .attr("width", rotation_width)
          .attr("height", rotation_height)
          .style("stroke", '#000000')
          .style("stroke-width", relPos(1, width))
          .style('cursor', 'context-menu')
          .attr('opacity', 0)
          .html(function (d) {
            var trozo_a = 'font-family:Roboto;font-weight:normal;color:#000000;font-size:' + relPos(10, width) + 'px;';//background-color: lightblue;';
            var trozo_b = 'margin-top:' + (rotation_width / 2) + 'px; padding: 0;';
            //var trozo_b = 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0;';
            var trozo_d = '-webkit-transform: rotate(' + (rotationAngle_etapas * rotation_index) + 'deg)';//'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0; ';
            //var trozo_d = 'margin:0; padding:0; -webkit-transform: rotate(' + (rotationAngle_etapas * rotation_index) + 'deg)';//'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0; ';
            var trozo_estilos = trozo_a + ' ' + trozo_b + ' ' + trozo_d;
            return '<div style="' + trozo_estilos + '">' + arrayEtapas[j] + '</div>'
          })
          .attr("transform", 'translate(-' + (rotation_width / 2) + ',-' + (rotation_height / 2) + ')');


        startAngle_centroideEtapa = endAngle_centroideEtapa;
        endAngle_centroideEtapa = arcLenA_centroideEtapa + endAngle_centroideEtapa;

        startAngle_nodoEtapa = endAngle_nodoEtapa;
        endAngle_nodoEtapa = arcLenA_nodoEtapa + endAngle_nodoEtapa;
        rotation_index++;
      }
      // Área Clickeable Practicas
      segmentClickeableId = 'segmentClickeable_' + i;
      svgClicklAreaArcoiris.append("path")
        .attr("id", segmentClickeableId)
        .attr('elementIndex', i)
        .attr('state', 0)
        .attr("d", arcSegment)
        .attr("fill", 'transparent')
        .style("stroke", 'none')
        //.style("stroke", '#959B99')
        .style("stroke-dasharray", ("3, 3"))
        .style("stroke-width", rp(2, 'x', width, height))
        //.style("stroke-width", rp(2, 'x', width, height))
        .attr('opacity', 1)
        .style("cursor", "pointer")
        .on('mouseover', function () {
          d3.select(this)
            .style("stroke", '#ffffff')
            .style("stroke-width", rp(2, 'x', width, height));
        })
        .on('mouseout', function (i) {
          d3.select(this)
            .style("stroke", 'none')
            .style("stroke-width", rp(2, 'x', width, height));
        })
        .on('click', function () {
          //console.log('Click sobre cada segmento de arco de practicas');
          var index = d3.select(this).attr('elementIndex');
          console.log('index:' + index + ' state:' + d3.select(this).attr('state'));
          if (d3.select(this).attr('state') == 0) {
            console.log('pinta')
            d3.select(this).attr('state', 1);
            d3.select(this)
              .style("stroke", '#ffffff')
              .style("stroke-width", rp(3, 'x', width, height));
          } else {
            d3.select(this).attr('state', 0);
            d3.select(this).style("stroke", 'none');
          }

          if (d3.select("#" + 'svgNodosPactoGlobal').attr('opacity') == 1) {
            arrayNodosPracticasPactoGlobal_m = practica.setActivaNodo(arrayNodosPracticasPactoGlobal_m, index);
            arrayNodosPracticasPactoGlobal_c = practica.setActivaNodo(arrayNodosPracticasPactoGlobal_c, index);
            arrayNodosPracticasPactoGlobal_o = practica.setActivaNodo(arrayNodosPracticasPactoGlobal_o, index);
            practica.getRelationshipLinePracticaPG(svgLineasRelaciones, width, arrayNodosPracticasPactoGlobal_m, arrayNodosPactoGlobal, relPos(5, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, 'm', colorRol[0], colorRol);
            practica.getRelationshipLinePracticaPG(svgLineasRelaciones, width, arrayNodosPracticasPactoGlobal_c, arrayNodosPactoGlobal, relPos(5, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, 'c', colorRol[1], colorRol);
            practica.getRelationshipLinePracticaPG(svgLineasRelaciones, width, arrayNodosPracticasPactoGlobal_o, arrayNodosPactoGlobal, relPos(5, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, 'o', colorRol[2], colorRol);
          } else {
            arrayNodosPracticasODS_m = practica.setActivaNodo(arrayNodosPracticasODS_m, index);
            arrayNodosPracticasODS_c = practica.setActivaNodo(arrayNodosPracticasODS_c, index);
            arrayNodosPracticasODS_o = practica.setActivaNodo(arrayNodosPracticasODS_o, index);
            practica.getRelationshipLinePracticaODS(svgLineasRelaciones, width, arrayNodosPracticasODS_m, arrayNodosODS, relPos(5, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, 'm', colorRol[0], colorRol);
            practica.getRelationshipLinePracticaODS(svgLineasRelaciones, width, arrayNodosPracticasODS_c, arrayNodosODS, relPos(5, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, 'c', colorRol[1], colorRol);
            practica.getRelationshipLinePracticaODS(svgLineasRelaciones, width, arrayNodosPracticasODS_o, arrayNodosODS, relPos(5, width), x_clickAreaArcoiris, y_clickAreaArcoiris, index, 'o', colorRol[2], colorRol);
          }


        });
      startAngle = endAngle;
      endAngle = arcLenA + endAngle;

      startAngle_ep = endAngle_ep;
      endAngle_ep = arcLenA_ep + endAngle_ep;

      startAngle_centroidePractica = endAngle_centroidePractica;
      endAngle_centroidePractica = arcLenA_centroidePractica + endAngle_centroidePractica;

    }
    /*********************************************
      Renderiza área clickeable "arcoiris" - End
    *********************************************/



    /******************************
     Section 3 - breadcrumb - Start
     //*******************************/
    breadcrumb(svg, width, height, 'Inicio', 'Matríz', '/guia_de_gestion.html', '');
    /******************************
    Section 3 - breadcrumb - End
    *******************************/

    // Título
    svgSubmenuPracticas.append('rect')
      .attr('id', 'pageTitle')
      .attr('x', x_pageTitleBg)
      .attr('y', y_pageTitleBg)
      .attr('rx', radio_small)
      .attr('ry', radio_small)
      .style("fill", "white")
      //.transition()
      //.delay(200)
      .attr('width', w_pageTitleBg)
      .attr('height', h_pageTitleBg);
    svgSubmenuPracticas.append("foreignObject")
      .attr('id', 'pageTitleFO')
      .attr('x', x_pageTitle)
      .attr('y', y_pageTitle)
      .attr("width", w_pageTitle)
      .attr("height", h_pageTitle)
      .html(function (d) {
        return '<div style="' + style_pageTitle + '"><p align="left">' + practicasLabel[currentPractica] + '</p></div>'
      })/** */

    var x_mainCircle = relPos(1920, width);
    var y_mainCircle = relPos(180, width);
    var r_mainCircle = relPos(120, width);
    var fontSize_mainCircle = relPos(150, width);
    var fontSize_mainCircle_nivel = relPos(25, width);
    var style_mainCircle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_mainCircle + 'px;color:#ffffff;';
    var style_mainCircle_nivel = 'font-family:' + fontFamily_pageTitle + ';font-size:' + fontSize_mainCircle_nivel + 'px;color:#ffffff;';
    svgSubmenuPracticas.append('circle')
      .attr('id', 'main_circle')
      .attr('cx', x_mainCircle)
      .attr('cy', y_mainCircle)
      .attr('r', r_mainCircle)
      //.style("fill", "purple")
      .style("fill", practicasColor[currentPractica])
      .attr('opacity', 1);
    svgSubmenuPracticas.append("foreignObject")
      .attr('id', 'main_circle_number')
      .attr('x', x_mainCircle - (r_mainCircle * 0.75))
      .attr('y', y_mainCircle - (r_mainCircle * 0.8))
      .attr("width", r_mainCircle * 2)
      .attr("height", r_mainCircle * 2)
      .html(function (d) {
        return '<div style="' + style_mainCircle + '">' + (currentPractica + 1) + '</div>'
      });
    svgSubmenuPracticas.append("foreignObject")
      .attr('id', 'main_circle_number')
      .attr('x', x_mainCircle - (r_mainCircle * 0.6))
      .attr('y', y_mainCircle + (r_mainCircle * 0.5))
      .attr("width", r_mainCircle * 2)
      .attr("height", r_mainCircle * 2)
      .html(function (d) {
        return '<div style="' + style_mainCircle_nivel + '">Nivel</div>'
      });

    var x_backCircle = relPos(1720, width);
    var y_backCircle = y_mainCircle + relPos(40, width);
    var r_backCircle = relPos(60, width);
    var fontSize_backCircle = relPos(75, width);
    var style_backCircle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_backCircle + 'px;color:#ffffff;';
    if (currentPractica > 0) {
      svgSubmenuPracticas.append('circle')
        .attr('id', 'back_circle')
        .attr('cx', x_backCircle)
        .attr('cy', y_backCircle)
        .attr('r', r_backCircle)
        .style("fill", practicasColor[currentPractica - 1])
        .attr("filter", "url(#shadowFilter)")
        .attr('opacity', 1);
      svgSubmenuPracticas.append("foreignObject")
        .attr('id', 'main_circle_number')
        .attr('x', x_backCircle - (r_backCircle * 0.65))
        .attr('y', y_backCircle - (r_backCircle * 0.8))
        .attr("width", r_backCircle * 2)
        .attr("height", r_backCircle * 2)
        .html(function (d) {
          return '<div style="' + style_backCircle + '"><' + (currentPractica) + '</div>'
        });
      svgSubmenuPracticas.append('circle')
        .attr('id', 'back_circle_area')
        .attr('cx', x_backCircle)
        .attr('cy', y_backCircle)
        .attr('r', r_backCircle)
        .style("fill", "transparent")
        .attr('opacity', 1)
        .style("cursor", "pointer")
        .on('mouseover', function () {
          d3.select('#back_circle')
            .transition()
            .duration(100)
            .attr('r', r_nextCircle + relPos(3, width));
        })
        .on('mouseout', function (i) {
          d3.select('#back_circle')
            .transition()
            .duration(100)
            .attr('r', r_nextCircle - relPos(3, width));
        })
        .on('click', function () {
          d3.select('#rectWhiteFade')
            .attr("height", height)
            .transition()
            .duration(durationAnim)
            .attr('opacity', 1);
          setTimeout(function () {
            //console.log(practicasLink[currentPractica-1])
            window.location.href = '/' + practicasLink[currentPractica - 1];
          }, timeOut)
        });
    }

    if (currentPractica < 5) {
      var x_nextCircle = relPos(1830, width);
      var y_nextCircle = y_mainCircle + relPos(180, width);
      var r_nextCircle = r_backCircle;
      svgSubmenuPracticas.append('circle')
        .attr('id', 'next_circle')
        .attr('cx', x_nextCircle)
        .attr('cy', y_nextCircle)
        .attr('r', r_nextCircle)
        .style("fill", practicasColor[currentPractica + 1])
        .attr("filter", "url(#shadowFilter)")
        .attr('opacity', 1);
      svgSubmenuPracticas.append("foreignObject")
        .attr('id', 'next_circle_number')
        .attr('x', x_nextCircle - (r_nextCircle * 0.65))
        .attr('y', y_nextCircle - (r_nextCircle * 0.8))
        .attr("width", r_nextCircle * 2)
        .attr("height", r_nextCircle * 2)
        .html(function (d) {
          return '<div style="' + style_backCircle + '">>' + (currentPractica + 2) + '</div>'
        });
      svgSubmenuPracticas.append('circle')
        .attr('id', 'next_circle_area')
        .attr('cx', x_nextCircle)
        .attr('cy', y_nextCircle)
        .attr('r', r_nextCircle)
        .style("fill", "transparent")
        .attr('opacity', 1)
        .style("cursor", "pointer")
        .on('mouseover', function () {
          d3.select('#next_circle')
            .transition()
            .duration(100)
            .attr('r', r_nextCircle + relPos(3, width));
        })
        .on('mouseout', function (i) {
          d3.select('#next_circle')
            .transition()
            .duration(100)
            .attr('r', r_nextCircle - relPos(3, width));
        })
        .on('click', function () {
          d3.select('#rectWhiteFade')
            .attr("height", height)
            .transition()
            .duration(durationAnim)
            .attr('opacity', 1);
          setTimeout(function () {
            //console.log(practicasLink[currentPractica + 1])
            window.location.href = '/' + practicasLink[currentPractica + 1];
          }, timeOut)
        });
    }

    //.transition()
    //.delay(200)




    // Líneas
    // Lines behind the circles

    /******************************
     Brand corner - begin
    *******************************/
    svg.append('rect')
      .attr('id', 'rectWhiteFade')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", 1)
      .attr('opacity', 0)
      .attr("fill", 'white')

    headerCornerLogo(svg, width, heightCorrected);
    /******************************
     Brand corner - end
    *******************************/

    /******************************
     Sidebar - begin
    *******************************/
    getSideBarLines(svg, width);
    getSideBarPracticasFome(svg, width, specialHeight, styles.grow);

    /******************************
    Sidebar - End
    *******************************/

    /******************************
      Botón cómo usar - Begin
    *******************************/
      practica.getcomoUsar(svg, width, height);
    /******************************
      Botón cómo usar - End
    *******************************/


  }

  render() {


    return (
      <div className={styles.container}>
        <div className={styles.container}>
          <div ref={this.main}></div>
          <FooterGuia />
        </div>
      </div>
    )
  }

}

export default Etapas;