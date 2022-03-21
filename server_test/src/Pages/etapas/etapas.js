import React, { Component } from "react";
import styles from '../../styles/Home.module.css';
import FooterGuia from "../components/FooterGuia";
import { breadcrumb, headerCornerLogo, gradients, shadowFilters, shadowFiltersReverse, setLinkRef, setPointerPositionTooltip } from "../../functions/headerMenu";
import * as etapa from "../../functions/etapas";
import { getReferenceSizeWidth, getReferenceSizeHeight, rp, relPos } from "../../functions/referenceSize";
import * as d3 from 'd3';
import { getSideBarEtapasFome, getTimeOut, getSideBarLines, getDurationAnim } from "../../functions/sideBar";
import { setHtmlText, setHtmlTextLink, updateHtmlText } from "../../functions/htmlText";
import { OpenGraph, MetaData } from "../../functions/metaTags";
import { select } from "d3";

class Etapas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // shadow stuff:
    shadow(svg, x, y, w, h, rx, ry, id) {
        //var g1 = svg.append('g');
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
            .attr("id", id)
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
    gradientRect(svg, x, y, w, h, rx, ry, id, border, bg) {
        if (window.innerHeight > window.innerWidth) {
            var width = window.innerWidth
            var height = (941 / 1920) * window.innerWidth
        } else {
            var width = window.innerWidth
            var height = window.innerHeight
        }
        /*var svgDefs = svg.append('defs');
        var mainGradient = svgDefs.append('linearGradient')
            .attr('id', 'mainGradient');

        mainGradient.append('stop')
            .attr('class', 'sen-stop-left')
            .attr('offset', '0')

        mainGradient.append('stop')
            .attr('class', 'sen-stop-right')
            .attr('offset', '1');/**/

        svg.append('rect')
            //.classed('outlined', true)
            .attr('stroke', border) //bgLinGradA
            .attr('stroke-width', height / 250)
            .attr("fill", "none")
            .attr('x', x)
            .attr('y', y)
            .attr('width', w)
            .attr('height', h)
            .attr("rx", rx)								// radius
            .attr("ry", ry)/**/

        svg.append('rect')
            .attr("id", id)
            .attr('fill', bg) //bgLinGradA
            //.attr("fill", "white")
            .attr('x', x)
            .attr('y', y)
            .attr('width', w)
            .attr('height', h)
            .attr("rx", rx)								// radius
            .attr("ry", ry);
    }

    main = (element) => {
        // Obtiene el tamaño de la pantalla en uso
        const width = window.innerWidth;
        var height = window.innerHeight;
        // Calcula el height adecuado para mantener el aspect ratio frente a cualquier resolución
        // En base a una resolución de pantalla de W:1920 H:1080
        const refWidth = 1920;
        const refHeight = 941;
        const specialHeight = 2600;
        var heightCorrected = Math.round((refHeight * width) / refWidth);
        //const heightCorrected = Math.round(width/aspectRatio);
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
        shadowFiltersReverse(svg);

        /****************************************
         Contenido de etapas - begin
        ****************************************/

        /*
        var arcSegmentEtapas = [
            'M385.548,130.135C361.366,129.025 337.19,134.164 317.8,142.25L354.332,229.849C362.148,226.589 369.76,223.909 381.639,223.945L385.548,130.135Z',
            'M458.278,132.989C439.159,123.72 408.803,119.079 387.584,117.978L381.632,224.971C390.185,225.415 399.253,227.595 406.959,231.331L458.278,132.989Z',
            'M526.148,167.211C512.017,150.255 485.511,126.035 465.744,116.214L407.515,231.604C415.483,235.563 422.539,241.137 428.235,247.972L526.148,167.211Z',
            'M585.695,233.269C579.961,211.636 559.726,171.456 545.657,154.05L428.843,248.713C434.514,255.729 438.639,263.863 440.95,272.583L585.695,233.269Z',
            'M613.897,325.777C615.297,317.256 616,287.635 616,279C616,265.54 612.291,241.134 608.913,228.104L441.039,272.919C442.4,278.171 443.089,283.575 443.089,289C443.089,292.481 442.805,295.955 442.241,299.39L613.897,325.777Z',
            'M600.922,434.252C619.792,408.167 635.848,360.851 639.596,331.545L442.12,300.103C440.609,308.69 437.362,316.88 432.577,324.169L600.922,434.252Z',
            'M539.608,537.342C581.338,508.826 612.593,468.89 624.481,451.408L431.997,325.038C427.205,332.085 421.056,338.105 413.909,342.747L539.608,537.342Z',
            'M428.843,612.273C484.983,603.983 536.709,577.055 555.574,565.008L413.493,343.015C405.889,347.871 397.345,351.066 388.421,352.393L428.843,612.273Z',
            'M283.195,640.675C305.508,649.21 372.298,659.49 432.577,649.475L387.856,352.474C384.922,352.883 381.963,353.089 379,353.089C373.448,353.089 367.919,352.367 362.552,350.942L283.195,640.675Z',
            'M120.855,602.681C139.793,620.646 220.439,669.002 271.555,682L361.489,350.65C352.977,348.232 345.058,344.078 338.231,338.45L120.855,602.681Z'
        ];/**/
        var arcSegmentEtapasColor = [
            'rgb(96,52,255)',
            'rgb(121,90,255)',
            'rgb(153,128,250)',
            'rgb(250,89,28)',
            'rgb(245,121,70)',
            'rgb(247,148,114)',
            'rgb(0,237,107)',
            'rgb(0,255,139)',
            'rgb(87,255,178)',
            'rgb(154,255,207)'
        ];
        var arcSegmentEtapasLabel = [
            ['NECESIDAD'],
            ['SOLICITUD DEL PEDIDO'],
            ['FUENTES DE APROVISIONAMIENTO'],
            ['CREACIÓN Y SEGUIMIENTO DE ORDEN DE COMPRA/CONTRATO'],
            ['EJECUCIÓN DEL SERVICIO DE ADMINISTRACIÓN DEL CONTRATO'],
            ['RECEPCIÓN DE MERCANCÍAS Y RECEPCIÓN DEL SERVICIO'],
            ['RECEPCIÓN DE FACTURAS'],
            ['VERIFICACIÓN DE FACTURAS'],
            ['PROCESO DE PAGO'],
            ['EVALUACIÓN Y CIERRE'],
        ];
        const arcSegmentEtapasLabelSize = [
            rp(16 + 10, 'x', width, height),
            rp(17.6 + 15, 'x', width, height),
            rp(19.2 + 20, 'x', width, height),
            rp(20.8 + 25, 'x', width, height),
            rp(22.4 + 30, 'x', width, height),
            rp(25.6 + 35, 'x', width, height),
            rp(27.2 + 40, 'x', width, height),
            rp(28.8 + 45, 'x', width, height),
            rp(30.4 + 50, 'x', width, height),
            rp(32 + 55, 'x', width, height),
        ];
        var arcSegmentEtapasDescription = [
            ['Identificación y formulación de necesidades de aprovisionamiento de productos y servicios, desde la experiencia de distintas áreas de la compañía.'],
            ['Formalización de las condiciones administrativas, operacionales, técnicas y de gestión de comportamientos éticos, de probidad y transparencia asociados al requerimiento de producto y/o servicio para la licitación a proveedores.'],
            ['Identificación de perfiles y tipos de proveedores posibles para satisfacer los requerimientos del pedido del producto/servicio y que puedan ser invitados a la licitación y/o contrato directo.'],
            ['Formalización de los tiempos, presupuesto, condiciones, requerimientos técnicos, procesos administrativos y de gestión que regirán la prestación o ejecución del producto o servicio.'],
            ['Proceso de ejecución material del servicio y/o producto contratado y de las etapas administrativas asociadas a la implementación definida en el contrato.'],
            ['Proceso de recepción formal del servicio y/o producto ejecutado en función de los tiempos y requerimientos definidos.'],
            ['Recepción de facturas de acuerdo a los plazos y modalidades de pago establecidos.'],
            ['Verificación de conformidad del cumplimiento de las especificaciones del producto y/o servicio, así como los aspectos administrativos asociados.'],
            ['Pago de productos y servicios contratados.'],
            ['Etapa que promueve la identificación de aprendizajes y deltas de mejoras asociadas a la experiencia de aprovisionamiento.'],
        ];
        var arcSegmentEtapasRolMandante = [
            ['Define la necesidad en función de sus objetivos y procedimientos de la compañía, ya sea a nivel de productos o servicios, identificando los aspectos claves de la gestión.'],
            ['Formaliza las necesidades detectadas, de acuerdo con sus procedimientos internos, cuidando que éstas respeten la legislación, las políticas de la compañía, los impactos ASG asociados y los estándares en sus distintos niveles de aplicación para proveedores, productos y servicios.'],
            ['Identifica perfiles de proveedores potenciales a participar en la licitación y/o contrato directo, en función de las necesidades formalizadas y la elaboración de requerimientos acordes a las necesidades y políticas de la compañía.'],
            ['Define y formaliza los requerimientos específicos del producto o servicio adjudicado, considerando los aspectos del cumplimiento de la legalidad existente en torno a: ética/probidad y resolución de conflictos, aspectos sociales, de DD.HH., laborales y ambientales.'],
            ['Acuerda metodologías de trabajo en conjunto con el proveedor para analizar los procesos en la búsqueda de oportunidades y prevención de riesgos asociados al proyecto, así como el monitoreo de los impactos ambientales, sociales y de gobernanza.'],
            ['Recibe los bienes y/o servicios de acuerdo con los requerimientos formales del contrato, derivados de un trabajo conjunto, coordinado y eficiente con el proveedor.'],
            ['Entrega de la Hoja Entrada Servicios (HES) y, en caso de que no se entregara anteriormente, de la Orden de Compra (OC), en conjunto con las instrucciones y canales necesarias para que el proveedor pueda facturar de manera fluida, incluyendo los contactos para hacer seguimiento a la factura y el pago.'],
            ['Valida, mediante firma, la recepción conforme del trabajo realizado, quedando de esta manera autorizado el pago frente a posibles otras firmas administrativas, que requieran acompañar la firma del jefe de proyecto.'],
            ['Verifica del pago efectivo al proveedor.'],
            ['Revisa en conjunto con el proveedor dinámicas de trabajo compartido, a fin de identificar los aprendizajes obtenidos y aspectos de mejora para ambas partes.'],
        ];
        var arcSegmentEtapasRolProveedor = [
            ['Identifica las distintas oportunidades y canales de contacto digitales y presenciales necesarios, para posicionarse como una alternativa posible.'],
            ['Optimiza la definición de sus productos y servicios, tanto a nivel técnico como comunicacional, con el fin de potenciar su perfil de proveedor.'],
            ['Realiza las gestiones necesarias para estar vigente como una alternativa frente a las necesidades del mandante.'],
            ['Gestiona el conjunto de documentaciones necesarias para responder a los aspectos formales del contrato y de cumplimiento legal relativo a temáticas laborales, de DD.HH., trabajo infantil, trabajo esclavo y libertad de asociación.'],
            ['Ejecuta los aspectos operativos del servicio y/o producto, identificando los puntos claves del requerimiento del mandante, a fin de enriquecer de manera proactiva la necesidad de su cliente, yendo más allá del requerimiento y abordándolo desde una actitud de mejora continua.'],
            ['Genera valor para el mandante a partir de la gestión eficiente del cumplimiento contractual del servicio y/o producto contratado, tanto a nivel formal como técnico.'],
            ['Antes del envío de la factura, verifica que ésta corresponda al detalle de lo definido en la OC. Entender el procedimiento de pago de factura: contactos, mecanismos y procedimientos utilizados para el pago con el que cuenta la empresa. Procura el envío oportuno de la factura.'],
            ['Valida la firma de verificación de factura y, en base a su conocimiento de los procedimientos de la empresa, inicia el seguimiento de ésta.”'],
            ['Recibe el pago a conformidad.'],
            ['Revisa en conjunto con el mandante dinámicas de trabajo compartido, con el fin de identificar los aprendizajes obtenidos y los aspectos de mejora para ambas partes.'],
        ];
        var arcSegmentEtapasRiesgoAsociado = [
            ['Ausencia en la definición clara de la necesidad, a partir de variables y requisitos que permitan prevenir riesgos e impactos negativos en los ámbitos ambientales, sociales o de gobernanza.'],
            ['Formulación de pedido sin considerar cómo el proveedor recibe y entiende la necesidad de la compañía. Desconocimiento de las capacidades de autonomía, tiempos de respuesta, innovación y reacción ante imprevistos por parte del proveedor. Incurrir en la mala práctica de invisibilizar al proveedor como contraparte activa del proyecto.'],
            ['Deficiente identificación del perfil del proveedor que impacta en la viabilidad, eficiencia, oportunidad, costos y tiempos del proyecto. Incurrir en malas prácticas de: '],
            ['Incurrir en malas prácticas:<br>1. Inicio del proyecto sin firma del contrato, corriendo el riesgo de que el proveedor no cubra los requerimientos de cumplimiento de la legalidad vigente, el proveedor queda sujeto a las condiciones que le imponga el contrato que se firmará posteriormente al inicio del proyecto. ' +
                '<br>2. Se corre el riesgo de que el proveedor no esté de acuerdo con el contrato y abandone el proyecto. ' +
                '<br>3. Se corre el riesgo de que el mandante cambie las condiciones del proyecto ya en desarrollo.'],
            ['Funcionamiento unidireccional, donde el mandante define y el proveedor acata. Se consideran malas prácticas: malentendidos, descoordinaciones y ausencia de espacios de innovación que impactan en la pérdida de oportunidades, en la optimización de recursos, en la optimización de tiempos y rendimiento financiero.'],
            ['La ausencia de relación colaborativa entre mandante y proveedor impacta en la consecución de resultados no deseados, los que generan costos en plazos, calidad, oportunidad de la satisfacción de necesidades y presupuesto.'],
            ['Generación de demoras en el proceso de pago que implique que esté fuera de los plazos que establece la normativa. Incurrir en malas prácticas de búsqueda de resquicios que demoren el pago.'],
            ['Existencia de situaciones que deterioran la relación construida con el proveedor. Malas prácticas: demoras en la emisión de la HES, facturas mal emitidas, retrasos en firmas adicionales al jefe de proyecto.'],
            ['Incurrir en malas prácticas como la demora en el pago por falta de claridad en requerimientos administrativos a cumplir por el proveedor.'],
            ['No identificar aprendizajes, posibilidades de innovación y de mejora. Incurrir en malas prácticas que impidan el desarrollo conjunto del mandante y el proveedor.'],
        ];
        var arcSegmentEtapasOportunidadGestionMandante = [
            ['Contar con un cuerpo de conocimiento sistematizado que permita seleccionar proveedores. Estructurar la necesidad a partir de las variables y destrezas claves para el proyecto, considerando las normativas, políticas de la compañía, código de ética, tiempos de respuesta y consideraciones respecto de tamaño y localización geográfica del proveedor, entre otros.'],
            ['Definir proyectos que posibiliten la optimización de los resultados a obtener en términos de la proactividad, tiempos de respuesta, innovación y rendimiento financiero.'],
            ['Trabajar con proveedores en modalidad de equipo, que posibilite la integración de nuevos puntos de vista para la optimización de los resultados, proactividad, innovación y mejores rendimientos financieros.'],
            ['Construir las bases de relación y vínculo positivo entre el mandante y el proveedor. Definir espacios de coordinación de expectativas, canales de comunicación, oportunidades, prevención y optimización del proyecto. Definir procesos de mediación y resolución de conflictos.'],
            ['Generar eficiencia operacional a partir de una relación de beneficio mutuo con el proveedor en donde la innovación, la flexibilidad y los aprendizajes conjuntos permiten un impacto positivo a nivel financiero.'],
            ['Generar un cierre de proyecto de manera eficiente que fortalezca la relación entre mandante y proveedor.'],
            ['Generar un cierre de proyecto de manera eficiente, que fortalezca la relación entre mandante y proveedor.'],
            ['Mantener y consolidar la relación con el proveedor, siguiendo el proyecto hasta el momento del pago como un aspecto importante dentro del cierre.'],
            ['Seguimiento de facturas y/o pagos que propicien un cierre oportuno.'],
            ['Generar un enfoque de gestión basado en la mejora continua, que produzca impactos positivos en la optimización de los procesos y en la gestión de los recursos de manera eficiente, innovadora y con una visión de largo plazo.    '],
        ];
        var arcSegmentEtapasOportunidadGestionProveedor = [
            ['Fortalecer su elegibilidad como proveedor, optimizando sus procesos y el tratamiento de sus riesgos e impactos. Esto genera una oferta de valor estratégica para el potencial proveedor.'],
            ['Generar aprendizajes técnicos y de gestión, evolución y desarrollo como empresa, además de sensibilización frente a las necesidades del mandante.'],
            ['Establecer relaciones de colaboración con el mandante, que potencien el acceso a aprendizajes de la empresa contratante  que impacten en su estrategia, crecimiento, innovación y productividad.'],
            ['Construir las bases de relación y vínculo positivo entre el mandante y el proveedor. Definir espacios de coordinación de expectativas, canales de comunicación, oportunidades, prevención y optimización del proyecto. Definir procesos de mediación y resolución de conflictos.'],
            ['Adquirir y profundizar conocimientos y aprendizajes, como consecuencia del trabajo en conjunto y proactivo con el mandante, accediendo a experiencias de calidad que contribuyan al desarrollo de su negocio y aportando a su reputación.'],
            ['Adquirir y profundizar conocimientos y aprendizajes, como consecuencia del trabajo en conjunto y proactivo con el mandante, accediendo a experiencias de calidad que contribuyan al desarrollo de su negocio y aportando a su reputación.'],
            ['Cerrar positivamente el proyecto, tanto a nivel ejecucional como administrativos, fortaleciendo la relación con el mandante y una validación positiva mutua.'],
            ['Considerar los aspectos de facturación, verificación y pago como parte del proyecto, desarrollando una actitud proactiva frente al mandante en términos de los procedimientos necesarios para el pago.'],
            ['Recibir pagos en los tiempos y montos acordados.'],
            ['Consolidar los aprendizajes obtenidos identificando aspectos de mejora tanto a nivel de sus procesos administrativos, de su relación con clientes y de la ejecución de la tarea. Todo lo anterior a fin de tomar acciones que permitan fortalecer su desarrollo y crecimiento como empresa.'],
        ];
        var arcSegmentEtapasKPISugerido = [
            ['100% de formalización de necesidades y/o destrezas claves para el proyecto, bienes o servicios, de acuerdo a las normativas, políticas de la compañía, código de ética, tiempos de respuesta y detalles respecto de tamaño y localización geográfica del proveedor, entre otros.'],
            ['El 100% de los trabajadores del proveedor involucrados en la gestión del proyecto, deben tener sus leyes sociales y contratos al día para poder postular al proyecto.'],
            ['Verificar el 100% de potenciales proveedores en el cumplimiento de leyes sociales, remuneraciones y contratos en regla. Incorporar la variable de equidad de género. Determinar la incidencia de la medición de huella de carbono y código de ética en proveedores.'],
            ['100% de proveedores con orden de compra o contrato firmado al inicio de la ejecución del servicio o producto.'],
            ['Existencia de formatos o sistemas de registro que den cuenta de las distintas instancias de la relación con el proveedor, a fin de construir trazabilidad de los procesos para poder comparar experiencias y desempeños.'],
            ['Existencia de formatos o sistemas de registro que den cuenta de las distintas instancias de la relación con el proveedor, a fin de construir trazabilidad de los procesos para poder comparar experiencias y desempeños.'],
            ['Existencia de plazo a cumplir entre recepción, verificación de factura y pago.'],
            ['Existencia de plazo a cumplir entre recepción, verificación de factura y pago.'],
            ['100% de pago máximo a 30 días.'],
            ['100% de proyectos con instancias de cierre, identificando aprendizajes y aspectos de mejora.”'],
        ];

        var arcSegmentEtapasIndicadorGRI = [
            ['102 - 9. Cadena de Suministro. '],
            ['-'],
            ['204 - 1. Proporción de gasto en proveedores locales<br>' +
                '308 - 1. Nuevos proveedores que han pasado filtros de evaluación y selección de acuerdo con los criterios ambientales<br>' +
                '407 - 1. Operaciones y proveedores cuyo derecho a la libertad de asociación y negociación colectiva podría estar en riesgo<br>' +
                '408 - 1. Operaciones y proveedores con riesgo significativo de casos de trabajo infantil<br>' +
                '409 - 1. Operaciones y proveedores con riesgo significativo de casos de trabajo forzoso u obligatorio<br>' +
                '412 - 1. Operaciones sometidas a revisiones o evaluaciones de impacto sobre los derechos humanos<br>' +
                '414 - 1. Nuevos proveedores que han pasado filtros de selección de acuerdo con los criterios sociales<br>'],
            ['414-1. Nuevos proveedores que han pasado filtros de selección de acuerdo con los criterios sociales.'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
        ];
        var arcSegmentEtapasIndicadorGRIDescripcion = [
            ['Descripción de la cadena de suministros de la organización, incluidos los elementos principales relacionados con las actividades, marcas principales, productos y servicios de la organización.'],
            ['-'],
            ['1. Porcentaje de nuevos proveedores evaluados y seleccionados de acuerdo con los criterios ambientales.' +
                '<br>2. Las operaciones y los proveedores en los que los derechos de los trabajadores a ejercer la libertad de asociación y la negociación colectiva puedan infringirse o corran riesgo significativo en cuanto a alguno de los siguientes puntos: el tipo de operación (como una planta de fabricación) y el proveedor: los países o las áreas geográficas con operaciones y proveedores que se considere que están en riesgo.' +
                '<br>3. Las medidas adoptadas por la organización en el período objeto del informe y dirigidas a apoyar el derecho a ejercer la libertad de asociación y negociación colectiva.' +
                '<br>4. Operaciones y proveedores que se ha considerado que corren un riesgo significativo de presentar casos de: trabajo infantil, trabajadores jóvenes expuestos a trabajo peligroso.' +
                '<br>5. Operaciones y proveedores que corran un riesgo significativo de presentar casos de trabajo infantil en cuanto a: tipo de operación(como una planta de fabricación) y proveedor; países o áreas geográficas con operaciones y proveedores que se considere que están en riesgo.' +
                '<br>6. Las medidas adoptadas por la organización en el período objeto del informe y que tengan por objeto contribuir con la abolición del trabajo infantil.' +
                '<br>7. Operaciones y proveedores que corran un riesgo significativo de presentar casos de trabajo forzoso u obligatorio en cuanto a: tipo de operación (como una planta de fabricación) y proveedor; países o áreas geográficas con operaciones y proveedores que se considere que están en riesgo.' +
                '<br>8. Las medidas adoptadas por la organización en el período objetivo del informe y que tengan como finalidad contribuir a la abolición de todas las formas de trabajo forzoso u obligatorio.' +
                '<br>9. Número total y el porcentaje de las operaciones sometidas a evaluación de derechos humanos, o evaluaciones del impacto en los derechos humanos por país.'],
            ['Porcentaje de nuevos proveedores evaluados y seleccionados de acuerdo con los criterios sociales.'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
        ];

        var arcSegmentEtapasRolCompartido = [
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['Revisar en conjunto con el proveedor dinámicas de trabajo compartido, a fin de identificar los aprendizajes obtenidos, identificando aspectos de mejora contínua para ambas partes.'],
        ];
        var arcSegmentEtapasOportunidadGestionCompartido = [
            ['-'],
            ['-'],
            ['-'],
            ['Construcción de las bases de relación y vínculo positivo entre el mandante y el proveedor. Definición de espacios de coordinación de expectativas, canales de comunicación, oportunidades, prevención y optimización del proyecto. Definición de procesos de mediación y resolución de conflictos.'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
            ['-'],
        ];
        const conenidoEtapasRol = [];
        conenidoEtapasRol['arcSegmentEtapasDescription'] = arcSegmentEtapasDescription;
        conenidoEtapasRol['arcSegmentEtapasRolMandante'] = arcSegmentEtapasRolMandante;
        conenidoEtapasRol['arcSegmentEtapasRolProveedor'] = arcSegmentEtapasRolProveedor;
        conenidoEtapasRol['arcSegmentEtapasRiesgoAsociado'] = arcSegmentEtapasRiesgoAsociado;
        conenidoEtapasRol['arcSegmentEtapasOportunidadGestionMandante'] = arcSegmentEtapasOportunidadGestionMandante;
        conenidoEtapasRol['arcSegmentEtapasOportunidadGestionProveedor'] = arcSegmentEtapasOportunidadGestionProveedor;
        conenidoEtapasRol['arcSegmentEtapasKPISugerido'] = arcSegmentEtapasKPISugerido;
        conenidoEtapasRol['arcSegmentEtapasIndicadorGRI'] = arcSegmentEtapasIndicadorGRI;
        conenidoEtapasRol['arcSegmentEtapasIndicadorGRIDescripcion'] = arcSegmentEtapasIndicadorGRIDescripcion;

        //conenidoEtapasRol['arcSegmentEtapasRolCompartido'] = arcSegmentEtapasRolCompartido;
        //conenidoEtapasRol['arcSegmentEtapasOportunidadGestionCompartido'] = arcSegmentEtapasOportunidadGestionCompartido;
        /****************************************
         Contenido de etapas - end
        ****************************************/

        // Estados
        var selectedRol = 2;
        var etepaClickeada = window.location.hash.substring(1);
        var selectedEtapa = 0;
        //if (etepaClickeada+1 > etepaClickeada)
        if (etepaClickeada.length > 0)
            selectedEtapa = etepaClickeada - 1;

        /*****************************************
         Posicionamiento y tamaño relativo - Begin
        *****************************************/

        //const translatex_e = rp(1200, 'x', width, height);
        //const translatey_e = rp(195, 'y', width, height);
        const translatex_e = rp(990, 'x', width, height);
        const translatey_e = rp(0, 'y', width, height);
        const scale_segments = rp(1.35, 'x', width, height);

        const radio_big = rp(20, 'x', width, height);
        const radio = rp(40, 'x', width, height);
        const radio_small = rp(20, 'x', width, height);

        const translatex = width - width * 0.35;
        const translatey = height * 0.45;
        const widthEtapas = width - (width * 0.1);
        const heightEtapas = height - (height * 0.1);
        //const etapas = d3.select("#container").append("svg").attr("width", widthEtapas).attr("height", heightEtapas);

        // Posición y tamaño etapas "caracol"
        var outerRadius = rp(50, 'x', width, height);//110;
        var innerRadius = rp(100, 'x', width, height);//100;
        var arcPad = 0.05223;
        var startAngle = 0;
        var arcLen = 0.44857; //0.47097
        var endAngle = 0.44857;


        // Posición y tamaño de línea
        let line_one_stroke_width = rp(10, 'x', width, height);
        const line_one = 'M161.003,394.672C184.333,394.672 147.704,394.672 211.003,394.672C229.105,394.672 258.415,280.672 276.517,280.672L1041.13,280.672C1043.27,280.672 1062.85,279.932 1067.84,281.978C1087.81,290.159 1103.01,304.445 1114.57,310.712C1122.9,315.226 1135,324.014 1135,335.672C1135,391.363 1171.96,415.672 1207.97,415.672L1380.03,415.672';

        // Posiciones y tamaño de recuadro de contenido
        var paso_m = 65;
        let paso_m_t = paso;

        // Posición y tamaño de fondo del "contenido" de la matriz de etapas
        //console.log("x_bg_matriz = rp(320, 'x', width, height)" + rp(320, 'x', width, height));
        let x_bg_matriz = rp(475, 'x', width, height); //width/6
        let y_bg_matriz = rp(250, 'y', width, height);
        let width_bg_matriz = rp(768, 'x', width, height); //width/6
        let height_bg_matriz = rp(455, 'y', width, height);
        const contenido_delta = rp(60, 'y', width, height);

        let margen_h = 30;
        let margen_v = 60;

        let pos_m_x = x_bg_matriz + rp(margen_h, 'x', width, height); //350
        let pos_m_y = y_bg_matriz + rp(margen_v, 'x', width, height); //200
        let delta_m_y = rp(20, 'y', width, height); // entre líneas
        let delta_m_v = rp(70, 'y', width, height); // entre párrafos
        let opacity_m = 0;

        // estapasContentFO
        const contentFontSize = rp(18, 'x', width, height);
        const content_w = width_bg_matriz - (2 * margen_h);

        let contentEtapaMandante_h = [];
        contentEtapaMandante_h[0] = rp(1090, 'x', width, height);
        contentEtapaMandante_h[1] = rp(810, 'x', width, height);
        contentEtapaMandante_h[2] = rp(1850, 'x', width, height);
        contentEtapaMandante_h[3] = rp(1200, 'x', width, height);
        contentEtapaMandante_h[4] = rp(810, 'x', width, height);
        contentEtapaMandante_h[5] = rp(740, 'x', width, height);
        contentEtapaMandante_h[6] = rp(810, 'x', width, height);
        contentEtapaMandante_h[7] = rp(710, 'x', width, height);
        contentEtapaMandante_h[8] = rp(600, 'x', width, height);
        contentEtapaMandante_h[9] = rp(740, 'x', width, height);

        let contentEtapaProveedor_h = [];
        contentEtapaProveedor_h[0] = rp(1050, 'x', width, height);
        contentEtapaProveedor_h[1] = rp(760, 'x', width, height);
        contentEtapaProveedor_h[2] = rp(1850, 'x', width, height);
        contentEtapaProveedor_h[3] = rp(1200, 'x', width, height);
        contentEtapaProveedor_h[4] = rp(820, 'x', width, height);
        contentEtapaProveedor_h[5] = rp(750, 'x', width, height);
        contentEtapaProveedor_h[6] = rp(710, 'x', width, height);
        contentEtapaProveedor_h[7] = rp(710, 'x', width, height);
        contentEtapaProveedor_h[8] = rp(600, 'x', width, height);
        contentEtapaProveedor_h[9] = rp(750, 'x', width, height);


        /*let contentEtapaCompartido_h = [];
        contentEtapaCompartido_h[0] = rp(750, 'x', width, height);
        contentEtapaCompartido_h[1] = rp(490, 'x', width, height);
        contentEtapaCompartido_h[2] = rp(1750, 'x', width, height);
        contentEtapaCompartido_h[3] = rp(855, 'x', width, height);
        contentEtapaCompartido_h[4] = rp(510, 'x', width, height);
        contentEtapaCompartido_h[5] = rp(470, 'x', width, height);
        contentEtapaCompartido_h[6] = rp(400, 'x', width, height);
        contentEtapaCompartido_h[7] = rp(420, 'x', width, height);
        contentEtapaCompartido_h[8] = rp(380, 'x', width, height);
        contentEtapaCompartido_h[9] = rp(580, 'x', width, height);/**/

        let contentEtapaTodos_h = [];
        contentEtapaTodos_h[0] = rp(1380, 'x', width, height);
        contentEtapaTodos_h[1] = rp(1080, 'x', width, height);
        contentEtapaTodos_h[2] = rp(2150, 'x', width, height);
        contentEtapaTodos_h[3] = rp(1550, 'x', width, height);
        contentEtapaTodos_h[4] = rp(1150, 'x', width, height);
        contentEtapaTodos_h[5] = rp(1030, 'x', width, height);
        contentEtapaTodos_h[6] = rp(1030, 'x', width, height);
        contentEtapaTodos_h[7] = rp(1000, 'x', width, height);
        contentEtapaTodos_h[8] = rp(810, 'x', width, height);
        contentEtapaTodos_h[9] = rp(1050, 'x', width, height);

        // Posición y tamaño de fondos de titulos de etapas "titulo" "fondo"
        const menu_circle_selected_delta = rp(110, 'x', width, height);
        var x_bg_titulo = x_bg_matriz;
        var y_bg_titulo = y_bg_matriz - rp(60, 'x', width, height);
        var w_bg_titulo = width_bg_matriz;
        var h_bg_titulo = rp(60, 'x', width, height);
        const fontSizeTitle = rp(25, 'x', width, height);
        const fontSizeContent = rp(15, 'x', width, height);

        // Renderiza círculos del menú "cuncuna"
        const menu_circle_selected_x = x_bg_titulo - rp(85, 'x', width, height);
        const menu_circle_selected_y = y_bg_titulo + rp(30, 'x', width, height);
        const menu_circle_text_selected_x = x_bg_titulo - rp(108, 'x', width, height);
        const menu_circle_text_selected_y = y_bg_titulo + rp(40, 'x', width, height);
        const menu_circle_text_selected_size = rp(45, 'x', width, height);
        const menu_circle_text_size = rp(40, 'x', width, height);
        const outerRadius2 = x_bg_matriz - rp(360, 'x', width, height);
        const y_circleMenu = y_bg_matriz + contenido_delta + rp(30, 'y', width, height); //height_bg_matriz + rp(90, 'y', width, height);
        const menu_circle_radio_n = rp(45, 'x', width, height);
        const menu_circle_radio_h = rp(50, 'x', width, height);
        const menu_circle_paso = rp(75, 'x', width, height);
        const dx_two_numbers = rp(0, 'x', width, height) + "px";
        const dx_one_number = rp(13, 'x', width, height) + "px";
        const animacionCircleDuration = 900;

        var circle_text_size = menu_circle_text_size;
        var circle_pos_y = y_circleMenu;
        var circle_pos_x = menu_circle_selected_x;
        var circle_text_x = menu_circle_text_selected_x;
        var circle_text_y = menu_circle_text_selected_y;
        var dx = dx_one_number;


        // Posición y tamaño de textos de titulos de etapas
        var paso = rp(65, 'x', width, height);
        let paso_t = paso;
        let pos_x = pos_m_x;
        let pos_y = y_bg_matriz - rp(75, 'y', width, height);
        let delta_y = 15;
        let delta_v = 150;

        // Posición y tamaño selección de rol
        let sel_stroke_width = rp(2, 'x', width, height);
        let sel_x = rp(1290, 'x', width, height);
        let sel_y = y_bg_titulo + rp(120, 'x', width, height);//rp(228, 'y', width, height);
        let delta_text_x = rp(35, 'x', width, height);
        let delta_text_y = rp(25, 'y', width, height);
        let delta_rol_y = rp(48, 'y', width, height);
        let sel_selected_width = rp(190, 'y', width, height);
        let sel_selected_height = rp(50, 'y', width, height);
        let sel_w = sel_selected_width;
        let sel_h = sel_selected_height * 4;
        let selectorPos = [sel_y + delta_rol_y, sel_y + sel_selected_height + delta_rol_y, sel_y + (sel_selected_height * 2) + delta_rol_y];
        //let selectorPos = [sel_y + delta_rol_y, sel_y + sel_selected_height + delta_rol_y, sel_y + (sel_selected_height * 2) + delta_rol_y, sel_y + (sel_selected_height * 3) + delta_rol_y];
        let textRol = ['Mandante', 'Proveedor', 'Ambos'];
        //let textRol = ['Mandante', 'Proveedor', 'Compartido', 'Todos'];
        let colorRol = ['#9E6F9E', '#B3BABD', 'url(#bgLinGradB)']; // mandante, compartido, proveedor, 
        //let colorRol = ['#9E6F9E', '#B3BABD', '#D9E021', 'url(#bgLinGradB)']; // mandante, compartido, proveedor, 
        let gradientRol = ['bgLinGradMandante', 'bgLinGradProveedor', 'bgLinGradTodos']; // mandante, compartido, proveedor, 
        //let gradientRol = ['bgLinGradMandante', 'bgLinGradCompartido', 'bgLinGradProveedor', 'bgLinGradTodos']; // mandante, compartido, proveedor, 
        const bulletMarginTop = rp(5, 'x', width, height);

        // Posición y tamaño de título de página "tool tip"
        const x_pageTitleBg = rp(548.5, 'x', width, height);
        const y_pageTitleBg = rp(10, 'x', width, height);
        const w_pageTitleBg = rp(1150, 'x', width, height);
        const h_pageTitleBg = rp(100, 'x', width, height);
        const margenPageTitle_h = rp(60, 'x', width, height);
        const margenPageTitle_v = rp(60, 'x', width, height);
        const x_pageTitle = x_pageTitleBg + margenPageTitle_h;
        const y_pageTitle = y_pageTitleBg + rp(5, 'x', width, height);
        const w_pageTitle = w_pageTitleBg - (2 * margenPageTitle_h);
        const h_pageTitle = h_pageTitleBg;
        const letterSpacing_pageTitle = rp(4, 'x', width, height);
        const fontSize_pageTitle = rp(26, 'x', width, height);
        const fontFamily_pageTitle = 'Oswald';
        const style_pageTitle = 'font-family:' + fontFamily_pageTitle + ';font-weight:bold;font-size:' + fontSize_pageTitle + 'px;letter-spacing:' + letterSpacing_pageTitle + 'px;color:#FFFFFF';

        var duracionAnimacionSelector = 500;


        /****************************************
         Posicionamiento y tamaño relativo - End
        ****************************************/

        /*******************************************************
         Renderiza contenidos de la matriz de las etapas - Begin
        ******************************************************/
        // recuadro de contenido
        this.shadow(svg, x_bg_matriz, y_bg_matriz + contenido_delta, width_bg_matriz, contentEtapaMandante_h[0], radio, radio, 'contentRectShadow');

        // Renderiza fondo de titulos de etapas y Anima fondo de titulo de contenido de etapas
        svg.append('rect')
            .attr('id', 'estapasTitleBackground')
            .style("fill", arcSegmentEtapasColor[selectedEtapa])
            .style('stroke', "url(#bgLinGradB)")
            .attr('stroke-width', rp(2, 'x', width, height))
            .attr('opacity', 0.8)
            .attr('x', x_bg_titulo)
            .attr('y', y_bg_titulo)
            .attr('rx', radio_small)
            .attr('ry', radio_small)
            .attr("width", w_bg_titulo)
            .attr("height", h_bg_titulo);



        // Renderiza textos de titulos de etapas en los circulos
        svg.append("g")
            .attr('id', 'estapasTitle')
            .attr('opacity', 1)
            .append("foreignObject")
            .attr('id', 'estapasTitleFO')
            .attr('x', pos_x)
            .attr('y', pos_y)
            .attr("width", content_w)
            .attr("height", rp(width_bg_matriz, 'x', width, height))
            .html(function (d) {
                return '<div style="font-family:Oswald;color:#ffffff"><p align="justify">' + arcSegmentEtapasLabel[0] + '</p></div>'
            })
            .attr("font-size", fontSizeTitle);

        d3.select('#contentRectShadow')
            .attr("height", contentEtapaMandante_h[selectedEtapa])
            .attr("font-size", contentFontSize)
            /*.transition()
            .delay(duracionAnimacionSelector)
            .attr("height", contentEtapaProveedor_h[0]) 
            .transition()
            .delay(duracionAnimacionSelector)
            .attr("height", contentEtapaCompartido_h[0])*/
            .transition()
            .delay(duracionAnimacionSelector)
            .attr("height", contentEtapaTodos_h[selectedEtapa]);

        // Renderiza textos del contenido de etapas
        svg.append("g")
            .attr('id', 'estapasContent')
            .attr('opacity', 1)
            .append("foreignObject")
            .attr('id', 'estapasContentFO')
            .attr('x', pos_x)
            .attr('y', pos_m_y)
            .attr("width", content_w)
            .attr("height", contentEtapaMandante_h[selectedEtapa])
            .attr("font-size", contentFontSize)

            .transition()
            .delay(duracionAnimacionSelector)
            .attr("height", contentEtapaTodos_h[selectedEtapa]);

        console.log('selectedEtapa ' + selectedEtapa);
        console.log('selectedRol ' + selectedRol);
        console.log('etepaClickeada ' + etepaClickeada);

        // Funciones para activar/desactivar el contenido de las etapas para el títlulo
        etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);

        // Funciones para activar/desactivar el contenido de las etapas bajo descripción
        etapa.toggleEtapasTextosMatrizC(1, conenidoEtapasRol, selectedEtapa, selectedRol, colorRol, bulletMarginTop, rp(28, 'x', width, height));

        // Adapta el tamaño del contenedor de los textos
        switch (selectedRol) {
            case 0:
                etapa.changeHeight('contentRectShadow', contentEtapaMandante_h[selectedEtapa]);
                etapa.changeHeight('estapasContentFO', contentEtapaMandante_h[selectedEtapa]);
                break;
            case 1:
                etapa.changeHeight('contentRectShadow', contentEtapaProveedor_h[selectedEtapa]);
                etapa.changeHeight('estapasContentFO', contentEtapaProveedor_h[selectedEtapa]);
                break;
            case 2:
                etapa.changeHeight('contentRectShadow', contentEtapaTodos_h[selectedEtapa]);
                etapa.changeHeight('estapasContentFO', contentEtapaTodos_h[selectedEtapa]);
                break;
            /*case 2:
                etapa.changeHeight('contentRectShadow', contentEtapaCompartido_h[e]);
                etapa.changeHeight('estapasContentFO', contentEtapaCompartido_h[e]);
                break;/**/
        }





        /******************************************************
        Renderiza contenidos de la matriz de las etapas - End
        ******************************************************/



        /******************************
         Selección de Rol - Begin
        *******************************/

        // Recuadro contenedor principal
        this.shadow(svg, sel_x, sel_y, sel_w, sel_h - relPos(2, width), radio_big, radio_big, 'contentRolRectShadow');

        setHtmlText(svg, 1,
            'textRolTítulo',
            sel_x + rp(20, 'x', width, height),
            sel_y - rp(30, 'x', width, height) + delta_rol_y,
            sel_selected_width,
            (rp(18, 'x', width, height)),
            "Seleccionar Rol",
            (rp(18, 'x', width, height)), 'Roboto', 'left', 0, '#737373', 'bold')

        // Recuadro selector y animación Rol seleccionado
        svg.append('rect')
            .attr('id', 'selection')
            .attr('x', sel_x) // Proveedor 
            .attr('y', selectorPos[0])
            .attr('rx', radio_big)//height/radio
            .attr('ry', radio_big)//height/radio
            .style("fill", "url(#bgLinGradF)")
            .attr('width', sel_selected_width)
            .attr('height', sel_selected_height)
            .transition()
            .delay(duracionAnimacionSelector)
            .attr('y', selectorPos[1]) // Proveedor
            .transition()
            .delay(duracionAnimacionSelector)
            .attr('y', selectorPos[2]); // Todos
        /*.transition()
        .delay(duracionAnimacionSelector)
        .attr('y', selectorPos[3]); /**/


        for (var i = 0; i < textRol.length; i++) {
            // Título rol
            setHtmlText(svg, 1,
                'textRol' + i,
                sel_x + (2 * delta_text_x),
                sel_y + (sel_selected_height * i) + rp(14, 'x', width, height) + delta_rol_y,
                (rp(96, 'x', width, height)),
                (rp(14.77, 'x', width, height)),
                textRol[i],
                (rp(12.8, 'x', width, height)), 'Roboto', 'left', 0, '#111111', 'bold')

            // Círculo rol
            svg.append("circle")
                .attr("id", "s" + i + "sel")
                .attr("cx", sel_x + delta_text_x)
                .attr("cy", sel_y + (sel_selected_height * i) + delta_text_y + delta_rol_y)
                .attr("r", rp(17.46, 'x', width, height))
                .style("stroke", "white")
                .attr('opacity', 1)
                .style("fill", colorRol[i]);

            // área clickeable
            svg.append('rect')
                .attr('id', 'rectTextRol' + i)
                .attr('indexElement', i)
                .attr("x", sel_x)
                .attr("y", sel_y + (sel_selected_height * i) + delta_rol_y)
                .attr('rx', radio_big)
                .attr('ry', radio_big)
                .style("fill", "transparent")
                .attr('width', sel_selected_width)
                .attr('height', sel_selected_height)
                .style("cursor", "pointer")
                .on('click', function () {
                    var index = select(this).attr('indexElement');
                    selectedRol = index;
                    console.log('Click en el rol selectedRol: ' + selectedRol + ' selectedEtapa: ' + selectedEtapa);
                    // Mueve el selector y Cambia color del titulo
                    etapa.roleClick(selectedRol, selectorPos, arcSegmentEtapasColor, selectedEtapa);

                    // Funciones para activar/desactivar el contenido de las etapas para el títlulo
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);
                    // Funciones para activar/desactivar el contenido de las etapas bajo descripción
                    etapa.toggleEtapasTextosMatrizC(1, conenidoEtapasRol, selectedEtapa, selectedRol, colorRol, bulletMarginTop, rp(28, 'x', width, height));

                    // Adapta el tamaño del contenedor de los textos
                    switch (selectedRol) {
                        case 0:
                            etapa.changeHeight('contentRectShadow', contentEtapaMandante_h[selectedEtapa]);
                            etapa.changeHeight('estapasContentFO', contentEtapaMandante_h[selectedEtapa]);
                            break;
                        case 1:
                            etapa.changeHeight('contentRectShadow', contentEtapaProveedor_h[selectedEtapa]);
                            etapa.changeHeight('estapasContentFO', contentEtapaProveedor_h[selectedEtapa]);
                            break;
                        case 2:
                            etapa.changeHeight('contentRectShadow', contentEtapaTodos_h[selectedEtapa]);
                            etapa.changeHeight('estapasContentFO', contentEtapaTodos_h[selectedEtapa]);
                            break;
                        /*case 2:
                            etapa.changeHeight('contentRectShadow', contentEtapaCompartido_h[e]);
                            etapa.changeHeight('estapasContentFO', contentEtapaCompartido_h[e]);
                            break;/**/
                    }
                });

        }
        /******************************
         Selección de Rol - End
        *******************************/



        /*******************************************
         Recorre y renderiza etapas "caracol" - Begin
        ********************************************/
        //
        // Caracol

        // Posición de los segmentos para ubicar los números de las etapas
        const translate_x_segmentNumers = rp(1580, 'x', width, height);
        const translate_y_segmentNumers = rp(480, 'x', width, height);
        const scale_segmentNumers = 0.8;//rp(0.8, 'x', width, height);

        const svgSegmentos = svg.append("g")
            .attr('id', 'segmentos')
            .attr('opacity', 1);
        const svgTextoSegmentos = svg.append("g")
            .attr('id', 'textoSegmentos')
            .attr('opacity', 1);
        const svgTooltipSegmentos = svg.append("g")
            .attr('id', 'svgTooltipSegmentos')
            .attr('opacity', 1);
        const svgClickSegmentos = svg.append("g")
            .attr('id', 'svgClickSegmentos')
            .attr('opacity', 1);
        var circle_pos_y = y_circleMenu;
        var movingCircleRegreso = 0;

        // variables Tooltip Caracol
        var width_textTooltipTitulo = relPos(320, width);
        var height_textTooltipTitulo = relPos(70, width);
        var marginRight_textTooltipTitulo = relPos(15, width);
        var marginTop_textTooltipTitulo = relPos(15, width);
        var fontSize = relPos(18, width);
        var font = 'Roboto';
        var align = 'center';
        var margin = 'auto';//relPos(15, width);
        var padding = relPos(0, width);
        var color = '#ffffff';
        var bold = 'bold';
        var letterSpacing = '1';
        var lineHeight = '1';
        const delta_outerRadius_segmentNumers = [
            rp(20, 'x', width, height),
            rp(25, 'x', width, height),
            rp(30, 'x', width, height),
            rp(32, 'x', width, height),
            rp(35, 'x', width, height),
            rp(42, 'x', width, height),
            rp(46, 'x', width, height),
            rp(50, 'x', width, height),
            rp(58, 'x', width, height),
        ]

        // Segmentos para ubicar los números de las etapas
        var arcLenA = 6.28 / 14.65;
        var startAngle = -arcLenA;
        var endAngle = startAngle + arcLenA;
        var innerRadius = rp(82, 'x', width, height);
        var outerRadius = rp(215, 'x', width, height);

        // Posicionamiento del label de etapa sobre cada segmento
        var foreignObject_size_segmentNumers = rp(90, 'x', width, height);

        for (let e = 0; e < 10; e++) {
            var id = e + 1;
            var arcSegment = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(startAngle)     // It's in radian, so Pi = 3.14 = bottom.
                .endAngle(endAngle);        // 2*Pi = 6.28 = top                     
            var [x_segmentNumers, y_segmentNumers] = arcSegment.centroid(arcSegment);/**/

            svgSegmentos.append("path")
                .attr("id", 'segment' + id)
                .attr("transform", "translate(" + translate_x_segmentNumers + "," + translate_y_segmentNumers + ") scale(" + scale_segmentNumers + ")")
                .attr("d", arcSegment)
                .attr('stroke', 'white')
                .style("stroke-width", rp(1, 'x', width, height))
                .attr('opacity', '1')
                .attr('fill', arcSegmentEtapasColor[e])
                .attr('filter', 'url(#shadowFiltersReverse)');

            startAngle = endAngle;
            endAngle = arcLenA + endAngle;
            outerRadius = outerRadius + delta_outerRadius_segmentNumers[e];

            svgTextoSegmentos.append('foreignObject')
                .attr("id", 'segmentNumers' + id)
                .attr('x', translate_x_segmentNumers + (x_segmentNumers * scale_segmentNumers) - ((foreignObject_size_segmentNumers * scale_segmentNumers) / 2))
                .attr('y', translate_y_segmentNumers + (y_segmentNumers * scale_segmentNumers) - ((foreignObject_size_segmentNumers * scale_segmentNumers) / 2))
                .attr("width", foreignObject_size_segmentNumers * scale_segmentNumers)
                .attr("height", foreignObject_size_segmentNumers * scale_segmentNumers)
                .attr('opacity', 1)
                .html(function (d) {
                    var trozo_a = 'font-family:Roboto;font-weight:normal;color:white;font-size:' + arcSegmentEtapasLabelSize[e] * scale_segmentNumers + 'px; ';
                    var trozo_b = 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 0;" ';
                    var trozo_estilos = trozo_a + ' ' + trozo_b;
                    return '<div style="' + trozo_estilos + '">' + id + '</div>'
                });
            //.attr("transform", "rotate(" + rotationAngle_detalle * i + ")");

            //área clickeable
            svgClickSegmentos.append("path")
                .attr("id", 'segmentClick' + id)
                .attr("transform", "translate(" + translate_x_segmentNumers + "," + translate_y_segmentNumers + ") scale(" + scale_segmentNumers + ")")
                .attr('indexElement', e)
                .attr("d", arcSegment)
                .attr('opacity', 0)
                .style("cursor", "pointer")
                .on('mouseover', function () {
                    var index = d3.select(this).attr('indexElement');
                    var idElement = parseInt(index) + 1;
                    movingCircleRegreso = d3.select('#circle' + index).attr('regreso');
                    // hace transparente la etapa bajo el cursos
                    d3.select('#segment' + idElement)
                        .transition()
                        .duration(100)
                        .attr('stroke', '#d3d3d3')
                        .attr('opacity', 0.7);

                    etapa.mouseOverOut(index, 1, movingCircleRegreso, menu_circle_radio_h, menu_circle_radio_n, arcSegmentEtapasLabel);
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);

                    // tooltip
                    var centroide_x = d3.select('#segmentNumers' + idElement).attr('x') - (width_textTooltipTitulo / 2);
                    var centroide_y = d3.select('#segmentNumers' + idElement).attr('y');
                    d3.select('#fondoTooltipTitulo')
                        .attr('x', centroide_x)
                        .attr('y', centroide_y)
                        .transition()
                        .duration(100)
                        .attr('opacity', 1)
                        .transition()
                        .delay(5000)
                        .duration(0)
                        .attr('opacity', 0);

                    //console.log('centroide_x ' + centroide_x + ' centroide_y ' + centroide_y);
                    //console.log('arcSegmentEtapasLabel[e] ' + arcSegmentEtapasLabel[e]);
                    updateHtmlText(
                        1, 'textTooltipTitulo', centroide_x, centroide_y, width_textTooltipTitulo, height_textTooltipTitulo,
                        arcSegmentEtapasLabel[index],
                        fontSize, font, align, margin, color, bold, letterSpacing, lineHeight, 100, padding
                    );
                    d3.select('#textTooltipTitulo')
                        .transition()
                        .delay(5000)
                        .duration(0)
                        .attr('opacity', 0);

                })
                .on('mouseout', function () {
                    var index = d3.select(this).attr('indexElement');
                    var idElement = parseInt(index) + 1;

                    movingCircleRegreso = d3.select('#circle' + index).attr('regreso');
                    d3.select('#segment' + idElement)
                        .transition()
                        .duration(100)
                        .attr('stroke', 'white')
                        .attr('opacity', 1);

                    etapa.mouseOverOut(index, 0, movingCircleRegreso, menu_circle_radio_h, menu_circle_radio_n, arcSegmentEtapasLabel);
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);

                    //Apaga tooltip
                    updateHtmlText(0, 'textTooltipTitulo');
                    d3.select('#fondoTooltipTitulo').attr('opacity', 0);

                })
                .on('click', function () {
                    var index = d3.select(this).attr('indexElement');
                    var idElement = parseInt(index) + 1;
                    console.log('Click sobre el segmento ' + idElement + ' del caracol')
                    d3.select('#segment' + idElement)
                        .transition()
                        .duration(100)
                        .attr('opacity', 1);

                    selectedEtapa = index;

                    circle_pos_y = y_bg_matriz + contenido_delta + rp(30, 'x', width, height);
                    circle_text_y = y_bg_matriz + contenido_delta + rp(40, 'x', width, height);
                    circle_pos_x = menu_circle_selected_x;

                    etapa.etapaClick(e, circle_pos_y, circle_text_x, circle_text_y, menu_circle_paso,
                        dx_one_number, dx_two_numbers, animacionCircleDuration, menu_circle_radio_n, menu_circle_radio_h,
                        menu_circle_selected_x, menu_circle_selected_y, menu_circle_text_selected_y, menu_circle_text_size);
                    etapa.etapaClickColor(arcSegmentEtapasColor, selectedEtapa);
                    // Funciones para activar/desactivar el contenido de las etapas para el títlulo
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);

                    // Funciones para activar/desactivar el contenido de las etapas bajo descripción
                    etapa.toggleEtapasTextosMatrizC(1, conenidoEtapasRol, selectedEtapa, selectedRol, colorRol, bulletMarginTop, rp(28, 'x', width, height));

                    //console.log('SelecteedRol ' + selectedRol);
                    switch (selectedRol) {
                        case 0:
                            etapa.changeHeight('contentRectShadow', contentEtapaMandante_h[index]);
                            etapa.changeHeight('estapasContentFO', contentEtapaMandante_h[index]);
                            break;
                        case 1:
                            etapa.changeHeight('contentRectShadow', contentEtapaProveedor_h[index]);
                            etapa.changeHeight('estapasContentFO', contentEtapaProveedor_h[index]);
                            break;
                        case 2:
                            etapa.changeHeight('contentRectShadow', contentEtapaTodos_h[index]);
                            etapa.changeHeight('estapasContentFO', contentEtapaTodos_h[index]);
                            break;
                        /*case 2:
                            etapa.changeHeight('contentRectShadow', contentEtapaCompartido_h[e]);
                            etapa.changeHeight('estapasContentFO', contentEtapaCompartido_h[e]);
                            break;/**/
                    }


                });

        }

        // // Tooltip Caracol
        // Fondo tooltip
        svgTooltipSegmentos.append('rect')
            .attr('id', 'fondoTooltipTitulo')
            .attr('x', 1250)
            .attr('y', 100)
            .attr('width', width_textTooltipTitulo)
            .attr('height', height_textTooltipTitulo)
            .attr('stroke', 'none')
            //.attr("fill", "#333333")
            .style("fill", "url(#bgLinGradB)")
            .attr("rx", radio_small)
            .attr("ry", radio_small)
            .attr('opacity', 0)
            .style("stroke-width", 5);

        // label tooltip
        setHtmlText(svgTooltipSegmentos, 0,
            'textTooltipTitulo',
            1250,
            100,
            width_textTooltipTitulo,
            height_textTooltipTitulo,
            "Free Ukraine",
            fontSize, font, align, margin, color, bold, letterSpacing, lineHeight)

        /*****************************************
        Recorre y renderiza etapas "caracol" - End
        ******************************************/









        /*********************************************
         Renderiza círculos del menú "cuncuna" - Begin
        *********************************************/
        var id = "";
        var ids = "";
        var circleCLickArea = "";
        var regreso = 0;
        var circle_radio = 0;
        circle_text_y = circle_text_y + menu_circle_paso + rp(40, 'x', width, height);
        //console.log(' id:' + id + ' selectedEtapa:' + selectedEtapa + ' selectedRol:' + selectedRol);
        for (let e = 0; e < 10; e++) {
            id = "circle" + e;
            //console.log("e:" + e + ' id:' + id + ' selectedEtapa:' + selectedEtapa + ' selectedRol:' + selectedRol);
            circleCLickArea = "circleCLickArea" + e;
            ids = e + 1;
            if (e == 0) {
                dx = rp(10, 'x', width, height) + "px";
                regreso = 100;
            }

            circle_radio = menu_circle_radio_n;
            regreso = 0;

            if (e == 1) {
                circle_pos_y = y_bg_matriz + contenido_delta + menu_circle_paso + rp(30, 'x', width, height);// - outerRadius2;;
                circle_text_y = y_bg_matriz + contenido_delta + menu_circle_paso + rp(40, 'x', width, height);
            }
            if (e == 9) {
                dx = rp(0, 'x', width, height) + "px";
            }
            // Render circle
            svg.append("circle")
                .attr("id", id)
                .attr("regreso", regreso)
                .attr("cx", circle_pos_x)
                .attr("cy", circle_pos_y)
                .attr("r", menu_circle_radio_n)
                .style("stroke", "white")
                .attr('opacity', 0.8)
                .style("fill", arcSegmentEtapasColor[e]);

            // Render Text inside de circle
            svg.append("text")
                .attr('id', 'circle_text' + e)
                .attr("regreso", regreso)
                .attr("x", circle_text_x)
                .attr("y", circle_text_y)
                .attr("dx", dx)
                .attr("dy", "0px")
                .text(e + 1)
                .attr("font-size", circle_text_size)//width/73.8
                .attr("fill", "white")
                .attr("font-weight", "bold");

            //console.log("e:" + e + ' id:' + id + ' selectedEtapa:' + selectedEtapa + ' selectedRol:' + selectedRol);
            //console.log("circleCLickArea:" + circleCLickArea);
            //var aux_selectedEtapa = selectedEtapa;
            //var aux_selectedRol = selectedRol;
            svg.append("circle")
                .attr("id", circleCLickArea)
                .attr('indexElement', e)
                .attr('selectedEtapa', selectedEtapa)
                .attr('selectedRol', selectedRol)
                .attr("regreso", regreso)
                .attr("cx", circle_pos_x)
                .attr("cy", circle_pos_y)
                .attr("r", menu_circle_radio_n)
                .style("stroke", "blue")
                .attr('opacity', 0)
                .style("cursor", "pointer")
                .on('mouseover', function () {
                    //console.log("e:" + e + ' id:' + id + ' aux_selectedEtapa:' + aux_selectedEtapa + ' aux_selectedRol:' + aux_selectedRol);
                    var index = parseInt(select(this).attr('indexElement'));
                    var idElement = parseInt(index) + 1;
                    var selectedEtapa = parseInt(select(this).attr('selectedEtapa'));
                    var selectedRol = parseInt(select(this).attr('selectedRol'));
                    //console.log("index " + index + ' idElement:' + idElement + ' selectedEtapa:' + selectedEtapa + ' selectedRol:' + selectedRol);
                    //console.log("#segment" + idElement);
                    d3.select("#segment" + idElement)
                        .transition()
                        .duration(100)
                        .attr('opacity', 0.7)
                        .attr('stroke', '#d3d3d3');
                    etapa.mouseOverOut(index, 1, movingCircleRegreso, menu_circle_radio_h, menu_circle_radio_n, arcSegmentEtapasLabel);
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);
                })
                .on('mouseout', function () {
                    var index = parseInt(select(this).attr('indexElement'));
                    var idElement = parseInt(index) + 1;
                    var selectedEtapa = parseInt(select(this).attr('selectedEtapa'));
                    var selectedRol = parseInt(select(this).attr('selectedRol'));
                    d3.select("#segment" + idElement)
                        .transition()
                        .duration(100)
                        .attr('opacity', 1)
                        .attr('stroke', 'white');
                    etapa.mouseOverOut(index, 0, movingCircleRegreso, menu_circle_radio_h, menu_circle_radio_n, arcSegmentEtapasLabel);
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);

                })
                .on('click', function () {
                    var index = parseInt(select(this).attr('indexElement'));
                    var selectedEtapa = parseInt(select(this).attr('selectedEtapa'));
                    var selectedRol = parseInt(select(this).attr('selectedRol'));
                    d3.select("#segment" + parseInt(index) + 1)
                        .transition()
                        .duration(100)
                        .attr('opacity', 1);
                    d3.select('#circle_text' + index)
                        .transition()
                        .duration(100)
                        .attr('opacity', 1);
                    d3.select("circle" + index)
                        .transition()
                        .duration(100)
                        .attr('opacity', 1);

                    selectedEtapa = index;

                    circle_pos_y = y_bg_matriz + contenido_delta + rp(30, 'x', width, height);
                    circle_text_y = y_bg_matriz + contenido_delta + rp(40, 'x', width, height);
                    circle_pos_x = menu_circle_selected_x;

                    // regresa el circulo
                    // regresa el texto
                    etapa.etapaClick(index, circle_pos_y, circle_text_x, circle_text_y, menu_circle_paso,
                        dx_one_number, dx_two_numbers, animacionCircleDuration, menu_circle_radio_n, menu_circle_radio_h,
                        menu_circle_selected_x, menu_circle_selected_y, menu_circle_text_selected_y, menu_circle_text_size);
                    etapa.etapaClickColor(arcSegmentEtapasColor, selectedEtapa);

                    // Activa los textos comunes a los 3 roles
                    // Funciones para activar/desactivar el contenido de las etapas para el títlulo
                    etapa.toggleEtapasTextosMatrizB(1, selectedEtapa, selectedRol, arcSegmentEtapasLabel);

                    // Funciones para activar/desactivar el contenido de las etapas bajo descripción
                    etapa.toggleEtapasTextosMatrizC(1, conenidoEtapasRol, selectedEtapa, selectedRol, colorRol, bulletMarginTop, rp(28, 'x', width, height));

                    // Adapta el tamaño del contenedor de los textos
                    switch (selectedRol) {
                        case 0:
                            etapa.changeHeight('contentRectShadow', contentEtapaMandante_h[index]);
                            etapa.changeHeight('estapasContentFO', contentEtapaMandante_h[index]);
                            break;
                        case 1:
                            etapa.changeHeight('contentRectShadow', contentEtapaProveedor_h[index]);
                            etapa.changeHeight('estapasContentFO', contentEtapaProveedor_h[index]);
                            break;
                        case 2:
                            etapa.changeHeight('contentRectShadow', contentEtapaTodos_h[index]);
                            etapa.changeHeight('estapasContentFO', contentEtapaTodos_h[index]);
                            break;
                        /*case 2:
                            etapa.changeHeight('contentRectShadow', contentEtapaCompartido_h[e]);
                            etapa.changeHeight('estapasContentFO', contentEtapaCompartido_h[e]);
                            break;/**/
                    }

                });

            if (e == 9) {
                d3.select('#circle' + selectedEtapa)
                    .attr("cy", menu_circle_selected_y)
                    .attr("r", menu_circle_radio_h);
                d3.select('#circle_text' + selectedEtapa).attr("y", menu_circle_text_selected_y);

            }

            circle_pos_y = circle_pos_y + menu_circle_paso;
            circle_text_y = circle_text_y + menu_circle_paso;
        }



        /*********************************************
         Renderiza círculos del menú "cuncuna" - End
        *********************************************/



        /******************************
         Section 3 - breadcrumb - Start
         *******************************/
        breadcrumb(svg, width, height, 'Inicio', 'Etapas Riesgos Y Oportunidades En La Cadena De Aprovisionamiento', '/guia_de_gestion', '');
        /******************************
        Section 3 - breadcrumb - End
        *******************************/
        svg.append('rect')
            //.classed('filled', true)
            .attr('x', x_pageTitleBg)
            .attr('y', y_pageTitleBg)
            .attr('rx', radio_small)
            .attr('ry', radio_small)
            .style("fill", "url(#bgLinGradB)")
            .transition()
            .delay(200)
            .attr('width', w_pageTitleBg)
            .attr('height', h_pageTitleBg);

        svg.append("foreignObject")
            .attr('id', 'pageTitleFO')
            .attr('x', x_pageTitle)
            .attr('y', y_pageTitle)
            .attr("width", w_pageTitle + 50)
            .attr("height", h_pageTitle)
            .html(function (d) {
                return '<div style="' + style_pageTitle + '"><p align="justify">ETAPAS RIESGOS Y OPORTUNIDADES EN LA CADENA DE APROVISIONAMIENTO</p></div>'
            })

        /******************************
         Sidebar - Start
        *******************************/
        getSideBarLines(svg, width);
        svg.append('rect')
            .attr('id', 'rectWhiteFade')
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", width)
            .attr("height", height)
            .attr('opacity', 1)
            .attr("fill", 'white');
        getSideBarEtapasFome(svg, width, heightCorrected, styles.grow);

        /******************************
        Sidebar - End
        *******************************/

        /******************************
         Botón cómo usar - Begin
        *******************************/
        etapa.getcomoUsar(svg, width, height)
        /******************************
          Botón cómo usar - End
        *******************************/


        /******************************
         Brand corner - begin
        *******************************/
        headerCornerLogo(svg, width, heightCorrected);
        /******************************
         Brand corner - end
        *******************************/
        console.log('getDurationAnim()' + getDurationAnim());
        d3.select('#rectWhiteFade')
            .transition()
            //.duration(900)
            .duration(getDurationAnim())
            .attr('opacity', 0)
            .duration(10)
            .attr("height", 1);

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
