import React, { Component } from "react";
import * as d3 from 'd3';


export function getPracticasColorl() {
    var practicasColor = [
        '#C134FC',
        '#886AFC',
        '#9980FA',
        '#F9764A',
        '#F89574',
        '#55b57c'
    ];
    return practicasColor;
}

export function getPracticasLabel() {
    var practicasLabel = [
        ['Cumplimiento Legalidad vigente'],
        ['Compromisos/ cumplimientos extra legalidad'],
        ['Petición o adscripción internacional'],
        ['Mecanismos/ aseguramiento gestión operacional'],
        ['Métodos de trabajo proveedor gestión operacional ASG'],
        ['Métodos de trabajo colaborativo/ integrado'],
    ];
    return practicasLabel; 
}

export function getPracticasLink() {
    var practicasLink = [
        ['buenas_practicas/1_cumplimiento_legalidad'],
        ['buenas_practicas/2_compromisos_y_cumplimientos'],
        ['buenas_practicas/3_peticion_o_adscripcion_internacional'],
        ['buenas_practicas/4_mecanismos_de_aseguramiento'],
        ['buenas_practicas/5_metodologia_de_trabajo'],
        ['buenas_practicas/6_metodos_de_trabajo_colaboratico'],
    ];
    return practicasLink;
}

export function getArrayPracticaDetalle(idPractica) {
    const arrayPracticaDetalle = [];
    switch (idPractica) {
        case 0:
            arrayPracticaDetalle[0] = 'Leyes sociales ';
            arrayPracticaDetalle[1] = 'Salud y seguridad ocupacional';
            arrayPracticaDetalle[2] = 'Trabajo infantil ';
            arrayPracticaDetalle[3] = 'Trabajo esclavo ';
            arrayPracticaDetalle[4] = 'Normativa ambiental';
            arrayPracticaDetalle[5] = 'Normativas de transparencia e integridad';
            arrayPracticaDetalle[6] = 'Viabilidad y transparencia financiera';
            arrayPracticaDetalle[7] = 'Normativas libertad de asociación';
            break;
        case 1:
            arrayPracticaDetalle[0] = 'Declaración y monitoreo salario justo    ';
            arrayPracticaDetalle[1] = 'Monitoreo de cumplimiento de leyes sociales     ';
            arrayPracticaDetalle[2] = 'Monitoreo prevención trebajo  infantil   ';
            arrayPracticaDetalle[3] = 'Monitoreo de prevención trabajo esclavo ';
            break;
        case 2:
            arrayPracticaDetalle[0] = 'Adscripción a disposiciones o acuerdos internacionales en derechos     trabajadores';
            arrayPracticaDetalle[1] = 'Adscripción a disposiciones o acuerdos internacionales trabajo digno, salario justo y asociación';
            arrayPracticaDetalle[2] = 'Adscripción a disposiciones o acuerdos internacionales contra el trabajo  infantil ';
            arrayPracticaDetalle[3] = 'Adscripción a disposiciones o acuerdos internacionales prevención trabajo esclavo';
            arrayPracticaDetalle[4] = 'Adscripción a acuerdos internacionales sobre respeto a DD.HH.';
            arrayPracticaDetalle[5] = 'Adscripción a acuerdos internacionales relacionados con el impacto ambiental y social (enfocados en la biodiversidad) relacionados con la  actividad productiva desarrollada por las compañías';
            break;
        case 3:
            arrayPracticaDetalle[0] = 'Código de ética y resolución de conflictos';
            arrayPracticaDetalle[1] = 'Sistema de monitoreo y control de riesgos en proveedores: trabajo conjunto ';
            arrayPracticaDetalle[2] = 'Mecanismo de segmentación del proveedor: tamaño, importancia operacional, antigüedad, riesgos asociados u otros.';
            arrayPracticaDetalle[3] = 'Sistema de monitoreo de facturas y pagos (pronto pago)';
            arrayPracticaDetalle[4] = 'Auditorias proveedor: críticos y nuevos en función de los   riesgos';
            arrayPracticaDetalle[5] = 'Traspaso de know how respecto de los objetivos buscados en función de una eficiencia operacional en el largo plazo';
            arrayPracticaDetalle[6] = 'Incorporación de proveedores    locales y pymes';
            arrayPracticaDetalle[7] = 'Mecanismos de reclamación      efectivo y disponibilidad de  mediación ';
            arrayPracticaDetalle[8] = 'Encuentro con proveedores: identificar desempeños y aprendizajes, dentro de una dinámica de relacionamiento';
            arrayPracticaDetalle[9] = 'Capacitación del proveedor en los procesos administrativos del      mandante ';
            break;
        case 4:
            arrayPracticaDetalle[0] = 'Identificación de impacto social, ambiental y de gobernanza de la compañía: plan de gestión';
            arrayPracticaDetalle[1] = 'Identificación de impacto social';
            arrayPracticaDetalle[2] = 'Identificación de  impacto   ambiental';
            arrayPracticaDetalle[3] = 'Identificación    de   impacto  gobernaza de la   compañía';
            arrayPracticaDetalle[4] = 'Evaluación del proveedor por impactos: ASG';
            arrayPracticaDetalle[5] = 'Auditorias externas e internas in situ con personal capacitacitado en variables ASG';
            arrayPracticaDetalle[6] = 'Capacitación a proveedores en variables ASG, inducción a impactos y metas de la compañía: proveedor como socio estratégico en gestión de impacto';
            arrayPracticaDetalle[7] = 'Incorporación de trazabilidad y compliance en proveedores críticos según impacto ASG';
            arrayPracticaDetalle[8] = 'Promover una cultura de integridad ASG para el trato con comunidades y proveedores, aplicado  a procesos de negociación ';
            arrayPracticaDetalle[9] = 'Estímulo a la innovación: proveedor como fuente  de innovación ';
            arrayPracticaDetalle[10] = 'Identificación de buenas prácticas y  aprendizajes a aplicar en la  cadena de suministro:  mandante y proveedor';
            break;
        case 5:
            arrayPracticaDetalle[0] = 'Programas de promoción y optimización del proveedor operacional en criterios ASG.';
            arrayPracticaDetalle[1] = 'Establecimiento de metas comunes al inicio de la relación con el proveedor.';
            arrayPracticaDetalle[2] = 'Reconocimiento a la gestión del proveedor.';
            arrayPracticaDetalle[3] = 'Alianzas mandantes, proveedor, institucionalidad y comunidad (público privada) para el desarrollo  de todas las partes.';
            arrayPracticaDetalle[4] = 'Transparencia aplicada a la cadena de sumistro y a compartir aprendizajes productivos a nivel de distintos actores: sociales, empresariales y gubernamentales .';
            break;
    }
    return arrayPracticaDetalle;
}

