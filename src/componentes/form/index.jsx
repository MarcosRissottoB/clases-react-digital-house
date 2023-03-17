import React, { useState } from "react";

export const FormPost = ({handleOnSubmit}) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(form)
  };

  return (
    <>
      <h2>Crea un post</h2>
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
         <br />
        <input type="submit" />
      </form>
    </>
  );
}