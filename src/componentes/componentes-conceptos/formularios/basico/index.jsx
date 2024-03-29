import React, { useState } from "react";

const Title = ({tag, children, style}) => {
  <>
    <div>{tag === 'h1' ? 
    <h1 style={style}>{children}</h1>
    : <h3 style={style}>{children}</h3>
  }</div>
  </>
}
export const FormularioBasico = ({submitData}) => {
  const [nombre, setNombre] = useState("");
  const [dia, setDia] = useState("");
  const [tema, setTema] = useState("");
  
  const handlerOnSubmit = (e) => {
    e.preventDefault();

    console.log("Nombre: ", nombre);
    console.log("Dia: ", dia);
    console.log("Tema: ", tema);
    alert("El formulario se ha enviado");
    // validaciones

    submitData(
      {
        nombre,
        dia,
        tema
      }
    )

  };
  
  return (
    <>
      <h2>Formularios</h2> 
      {/* // Title */}
      {/* <Title tag="h3">"Titulo"</Title> */}
      <Title tag="h3">"Formulario desde el componente Title"</Title>

      <form onSubmit={handlerOnSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />
          <br />
          <p>Elige tu tema favorito:</p>
          <input
            type="radio"
            id="eventos"
            name="tema"
            value="eventos"
            onChange={(e) => setTema(e.target.value)}
            defaultChecked
          />
          <label htmlFor="eventos">Eventos</label>
          <input
            type="radio"
            id="formularios"
            name="tema"
            value="formularios"
            onChange={(e) => setTema(e.target.value)}
          />
          <label htmlFor="formularios">Formularios</label>
          <input
            type="radio"
            id="estados"
            name="tema"
            value="estados"
            onChange={(e) => setTema(e.target.value)}
          />
          <label htmlFor="estados">Estados</label>
          <br />
          <br />
          <p>Elige tu dia favorito</p>
          <select
            name="dia"
            onChange={(e) => setDia(e.target.value)}
            defaultValue=""
          >
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miercoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
          </select>

          <br />
          <br />
        </div>
        <input type="submit" />

      </form>
    </>
  );
}