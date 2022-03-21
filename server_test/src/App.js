import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { getLink } from "./functions/siteLinks";

import GuiaDeGestionIntro from "./Pages/guia_de_gestion/intro";
import GuiaDeGestionAgradecimientos from "./Pages/guia_de_gestion/agradecimientos";
import GuiaDeGestionQueEs from "./Pages/guia_de_gestion/que_es";
import GuiaDeGestionParaQuien from "./Pages/guia_de_gestion/para_quien";
import GuiaDeGestionAplicacionEstrategicaYTactica from "./Pages/guia_de_gestion/aplicacion_estrategica_y_tactica";
import GuiaDeGestionPorQueEsNecesario from "./Pages/guia_de_gestion/por_que_es_necesario";
import GuiaDeGestionBienvenida from "./Pages/guia_de_gestion/bienvenida";
import GuiaDeGestionColaboradores from "./Pages/guia_de_gestion/colaboradores";
import GuiaDeGestionComoUsarLaGuiaEtapas from "./Pages/guia_de_gestion/como_usar_la_guia_etapas";
import GuiaDeGestionComoUsarLaGuiaPracticas from "./Pages/guia_de_gestion/como_usar_la_guia_practicas";
import GuiaDeGestionContenido from "./Pages/guia_de_gestion/contenido";
import GuiaDeGestionImpactos_positivos from "./Pages/guia_de_gestion/impactos_positivos";
import GuiaDeGestionMetodologia from "./Pages/guia_de_gestion/metodologia";
import GuiaDeGestionOrigenDeLasBuenasPracticas from "./Pages/guia_de_gestion/origen_de_las_buenas_practicas";
import GuiaDeGestionVinculoMandanteProveedor from "./Pages/guia_de_gestion/vinculo_mandante_proveedor";

import EtapasIntro from "./Pages/etapas/intro";
import EtapasEtapas from "./Pages/etapas/etapas";

import BuenasPracticasIntro from "./Pages/buenas_practicas/intro";
import BuenasPracticasCumplimientoLegalidad from "./Pages/buenas_practicas/1_cumplimiento_legalidad";
import BuenasPracticasCompromisosYCumplimientos from "./Pages/buenas_practicas/2_compromisos_y_cumplimientos";
import BuenasPracticasPeticionOAdscripcionInternacional from "./Pages/buenas_practicas/3_peticion_o_adscripcion_internacional";
import BuenasPracticasPecanismosDeAseguramiento from "./Pages/buenas_practicas/4_mecanismos_de_aseguramiento";
import BuenasPracticasPetodologiaDeTrabajo from "./Pages/buenas_practicas/5_metodologia_de_trabajo";
import BuenasPracticasmeTodosDeTrabajoColaboratico from "./Pages/buenas_practicas/6_metodos_de_trabajo_colaboratico";
import ErrorPage from "./Pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/guia_de_gestion/intro' element={<GuiaDeGestionIntro />} />
        <Route path="/guia_de_gestion/agradecimientos" element={<GuiaDeGestionAgradecimientos />} />
        <Route path="/guia_de_gestion/que_es" element={<GuiaDeGestionQueEs />} />
        <Route path="/guia_de_gestion/para_quien" element={<GuiaDeGestionParaQuien />} />
        <Route path="/guia_de_gestion/aplicacion_estrategica_y_tactica" element={<GuiaDeGestionAplicacionEstrategicaYTactica />} />
        <Route path="/guia_de_gestion/por_que_es_necesario" element={<GuiaDeGestionPorQueEsNecesario />} />
        <Route path="/guia_de_gestion/bienvenida" element={<GuiaDeGestionBienvenida />} />
        <Route path="/guia_de_gestion/colaboradores" element={<GuiaDeGestionColaboradores />} />
        <Route path="/guia_de_gestion/como_usar_la_guia_etapas" element={<GuiaDeGestionComoUsarLaGuiaEtapas />} />
        <Route path="/guia_de_gestion/como_usar_la_guia_practicas" element={<GuiaDeGestionComoUsarLaGuiaPracticas />} />
        <Route path="/guia_de_gestion/contenido" element={<GuiaDeGestionContenido />} />
        <Route path="/guia_de_gestion/impactos_positivos" element={<GuiaDeGestionImpactos_positivos />} />
        <Route path="/guia_de_gestion/metodologia" element={<GuiaDeGestionMetodologia />} />
        <Route path="/guia_de_gestion/origen_de_las_buenas_practicas" element={<GuiaDeGestionOrigenDeLasBuenasPracticas />} />
        <Route path="/guia_de_gestion/vinculo_mandante_proveedor" element={<GuiaDeGestionVinculoMandanteProveedor />} />

        <Route path="/etapas/intro" element={<EtapasIntro />} />
        <Route path="/etapas/etapas" element={<EtapasEtapas />} />

        <Route path="/buenas_practicas/intro" element={<BuenasPracticasIntro />} />
        <Route path="/buenas_practicas/1_cumplimiento_legalidad" element={<BuenasPracticasCumplimientoLegalidad />} />
        <Route path="/buenas_practicas/2_compromisos_y_cumplimientos" element={<BuenasPracticasCompromisosYCumplimientos />} />
        <Route path="/buenas_practicas/3_peticion_o_adscripcion_internacional" element={<BuenasPracticasPeticionOAdscripcionInternacional />} />
        <Route path="/buenas_practicas/4_mecanismos_de_aseguramiento" element={<BuenasPracticasPecanismosDeAseguramiento />} />
        <Route path="/buenas_practicas/5_metodologia_de_trabajo" element={<BuenasPracticasPetodologiaDeTrabajo />} />
        <Route path="/buenas_practicas/6_metodos_de_trabajo_colaboratico" element={<BuenasPracticasmeTodosDeTrabajoColaboratico />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
