import styles from '../styles/Home.module.css'
import React from 'react'
import * as d3 from 'd3'
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../functions/referenceSize";
import { getTimeOut, getDurationAnim, getMenuIndex, getSideBarLines } from "../functions/sideBar";
import { behindHorizontalLine, curvedLine, menuCircles, breadcrumb, headerCornerLogo, gradients, setTriangle, shadowFilters, shadowFiltersReverse } from "../functions/headerMenu";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  getOs = () => {
    const os = [
      'Android',
      'webOS',
      'iPhone',
      'iPad',
      'iPod',
      'BlackBerry',
      'Windows Phone',
      'Windows',
      'Linux',
      'Mac'
    ]; // add your OS values
    return os.find(v => navigator.appVersion.indexOf(v) >= 0);
  }

  main = (element) => {
    // Obtiene el tamaño de la pantalla en uso
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
    // En base a una resolución de pantalla de W:1920 H:1080
    const refWidth = getReferenceSizeWidth();
    const refHeight = getReferenceSizeHeight();
    const aspectRatio = width / height;
    const aspectRatioRef = refWidth / refHeight;
    var heightCorrected = Math.round((refHeight * width) / refWidth);

    const w_nodePrimary = rp(192, 'x', width, height);
    const w_nodeSecundary = rp(128, 'x', width, height);
    const x_nodeUp = rp(67.36, 'x', width, height); // x_node_1
    const y_nodeUp = rp(201.56, 'x', width, height); // x_node_1
    const x_nodeMiddle = rp(96, 'x', width, height); // x_node_1
    const y_nodeMiddle = rp(417.57, 'x', width, height); // x_node_1
    const x_nodeDown = rp(96, 'x', width, height); // x_node_2
    const y_nodeDown = rp(568.55, 'x', width, height); // x_node_2

    const w_guiaIntro = rp(640, 'x', width, height);
    const x_guiaIntro = rp(288.28, 'x', width, height);
    const y_guiaIntro = rp(164.11, 'x', width, height);

    const w_practicasIntro = rp(365.71, 'x', width, height);
    const x_practicasIntro = rp(1043.47, 'x', width, height);
    const y_practicasIntro = rp(48.25, 'x', width, height);

    const w_etapaIntro = rp(365.71, 'x', width, height);
    const x_etapaIntro = rp(914.28, 'x', width, height);
    const y_etapaIntro = rp(561.04, 'x', width, height);

    const w_nodeIntro = rp(320, 'x', width, height);
    const x_nodeIntro = rp(213.33, 'x', width, height);
    const y_nodeIntro = rp(266.61, 'x', width, height);

    const durationAnim = getDurationAnim();
    const timeOut = getTimeOut();

    //const heightCorrected = Math.round(width / aspectRatio);
    if (height > width) {
      heightCorrected = Math.round((refHeight * width) / refWidth);
    }

    console.log('width ' + width + ' height ' + height + ' heightCorrected ' + heightCorrected);

    //alert(this.getOs());

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
      5,
      0,
      0,
      0,
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
      0,
      0,
      0,
      0,
      0, //20
      0,
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

    //Recalcula las variables cada magnitud absoluta utilizada para posicionar o dar tamaño a elementos SVG
    for (let i = 0; i < divH.length; i++) {
      divHR[i] = (divH[i] * heightCorrected) / refHeight;
    }
    for (let i = 0; i < divW.length; i++) {
      divWR[i] = divW[i] * resizeRatioWidth;
    }



    /**/
    const data = {
      "nodes": [
        {
          "name": 1,
          "fillColor": "red",
          "url": "/img/repositorio_web-01.png"
        },
        {
          "name": 2,
          "fillColor": "blue",
          "url": "/img/repositorio_web-02.png"
        },
        {
          "name": 3,
          "fillColor": "green",
          "url": "/img/repositorio_web-03.png"
        },
      ],
      "links": [
        {
          "source": 1,
          "target": 2,
        },
        {
          "source": 2,
          "target": 3,
        },
        {
          "source": 3,
          "target": 1,
        },
      ]
    }
    const svg = d3.select(element)
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + width + " " + heightCorrected)
      //class to make it responsive
      .classed("svg-content-responsive", true);

    gradients(svg);
    shadowFilters(svg);
    shadowFiltersReverse(svg);


    const defs = svg.append("defs").append("linearGradient")
      .attr("id", "bgLinGrad")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    defs.append('stop')
      .attr('style', 'stop-color:#3D2C63;stop-opacity:0.8')
      .attr('offset', '50%');

    defs.append('stop')
      .attr('style', 'stop-color:#155180;stop-opacity:1')
      .attr('offset', '100%');

    defs.append("radialGradient")
      .attr("id", "bgRadGrad")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%")
      .attr("fx", "50%")
      .attr("fy", "50%")
    defs.append('stop')
      .attr('style', 'stop-color:rgb(253, 253, 253);stop-opacity:1')
      .attr('offset', '47%')
    defs.append('stop')
      .attr('style', 'stop-color:rgb(204, 204, 204);stop-opacity:1')
      .attr('offset', '100%')


    


    // header white
    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", heightCorrected / 7.25)
      .attr("fill", "white")

    // footer white
    svg.append("rect")
      .attr("x", 0)
      .attr("y", heightCorrected - (heightCorrected / divH[0]))
      .attr("width", width)
      .attr("height", heightCorrected / divH[0])
      .attr("fill", "white")


    //header image
    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-05.png")
      .attr("x", width / divWR[0])
      .attr("y", heightCorrected / divH[2])
      .attr("width", width / 3.8)
/*
    var svg_path_d = 'M238.06,425.937L238.06,378.095L356.735,331.437L238.06,285.286L238.06,237.782L408.127,311.32L408.127,351.892L238.06,425.937Z';
    svg.append("path")
      .attr("id", "mayor")
      .attr("transform", "scale(1)")
      .attr("transform", "translate(" + rp(490, 'x', width, height) + "," + rp(150, 'x', width, height) + ")")
      .attr("d", svg_path_d)
      .style("fill", "url(#bgLinGradB)")
      .style("stroke", "none")

    svg.append("path")
      .attr("id", "mayor")
      .attr("transform", "scale(1)")
      .attr("transform", "translate(" + rp(950, 'x', width, height) + "," + rp(150, 'x', width, height) + ")")
      .attr("d", svg_path_d)
      .style("fill", "url(#bgLinGradB)")
      .style("stroke", "none")/**/

    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-06.png")
      .attr("x", width / divWR[0])
      .attr("y", heightCorrected - heightCorrected / divH[1])
      .attr("width", width / 7)
    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/centro_innocacion_anacleto.png")
      .attr("x", width / divWR[23])
      .attr("y", heightCorrected - heightCorrected / divH[1])
      .attr("width", width / 6.2)

    //footer image
    svg.append("image")
      .attr("xlink:href", window.location.origin + "/img/repositorio_web-07.png")
      .attr("x", width - width / divW[2])
      .attr("y", heightCorrected - heightCorrected / divH[1])
      .attr("width", width / 6.34)

    getMenuIndex(svg, width, height, styles.grow);

  }
  render() {

    return (
      <>
        <div ref={this.main} className={styles.containerRoot}></div>
      </>

    )
  }

};
export default Home;