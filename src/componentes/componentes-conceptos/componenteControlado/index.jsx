import React, { useState} from 'react'

// Aquí el valor mostrado y obtenido por el input “vive” 
// dentro del componente mediante el uso de useState. 
// Este valor es actualizado cada vez que el input llama a la función onChange

// Caso de uso
// • Realizar validaciones “en el momento”
// • Deshabilitar campos o botones hasta que cierto dato esté presente.
// • Utilizar diferentes formatos para representar el valor (prop value) del elemento.

export const ComponenteControlado = () => {
	const [ value, setValue ] = useState('') // Inicia con un string vacio

	const handleChange = (e) => {
    console.log("handleChange: ", e.target.value);
    setValue(e.target.value)
  }
	return (
		<div>
			<h2>Desde el componente controlado</h2>
			<input value={value} onChange={handleChange} />
		</div>
	)
}