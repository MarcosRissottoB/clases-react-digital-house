import { useState } from 'react';
import styles from './styles.module.css';

export const Listado = () => {

  const [nombre, setNombre] = useState('');
  const [alumnos, setAlumnos] = useState([]);

  return (
    <div className={styles.container}>
      <h1>Listado de alumnos:</h1>
      <div className={styles.row}>

        <input
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <button onClick={() => {
          setNombre('');
          setAlumnos([
            ...alumnos,
            { nombre }
          ]);}}>
          Agregar
        </button>
      </div>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>{alumno.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
