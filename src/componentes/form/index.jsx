import React, { useState } from "react";

export const FormPost = () => {
  const [form, setForm] = useState({
    materias: 'Cobol'
  });
  const [submitState, setSubmitState] = useState('Form incomplete')
  const [errorMessage, setErrorMessage] = useState('')
  

  const { materias } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitState('Form Submiting')
    if (!form.title) {
      setErrorMessage('El titulo es requerido')
    } 
    // ....handleOnSubmit(form)
  };

  return (
    <>
      <h2>Crea un post</h2>
      <span>{submitState}</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title || ''}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={form.body || ''}
          onChange={handleChange}
        />
        <label htmlFor="materia">Materia:</label>
        <select
          name='materias'
          onChange={handleChange}
          value={materias}
        >
          <option value='frontend' checked>Frontend</option>
          <option value='backendntend'>Backend</option>
          <option value='infraestructura'>Infraestructura</option>
        </select>
        <br />
        <button type="submit">Submit</button>
        {<span>{errorMessage}</span>}
      </form>
    </>
  );
}