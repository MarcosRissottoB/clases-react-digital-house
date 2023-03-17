import { useState, useEffect } from 'react';
let apiRickyAndMorti = `https://rickandmortyapi.com/api/character/?page=1`

export const Items = () => {
    // props y state
    /// Render, es obligatorio y siempre se ejecuta al montar el componente
    // y con el rerenderizado
    // useEffect(
    //   () => {
    //     console.log("Render lista!!!, ", lista)
    //   }
    // )


    // Se ejecuta una sola vez, luego del montaje componentDidmount
    // useEffect(
    //   () => {
    //     console.log("ComponentDidMount, se ejecuta una vez, lista: !!!")
    //   }, []
    // )

     // ComponentDidUpdate se ejecuta cada vez que cambian sus dependencias 
    // useEffect(
    //   () => {
    //     console.log("ComponentDidUpdate, se ejecuta cada vez que cambian sus dependencias !!!")
    //   }, [id]
    // )
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getData = async () => {
      // get a la url
      setLoading(true);
      const respuesta = await fetch(apiRickyAndMorti);
      const respustaToJson = await respuesta.json()
      // console.log("respustaToJson", respustaToJson)
      setLista(respustaToJson.results)
      
      setTimeout(() => setLoading(false), 1000) ;
    }

    
    useEffect(
      () => {
        getData()
      }, []
    )

    return <div>
      <h1>Listado:</h1>
      <br />
      {loading ?
        <p>Cargando datos...</p>
        : <ul>
           {lista.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      }
    </div>
  }
  