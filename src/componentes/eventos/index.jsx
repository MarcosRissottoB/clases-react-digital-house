import React from 'react'
// import { ButtonConEvento } from '../buttonConEvento';

export const Eventos = () => {

  // Parte 1-a
  // const handleEventoSintetico = (e) => {
  //   console.log("handleEventoSintetico");
  //   // console.log("Target: ", e);
  //   console.log(e.nativeEvent);
  // };

  // Parte 1-b
  // const handleClickAutomatico = () => {
  //   console.log("handleClickAutomatico");
  // };
  
  // Parte 2
  // const handleClickPersonalizado = (e) => {
  //   console.log("handleClickPersonalizado: Hola desde el padre");
  // };

  // Parte 3
  // onChange evento para los inputs con el teclado
  // const handleChange = (e) => {
  //   console.log("handleChange target: ", e.target);
  //   console.log("handleChange: value", e.target.value);
  //   // if (e.target.value.length > 3) {
  //   //   console.log("handleChange con 4 o mas letras: ", e.target.value);
  //   // }



  // }
  return (
    <div>
      <h1>Tema Eventos</h1>

        {/* Nuevo tema: Eventos: 
          - Nativos del navegador (del mouse, teclado, etc): Ejemplo: Mouseover
          - Sinteticos: SyntheticEvents son los que crea react haciendo un wrapper
           de los nativos para tener mas control: onClick/ onChange/ Otros
          - Personalizados, los que creamos nosotros.
        */}

         {/* Eventos Nativos con JS Vanilla sin React */}
         {/* addEventListener("mouseover", (event) => {});
          onmouseover = (event) => {}; */}
        
         {/* Parte 1-a */}
        {/* Eventos Sinteticos con React */}
        {/* <h2>Eventos Sinteticos</h2> 
       <button onClick={handleEventoSintetico}>
          Evento sintetico
        </button> */}

        {/* Parte 1-b */}
        {/* Los parentesis, 
          hace que se ejecute automaticamente en este caso...
         OJO!! */}
        {/* <button onClick={handleClickAutomatico()}>
          Evento automatico
        </button> */}
        
        {/* Parte 2 */}
        {/* Eventos personalizados */}
        {/* <h2>Eventos personalizados</h2> */}
        {/* <ButtonConEvento
          evento={login}
          children="Login"
        />
   */}
        {/* Parte 3 */}
        {/* Evento onChange para inputs */}
        {/* <h2>Evento onChange para inputs</h2>
        <input name="firstName" onChange={handleChange} />  */}

        {/* Parte 4: ver en /componentes/formularios */}
        {/* Otro tema: Formularios */}
        {/* Componentes controlados vs no controlados */}
        {/* Los no controlados por React, estan controlados por el DOM */}
    </div>
  )
}
