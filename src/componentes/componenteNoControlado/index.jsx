import React, { useRef } from 'react'

// Utiliza directamente el DOM.
// En estos componentes, en vez de escribir un manejador de eventos para cada actualización de estado
// podemos usar un ref para obtener los valores directamente desde el DOM.

// ref te da accedo a DOM

// Casos de uso
// • Manejar el foco o selección de texto de un elemento
// • Inicializar animaciones de forma imperativa.
// • Integración de librerías externas no directamente compatibles con React.

// Para crear un ref utilizamos el hook useRef que crea un objeto
// que se mantiene consistente entre diferentes renderizados del componente,
// es decir, cuando el ref cambia no se lanza un nuevo render.
export const NoComponenteControlado = () => {
  const inputRef = useRef()

	const onClickButton = () => {
    console.log(inputRef.current.value)
    console.log(inputRef)
	}

	return (
		<div>
      <h2>Desde el componente NO controlado</h2>
			<input type="text" ref={inputRef} />
			  <button onClick={onClickButton}>Click</button>
		</div>
	)
}