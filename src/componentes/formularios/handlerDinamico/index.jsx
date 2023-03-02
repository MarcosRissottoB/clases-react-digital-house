import React, { useState } from "react";

export const FormularioHandlerDinamico = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChecked = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.checked,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data del formulario: ", form);
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios con Handler dinamicos</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Inputsy textarea */}
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre || ''}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Caso Radio button */}
        <p>Elige tu tema favorito:</p>
        <input
          type="radio"
          id="eventos"
          name="tema"
          value="eventos"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="eventos">Eventos</label>
        <input
          type="radio"
          id="formularios"
          name="tema"
          value="formularios"
          onChange={handleChange}
        />
        <label htmlFor="formularios">Formularios</label>
        <input
          type="radio"
          id="estados"
          name="tema"
          value="estados"
          onChange={handleChange}
        />
        <label htmlFor="estados">Estados</label>
        <br />
        <br />

        {/* Caso Select */}
        <p>Elige tu dia favorito</p>
        <select
          name="dia"
          onChange={handleChange}
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
        <input type="submit" />
      </form>
    </>
  );
}