import './App.css';
import * as React from 'react';
import { Button } from './componentes/button'

function App() {
const personas = [
  {id: 1, nombre: 'matias'},
  {id: 2, nombre: 'Javier'},
  {id: 3,nombre: 'Ricardo'},
  {id: 4, nombre: 'Marcos'}
]

const filtroPorNombre = (personas) => {
   let nombre = personas.filter(persona => persona.nombre ===  'Javier')[0].nombre
   console.log("nombre", nombre);
   return nombre
}

  return (
    <div className="App">
      <h1>Practicas con CSS</h1>
      <Button >Login</Button>
     
      <h2>array.filter</h2>
      <div><span>Valor retornado: <strong>{filtroPorNombre(personas)}</strong></span></div>
      <br />
      <br />
      <span>Devuelve un nuevo array... y hay que iterarlo,
         para evitarlo en la funcion use [0].nombre, para retornar el nombre del primer elemento</span>
      
      <h2>array.map</h2>
      {personas.map((persona) => 
        <ul key={persona.id}>
          <li><span>{persona.nombre}</span></li>
        </ul>
      )}
      <br />
      <span>Devuelve un elemento por cada elemento del array original</span>
    </div>
  );
}

export default App;





