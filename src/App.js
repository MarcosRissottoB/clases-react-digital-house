import './App.css';
import * as React from 'react';
// import { Listado } from './componentes/listado';
import { Eventos } from './componentes/eventos';
// import { ComponenteControlado } from './componentes/componenteControlado';
// import { NoComponenteControlado } from './componentes/componenteNoControlado';
// import { FormularioBasico } from './componentes/formularios/basico';
import { FormularioHandlerDinamico } from './componentes/formularios/handlerDinamico'

function App() {
  return (
    <div className="App">
      <h1>Temas de hoy: Eventos y formularios</h1>
      <div className="App-container">

        {/* Clase anterior */}
        {/* <Listado /> */}
        <br />
        <br />

        {/* Clase de hoy */}
        {/* Eventos */}
        <Eventos />
        <br />
        <br />
        
        {/* Componentes controlados VS no controlados */}
        {/* <ComponenteControlado /> */}
        {/* <NoComponenteControlado /> */}

        {/* Conclusion: Los componentes no controlados son una forma directa de obtener datos
         desde el usuario cuando los requerimientos son sencillos Componentes controlados,
          pueden ser más complejos de crear pero permiten implementar patrones más complejos. */}
        
        <br />
        <br />

         {/* Formularios */}
         {/* <FormularioBasico /> */}
         {/* <FormularioHandlerDinamico /> */}
      </div>
    </div>
  );
}

export default App;





