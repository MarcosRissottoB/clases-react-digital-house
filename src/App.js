import './App.css';
import React, { useState } from 'react';
// import { Listado } from './componentes/listado';
// import { Eventos } from './componentes/eventos';
// import { ComponenteControlado } from './componentes/componenteControlado';
// import { NoComponenteControlado } from './componentes/componenteNoControlado';
import { FormularioBasico } from './componentes/formularios/basico';
// import { FormularioHandlerDinamico } from './componentes/formularios/handlerDinamico'
import { Card } from './componentes/card';

function App() {
  const [data, setData] = useState({}); 

  const handlerSubmitData = (data) => {
    console.log("La data llego a APP.JS", data)
    setData(data)
  }

  return (
    <div className="App">
      <h1>Temas de hoy: Eventos y formularios</h1>
      <div className="App-container">
      <div>
        {/* Clase anterior */}
        {/* <Listado /> */}
        {/* <br />
        <br /> */}

        {/* Clase de hoy */}
        {/* Eventos */}
        {/* <Eventos /> */}
        {/* <br />
        <br /> */}

        {/* Componentes controlados VS no controlados */}
        {/* <ComponenteControlado /> */}
        {/* <NoComponenteControlado /> */}

        {/* Conclusion: Los componentes no controlados son una forma directa de obtener datos
         desde el usuario cuando los requerimientos son sencillos Componentes controlados,
          pueden ser más complejos de crear pero permiten implementar patrones más complejos. */}
        
        {/* <br />
        <br /> */}
      </div>
         {/* Formularios */}
         <FormularioBasico submitData={handlerSubmitData}/>
         {/* <FormularioHandlerDinamico /> */}
        <br />
        <br />
        {/* {data ? <Card data={data} /> : ''} */}
        {data && <Card data={data} />}
      </div>
    </div>
  );
}

export default App;