export function getArrayEtapas() {
    var arrayEtapas = []
    arrayEtapas[0] = 'Necesidad (interna)';
    arrayEtapas[1] = 'Solicitud pedido (riesgo propio)';
    arrayEtapas[2] = 'Fuentes de aprovisionamiento';
    arrayEtapas[3] = 'Creación y seguimiento orden de compra/contrato';
    arrayEtapas[4] = 'Ejecución del servicio y administración del contrato';
    arrayEtapas[5] = 'Recepción de mercancias - Recepción del servicio';
    arrayEtapas[6] = 'Recepción de facturas';
    arrayEtapas[7] = 'Verificación de facturas';
    arrayEtapas[8] = 'Proceso de pago';
    arrayEtapas[9] = 'Evaluación y cierre';
    return arrayEtapas;
}

export function getArrayNodosPracticas(arrayPracticaDetalleLength) {
    var a = [];
    for (let i = 0; i < arrayPracticaDetalleLength; i++) {
        a[i] = [[0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4'], [0, 0, 1, 0, 0, '#c3c3c4']];
    }
    
    return a;
}

export function getArrayNodosPactoGlobal() {
    var arrayNodosPactoGlobal = [];
    arrayNodosPactoGlobal[0] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[1] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[2] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[3] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[4] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[5] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[6] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[7] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[8] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosPactoGlobal[9] = [0, 0, 0, 0, '#c3c3c4'];
    return arrayNodosPactoGlobal;
}

export function getArrayNodosODS() {
    var arrayNodosODS = [];
    arrayNodosODS[0] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[1] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[2] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[3] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[4] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[5] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[6] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[7] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[8] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[9] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[10] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[11] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[12] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[13] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[14] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[15] = [0, 0, 0, 0, '#c3c3c4'];
    arrayNodosODS[16] = [0, 0, 0, 0, '#c3c3c4'];
    return arrayNodosODS;
}

export function getTituloOds() {
    var tituloOds = [];
    tituloOds[0] = 'Poner fin a la POBREZA';
    tituloOds[1] = 'HAMBRE Cero';
    tituloOds[2] = 'Buena SALUD';
    tituloOds[3] = 'EDUCACIÓN de calidad';
    tituloOds[4] = 'IGUALDAD de género';
    tituloOds[5] = 'AGUA limpia y saneamiento';
    tituloOds[6] = 'ENERGÍA asequible y sostenible';
    tituloOds[7] = 'TRABAJO decente y crecimiento económico';
    tituloOds[8] = 'INDUSTRIA, innovación, infraestructura';
    tituloOds[9] = 'Reducir INEQUIDADES';
    tituloOds[10] = 'CIUDADES Y COMUNIDADES SOSTENIBLES';
    tituloOds[11] = 'CONSUMO responsable y producción';
    tituloOds[12] = 'Vida MARINA';
    tituloOds[13] = 'Acción CLIMÁTICA';
    tituloOds[14] = 'Vida en la TIERRA';
    tituloOds[15] = 'Paz, JUSTICIA e instituciones fuertes';
    tituloOds[16] = 'ALIANZAS para los objetivos';
    return tituloOds;
}

export function getDescripcionOds() {
    var descripcionOds = [];
    descripcionOds[0] = 'Poner fin a la pobreza en todas sus formas en todo el mundo.';
    descripcionOds[1] = 'Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible.';
    descripcionOds[2] = 'Garantizar una vida sana y promover el bienestar para todos en todas las edades.';
    descripcionOds[3] = 'Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos.';
    descripcionOds[4] = 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.';
    descripcionOds[5] = 'Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.';
    descripcionOds[6] = 'Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.';
    descripcionOds[7] = 'Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.';
    descripcionOds[8] = 'Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación.';
    descripcionOds[9] = 'Reducir la desigualdad en y entre los países.';
    descripcionOds[10] = 'Conseguir que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.';
    descripcionOds[11] = 'Garantizar modalidades de consumo y producción sostenibles.';
    descripcionOds[12] = 'Adoptar medidas urgentes para combatir el cambio climático y sus efectos.';
    descripcionOds[13] = 'Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible.';
    descripcionOds[14] = 'Proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres, efectuar una ordenación sostenible de los bosques, luchar contra la desertificación, detener y revertir la degradación de las tierras y poner freno a la pérdida de diversidad biológica.';
    descripcionOds[15] = 'Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y crear instituciones eficaces, responsables e inclusivas a todos los niveles. ';
    descripcionOds[16] = 'Fortalecer los medios de ejecución y revitalizar la alianza mundial para el desarrollo sostenible.';
    return descripcionOds;
}

export function getColorODS() {
    var colorODS = [];
    colorODS[0] = '#E5243B';
    colorODS[1] = '#DDA83A';
    colorODS[2] = '#4C9F38';
    colorODS[3] = '#C5192D';
    colorODS[4] = '#FF3A21';
    colorODS[5] = '#26BDE2';
    colorODS[6] = '#FCC30B';
    colorODS[7] = '#A21942';
    colorODS[8] = '#FD6925';
    colorODS[9] = '#DD1367';
    colorODS[10] = '#FD9D24';
    colorODS[11] = '#BF8B2E';
    colorODS[12] = '#3F7E44';
    colorODS[13] = '#0A97D9';
    colorODS[14] = '#56C02B';
    colorODS[15] = '#00689D';
    colorODS[16] = '#19486A';
    return colorODS;
}

export function getArrImgODS() {
    var arrImgODS = [];
    arrImgODS[0] = 'ods1.png';
    arrImgODS[1] = 'ods2.png';
    arrImgODS[2] = 'ods3.png';
    arrImgODS[3] = 'ods4.png';
    arrImgODS[4] = 'ods5.png';
    arrImgODS[5] = 'ods6.png';
    arrImgODS[6] = 'ods7.png';
    arrImgODS[7] = 'ods8.png';
    arrImgODS[8] = 'ods9.png';
    arrImgODS[9] = 'ods10.png';
    arrImgODS[10] = 'ods11.png';
    arrImgODS[11] = 'ods12.png';
    arrImgODS[12] = 'ods13.png';
    arrImgODS[13] = 'ods14.png';
    arrImgODS[14] = 'ods15.png';
    arrImgODS[15] = 'ods16.png';
    arrImgODS[16] = 'ods17.png';

    return arrImgODS;
}

export function getTituloPactoGlobal() {
    var tituloPactoGlobal = [];
    tituloPactoGlobal[0] = 'Respeto y protección';
    tituloPactoGlobal[1] = 'Proactividad en la no vulneración';
    tituloPactoGlobal[2] = 'Relaciones laborales – Negociación colectiva';
    tituloPactoGlobal[3] = 'Relaciones laborales – No trabajo forzoso';
    tituloPactoGlobal[4] = 'No trabajo infantil';
    tituloPactoGlobal[5] = 'No discriminación';
    tituloPactoGlobal[6] = 'Enfoque preventivo';
    tituloPactoGlobal[7] = 'Responsabilidad ambiental';
    tituloPactoGlobal[8] = 'Tecnologías pro ambientales';
    tituloPactoGlobal[9] = 'No a la corrupción';
    return tituloPactoGlobal;
}

export function getColorPactoGlobal() {
    var colorPactoGlobal = [];
    colorPactoGlobal[0] = '#FAB716';
    colorPactoGlobal[1] = '#FAB716';
    colorPactoGlobal[2] = '#34B6EC';
    colorPactoGlobal[3] = '#34B6EC';
    colorPactoGlobal[4] = '#34B6EC';
    colorPactoGlobal[5] = '#34B6EC';
    colorPactoGlobal[6] = '#5F864D';
    colorPactoGlobal[7] = '#5F864D';
    colorPactoGlobal[8] = '#5F864D';
    colorPactoGlobal[9] = '#E0502A';
    return colorPactoGlobal;
}

export function getDescripcionPactoGlobal() {
    var descripcionPactoGlobal = [];
    descripcionPactoGlobal[0] = 'Las empresas deben apoyar y respetar la protección de los Derechos Humanos fundamentales, reconocidos internacionalmente, dentro de su ámbito de influencia.';
    descripcionPactoGlobal[1] = 'Las empresas deben asegurarse que sus empresas no son cómplices en la vulneración de los Derechos Humanos.';
    descripcionPactoGlobal[2] = 'Las empresas deben apoyar la libertad de afiliación y el reconocimiento efectivo del derecho a la  negociación colectiva.';
    descripcionPactoGlobal[3] = 'Las empresas deben apoyar la eliminación de toda forma de trabajo forzoso o realizado bajo coacción.';
    descripcionPactoGlobal[4] = 'Las empresas deben apoyar la erradicación del trabajo infantil.';
    descripcionPactoGlobal[5] = 'Las empresas deben apoyar la abolición de las prácticas de discriminación en el empleo y la ocupación.';
    descripcionPactoGlobal[6] = 'Las empresas deberán mantener un enfoque preventivo que favorezca el medio ambiente.';
    descripcionPactoGlobal[7] = 'Las empresas deben fomentar las iniciativas que promuevan una mayor responsabilidad ambiental.';
    descripcionPactoGlobal[8] = 'Las empresas deben favorecer el desarrollo y la difusión de las tecnologías respetuosas con el medioambiente.';
    descripcionPactoGlobal[9] = 'Las empresas deben trabajar contra la corrupción en todas sus formas, incluidas extorsión y soborno.';
    return descripcionPactoGlobal;
}



// desde la planilla
export function setNodosPracticasPactoGlobal(arrayNodosPracticasPactoGlobal, idPractica) {

    var color = '#c3c3c4';

    switch (idPractica) {
        case 0:
            arrayNodosPracticasPactoGlobal[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[5] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[6] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[7] = [0, 0, 0, 0, color];

            // Sacado de la matriz de la planilla
            //                             P  N 
            arrayNodosPracticasPactoGlobal[0][3] = '3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[1][3] = '3,mc-4,mc-5,mc-7,mc';
            arrayNodosPracticasPactoGlobal[2][3] = '3,mc-4,mc-5,mc-8,mc';
            arrayNodosPracticasPactoGlobal[3][3] = '1,mc-2,mc-3,c-4,c-5,c-6,c';
            arrayNodosPracticasPactoGlobal[4][3] = '7,mc-8,mc-9,mc';
            arrayNodosPracticasPactoGlobal[5][3] = '1,mc-10,mc';
            arrayNodosPracticasPactoGlobal[6][3] = '1,mc-10,mc';
            arrayNodosPracticasPactoGlobal[7][3] = '3,mc-4,mc-5,mc-6,mc';
            break;
        case 1:
            arrayNodosPracticasPactoGlobal[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[3] = [0, 0, 0, 0, color];
            // Sacado de la matriz de la planilla
            //                             P  N 
            arrayNodosPracticasPactoGlobal[0][3] = '3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[1][3] = '3,mc-4,mc-5,mc-7,mc';
            arrayNodosPracticasPactoGlobal[2][3] = '3,mc-4,mc-5,mc-8,mc';
            arrayNodosPracticasPactoGlobal[3][3] = '1,mc-2,mc';
            break;
        case 2:
            arrayNodosPracticasPactoGlobal[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[5] = [0, 0, 0, 0, color];

            // Sacado de la matriz de la planilla
            //                             P  N 
            arrayNodosPracticasPactoGlobal[0][3] = '3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[1][3] = '3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[2][3] = '3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[3][3] = '1,mc-2,mc';
            arrayNodosPracticasPactoGlobal[4][3] = '1,mc-2,mc';
            arrayNodosPracticasPactoGlobal[5][3] = '7,mc-8,mc-9,mc';
            break;
        case 3:
            arrayNodosPracticasPactoGlobal[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[5] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[6] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[7] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[8] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[9] = [0, 0, 0, 0, color];
            // Sacado de la matriz de la planilla
            //                             P  N 
            arrayNodosPracticasPactoGlobal[0][3] = '1,m-10,m';
            arrayNodosPracticasPactoGlobal[1][3] = '1,mc-10,mc';
            arrayNodosPracticasPactoGlobal[2][3] = '1,m-10,m';
            arrayNodosPracticasPactoGlobal[3][3] = '1,mc-10,mc';
            arrayNodosPracticasPactoGlobal[4][3] = '1,m-3,m-4,m-5,m-6,m-10,m';
            arrayNodosPracticasPactoGlobal[5][3] = '3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[6][3] = '1,m-2,m-10,m';
            arrayNodosPracticasPactoGlobal[7][3] = '1,m-10,m';
            arrayNodosPracticasPactoGlobal[8][3] = '1,m-3,m-4,m-5,m-6,m-10,m';
            arrayNodosPracticasPactoGlobal[9][3] = '1,m-2,m-3,m-4,m-5,m-6,m-10,m';
            break;
        case 4:
            arrayNodosPracticasPactoGlobal[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[5] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[6] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[7] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[8] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[9] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[10] = [0, 0, 0, 0, color];
            // Sacado de la matriz de la planilla
            //                             P  N 
            arrayNodosPracticasPactoGlobal[0][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasPactoGlobal[1][3] = '1,m-2,m-3,m-4,m-5,m-6,m-10,m';
            arrayNodosPracticasPactoGlobal[2][3] = '1,m-2,m-7,m-8,m-9,m';
            arrayNodosPracticasPactoGlobal[3][3] = '1,m-2,m-3,m-4,m-5,m-6,m-10,m';
            arrayNodosPracticasPactoGlobal[4][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-10,m';
            arrayNodosPracticasPactoGlobal[5][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasPactoGlobal[6][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasPactoGlobal[7][3] = '1,m-2,m-10,m';
            arrayNodosPracticasPactoGlobal[8][3] = '1,m-2,m-10,m';
            arrayNodosPracticasPactoGlobal[9][3] = '1,m-2,m-3,m-4,m-5,m-6,m';
            arrayNodosPracticasPactoGlobal[10][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-10,mc';
            break;
        case 5:
            arrayNodosPracticasPactoGlobal[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasPactoGlobal[4] = [0, 0, 0, 0, color];
            // Sacado de la matriz de la planilla
            //                             P  N 
            arrayNodosPracticasPactoGlobal[0][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasPactoGlobal[1][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc';
            arrayNodosPracticasPactoGlobal[2][3] = '1,m-2,m-3,m-4,m-5,m-6,m';
            arrayNodosPracticasPactoGlobal[3][3] = '1,m-2,m-10,m';
            arrayNodosPracticasPactoGlobal[4][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            break;
    }

    return arrayNodosPracticasPactoGlobal
}
// desde la planilla
export function setNodosPactoGlobal(arrayNodosPactoGlobal, idPractica) {

    switch (idPractica) {
        case 0:
            // cuales Pprácticas están en cada pactos globales
            //                    P  N     
            arrayNodosPactoGlobal[0][3] = '3-5-6';
            arrayNodosPactoGlobal[1][3] = '3';
            arrayNodosPactoGlobal[2][3] = '0-1-2-3-7';
            arrayNodosPactoGlobal[3][3] = '0-1-2-3-7';
            arrayNodosPactoGlobal[4][3] = '0-1-2-3-7';
            arrayNodosPactoGlobal[5][3] = '0-3-7';
            arrayNodosPactoGlobal[6][3] = '1-4';
            arrayNodosPactoGlobal[7][3] = '2-4';
            arrayNodosPactoGlobal[8][3] = '4';
            arrayNodosPactoGlobal[9][3] = '5-6';
            break;
        case 1:
            // cuales Pprácticas están en cada pactos globales
            //                    P  N  
            arrayNodosPactoGlobal[0][3] = '3';
            arrayNodosPactoGlobal[1][3] = '3';
            arrayNodosPactoGlobal[2][3] = '0-1-2';
            arrayNodosPactoGlobal[3][3] = '0-1-2';
            arrayNodosPactoGlobal[4][3] = '0-1-2';
            arrayNodosPactoGlobal[5][3] = '0';
            arrayNodosPactoGlobal[6][3] = '1';
            arrayNodosPactoGlobal[7][3] = '2';
            arrayNodosPactoGlobal[8][3] = '';
            arrayNodosPactoGlobal[9][3] = '';
            break;
        case 2:
            // cuales Pprácticas están en cada pactos globales
            //                    P  N  
            arrayNodosPactoGlobal[0][3] = '3-4';
            arrayNodosPactoGlobal[1][3] = '3-4';
            arrayNodosPactoGlobal[2][3] = '0-1-2';
            arrayNodosPactoGlobal[3][3] = '0-1-2';
            arrayNodosPactoGlobal[4][3] = '0-1-2';
            arrayNodosPactoGlobal[5][3] = '0-1-2';
            arrayNodosPactoGlobal[6][3] = '5';
            arrayNodosPactoGlobal[7][3] = '5';
            arrayNodosPactoGlobal[8][3] = '5';
            arrayNodosPactoGlobal[9][3] = '';
            break;
        case 3:
            // cuales Pprácticas están en cada pactos globales
            //                    P  N  
            arrayNodosPactoGlobal[0][3] = '0-1-2-3-4-6-7-8-9';
            arrayNodosPactoGlobal[1][3] = '6-9';
            arrayNodosPactoGlobal[2][3] = '4-5-8-9';
            arrayNodosPactoGlobal[3][3] = '4-5-8-9';
            arrayNodosPactoGlobal[4][3] = '4-5-8-9';
            arrayNodosPactoGlobal[5][3] = '4-5-8-9';
            arrayNodosPactoGlobal[6][3] = '';
            arrayNodosPactoGlobal[7][3] = '';
            arrayNodosPactoGlobal[8][3] = '';
            arrayNodosPactoGlobal[9][3] = '0-1-2-3-4-6-7-8-9';
            break;
        case 4:
            // cuales Pprácticas están en cada pactos globales
            //                    P  N  
            arrayNodosPactoGlobal[0][3] = '0-1-2-3-4-5-6-7-8-9-10';
            arrayNodosPactoGlobal[1][3] = '0-1-2-3-4-5-6-7-8-9-10';
            arrayNodosPactoGlobal[2][3] = '0-1-3-4-5-6-9-10';
            arrayNodosPactoGlobal[3][3] = '0-1-3-4-5-6-9-10';
            arrayNodosPactoGlobal[4][3] = '0-1-3-4-5-6-9-10';
            arrayNodosPactoGlobal[5][3] = '0-1-3-4-5-6-9-10';
            arrayNodosPactoGlobal[6][3] = '0-2-4-5-6';
            arrayNodosPactoGlobal[7][3] = '0-2-4-5-6';
            arrayNodosPactoGlobal[8][3] = '0-2-5-6';
            arrayNodosPactoGlobal[9][3] = '0-1-3-4-5-6-7-8-10';
            break;
        case 5:
            // cuales Pprácticas están en cada pactos globales
            //                    P  N  
            arrayNodosPactoGlobal[0][3] = '0-1-2-3-4';
            arrayNodosPactoGlobal[1][3] = '0-1-2-3-4';
            arrayNodosPactoGlobal[2][3] = '0-1-2-4';
            arrayNodosPactoGlobal[3][3] = '0-1-2-4';
            arrayNodosPactoGlobal[4][3] = '0-1-2-4';
            arrayNodosPactoGlobal[5][3] = '0-1-2-4';
            arrayNodosPactoGlobal[6][3] = '0-4';
            arrayNodosPactoGlobal[7][3] = '0-4';
            arrayNodosPactoGlobal[8][3] = '0-4';
            arrayNodosPactoGlobal[9][3] = '0-3-4';
            break;
    }

    return arrayNodosPactoGlobal
}
// desde la planilla
export function setNodosPracticasODS(arrayNodosPracticasODS, idPractica) {

    var color = '#c3c3c4';

    switch (idPractica) {
        case 0:
            arrayNodosPracticasODS[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[5] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[6] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[7] = [0, 0, 0, 0, color];

            arrayNodosPracticasODS[0][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[1][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[2][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[3][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-7,mc-8,mc-9,c-10,mco';
            arrayNodosPracticasODS[4][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-7,mc-9,mc';
            arrayNodosPracticasODS[5][3] = '1,mc-3,mc-6,mc-7,mc-10,mco';
            arrayNodosPracticasODS[6][3] = '1,mc-3,mc-6,mc-7,mc-10,mco';
            arrayNodosPracticasODS[7][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            break;
        case 1:
            arrayNodosPracticasODS[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[3] = [0, 0, 0, 0, color];

            arrayNodosPracticasODS[0][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[1][3] = '1,mc-3,mc-5,mc-6,mc-7,-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[2][3] = '1,mc-3,mc-5,mc-6,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[3][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-7,mc-8,mc-10,mco';
            break;
        case 2:
            arrayNodosPracticasODS[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[5] = [0, 0, 0, 0, color];

            arrayNodosPracticasODS[0][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[1][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[2][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[3][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-7,mc-8,mc-10,mco';
            arrayNodosPracticasODS[4][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-7,mc-8,mc-10,mco';
            arrayNodosPracticasODS[5][3] = '1,mc-2,mc-3,mc-4,mc-5,mc-6,mc-7,mc-9,mc';
            break;
        case 3:
            arrayNodosPracticasODS[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[5] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[6] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[7] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[8] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[9] = [0, 0, 0, 0, color];

            arrayNodosPracticasODS[0][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[1][3] = '1,mc-3,mc-6,mc-7,mc-10,mco';
            arrayNodosPracticasODS[2][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[3][3] = '1,mc-3,mc-6,mc-7,mc-8,m-10,mco';
            arrayNodosPracticasODS[4][3] = '1,m-3,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasODS[5][3] = '1,mc-3,mc-5,mc-6,mc-7,mc-8,mc-9,mc-10,mco';
            arrayNodosPracticasODS[6][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[7][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[8][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[9][3] = '1,m-3,m-4,m-5,m-6,m-7,m-8,m-10,m';
            break;
        case 4:
            arrayNodosPracticasODS[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[4] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[5] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[6] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[7] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[8] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[9] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[10] = [0, 0, 0, 0, color];

            arrayNodosPracticasODS[0][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasODS[1][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[2][3] = '1,m-2,m-6,m-7,m';
            arrayNodosPracticasODS[3][3] = '1,m-3,m-6,m-10,m';
            arrayNodosPracticasODS[4][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasODS[5][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasODS[6][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasODS[7][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[8][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[9][3] = '1,m-5,m-6,m-7,m-8,m-10,m';
            arrayNodosPracticasODS[10][3] = '1,mc-3,mc-6,mc-7,mc-10,mco';
            break;
        case 5:
            arrayNodosPracticasODS[0] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[1] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[2] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[3] = [0, 0, 0, 0, color];
            arrayNodosPracticasODS[4] = [0, 0, 0, 0, color];

            arrayNodosPracticasODS[0][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            arrayNodosPracticasODS[1][3] = '1,mc-5,mc-6,mc-7,mc-8,mc-10,mco';
            arrayNodosPracticasODS[2][3] = '1,m-5,m-6,m-7,m-8,m-10,m';
            arrayNodosPracticasODS[3][3] = '1,m-3,m-6,m-7,m-10,m';
            arrayNodosPracticasODS[4][3] = '1,m-2,m-3,m-4,m-5,m-6,m-7,m-8,m-9,m-10,m';
            break;
    }

    return arrayNodosPracticasODS
}
// desde la planilla
export function setNodosODS(arrayNodosODS, idPractica) {

    switch (idPractica) {
        case 0:
            arrayNodosODS[0][3] = '0-1-2-3-4-5-6-7';
            arrayNodosODS[1][3] = '3-4';
            arrayNodosODS[2][3] = '0-1-2-3-4-5-6-7';
            arrayNodosODS[3][3] = '3-4';
            arrayNodosODS[4][3] = '0-1-2-3-4-7';
            arrayNodosODS[5][3] = '0-1-2-3-4-5-6-7';
            arrayNodosODS[6][3] = '0-1-2-3-4-5-6-7';
            arrayNodosODS[7][3] = '0-1-2-3-7';
            arrayNodosODS[8][3] = '0-1-2-3-4-7';
            arrayNodosODS[9][3] = '0-1-2-3-5-6-7';
            arrayNodosODS[10][3] = '3-4';
            arrayNodosODS[11][3] = '4';
            arrayNodosODS[12][3] = '4';
            arrayNodosODS[13][3] = '4';
            arrayNodosODS[14][3] = '4';
            arrayNodosODS[15][3] = '0-1-2-3-5-6-7';
            arrayNodosODS[16][3] = '0-1-2-3-4-5-6-7';
            break;
        case 1:
            arrayNodosODS[0][3] = '0-1-2-3';
            arrayNodosODS[1][3] = '0-1-2-3';
            arrayNodosODS[2][3] = '0-1-2-3';
            arrayNodosODS[3][3] = '';
            arrayNodosODS[4][3] = '3';
            arrayNodosODS[5][3] = '3';
            arrayNodosODS[6][3] = '3';
            arrayNodosODS[7][3] = '3';
            arrayNodosODS[8][3] = '';
            arrayNodosODS[9][3] = '0-1-2-3';
            arrayNodosODS[10][3] = '0-1-2-3';
            arrayNodosODS[11][3] = '0-1-2-3';
            arrayNodosODS[12][3] = '0-1-2-3';
            arrayNodosODS[13][3] = '';
            arrayNodosODS[14][3] = '3';
            arrayNodosODS[15][3] = '3';
            arrayNodosODS[16][3] = '3';
            break;
        case 2:
            arrayNodosODS[0][3] = '0-1-2-3-4-5';
            arrayNodosODS[1][3] = '0-1-2-3-4-5';
            arrayNodosODS[2][3] = '0-1-2-3-4-5';
            arrayNodosODS[3][3] = '';
            arrayNodosODS[4][3] = '3-4-5';
            arrayNodosODS[5][3] = '3-4-5';
            arrayNodosODS[6][3] = '3-4-5';
            arrayNodosODS[7][3] = '3-4-5';
            arrayNodosODS[8][3] = '';
            arrayNodosODS[9][3] = '0-1-2-3-4-5';
            arrayNodosODS[10][3] = '0-1-2-3-4-5';
            arrayNodosODS[11][3] = '0-1-2-3-4-5';
            arrayNodosODS[12][3] = '0-1-2-3-4-5';
            arrayNodosODS[13][3] = '';
            arrayNodosODS[14][3] = '3-4-5';
            arrayNodosODS[15][3] = '3-4-5';
            arrayNodosODS[16][3] = '3-4-5';
            break;
        case 3:
            arrayNodosODS[0][3] = '0-1-2-3-4-5-6-7-8-9';
            arrayNodosODS[1][3] = '0-1-2-3-4-5-6-7-8-9';
            arrayNodosODS[2][3] = '1-3-5';
            arrayNodosODS[3][3] = '';
            arrayNodosODS[4][3] = '';
            arrayNodosODS[5][3] = '';
            arrayNodosODS[6][3] = '';
            arrayNodosODS[7][3] = '';
            arrayNodosODS[8][3] = '';
            arrayNodosODS[9][3] = '0-1-2-3-4-5-6-7-8-9';
            arrayNodosODS[10][3] = '0-1-2-3-4-5-6-7-8-9';
            arrayNodosODS[11][3] = '0-1-2-3-4-5-6-7-8-9';
            arrayNodosODS[12][3] = '1-3-5';
            arrayNodosODS[13][3] = '';
            arrayNodosODS[14][3] = '9';
            arrayNodosODS[15][3] = '9';
            arrayNodosODS[16][3] = '9';
            break;
        case 4:
            arrayNodosODS[0][3] = '0-1-2-3-4-5-6-7-8-9-10';
            arrayNodosODS[1][3] = '0-1-2-3-4-5-6-7-8-9-10';
            arrayNodosODS[2][3] = '10';
            arrayNodosODS[3][3] = '';
            arrayNodosODS[4][3] = '0-2-4-5-6';
            arrayNodosODS[5][3] = '0-2-4-5-6';
            arrayNodosODS[6][3] = '0-2-4-5-6';
            arrayNodosODS[7][3] = '';
            arrayNodosODS[8][3] = '';
            arrayNodosODS[9][3] = '0-1-3-4-5-6-7-8-10';
            arrayNodosODS[10][3] = '0-1-3-4-5-6-7-8-10';
            arrayNodosODS[11][3] = '0-1-3-4-5-6-7-8-10';
            arrayNodosODS[12][3] = '10';
            arrayNodosODS[13][3] = '';
            arrayNodosODS[14][3] = '0-4-5-6';
            arrayNodosODS[15][3] = '0-4-5-6';
            arrayNodosODS[16][3] = '0-4-5-6';
            break;
        case 5:
            arrayNodosODS[0][3] = '0-1-2-3-4';
            arrayNodosODS[1][3] = '0-1-2-3-4';
            arrayNodosODS[2][3] = '1';
            arrayNodosODS[3][3] = '';
            arrayNodosODS[4][3] = '0-4';
            arrayNodosODS[5][3] = '0-4';
            arrayNodosODS[6][3] = '0-4';
            arrayNodosODS[7][3] = '';
            arrayNodosODS[8][3] = '';
            arrayNodosODS[9][3] = '0-3-4';
            arrayNodosODS[10][3] = '0-3-4';
            arrayNodosODS[11][3] = '0-3-4';
            arrayNodosODS[12][3] = '';
            arrayNodosODS[13][3] = '';
            arrayNodosODS[14][3] = '0-4';
            arrayNodosODS[15][3] = '0-4';
            arrayNodosODS[16][3] = '0-4';
            break;
    }

    return arrayNodosODS
}

export function setNodosPracticas(arrayNodosPracticas, idPractica) {
    switch (idPractica) {
        case 0:

            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:
            //                  P  E  N                   
            arrayNodosPracticas[1][0][3] = '1-2-3-4-5-6-10';
            arrayNodosPracticas[1][0][4] = '3-10-16-17';
            arrayNodosPracticas[1][1][3] = '0';
            arrayNodosPracticas[1][1][4] = '0';
            arrayNodosPracticas[1][2][3] = '0';
            arrayNodosPracticas[1][2][4] = '0';
            arrayNodosPracticas[1][3][3] = '0';
            arrayNodosPracticas[1][3][4] = '0';
            arrayNodosPracticas[1][4][3] = '0';
            arrayNodosPracticas[1][4][4] = '0';
            arrayNodosPracticas[1][5][3] = '0';
            arrayNodosPracticas[1][5][4] = '0';
            arrayNodosPracticas[1][6][3] = '0';
            arrayNodosPracticas[1][6][4] = '0';
            arrayNodosPracticas[1][7][3] = '0';
            arrayNodosPracticas[1][7][4] = '0';
            arrayNodosPracticas[1][8][3] = '0';
            arrayNodosPracticas[1][8][4] = '0';
            arrayNodosPracticas[1][9][3] = '0';
            arrayNodosPracticas[1][9][4] = '0';

            //                  P  E  N                   
            arrayNodosPracticas[2][0][3] = '1-2-7-8-9';
            arrayNodosPracticas[2][0][4] = '2-6-7-11';
            arrayNodosPracticas[2][1][3] = '0';
            arrayNodosPracticas[2][1][4] = '0';
            arrayNodosPracticas[2][2][3] = '0';
            arrayNodosPracticas[2][2][4] = '0';
            arrayNodosPracticas[2][3][3] = '0';
            arrayNodosPracticas[2][3][4] = '0';
            arrayNodosPracticas[2][4][3] = '0';
            arrayNodosPracticas[2][4][4] = '0';
            arrayNodosPracticas[2][5][3] = '0';
            arrayNodosPracticas[2][5][4] = '0';
            arrayNodosPracticas[2][6][3] = '0';
            arrayNodosPracticas[2][6][4] = '0';
            arrayNodosPracticas[2][7][3] = '0';
            arrayNodosPracticas[2][7][4] = '0';
            arrayNodosPracticas[2][8][3] = '0';
            arrayNodosPracticas[2][8][4] = '0';
            arrayNodosPracticas[2][9][3] = '0';
            arrayNodosPracticas[2][9][4] = '0';

            //                  P  E  N                   
            arrayNodosPracticas[3][0][3] = '1-2-3-4-5-6-10';
            arrayNodosPracticas[3][0][4] = '3-10-16';
            arrayNodosPracticas[3][1][3] = '0';
            arrayNodosPracticas[3][1][4] = '0';
            arrayNodosPracticas[3][2][3] = '0';
            arrayNodosPracticas[3][2][4] = '0';
            arrayNodosPracticas[3][3][3] = '0';
            arrayNodosPracticas[3][3][4] = '0';
            arrayNodosPracticas[3][4][3] = '0';
            arrayNodosPracticas[3][4][4] = '0';
            arrayNodosPracticas[3][5][3] = '0';
            arrayNodosPracticas[3][5][4] = '0';
            arrayNodosPracticas[3][6][3] = '0';
            arrayNodosPracticas[3][6][4] = '0';
            arrayNodosPracticas[3][7][3] = '0';
            arrayNodosPracticas[3][7][4] = '0';
            arrayNodosPracticas[3][8][3] = '0';
            arrayNodosPracticas[3][8][4] = '0';
            arrayNodosPracticas[3][9][3] = '0';
            arrayNodosPracticas[3][9][4] = '0';

            //                  P  E  N                   
            arrayNodosPracticas[4][0][3] = '1-2-3-4-5-6-7-8-10';
            arrayNodosPracticas[4][0][4] = '1-2-3-4-5-6-7-8-9-10-18';
            arrayNodosPracticas[4][1][3] = '1-2-3-4-5-6-7-8-10';
            arrayNodosPracticas[4][1][4] = '1-2-3-4-5-6-7-8-9-10-18';
            arrayNodosPracticas[4][2][3] = '1-2-3-4-5-6-7-8-10';
            arrayNodosPracticas[4][2][4] = '1-2-3-4-5-6-7-8-9-10-18';
            arrayNodosPracticas[4][3][3] = '1-2-3-4-5-6-7-8-10';
            arrayNodosPracticas[4][3][4] = '1-2-3-4-5-6-7-8-9-10-18';
            arrayNodosPracticas[4][4][3] = '0';
            arrayNodosPracticas[4][4][4] = '0';
            arrayNodosPracticas[4][5][3] = '0';
            arrayNodosPracticas[4][5][4] = '0';
            arrayNodosPracticas[4][6][3] = '0';
            arrayNodosPracticas[4][6][4] = '0';
            arrayNodosPracticas[4][7][3] = '0';
            arrayNodosPracticas[4][7][4] = '0';
            arrayNodosPracticas[4][8][3] = '0';
            arrayNodosPracticas[4][8][4] = '0';
            arrayNodosPracticas[4][9][3] = '1-2-3-4-5-6-7-8-10';
            arrayNodosPracticas[4][9][4] = '1-2-3-4-5-6-7-8-9-10-18';

            //                  P  E  N                   
            arrayNodosPracticas[5][0][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][0][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][1][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][1][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][2][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][2][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][3][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][3][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][4][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][4][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][5][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][5][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][6][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][6][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][7][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][7][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][8][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[5][8][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[5][9][3] = '0';
            arrayNodosPracticas[5][9][4] = '0';

            //                  P  E  N                   
            arrayNodosPracticas[6][0][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][0][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][1][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][1][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][2][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][2][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][3][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][3][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][4][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][4][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][5][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][5][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][6][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][6][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][7][3] = '1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][7][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][8][3] = 'v1-2-3-4-5-6-7-8-9-10';
            arrayNodosPracticas[6][8][4] = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17';
            arrayNodosPracticas[6][9][3] = '0';
            arrayNodosPracticas[6][9][4] = '0';

            //                  P  E  N                   
            arrayNodosPracticas[7][0][3] = '0000';
            arrayNodosPracticas[7][0][4] = '0000';
            arrayNodosPracticas[7][1][3] = '0000';
            arrayNodosPracticas[7][1][4] = '0000';
            arrayNodosPracticas[7][2][3] = '0000';
            arrayNodosPracticas[7][2][4] = '0000';
            arrayNodosPracticas[7][3][3] = '0000';
            arrayNodosPracticas[7][3][4] = '0000';
            arrayNodosPracticas[7][4][3] = '0000';
            arrayNodosPracticas[7][4][4] = '0000';
            arrayNodosPracticas[7][5][3] = '0000';
            arrayNodosPracticas[7][5][4] = '0000';
            arrayNodosPracticas[7][6][3] = '0000';
            arrayNodosPracticas[7][6][4] = '0000';
            arrayNodosPracticas[7][7][3] = '0000';
            arrayNodosPracticas[7][7][4] = '0000';
            arrayNodosPracticas[7][8][3] = '0000';
            arrayNodosPracticas[7][8][4] = '0000';
            arrayNodosPracticas[7][9][3] = '0000';
            arrayNodosPracticas[7][9][4] = '0000';

            //                  P  E  N                   
            arrayNodosPracticas[8][0][3] = '0000';
            arrayNodosPracticas[8][0][4] = '0000';
            arrayNodosPracticas[8][1][3] = '0000';
            arrayNodosPracticas[8][1][4] = '0000';
            arrayNodosPracticas[8][2][3] = '0000';
            arrayNodosPracticas[8][2][4] = '0000';
            arrayNodosPracticas[8][3][3] = '0000';
            arrayNodosPracticas[8][3][4] = '0000';
            arrayNodosPracticas[8][4][3] = '0000';
            arrayNodosPracticas[8][4][4] = '0000';
            arrayNodosPracticas[8][5][3] = '0000';
            arrayNodosPracticas[8][5][4] = '0000';
            arrayNodosPracticas[8][6][3] = '0000';
            arrayNodosPracticas[8][6][4] = '0000';
            arrayNodosPracticas[8][7][3] = '0000';
            arrayNodosPracticas[8][7][4] = '0000';
            arrayNodosPracticas[8][8][3] = '0000';
            arrayNodosPracticas[8][8][4] = '0000';
            arrayNodosPracticas[8][9][3] = '0000';
            arrayNodosPracticas[8][9][4] = '0000';

            //                  P  E  N                   
            arrayNodosPracticas[9][0][3] = '0000';
            arrayNodosPracticas[9][0][4] = '0000';
            arrayNodosPracticas[9][1][3] = '0000';
            arrayNodosPracticas[9][1][4] = '0000';
            arrayNodosPracticas[9][2][3] = '0000';
            arrayNodosPracticas[9][2][4] = '0000';
            arrayNodosPracticas[9][3][3] = '0000';
            arrayNodosPracticas[9][3][4] = '0000';
            arrayNodosPracticas[9][4][3] = '0000';
            arrayNodosPracticas[9][4][4] = '0000';
            arrayNodosPracticas[9][5][3] = '0000';
            arrayNodosPracticas[9][5][4] = '0000';
            arrayNodosPracticas[9][6][3] = '0000';
            arrayNodosPracticas[9][6][4] = '0000';
            arrayNodosPracticas[9][7][3] = '0000';
            arrayNodosPracticas[9][7][4] = '0000';
            arrayNodosPracticas[9][8][3] = '0000';
            arrayNodosPracticas[9][8][4] = '0000';
            arrayNodosPracticas[9][9][3] = '0000';
            arrayNodosPracticas[9][9][4] = '0000';
            //                  P  E  N                   
            arrayNodosPracticas[10][0][3] = '0000';
            arrayNodosPracticas[10][0][4] = '0000';
            arrayNodosPracticas[10][1][3] = '0000';
            arrayNodosPracticas[10][1][4] = '0000';
            arrayNodosPracticas[10][2][3] = '0000';
            arrayNodosPracticas[10][2][4] = '0000';
            arrayNodosPracticas[10][3][3] = '0000';
            arrayNodosPracticas[10][3][4] = '0000';
            arrayNodosPracticas[10][4][3] = '0000';
            arrayNodosPracticas[10][4][4] = '0000';
            arrayNodosPracticas[10][5][3] = '0000';
            arrayNodosPracticas[10][5][4] = '0000';
            arrayNodosPracticas[10][6][3] = '0000';
            arrayNodosPracticas[10][6][4] = '0000';
            arrayNodosPracticas[10][7][3] = '0000';
            arrayNodosPracticas[10][7][4] = 'free ukraine';
            arrayNodosPracticas[10][8][3] = 'free uyghur';
            arrayNodosPracticas[10][8][4] = 'free taiwan';
            arrayNodosPracticas[10][9][3] = 'free honkong';
            arrayNodosPracticas[10][9][4] = 'free tibet';
            break;
        case 5:

            break;
    }

    return arrayNodosPracticas
}
